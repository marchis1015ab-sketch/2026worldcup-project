const fs = require("fs");
const path = require("path");

const { PROJECT_ROOT } = require("./config");

function createRisk(level, code, message, filePath) {
  return {
    level,
    code,
    message,
    filePath: filePath || null,
  };
}

function detectRisks(statusInfo, projectRoot = PROJECT_ROOT) {
  const changedFiles = Array.isArray(statusInfo.changedFiles) ? statusInfo.changedFiles : [];
  const nodeChecks = Array.isArray(statusInfo.nodeCheck) ? statusInfo.nodeCheck : [];
  const risks = [];
  const changedByPath = new Map(changedFiles.map((entry) => [entry.path, entry.status]));

  const watchFiles = [
    ["app.js", "danger", "APP_JS_MODIFIED", "app.js is modified."],
    ["index.html", "danger", "INDEX_HTML_MODIFIED", "index.html is modified."],
    ["styles.css", "danger", "STYLES_CSS_MODIFIED", "styles.css is modified."],
    ["legacy-schedule/app.js", "danger", "LEGACY_APP_MODIFIED", "legacy-schedule/app.js is modified."],
  ];

  watchFiles.forEach(([filePath, level, code, message]) => {
    const status = changedByPath.get(filePath);
    if (status && status.trim()) {
      risks.push(createRisk(level, code, message, filePath));
    }
  });

  changedFiles.forEach((entry) => {
    const lowerPath = entry.path.toLowerCase();
    if (lowerPath.includes("supabase")) {
      risks.push(createRisk("danger", "SUPABASE_CHANGE", "Supabase-related file changed.", entry.path));
    }
    if (lowerPath === ".env" || lowerPath.startsWith(".env.")) {
      risks.push(createRisk("danger", "ENV_CHANGE", ".env file changed.", entry.path));
    }
    if (lowerPath.includes("vercel")) {
      risks.push(createRisk("warning", "VERCEL_CHANGE", "Vercel configuration changed.", entry.path));
    }
    if (["save", "delete", "upload", "remove"].some((keyword) => lowerPath.includes(keyword))) {
      risks.push(createRisk("warning", "STORAGE_KEYWORD_CHANGE", "File path suggests save/delete/upload logic changed.", entry.path));
    }
    if (entry.path === "AGENTS.md" && entry.status.includes("D")) {
      risks.push(createRisk("danger", "AGENTS_REMOVED", "AGENTS.md is deleted.", entry.path));
    }
  });

  if (!fs.existsSync(path.join(projectRoot, "AGENTS.md"))) {
    risks.push(createRisk("danger", "AGENTS_MISSING", "AGENTS.md is missing from the project root.", "AGENTS.md"));
  }

  if (statusInfo.head && statusInfo.originMain && statusInfo.head !== statusInfo.originMain) {
    risks.push(createRisk("warning", "HEAD_MISMATCH", "HEAD does not match origin/main."));
  }

  if ((statusInfo.gitStatusText || "").trim()) {
    risks.push(createRisk("warning", "DIRTY_WORKTREE", "git status is not clean."));
  }

  nodeChecks.forEach((result) => {
    if (!result.ok) {
      risks.push(createRisk("danger", "NODE_CHECK_FAILED", `node --check failed for ${result.file}.`, result.file));
    }
  });

  return dedupeRisks(risks);
}

function dedupeRisks(risks) {
  const seen = new Set();
  return risks.filter((risk) => {
    const key = [risk.level, risk.code, risk.filePath || ""].join("|");
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

if (require.main === module) {
  process.stdout.write(`${JSON.stringify([], null, 2)}\n`);
}

module.exports = {
  detectRisks,
};
