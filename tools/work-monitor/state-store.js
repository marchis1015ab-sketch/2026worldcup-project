const fs = require("fs");
const path = require("path");

const {
  NOTES_PATH,
  LAYOUT_STATE_PATH,
  PANEL_MAP_PATH,
  NOTES_SAMPLE_PATH,
  LAYOUT_STATE_SAMPLE_PATH,
  PANEL_MAP_SAMPLE_PATH,
} = require("./config");

const INITIAL_LAYOUT_STATE = {
  viewportPreset: "auto",
  hiddenPanels: [],
  visiblePanels: [],
  movedPanels: {},
  resizedPanels: {},
  layerOrder: [],
  lastUpdatedAt: null,
};

function ensureDirectory(targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

function ensureFile(targetPath, initialValue, samplePath) {
  ensureDirectory(targetPath);
  if (!fs.existsSync(targetPath)) {
    bootstrapFile(targetPath, initialValue, samplePath);
  }
}

function bootstrapFile(targetPath, initialValue, samplePath) {
  if (samplePath && fs.existsSync(samplePath)) {
    try {
      const sampleRaw = fs.readFileSync(samplePath, "utf8").trim();
      const sampleValue = sampleRaw ? JSON.parse(sampleRaw) : clone(initialValue);
      writeJson(targetPath, sampleValue);
      return;
    } catch (error) {
      // Fall back to the in-memory default when the sample file is unreadable.
    }
  }
  writeJson(targetPath, initialValue);
}

function readJson(targetPath, initialValue, samplePath) {
  ensureFile(targetPath, initialValue, samplePath);
  const raw = fs.readFileSync(targetPath, "utf8").trim();
  if (!raw) {
    return clone(initialValue);
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    return clone(initialValue);
  }
}

function writeJson(targetPath, value) {
  ensureDirectory(targetPath);
  const tempPath = `${targetPath}.${process.pid}.tmp`;
  const serialized = `${JSON.stringify(value, null, 2)}\n`;
  fs.writeFileSync(tempPath, serialized, "utf8");
  fs.renameSync(tempPath, targetPath);
  return value;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function uniqueList(list) {
  return Array.from(new Set((list || []).filter(Boolean)));
}

function ensureStateFiles() {
  ensureFile(NOTES_PATH, [], NOTES_SAMPLE_PATH);
  ensureFile(LAYOUT_STATE_PATH, INITIAL_LAYOUT_STATE, LAYOUT_STATE_SAMPLE_PATH);
  ensureFile(PANEL_MAP_PATH, [], PANEL_MAP_SAMPLE_PATH);
}

function readNotes() {
  const value = readJson(NOTES_PATH, [], NOTES_SAMPLE_PATH);
  return Array.isArray(value) ? value : [];
}

function writeNotes(notes) {
  return writeJson(NOTES_PATH, Array.isArray(notes) ? notes : []);
}

function appendNote(input) {
  const notes = readNotes();
  notes.push(input);
  writeNotes(notes);
  return input;
}

function patchNote(id, changes) {
  const notes = readNotes();
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    return null;
  }
  notes[index] = {
    ...notes[index],
    ...changes,
  };
  writeNotes(notes);
  return notes[index];
}

function deleteNote(id) {
  return patchNote(id, {
    resolved: true,
    deleted: true,
    deletedAt: new Date().toISOString(),
  });
}

function readLayoutState() {
  const value = readJson(LAYOUT_STATE_PATH, INITIAL_LAYOUT_STATE, LAYOUT_STATE_SAMPLE_PATH);
  return {
    ...clone(INITIAL_LAYOUT_STATE),
    ...(value && typeof value === "object" && !Array.isArray(value) ? value : {}),
    hiddenPanels: uniqueList(value.hiddenPanels || []),
    visiblePanels: uniqueList(value.visiblePanels || []),
    movedPanels: value.movedPanels && typeof value.movedPanels === "object" ? value.movedPanels : {},
    resizedPanels: value.resizedPanels && typeof value.resizedPanels === "object" ? value.resizedPanels : {},
    layerOrder: uniqueList(value.layerOrder || []),
  };
}

function writeLayoutState(state) {
  const normalized = {
    ...clone(INITIAL_LAYOUT_STATE),
    ...(state || {}),
    hiddenPanels: uniqueList(state.hiddenPanels || []),
    visiblePanels: uniqueList(state.visiblePanels || []),
    movedPanels: state.movedPanels && typeof state.movedPanels === "object" ? state.movedPanels : {},
    resizedPanels: state.resizedPanels && typeof state.resizedPanels === "object" ? state.resizedPanels : {},
    layerOrder: uniqueList(state.layerOrder || []),
    lastUpdatedAt: state.lastUpdatedAt || new Date().toISOString(),
  };
  return writeJson(LAYOUT_STATE_PATH, normalized);
}

function mergeLayoutState(partial) {
  const current = readLayoutState();
  return writeLayoutState({
    ...current,
    ...(partial || {}),
    hiddenPanels: uniqueList(partial.hiddenPanels || current.hiddenPanels),
    visiblePanels: uniqueList(partial.visiblePanels || current.visiblePanels),
    movedPanels: {
      ...current.movedPanels,
      ...(partial.movedPanels || {}),
    },
    resizedPanels: {
      ...current.resizedPanels,
      ...(partial.resizedPanels || {}),
    },
    layerOrder: uniqueList(partial.layerOrder || current.layerOrder),
    lastUpdatedAt: new Date().toISOString(),
  });
}

function summarizeLayoutState(state = readLayoutState()) {
  return {
    viewportPreset: state.viewportPreset || "auto",
    hiddenCount: (state.hiddenPanels || []).length,
    visibleCount: (state.visiblePanels || []).length,
    movedCount: Object.keys(state.movedPanels || {}).length,
    resizedCount: Object.keys(state.resizedPanels || {}).length,
    layerCount: (state.layerOrder || []).length,
    lastUpdatedAt: state.lastUpdatedAt || null,
  };
}

function readPanelMap() {
  const value = readJson(PANEL_MAP_PATH, [], PANEL_MAP_SAMPLE_PATH);
  return Array.isArray(value) ? value : [];
}

function writePanelMap(entries) {
  return writeJson(PANEL_MAP_PATH, Array.isArray(entries) ? entries : []);
}

function mergePanelMap(entries) {
  const incoming = Array.isArray(entries) ? entries : [];
  const current = readPanelMap();
  const byId = new Map(current.map((panel) => [panel.panelId, panel]));

  incoming.forEach((panel) => {
    if (!panel || !panel.panelId) {
      return;
    }
    const existing = byId.get(panel.panelId);
    const merged = {
      panelId: panel.panelId,
      selector: panel.selector || (existing && existing.selector) || "",
      label: panel.label || (existing && existing.label) || panel.panelId,
      page: panel.page || (existing && existing.page) || "/",
      firstDetectedAt: (existing && existing.firstDetectedAt) || panel.firstDetectedAt || new Date().toISOString(),
      confidence: typeof panel.confidence === "number" ? panel.confidence : (existing && existing.confidence) || 0.5,
      notes: uniqueList([]
        .concat((existing && existing.notes) || [])
        .concat(panel.notes || [])),
    };
    byId.set(panel.panelId, merged);
  });

  const mergedPanels = Array.from(byId.values()).sort((left, right) => left.panelId.localeCompare(right.panelId));
  writePanelMap(mergedPanels);
  return mergedPanels;
}

module.exports = {
  INITIAL_LAYOUT_STATE,
  ensureStateFiles,
  readNotes,
  writeNotes,
  appendNote,
  patchNote,
  deleteNote,
  readLayoutState,
  writeLayoutState,
  mergeLayoutState,
  summarizeLayoutState,
  readPanelMap,
  writePanelMap,
  mergePanelMap,
};
