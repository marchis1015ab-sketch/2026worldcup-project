const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const { PROJECT_ROOT, NODE_CHECK_FILES } = require("./config");

function runCommand(command, args, cwd = PROJECT_ROOT) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    windowsHide: true,
  });

  return {
    command: [command].concat(args).join(" "),
    ok: result.status === 0,
    status: result.status,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    error: result.error ? result.error.message : null,
  };
}

function parseChangedFiles(statusText) {
  return statusText
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .map((line) => {
      const status = line.slice(0, 2);
      const filePath = line.slice(3).trim();
      return {
        status,
        path: filePath,
      };
    });
}

function runNodeCheck(relativePath, projectRoot = PROJECT_ROOT) {
  const absolutePath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(absolutePath)) {
    return {
      file: relativePath,
      ok: true,
      skipped: true,
      stdout: "",
      stderr: "",
    };
  }

  const result = runCommand("node", ["--check", relativePath], projectRoot);
  return {
    file: relativePath,
    ok: result.ok,
    skipped: false,
    stdout: result.stdout.trim(),
    stderr: result.stderr.trim(),
    error: result.error,
  };
}

function collectNodeChecks(projectRoot = PROJECT_ROOT) {
  return NODE_CHECK_FILES.map((relativePath) => runNodeCheck(relativePath, projectRoot));
}

function collectGitStatus(projectRoot = PROJECT_ROOT) {
  const branchResult = runCommand("git", ["branch", "--show-current"], projectRoot);
  const headResult = runCommand("git", ["rev-parse", "HEAD"], projectRoot);
  const originMainResult = runCommand("git", ["rev-parse", "origin/main"], projectRoot);
  const statusResult = runCommand("git", ["status", "--short"], projectRoot);
  const commitsResult = runCommand("git", ["log", "--oneline", "-5"], projectRoot);

  const gitStatusText = statusResult.stdout.trim();
  const changedFiles = parseChangedFiles(gitStatusText);

  return {
    branch: branchResult.ok ? branchResult.stdout.trim() : "",
    head: headResult.ok ? headResult.stdout.trim() : "",
    originMain: originMainResult.ok ? originMainResult.stdout.trim() : "",
    gitStatusText,
    changedFiles,
    recentCommits: commitsResult.ok
      ? commitsResult.stdout.trim().split(/\r?\n/).filter(Boolean)
      : [],
    errors: [branchResult, headResult, originMainResult, statusResult, commitsResult]
      .filter((result) => !result.ok)
      .map((result) => ({
        command: result.command,
        stderr: result.stderr.trim(),
        error: result.error,
      })),
  };
}

function collectStatus(projectRoot = PROJECT_ROOT) {
  const git = collectGitStatus(projectRoot);
  const nodeCheck = collectNodeChecks(projectRoot);
  return {
    ...git,
    nodeCheck,
  };
}

if (require.main === module) {
  process.stdout.write(`${JSON.stringify(collectStatus(), null, 2)}\n`);
}

module.exports = {
  runCommand,
  runNodeCheck,
  collectNodeChecks,
  collectGitStatus,
  collectStatus,
};
