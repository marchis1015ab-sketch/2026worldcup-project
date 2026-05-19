const fs = require("fs");
const http = require("http");
const path = require("path");
const { URL } = require("url");

const {
  PROJECT_ROOT,
  PUBLIC_DIR,
  DEFAULT_TARGET_ORIGIN,
  MONITOR_PORT,
  NOTES_PATH,
  LAYOUT_STATE_PATH,
  PANEL_MAP_PATH,
  getLocalIpList,
  getTabletUrls,
} = require("./config");
const { collectStatus } = require("./git-status");
const { detectRisks } = require("./risk-detector");
const {
  ensureStateFiles,
  readNotes,
  appendNote,
  patchNote,
  deleteNote,
  readLayoutState,
  mergeLayoutState,
  summarizeLayoutState,
  readPanelMap,
  mergePanelMap,
} = require("./state-store");

ensureStateFiles();

const PREVIEW_STYLE_TAG = `
<style id="work-monitor-preview-inline-style">
html.work-monitor-outline-enabled body {
  cursor: crosshair !important;
}
</style>`;

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
};

function jsonResponse(res, statusCode, payload) {
  const body = `${JSON.stringify(payload, null, 2)}\n`;
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function textResponse(res, statusCode, body, contentType) {
  res.writeHead(statusCode, {
    "Content-Type": contentType || "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function parseJsonBody(req) {
  const raw = await readRequestBody(req);
  if (!raw.trim()) {
    return {};
  }
  return JSON.parse(raw);
}

function serveStaticFile(res, filePath) {
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    return false;
  }
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const buffer = fs.readFileSync(filePath);
  res.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "Content-Length": buffer.length,
  });
  res.end(buffer);
  return true;
}

async function checkPreviewTarget() {
  const targetUrl = new URL(DEFAULT_TARGET_ORIGIN);
  return new Promise((resolve) => {
    const request = http.request({
      method: "HEAD",
      hostname: targetUrl.hostname,
      port: targetUrl.port,
      path: targetUrl.pathname || "/",
      timeout: 1500,
    }, (response) => {
      response.resume();
      resolve({
        ok: true,
        statusCode: response.statusCode,
      });
    });
    request.on("timeout", () => {
      request.destroy(new Error("Preview target timeout"));
    });
    request.on("error", (error) => {
      resolve({
        ok: false,
        error: error.message,
      });
    });
    request.end();
  });
}

async function buildStatusPayload() {
  const gitStatus = collectStatus(PROJECT_ROOT);
  const notes = readNotes();
  const layoutState = readLayoutState();
  const risks = detectRisks(gitStatus, PROJECT_ROOT);
  const previewStatus = await checkPreviewTarget();

  return {
    projectRoot: PROJECT_ROOT,
    monitorPort: MONITOR_PORT,
    previewTarget: DEFAULT_TARGET_ORIGIN,
    previewAvailable: previewStatus.ok,
    previewStatus,
    localIpList: getLocalIpList(),
    tabletUrls: getTabletUrls(MONITOR_PORT),
    branch: gitStatus.branch,
    head: gitStatus.head,
    originMain: gitStatus.originMain,
    gitStatusText: gitStatus.gitStatusText,
    changedFiles: gitStatus.changedFiles,
    recentCommits: gitStatus.recentCommits,
    nodeCheck: gitStatus.nodeCheck,
    risks,
    notesCount: notes.length,
    unresolvedNotesCount: notes.filter((note) => !note.resolved).length,
    layoutStateSummary: summarizeLayoutState(layoutState),
    updatedAt: new Date().toISOString(),
  };
}

function injectPreviewHtml(html) {
  const injection = `${PREVIEW_STYLE_TAG}
<script src="/preview-bridge.js"></script>`;
  if (html.includes("</body>")) {
    return html.replace("</body>", `${injection}\n</body>`);
  }
  return `${html}\n${injection}`;
}

