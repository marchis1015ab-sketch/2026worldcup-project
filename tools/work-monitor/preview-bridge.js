(function workMonitorPreviewBridge() {
  if (window.self === window.top) {
    return;
  }

  const PANEL_SELECTORS = [
    "[data-panel]",
    "[data-section]",
    "[data-view]",
    "section",
    "article",
    ".panel",
    ".card",
    ".dashboard-panel",
    ".mobile-detail-brand",
    ".mobile-section",
    ".section-view",
    ".view",
    ".ticker",
    ".sidebar",
    ".quick-links",
  ];

  const state = {
    outlineEnabled: false,
    noteMode: false,
    selectedPanelId: null,
    hiddenPanels: new Set(),
    movedPanels: {},
    resizedPanels: {},
    peelHistory: [],
    assembleQueue: [],
    assembleCursor: -1,
    panelMap: new Map(),
  };

  const overlayStyle = document.createElement("style");
  overlayStyle.id = "work-monitor-preview-style";
  overlayStyle.textContent = `
    html.work-monitor-outline-enabled [data-work-monitor-panel-id] {
      outline: 1px solid rgba(44, 196, 255, 0.9) !important;
      outline-offset: -1px !important;
      position: relative !important;
    }
    html.work-monitor-outline-enabled [data-work-monitor-panel-id]::after {
      content: attr(data-work-monitor-panel-label);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2147483646;
      transform: translateY(-100%);
      padding: 2px 6px;
      border-radius: 999px;
      background: rgba(3, 14, 24, 0.92);
      color: #8af1ff;
      font: 600 11px/1.2 Arial, sans-serif;
      letter-spacing: 0.02em;
      pointer-events: none;
      white-space: nowrap;
    }
    [data-work-monitor-selected="true"] {
      outline: 2px solid rgba(255, 191, 82, 0.95) !important;
      outline-offset: -1px !important;
    }
    [data-work-monitor-hidden="true"] {
      display: none !important;
      visibility: hidden !important;
    }
  `;
  document.head.appendChild(overlayStyle);

  function post(type, payload) {
    window.parent.postMessage({
      source: "work-monitor-preview",
      type,
      payload,
    }, "*");
  }

  function slugify(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40);
  }

  function getPanelCandidates() {
    const nodes = Array.from(document.querySelectorAll(PANEL_SELECTORS.join(",")));
    return nodes.filter((node) => {
      if (!(node instanceof HTMLElement)) {
        return false;
      }
      if (node === document.body || node === document.documentElement) {
        return false;
      }
      const rect = node.getBoundingClientRect();
      return rect.width > 12 && rect.height > 12;
    });
  }

  function buildPanelId(node, index) {
    if (node.id) {
      return node.id;
    }
    const classToken = Array.from(node.classList || [])
      .find((token) => token && token !== "is-active" && token !== "hidden");
    const base = slugify(classToken || node.getAttribute("data-view") || node.getAttribute("data-section") || node.tagName);
    return `${base || "panel"}-${index + 1}`;
  }

  function getPanelLabel(node, panelId) {
    const directLabel = node.getAttribute("aria-label")
      || node.getAttribute("data-title")
      || node.getAttribute("data-role");
    if (directLabel) {
      return directLabel.trim();
    }
    const heading = node.querySelector("h1, h2, h3, h4, h5, h6, strong");
    if (heading && heading.textContent) {
      return heading.textContent.trim().slice(0, 80);
    }
    return panelId;
  }

  function collectPanels() {
    const panels = [];
    state.panelMap = new Map();

    getPanelCandidates().forEach((node, index) => {
      const panelId = node.dataset.workMonitorPanelId || buildPanelId(node, index);
      const label = getPanelLabel(node, panelId);
      const selector = node.id ? `#${node.id}` : `${node.tagName.toLowerCase()}.${Array.from(node.classList).join(".")}`;

      node.dataset.workMonitorPanelId = panelId;
      node.dataset.workMonitorPanelLabel = label;

      panels.push({
        panelId,
        selector,
        label,
        page: location.pathname,
        confidence: node.id ? 1 : node.classList.length ? 0.75 : 0.5,
        notes: [],
      });
      state.panelMap.set(panelId, node);
    });

    post("PANEL_MAP_UPDATE", {
      panels,
      page: location.pathname,
    });
    emitState();
  }

  function getLayerOrder() {
    return Array.from(state.panelMap.entries())
      .map(([panelId, node], index) => {
        const rect = node.getBoundingClientRect();
        const computed = window.getComputedStyle(node);
        const zIndex = Number.parseInt(computed.zIndex, 10);
        const safeZIndex = Number.isFinite(zIndex) ? zIndex : 0;
        return {
          panelId,
          index,
          score: safeZIndex * 1000000 + Math.round(rect.top) * -10 + index,
          visible: !state.hiddenPanels.has(panelId) && rect.width > 0 && rect.height > 0,
        };
      })
      .sort((left, right) => left.score - right.score)
      .map((entry) => entry.panelId);
  }

  function emitState() {
    const layerOrder = getLayerOrder();
    const visiblePanels = layerOrder.filter((panelId) => !state.hiddenPanels.has(panelId));
    post("PANEL_VISIBILITY_CHANGED", {
      hiddenPanels: Array.from(state.hiddenPanels),
      visiblePanels,
      layerOrder,
      movedPanels: state.movedPanels,
      resizedPanels: state.resizedPanels,
      selectedPanelId: state.selectedPanelId,
    });
  }

  function setOutline(enabled) {
    state.outlineEnabled = Boolean(enabled);
    document.documentElement.classList.toggle("work-monitor-outline-enabled", state.outlineEnabled);
  }

  function setSelected(panelId) {
    if (state.selectedPanelId && state.panelMap.has(state.selectedPanelId)) {
      state.panelMap.get(state.selectedPanelId).removeAttribute("data-work-monitor-selected");
    }
    state.selectedPanelId = panelId || null;
    if (state.selectedPanelId && state.panelMap.has(state.selectedPanelId)) {
      state.panelMap.get(state.selectedPanelId).setAttribute("data-work-monitor-selected", "true");
    }
    post("PANEL_SELECTED", {
      panelId: state.selectedPanelId,
    });
    emitState();
  }

  function applyTransform(panelId) {
    const node = state.panelMap.get(panelId);
    if (!node) {
      return;
    }
    const move = state.movedPanels[panelId] || { x: 0, y: 0, unit: "px" };
    const resize = state.resizedPanels[panelId] || { scale: 1 };
    const transform = `translate(${move.x || 0}${move.unit || "px"}, ${move.y || 0}${move.unit || "px"}) scale(${resize.scale || 1})`;
    node.style.transform = transform;
    node.style.transformOrigin = "center top";
    node.style.transition = "none";
  }

  function resetTransforms(panelId) {
    delete state.movedPanels[panelId];
    delete state.resizedPanels[panelId];
    const node = state.panelMap.get(panelId);
    if (node) {
      node.style.removeProperty("transform");
      node.style.removeProperty("transform-origin");
      node.style.removeProperty("transition");
    }
    emitState();
  }

  function setHidden(panelId, hidden) {
    const node = state.panelMap.get(panelId);
    if (!node) {
      return;
    }
    if (hidden) {
      state.hiddenPanels.add(panelId);
      node.dataset.workMonitorHidden = "true";
    } else {
      state.hiddenPanels.delete(panelId);
      delete node.dataset.workMonitorHidden;
    }
    emitState();
  }

  function showAll() {
    Array.from(state.hiddenPanels).forEach((panelId) => {
      const node = state.panelMap.get(panelId);
      if (node) {
        delete node.dataset.workMonitorHidden;
      }
    });
    state.hiddenPanels.clear();
    state.peelHistory = [];
    state.assembleCursor = -1;
    emitState();
  }

  function hideAll() {
    getLayerOrder().forEach((panelId) => setHidden(panelId, true));
    state.peelHistory = [];
    state.assembleCursor = -1;
    emitState();
  }

  function peelNext() {
    const candidates = getLayerOrder().filter((panelId) => !state.hiddenPanels.has(panelId));
    const next = candidates[candidates.length - 1];
    if (!next) {
      return;
    }
    state.peelHistory.push(next);
    setHidden(next, true);
  }

  function peelPrev() {
    const previous = state.peelHistory.pop();
    if (!previous) {
      return;
    }
    setHidden(previous, false);
  }

  function assembleStart() {
    state.assembleQueue = getLayerOrder();
    state.assembleCursor = -1;
    hideAll();
  }

  function assembleNext() {
    if (!state.assembleQueue.length) {
      state.assembleQueue = getLayerOrder();
    }
    const nextIndex = state.assembleCursor + 1;
    const panelId = state.assembleQueue[nextIndex];
    if (!panelId) {
      return;
    }
    state.assembleCursor = nextIndex;
    setHidden(panelId, false);
  }

  function nudgePanel(panelId, dx, dy) {
    const current = state.movedPanels[panelId] || { x: 0, y: 0, unit: "px" };
    state.movedPanels[panelId] = {
      x: (current.x || 0) + dx,
      y: (current.y || 0) + dy,
      unit: current.unit || "px",
    };
    applyTransform(panelId);
    emitState();
  }

  function scalePanel(panelId, delta) {
    const current = state.resizedPanels[panelId] || { scale: 1 };
    const nextScale = Math.max(0.2, Math.min(3, Number(((current.scale || 1) + delta).toFixed(2))));
    state.resizedPanels[panelId] = {
      ...current,
      scale: nextScale,
    };
    applyTransform(panelId);
    emitState();
  }

  function applyLayoutState(snapshot) {
    const hiddenPanels = (snapshot && snapshot.hiddenPanels) || [];
    const movedPanels = (snapshot && snapshot.movedPanels) || {};
    const resizedPanels = (snapshot && snapshot.resizedPanels) || {};

    showAll();
    Object.keys(movedPanels).forEach((panelId) => {
      state.movedPanels[panelId] = movedPanels[panelId];
      applyTransform(panelId);
    });
    Object.keys(resizedPanels).forEach((panelId) => {
      state.resizedPanels[panelId] = resizedPanels[panelId];
      applyTransform(panelId);
    });
    hiddenPanels.forEach((panelId) => setHidden(panelId, true));
    emitState();
  }

  function onPointerDown(event) {
    const panelNode = event.target.closest("[data-work-monitor-panel-id]");
    if (!panelNode) {
      return;
    }
    const panelId = panelNode.dataset.workMonitorPanelId;
    setSelected(panelId);

    if (!state.noteMode) {
      return;
    }

    const rect = panelNode.getBoundingClientRect();
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    post("PANEL_NOTE_REQUEST", {
      panelId,
      label: panelNode.dataset.workMonitorPanelLabel || panelId,
      pageUrl: location.href,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      x: Math.round(event.clientX),
      y: Math.round(event.clientY),
      offsetX: Math.round(event.clientX - rect.left),
      offsetY: Math.round(event.clientY - rect.top),
    });
  }

  function receiveCommand(event) {
    const message = event.data || {};
    if (message.source !== "work-monitor-dashboard") {
      return;
    }

    const payload = message.payload || {};
    switch (message.type) {
      case "REFRESH_PANEL_MAP":
        collectPanels();
        break;
      case "SET_OUTLINE":
        setOutline(payload.enabled);
        break;
      case "SET_NOTE_MODE":
        state.noteMode = Boolean(payload.enabled);
        break;
      case "SELECT_PANEL":
        setSelected(payload.panelId);
        break;
      case "SHOW_PANEL":
        setHidden(payload.panelId, false);
        break;
      case "HIDE_PANEL":
        setHidden(payload.panelId, true);
        break;
      case "TOGGLE_PANEL_VISIBILITY":
        setHidden(payload.panelId, !state.hiddenPanels.has(payload.panelId));
        break;
      case "SHOW_ALL":
        showAll();
        break;
      case "HIDE_ALL":
        hideAll();
        break;
      case "PEEL_NEXT":
        peelNext();
        break;
      case "PEEL_PREV":
        peelPrev();
        break;
      case "ASSEMBLE_START":
        assembleStart();
        break;
      case "ASSEMBLE_NEXT":
        assembleNext();
        break;
      case "APPLY_LAYOUT_STATE":
        applyLayoutState(payload.state || {});
        break;
      case "NUDGE_PANEL":
        nudgePanel(payload.panelId, payload.dx || 0, payload.dy || 0);
        break;
      case "SCALE_PANEL":
        scalePanel(payload.panelId, payload.delta || 0);
        break;
      case "RESET_PANEL_TRANSFORM":
        resetTransforms(payload.panelId);
        break;
      default:
        break;
    }
  }

  window.addEventListener("message", receiveCommand);
  document.addEventListener("pointerdown", onPointerDown, true);

  let collectTimer = null;
  const scheduleCollect = () => {
    window.clearTimeout(collectTimer);
    collectTimer = window.setTimeout(collectPanels, 80);
  };

  const observer = new MutationObserver(scheduleCollect);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["hidden", "class", "style"],
  });

  window.addEventListener("load", collectPanels);
  window.addEventListener("resize", scheduleCollect);
  scheduleCollect();
})();
