$OutputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $false

function Write-Info {
  param([string]$Message)
  Write-Host "[INFO] $Message"
}

function Write-Ok {
  param([string]$Message)
  Write-Host "[ OK ] $Message" -ForegroundColor Green
}

function Write-Warn {
  param([string]$Message)
  Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

function Write-Fail {
  param([string]$Message)
  Write-Host "[FAIL] $Message" -ForegroundColor Red
}

function Get-GitOutput {
  param([string[]]$Arguments)

  $stdoutPath = [System.IO.Path]::GetTempFileName()
  $stderrPath = [System.IO.Path]::GetTempFileName()
  try {
    $process = Start-Process -FilePath 'git' -ArgumentList $Arguments -NoNewWindow -Wait -PassThru -RedirectStandardOutput $stdoutPath -RedirectStandardError $stderrPath
    $stdout = @()
    $stderr = @()
    if (Test-Path -LiteralPath $stdoutPath) {
      $stdout = Get-Content -LiteralPath $stdoutPath
    }
    if (Test-Path -LiteralPath $stderrPath) {
      $stderr = Get-Content -LiteralPath $stderrPath
    }
    $output = @($stdout) + @($stderr)
    $exitCode = $process.ExitCode
  } finally {
    if (Test-Path -LiteralPath $stdoutPath) {
      Remove-Item -LiteralPath $stdoutPath -Force
    }
    if (Test-Path -LiteralPath $stderrPath) {
      Remove-Item -LiteralPath $stderrPath -Force
    }
  }

  return [pscustomobject]@{
    Output = @($output)
    ExitCode = $exitCode
  }
}

function Get-TrimmedLines {
  param([object[]]$Lines)

  $trimmed = @($Lines | ForEach-Object {
    if ($_ -is [string]) {
      $_.TrimEnd()
    }
  } | Where-Object {
    -not [string]::IsNullOrWhiteSpace($_)
  })

  return ,$trimmed
}

$allowDirty = $false
if ($args -contains '--allow-dirty' -or $args -contains '-AllowDirty') {
  $allowDirty = $true
}

$projectPath = [System.IO.Path]::GetFullPath((Get-Location).Path)
$checkScriptPath = Join-Path $PSScriptRoot 'check-project-root.ps1'

Write-Info "Safe work start check path: $projectPath"

& $checkScriptPath
if ($LASTEXITCODE -ne 0) {
  Write-Fail 'Project root validation failed.'
  exit 1
}

$statusBeforeResult = Get-GitOutput -Arguments @('status', '--short')
if ($statusBeforeResult.ExitCode -ne 0) {
  Write-Fail 'git status --short failed.'
  exit 1
}

$statusBefore = Get-TrimmedLines -Lines $statusBeforeResult.Output
if ($statusBefore.Count -gt 0) {
  Write-Warn 'Worktree is dirty before work starts.'

  $cleanupNeeded = @($statusBefore | Where-Object {
    $_ -match '^\?\?\s+backups/' -or
    $_ -match '^\?\?\s+screenshots/' -or
    $_ -match '^\?\?\s+playwright-.*\.png$'
  })

  if ($cleanupNeeded.Count -gt 0) {
    Write-Warn 'Cleanup needed:'
    foreach ($item in $cleanupNeeded) {
      Write-Host "  $item"
    }
  }

  Write-Host 'Current changed/untracked entries:'
  foreach ($line in $statusBefore) {
    Write-Host "  $line"
  }

  if (-not $allowDirty) {
    Write-Fail 'Dirty worktree blocks work start. Use --allow-dirty only when you intentionally accept that risk.'
    exit 1
  }

  Write-Warn 'Continuing because --allow-dirty was provided.'
} else {
  Write-Ok 'Worktree is clean before work starts.'
}

Write-Info 'Running git fetch origin main...'
$fetchResult = Get-GitOutput -Arguments @('fetch', 'origin', 'main')
if ($fetchResult.ExitCode -ne 0) {
  foreach ($line in (Get-TrimmedLines -Lines $fetchResult.Output)) {
    Write-Host "  $line"
  }
  Write-Fail 'git fetch origin main failed.'
  exit 1
}
Write-Ok 'git fetch origin main completed.'

$headResult = Get-GitOutput -Arguments @('rev-parse', 'HEAD')
$originMainResult = Get-GitOutput -Arguments @('rev-parse', 'origin/main')
if ($headResult.ExitCode -ne 0 -or $originMainResult.ExitCode -ne 0) {
  Write-Fail 'HEAD or origin/main SHA could not be read.'
  exit 1
}

$headSha = ($headResult.Output | Select-Object -First 1).Trim()
$originMainSha = ($originMainResult.Output | Select-Object -First 1).Trim()

Write-Info "HEAD SHA: $headSha"
Write-Info "origin/main SHA: $originMainSha"

if ($headSha -ne $originMainSha) {
  Write-Warn 'HEAD differs from origin/main. Running git pull --ff-only origin main...'
  $pullResult = Get-GitOutput -Arguments @('pull', '--ff-only', 'origin', 'main')
  if ($pullResult.ExitCode -ne 0) {
    foreach ($line in (Get-TrimmedLines -Lines $pullResult.Output)) {
      Write-Host "  $line"
    }
    Write-Fail 'Fast-forward pull failed. Stop and resolve it manually.'
    exit 1
  }
  Write-Ok 'git pull --ff-only origin main completed.'

  $headResult = Get-GitOutput -Arguments @('rev-parse', 'HEAD')
  $originMainResult = Get-GitOutput -Arguments @('rev-parse', 'origin/main')
  if ($headResult.ExitCode -ne 0 -or $originMainResult.ExitCode -ne 0) {
    Write-Fail 'SHA check after pull failed.'
    exit 1
  }

  $headSha = ($headResult.Output | Select-Object -First 1).Trim()
  $originMainSha = ($originMainResult.Output | Select-Object -First 1).Trim()
}

$statusAfterResult = Get-GitOutput -Arguments @('status', '--short')
if ($statusAfterResult.ExitCode -ne 0) {
  Write-Fail 'Final git status --short failed.'
  exit 1
}

$statusAfter = Get-TrimmedLines -Lines $statusAfterResult.Output
if ($statusAfter.Count -gt 0) {
  Write-Host 'Final changed/untracked entries:'
  foreach ($line in $statusAfter) {
    Write-Host "  $line"
  }
  Write-Fail 'Final worktree is not clean. Work start blocked.'
  exit 1
}

Write-Ok 'Final worktree is clean.'

$branchResult = Get-GitOutput -Arguments @('branch', '--show-current')
$originUrlResult = Get-GitOutput -Arguments @('config', '--get', 'remote.origin.url')
$branchName = if ($branchResult.ExitCode -eq 0) { ($branchResult.Output | Select-Object -First 1).Trim() } else { '<unknown>' }
$originUrl = if ($originUrlResult.ExitCode -eq 0) { ($originUrlResult.Output | Select-Object -First 1).Trim() } else { '<unknown>' }

$vercelCommand = Get-Command vercel -ErrorAction SilentlyContinue
if ($null -ne $vercelCommand) {
  Write-Info 'Vercel CLI found. Trying a production status check.'
  $vercelResult = & $vercelCommand.Source ls 2>&1
  $vercelExitCode = $LASTEXITCODE
  if ($vercelExitCode -eq 0) {
    Write-Ok 'Vercel CLI responded. Confirm the latest Production Ready deployment manually.'
  } else {
    Write-Warn 'Vercel CLI check failed. Confirm login and deployment status manually.'
    foreach ($line in (Get-TrimmedLines -Lines $vercelResult)) {
      Write-Host "  $line"
    }
  }
} else {
  Write-Warn 'Vercel CLI is not available. Confirm Production status in the Vercel dashboard.'
}

Write-Host ''
Write-Host 'Current safe work baseline'
Write-Host "  Path: $projectPath"
Write-Host "  Branch: $branchName"
Write-Host "  HEAD SHA: $headSha"
Write-Host "  origin/main SHA: $originMainSha"
Write-Host "  origin URL: $originUrl"
Write-Host '  Reminder: 작업 후 push하면 Vercel Production Ready와 배포 커밋 SHA를 확인하라.'

exit 0