function createPreviewUnavailablePage(message) {
  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>Work Monitor Preview Unavailable</title>
    <style>
      body {
        margin: 0;
        background: #08111a;
        color: #d9f6ff;
        font: 14px/1.5 Arial, sans-serif;
        display: grid;
        place-items: center;
        min-height: 100vh;
      }
      .card {
        max-width: 720px;
        padding: 24px;
        border: 1px solid rgba(138, 241, 255, 0.24);
        border-radius: 18px;
        background: rgba(6, 17, 29, 0.92);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
      }
      code {
        color: #8af1ff;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>작업용 주소 5500이 열려 있지 않음</h1>
      <p>${message}</p>
      <p>먼저 Live Server 또는 현재 로컬 서버를 <code>http://127.0.0.1:5500/</code> 로 열어 주세요.</p>
    </div>
  </body>
</html>`;
}

function proxyPreviewRequest(req, res, pathname, search) {
  const previewPath = pathname.replace(/^\/preview/, "") || "/";
  const targetUrl = new URL(previewPath + search, DEFAULT_TARGET_ORIGIN);
  const headers = { ...req.headers };
  delete headers.host;
  delete headers["accept-encoding"];

  const proxyReq = http.request({
    protocol: targetUrl.protocol,
    hostname: targetUrl.hostname,
    port: targetUrl.port,
    method: req.method,
    path: `${targetUrl.pathname}${targetUrl.search}`,
    headers,
    timeout: 5000,
  }, (proxyRes) => {
    const contentType = proxyRes.headers["content-type"] || "";
    if (contentType.includes("text/html")) {
      const chunks = [];
      proxyRes.on("data", (chunk) => chunks.push(chunk));
      proxyRes.on("end", () => {
        const rawHtml = Buffer.concat(chunks).toString("utf8");
        const body = injectPreviewHtml(rawHtml);
        res.writeHead(proxyRes.statusCode || 200, {
          "Content-Type": contentType,
          "Cache-Control": "no-store",
          "Content-Length": Buffer.byteLength(body),
        });
        res.end(body);
      });
      return;
    }

    res.writeHead(proxyRes.statusCode || 200, {
      ...proxyRes.headers,
      "Cache-Control": "no-store",
    });
    proxyRes.pipe(res);
  });

  proxyReq.on("timeout", () => {
    proxyReq.destroy(new Error("Preview target timeout"));
  });
  proxyReq.on("error", (error) => {
    const body = createPreviewUnavailablePage(error.message);
    res.writeHead(502, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Length": Buffer.byteLength(body),
    });
    res.end(body);
  });

  req.pipe(proxyReq);
}

async function handleApiRequest(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/status") {
    return jsonResponse(res, 200, await buildStatusPayload());
  }

  if (req.method === "GET" && pathname === "/api/notes") {
    return jsonResponse(res, 200, readNotes());
  }

  if (req.method === "POST" && pathname === "/api/notes") {
    const body = await parseJsonBody(req);
    const note = appendNote({
      id: body.id || `note-${Date.now()}`,
      createdAt: body.createdAt || new Date().toISOString(),
      viewportWidth: body.viewportWidth || 0,
      viewportHeight: body.viewportHeight || 0,
      pageUrl: body.pageUrl || DEFAULT_TARGET_ORIGIN,
      x: body.x || 0,
      y: body.y || 0,
      panelId: body.panelId || "",
      noteType: body.noteType || "other",
      noteText: body.noteText || "",
      resolved: Boolean(body.resolved),
      deleted: false,
    });
    return jsonResponse(res, 201, note);
  }

  if ((req.method === "PATCH" || req.method === "DELETE") && pathname.startsWith("/api/notes/")) {
    const noteId = decodeURIComponent(pathname.slice("/api/notes/".length));
    const payload = req.method === "PATCH" ? await parseJsonBody(req) : {};
    const updatedNote = req.method === "PATCH"
      ? patchNote(noteId, payload)
      : deleteNote(noteId);
    if (!updatedNote) {
      return jsonResponse(res, 404, { error: "Note not found." });
    }
    return jsonResponse(res, 200, updatedNote);
  }

  if (req.method === "GET" && pathname === "/api/layout-state") {
    return jsonResponse(res, 200, readLayoutState());
  }

  if (req.method === "POST" && pathname === "/api/layout-state") {
    const body = await parseJsonBody(req);
    return jsonResponse(res, 200, mergeLayoutState(body));
  }

  if (req.method === "GET" && pathname === "/api/panel-map") {
    return jsonResponse(res, 200, readPanelMap());
  }

  if (req.method === "POST" && pathname === "/api/panel-map") {
    const body = await parseJsonBody(req);
    const payload = Array.isArray(body) ? body : body.panels;
    return jsonResponse(res, 200, mergePanelMap(payload));
  }

  return jsonResponse(res, 404, { error: "Not found." });
}

const server = http.createServer(async (req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || `127.0.0.1:${MONITOR_PORT}`}`);
    const pathname = parsedUrl.pathname;

    if (pathname.startsWith("/api/")) {
      return await handleApiRequest(req, res, pathname);
    }

    if (pathname === "/preview-bridge.js") {
      return serveStaticFile(res, path.join(__dirname, "preview-bridge.js"));
    }

    if (pathname === "/") {
      return serveStaticFile(res, path.join(PUBLIC_DIR, "index.html"));
    }

    if (pathname.startsWith("/preview")) {
      return proxyPreviewRequest(req, res, pathname, parsedUrl.search || "");
    }

    const staticPath = path.join(PUBLIC_DIR, pathname.replace(/^\/+/, ""));
    if (serveStaticFile(res, staticPath)) {
      return;
    }

    return textResponse(res, 404, "Not found.", "text/plain; charset=utf-8");
  } catch (error) {
    return jsonResponse(res, 500, {
      error: error.message,
      stack: error.stack,
    });
  }
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    process.stderr.write(`Work monitor port ${MONITOR_PORT} is already in use.\n`);
  } else {
    process.stderr.write(`${error.stack || error.message}\n`);
  }
  process.exitCode = 1;
});

server.listen(MONITOR_PORT, "0.0.0.0", () => {
  process.stdout.write(`WC26 work monitor listening on http://127.0.0.1:${MONITOR_PORT}/\n`);
  getTabletUrls(MONITOR_PORT).forEach((url) => {
    process.stdout.write(`Tablet URL: ${url}\n`);
  });
  process.stdout.write(`Preview target: ${DEFAULT_TARGET_ORIGIN}\n`);
  process.stdout.write(`State files: ${NOTES_PATH}, ${LAYOUT_STATE_PATH}, ${PANEL_MAP_PATH}\n`);
});
