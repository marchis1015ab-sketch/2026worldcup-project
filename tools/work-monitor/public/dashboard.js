(() => {
  const viewportPresets = {
    auto: null,
    "360x780": { width: 360, height: 780 },
    "390x844": { width: 390, height: 844 },
    "430x932": { width: 430, height: 932 },
    "768x900": { width: 768, height: 900 },
    "984x1092": { width: 984, height: 1092 },
    "pc-wide": { width: 1440, height: 960 },
  };

  const state = {
    status: null,
    notes: [],
    panelMap: [],
    layoutState: null,
    selectedPanelId: null,
    outlineEnabled: false,
    noteModeEnabled: false,
    pendingNote: null,
    iframeReady: false,
  };

  const els = {
    projectRoot: document.getElementById("project-root"),
    headHash: document.getElementById("head-hash"),
    branchName: document.getElementById("branch-name"),
    tabletUrls: document.getElementById("tablet-urls"),
    refreshStatusButton: document.getElementById("refresh-status-button"),
    previewFrame: document.getElementById("preview-frame"),
    previewFrameShell: document.getElementById("preview-frame-shell"),
    previewStatusPill: document.getElementById("preview-status-pill"),
    previewTargetText: document.getElementById("preview-target-text"),
    viewportPreset: document.getElementById("viewport-preset"),
    refreshPreviewButton: document.getElementById("refresh-preview-button"),
    panelCount: document.getElementById("panel-count"),
    panelList: document.getElementById("panel-list"),
    selectedPanelSummary: document.getElementById("selected-panel-summary"),
    toggleOutlineButton: document.getElementById("toggle-outline-button"),
    toggleNoteModeButton: document.getElementById("toggle-note-mode-button"),
    toggleSelectedVisibilityButton: document.getElementById("toggle-selected-visibility-button"),
    showAllButton: document.getElementById("show-all-button"),
    hideAllButton: document.getElementById("hide-all-button"),
    peelNextButton: document.getElementById("peel-next-button"),
    peelPrevButton: document.getElementById("peel-prev-button"),
    assembleStartButton: document.getElementById("assemble-start-button"),
    assembleNextButton: document.getElementById("assemble-next-button"),
    resetTransformButton: document.getElementById("reset-transform-button"),
    pendingNoteBox: document.getElementById("pending-note-box"),
    noteForm: document.getElementById("note-form"),
    noteType: document.getElementById("note-type"),
    noteText: document.getElementById("note-text"),
    cancelNoteButton: document.getElementById("cancel-note-button"),
    notesCounter: document.getElementById("notes-counter"),
    notesList: document.getElementById("notes-list"),
    gitStatusText: document.getElementById("git-status-text"),
    changedFilesList: document.getElementById("changed-files-list"),
    nodeCheckList: document.getElementById("node-check-list"),
    riskList: document.getElementById("risk-list"),
    recentCommitsList: document.getElementById("recent-commits-list"),
  };

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function requestJson(url, options) {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      ...options,
    });
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Request failed: ${response.status}`);
    }
    return response.json();
  }

  async function loadStatus() {
    state.status = await requestJson("/api/status");
    renderStatus();
  }

  async function loadNotes() {
    state.notes = await requestJson("/api/notes");
    renderNotes();
  }

  async function loadLayoutState() {
    state.layoutState = await requestJson("/api/layout-state");
    const preset = state.layoutState.viewportPreset || "auto";
    els.viewportPreset.value = preset;
    applyViewportPreset(preset);
  }

  async function loadPanelMap() {
    state.panelMap = await requestJson("/api/panel-map");
    renderPanelList();
  }

  async function refreshAll() {
    await Promise.all([loadStatus(), loadNotes(), loadLayoutState(), loadPanelMap()]);
    postToPreview("APPLY_LAYOUT_STATE", {
      state: state.layoutState,
    });
    postToPreview("REFRESH_PANEL_MAP");
  }

  function renderStatus() {
    const status = state.status;
    if (!status) {
      return;
    }

    els.projectRoot.textContent = status.projectRoot;
    els.headHash.textContent = status.head || "-";
    els.branchName.textContent = status.branch || "-";
    els.previewTargetText.textContent = `Target: ${status.previewTarget}`;

    els.tabletUrls.innerHTML = "";
    (status.tabletUrls || []).forEach((url) => {
      const chip = document.createElement("span");
      chip.className = "tag";
      chip.textContent = url;
      els.tabletUrls.appendChild(chip);
    });
    if (!(status.tabletUrls || []).length) {
      els.tabletUrls.innerHTML = '<span class="muted">No tablet IPv4 address found.</span>';
    }

    els.previewStatusPill.textContent = status.previewAvailable
      ? "5500 preview reachable"
      : "작업용 주소 5500이 열려 있지 않음";
    els.previewStatusPill.className = `status-pill ${status.previewAvailable ? "status-pill--ok" : "status-pill--danger"}`;

    els.gitStatusText.textContent = status.gitStatusText || "(clean)";
    renderChangedFiles(status.changedFiles || []);
    renderNodeChecks(status.nodeCheck || []);
    renderRisks(status.risks || []);
    renderRecentCommits(status.recentCommits || []);
  }

  function renderChangedFiles(changedFiles) {
    els.changedFilesList.innerHTML = "";
    if (!changedFiles.length) {
      els.changedFilesList.innerHTML = '<div class="stack-item stack-item--ok">No modified or untracked files.</div>';
      return;
    }
    changedFiles.forEach((entry) => {
      const item = document.createElement("div");
      item.className = "stack-item stack-item--warning";
      item.innerHTML = `<strong>${escapeHtml(entry.status.trim() || "??")}</strong> <span class="muted">${escapeHtml(entry.path)}</span>`;
      els.changedFilesList.appendChild(item);
    });
  }

  function renderNodeChecks(nodeChecks) {
    els.nodeCheckList.innerHTML = "";
    nodeChecks.forEach((entry) => {
      const item = document.createElement("div");
      item.className = `stack-item ${entry.ok ? "stack-item--ok" : "stack-item--danger"}`;
      let detail = entry.skipped ? "skipped" : (entry.ok ? "ok" : escapeHtml(entry.stderr || entry.error || "failed"));
      item.innerHTML = `<strong>${escapeHtml(entry.file)}</strong><div class="muted">${detail}</div>`;
      els.nodeCheckList.appendChild(item);
    });
  }

  function renderRisks(risks) {
    els.riskList.innerHTML = "";
    if (!risks.length) {
      els.riskList.innerHTML = '<div class="stack-item stack-item--ok">No risks detected.</div>';
      return;
    }
    risks.forEach((risk) => {
      const item = document.createElement("div");
      item.className = `stack-item ${risk.level === "danger" ? "stack-item--danger" : "stack-item--warning"}`;
      item.innerHTML = `<strong>${escapeHtml(risk.code)}</strong><div>${escapeHtml(risk.message)}</div>${risk.filePath ? `<div class="muted">${escapeHtml(risk.filePath)}</div>` : ""}`;
      els.riskList.appendChild(item);
    });
  }

  function renderRecentCommits(commits) {
    els.recentCommitsList.innerHTML = "";
    if (!commits.length) {
      els.recentCommitsList.innerHTML = '<div class="stack-item">No recent commits found.</div>';
      return;
    }
    commits.forEach((commit) => {
      const item = document.createElement("div");
      item.className = "stack-item";
      item.textContent = commit;
      els.recentCommitsList.appendChild(item);
    });
  }

  function renderPanelList() {
    const hiddenPanels = new Set((state.layoutState && state.layoutState.hiddenPanels) || []);
    els.panelCount.textContent = String(state.panelMap.length);
    els.panelList.innerHTML = "";
    if (!state.panelMap.length) {
      els.panelList.innerHTML = '<div class="panel-item">No panels detected yet. Load /preview/ and click 새로고침.</div>';
      return;
    }

    state.panelMap.forEach((panel) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "panel-item";
      if (panel.panelId === state.selectedPanelId) {
        button.classList.add("is-selected");
      }
      if (hiddenPanels.has(panel.panelId)) {
        button.classList.add("is-hidden");
      }
      button.innerHTML = `
        <div class="panel-item__title">
          <strong>${escapeHtml(panel.label || panel.panelId)}</strong>
          <span>${hiddenPanels.has(panel.panelId) ? "hidden" : "visible"}</span>
        </div>
        <div class="panel-item__meta">${escapeHtml(panel.panelId)}<br>${escapeHtml(panel.selector || "-")}</div>`;
      button.addEventListener("click", () => {
        state.selectedPanelId = panel.panelId;
        postToPreview("SELECT_PANEL", { panelId: panel.panelId });
        renderPanelList();
        renderSelectedPanelSummary();
      });
      els.panelList.appendChild(button);
    });

    renderSelectedPanelSummary();
  }

  function renderSelectedPanelSummary() {
    if (!state.selectedPanelId) {
      els.selectedPanelSummary.textContent = "선택된 패널이 없습니다.";
      return;
    }
    const panel = state.panelMap.find((entry) => entry.panelId === state.selectedPanelId);
    const moved = state.layoutState && state.layoutState.movedPanels && state.layoutState.movedPanels[state.selectedPanelId];
    const resized = state.layoutState && state.layoutState.resizedPanels && state.layoutState.resizedPanels[state.selectedPanelId];
    els.selectedPanelSummary.innerHTML = `
      <strong>${escapeHtml((panel && panel.label) || state.selectedPanelId)}</strong><br>
      <span class="muted">${escapeHtml(state.selectedPanelId)}</span><br>
      <span class="muted">move: ${moved ? `${moved.x || 0}, ${moved.y || 0}` : "0, 0"} / scale: ${resized ? resized.scale || 1 : 1}</span>
    `;
  }

  function renderNotes() {
    const visibleNotes = state.notes.filter((note) => !note.deleted);
    els.notesCounter.textContent = `${visibleNotes.length} / unresolved ${visibleNotes.filter((note) => !note.resolved).length}`;
    els.notesList.innerHTML = "";
    if (!visibleNotes.length) {
      els.notesList.innerHTML = '<div class="note-item">No notes yet.</div>';
      return;
    }

    visibleNotes
      .slice()
      .sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)))
      .forEach((note) => {
        const item = document.createElement("div");
        item.className = "note-item";
        item.innerHTML = `
          <div class="note-item__title">
            <strong>${escapeHtml(note.noteType)} / ${escapeHtml(note.panelId || "-")}</strong>
            <span>${note.resolved ? "resolved" : "open"}</span>
          </div>
          <div class="note-item__meta">${escapeHtml(note.noteText || "")}</div>
          <div class="note-item__meta">${escapeHtml(note.pageUrl || "")}<br>${escapeHtml(note.createdAt || "")} / ${note.x}, ${note.y}</div>
          <div class="control-grid control-grid--compact">
            <button class="action-button action-button--tiny" data-note-resolve="${escapeHtml(note.id)}" type="button">${note.resolved ? "미해결로" : "완료 처리"}</button>
            <button class="action-button action-button--tiny" data-note-delete="${escapeHtml(note.id)}" type="button">삭제 API</button>
          </div>
        `;
        els.notesList.appendChild(item);
      });
  }

  function setPendingNote(noteRequest) {
    state.pendingNote = noteRequest;
    if (!noteRequest) {
      els.pendingNoteBox.textContent = "메모 모드를 켠 뒤 preview에서 패널을 눌러 메모 위치를 선택하세요.";
      els.noteText.value = "";
      return;
    }
    els.pendingNoteBox.innerHTML = `
      <strong>${escapeHtml(noteRequest.label || noteRequest.panelId)}</strong><br>
      <span class="muted">${escapeHtml(noteRequest.panelId)} / ${noteRequest.x}, ${noteRequest.y}</span>
    `;
    els.noteText.focus();
  }

  async function savePendingNote(event) {
    event.preventDefault();
    if (!state.pendingNote) {
      return;
    }
    const payload = {
      ...state.pendingNote,
      noteType: els.noteType.value,
      noteText: els.noteText.value.trim(),
      resolved: false,
    };
    await requestJson("/api/notes", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    setPendingNote(null);
    await loadNotes();
    await loadStatus();
  }

  async function patchLayoutState(patch) {
    state.layoutState = await requestJson("/api/layout-state", {
      method: "POST",
      body: JSON.stringify(patch),
    });
    renderPanelList();
    renderSelectedPanelSummary();
    await loadStatus();
  }

  function postToPreview(type, payload = {}) {
    const frameWindow = els.previewFrame.contentWindow;
    if (!frameWindow) {
      return;
    }
    frameWindow.postMessage({
      source: "work-monitor-dashboard",
      type,
      payload,
    }, "*");
  }

  function applyViewportPreset(presetKey) {
    const preset = viewportPresets[presetKey];
    els.previewFrameShell.dataset.preset = presetKey;
    if (!preset) {
      els.previewFrame.style.width = "100%";
      els.previewFrame.style.height = "760px";
      return;
    }
    els.previewFrame.style.width = `${preset.width}px`;
    els.previewFrame.style.height = `${preset.height}px`;
  }

  function bindEvents() {
    els.refreshStatusButton.addEventListener("click", refreshAll);
    els.refreshPreviewButton.addEventListener("click", () => {
      els.previewFrame.src = `/preview/?t=${Date.now()}`;
    });
    els.viewportPreset.addEventListener("change", async () => {
      applyViewportPreset(els.viewportPreset.value);
      await patchLayoutState({ viewportPreset: els.viewportPreset.value });
    });

    els.toggleOutlineButton.addEventListener("click", () => {
      state.outlineEnabled = !state.outlineEnabled;
      els.toggleOutlineButton.textContent = state.outlineEnabled ? "Outline ON" : "Outline OFF";
      postToPreview("SET_OUTLINE", { enabled: state.outlineEnabled });
    });

    els.toggleNoteModeButton.addEventListener("click", () => {
      state.noteModeEnabled = !state.noteModeEnabled;
      els.toggleNoteModeButton.textContent = state.noteModeEnabled ? "메모 모드 ON" : "메모 모드 OFF";
      postToPreview("SET_NOTE_MODE", { enabled: state.noteModeEnabled });
    });

    els.toggleSelectedVisibilityButton.addEventListener("click", () => {
      if (!state.selectedPanelId) {
        return;
      }
      postToPreview("TOGGLE_PANEL_VISIBILITY", { panelId: state.selectedPanelId });
    });
    els.showAllButton.addEventListener("click", () => postToPreview("SHOW_ALL"));
    els.hideAllButton.addEventListener("click", () => postToPreview("HIDE_ALL"));
    els.peelNextButton.addEventListener("click", () => postToPreview("PEEL_NEXT"));
    els.peelPrevButton.addEventListener("click", () => postToPreview("PEEL_PREV"));
    els.assembleStartButton.addEventListener("click", () => postToPreview("ASSEMBLE_START"));
    els.assembleNextButton.addEventListener("click", () => postToPreview("ASSEMBLE_NEXT"));

    document.querySelectorAll("[data-nudge]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!state.selectedPanelId) {
          return;
        }
        const [dx, dy] = button.dataset.nudge.split(",").map((value) => Number.parseInt(value, 10));
        postToPreview("NUDGE_PANEL", {
          panelId: state.selectedPanelId,
          dx,
          dy,
        });
      });
    });

    document.querySelectorAll("[data-scale]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!state.selectedPanelId) {
          return;
        }
        postToPreview("SCALE_PANEL", {
          panelId: state.selectedPanelId,
          delta: Number.parseFloat(button.dataset.scale),
        });
      });
    });

    els.resetTransformButton.addEventListener("click", () => {
      if (!state.selectedPanelId) {
        return;
      }
      postToPreview("RESET_PANEL_TRANSFORM", {
        panelId: state.selectedPanelId,
      });
    });

    els.noteForm.addEventListener("submit", savePendingNote);
    els.cancelNoteButton.addEventListener("click", () => setPendingNote(null));
    els.notesList.addEventListener("click", async (event) => {
      const resolveButton = event.target.closest("[data-note-resolve]");
      const deleteButton = event.target.closest("[data-note-delete]");
      if (resolveButton) {
        const noteId = resolveButton.getAttribute("data-note-resolve");
        const note = state.notes.find((entry) => entry.id === noteId);
        await requestJson(`/api/notes/${encodeURIComponent(noteId)}`, {
          method: "PATCH",
          body: JSON.stringify({
            resolved: !note.resolved,
            resolvedAt: !note.resolved ? new Date().toISOString() : null,
          }),
        });
        await loadNotes();
        await loadStatus();
      }
      if (deleteButton) {
        const noteId = deleteButton.getAttribute("data-note-delete");
        await requestJson(`/api/notes/${encodeURIComponent(noteId)}`, {
          method: "DELETE",
        });
        await loadNotes();
        await loadStatus();
      }
    });

    els.previewFrame.addEventListener("load", () => {
      state.iframeReady = true;
      postToPreview("SET_OUTLINE", { enabled: state.outlineEnabled });
      postToPreview("SET_NOTE_MODE", { enabled: state.noteModeEnabled });
      if (state.layoutState) {
        postToPreview("APPLY_LAYOUT_STATE", { state: state.layoutState });
      }
      postToPreview("REFRESH_PANEL_MAP");
    });

    window.addEventListener("message", async (event) => {
      const message = event.data || {};
      if (message.source !== "work-monitor-preview") {
        return;
      }
      const payload = message.payload || {};

      if (message.type === "PANEL_MAP_UPDATE") {
        state.panelMap = payload.panels || [];
        renderPanelList();
        await requestJson("/api/panel-map", {
          method: "POST",
          body: JSON.stringify({ panels: state.panelMap }),
        });
      }

      if (message.type === "PANEL_SELECTED") {
        state.selectedPanelId = payload.panelId || null;
        renderPanelList();
        renderSelectedPanelSummary();
      }

      if (message.type === "PANEL_VISIBILITY_CHANGED") {
        await patchLayoutState({
          viewportPreset: els.viewportPreset.value,
          hiddenPanels: payload.hiddenPanels || [],
          visiblePanels: payload.visiblePanels || [],
          movedPanels: payload.movedPanels || {},
          resizedPanels: payload.resizedPanels || {},
          layerOrder: payload.layerOrder || [],
        });
      }

      if (message.type === "PANEL_NOTE_REQUEST") {
        setPendingNote(payload);
      }
    });
  }

  bindEvents();
  refreshAll().catch((error) => {
    console.error(error);
    els.pendingNoteBox.textContent = error.message;
  });
})();
