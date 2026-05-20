$ErrorActionPreference = "Stop"

Write-Host "== WC26 predeploy guard =="

& .\scripts\check-project-root.ps1

Write-Host "Fetching origin/main..."
git fetch origin main | Out-Host

$head = (git rev-parse HEAD).Trim()
$originMain = (git rev-parse origin/main).Trim()
$branch = (git branch --show-current).Trim()
$status = (git status --porcelain)

Write-Host "Branch     : $branch"
Write-Host "HEAD       : $head"
Write-Host "origin/main: $originMain"

if ($branch -ne "main") {
  Write-Host "ERROR: Deploy only from main."
  exit 1
}

if ($head -ne $originMain) {
  Write-Host "ERROR: Local HEAD does not match origin/main. Run git pull --ff-only origin main, then check again."
  exit 1
}

if ($status) {
  Write-Host "ERROR: Working tree has uncommitted changes. Commit/push them or remove them before production deploy."
  git status --short | Out-Host
  exit 1
}

node --check app.js | Out-Host

if (Test-Path ".\legacy-schedule\app.js") {
  node --check legacy-schedule\app.js | Out-Host
}

if (Test-Path ".\legacy-schedule\bridge.js") {
  node --check legacy-schedule\bridge.js | Out-Host
}

Write-Host "OK: Safe to deploy this exact origin/main commit."
