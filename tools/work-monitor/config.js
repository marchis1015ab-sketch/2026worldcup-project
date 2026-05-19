const os = require("os");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const WORK_MONITOR_ROOT = __dirname;
const PUBLIC_DIR = path.join(WORK_MONITOR_ROOT, "public");
const DEFAULT_TARGET_ORIGIN = process.env.WORK_MONITOR_TARGET || "http://127.0.0.1:5500/";
const MONITOR_PORT = Number.parseInt(process.env.WORK_MONITOR_PORT || "8787", 10);

const NOTES_PATH = path.join(WORK_MONITOR_ROOT, "panel-notes.json");
const LAYOUT_STATE_PATH = path.join(WORK_MONITOR_ROOT, "layout-control-state.json");
const PANEL_MAP_PATH = path.join(WORK_MONITOR_ROOT, "panel-map.json");
const NOTES_SAMPLE_PATH = path.join(WORK_MONITOR_ROOT, "panel-notes.sample.json");
const LAYOUT_STATE_SAMPLE_PATH = path.join(WORK_MONITOR_ROOT, "layout-control-state.sample.json");
const PANEL_MAP_SAMPLE_PATH = path.join(WORK_MONITOR_ROOT, "panel-map.sample.json");

const NODE_CHECK_FILES = [
  "app.js",
  "legacy-schedule/app.js",
  "legacy-schedule/bridge.js",
  "tools/work-monitor/server.js",
];

function getLocalIpList() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  Object.values(interfaces).forEach((entries) => {
    (entries || []).forEach((entry) => {
      if (!entry || entry.family !== "IPv4" || entry.internal) {
        return;
      }
      if (entry.address.startsWith("169.254.")) {
        return;
      }
      addresses.push(entry.address);
    });
  });

  return Array.from(new Set(addresses)).sort();
}

function getTabletUrls(port = MONITOR_PORT) {
  return getLocalIpList().map((address) => `http://${address}:${port}/`);
}

module.exports = {
  PROJECT_ROOT,
  WORK_MONITOR_ROOT,
  PUBLIC_DIR,
  DEFAULT_TARGET_ORIGIN,
  MONITOR_PORT,
  NOTES_PATH,
  LAYOUT_STATE_PATH,
  PANEL_MAP_PATH,
  NOTES_SAMPLE_PATH,
  LAYOUT_STATE_SAMPLE_PATH,
  PANEL_MAP_SAMPLE_PATH,
  NODE_CHECK_FILES,
  getLocalIpList,
  getTabletUrls,
};
