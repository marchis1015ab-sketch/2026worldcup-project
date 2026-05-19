$approvedPaths = @(
  "C:\Users\Jnote\Desktop\2026worldcup-project",
  "C:\Users\march\OneDrive\Desktop\2026worldcup-project"
)

$expectedRemote = "https://github.com/marchis1015ab-sketch/2026worldcup-project.git"
$currentPath = (Get-Location).Path
$currentBranch = (git branch --show-current).Trim()
$currentRemote = (git remote get-url origin 2>$null | Select-Object -First 1).Trim()

Write-Host "Approved:" ($approvedPaths -join ", ")
Write-Host "Current :" $currentPath

if ($approvedPaths -notcontains $currentPath) {
  Write-Host "ERROR: Current path is not an approved project root. Stop."
  exit 1
}

if (!(Test-Path ".\.git")) {
  Write-Host "ERROR: .git directory is missing. Stop."
  exit 1
}

if (!(Test-Path ".\.vercel\project.json")) {
  Write-Host "ERROR: .vercel/project.json is missing. Stop."
  exit 1
}

if ($currentRemote -ne $expectedRemote) {
  Write-Host "ERROR: origin remote does not match the approved repository. Stop."
  exit 1
}

if ($currentBranch -ne "main") {
  Write-Host "ERROR: Current branch is not main. Stop."
  exit 1
}

if (!(Test-Path ".\index.html")) {
  Write-Host "ERROR: index.html is missing. Stop."
  exit 1
}

if (!(Test-Path ".\app.js")) {
  Write-Host "ERROR: app.js is missing. Stop."
  exit 1
}

Write-Host "OK: Approved project root verified."
