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

function Normalize-PathValue {
  param([string]$PathValue)

  if ([string]::IsNullOrWhiteSpace($PathValue)) {
    return ''
  }

  return [System.IO.Path]::GetFullPath($PathValue).TrimEnd('\').ToLowerInvariant()
}

function Get-GitOutput {
  param([string[]]$Arguments)

  $stderrPath = [System.IO.Path]::GetTempFileName()
  try {
    $stdout = & git @Arguments 2> $stderrPath
    $stderr = @()
    if (Test-Path -LiteralPath $stderrPath) {
      $stderr = Get-Content -LiteralPath $stderrPath
    }
    $output = @($stdout) + @($stderr)
    $exitCode = $LASTEXITCODE
  } finally {
    if (Test-Path -LiteralPath $stderrPath) {
      Remove-Item -LiteralPath $stderrPath -Force
    }
  }

  return [pscustomobject]@{
    Output = @($output)
    ExitCode = $exitCode
  }
}

$currentPath = [System.IO.Path]::GetFullPath((Get-Location).Path)
$normalizedCurrentPath = Normalize-PathValue -PathValue $currentPath

$approvedRoots = @(
  'C:\Users\march\OneDrive\Desktop\2026worldcup-project'
)

$normalizedApprovedRoots = $approvedRoots | ForEach-Object {
  Normalize-PathValue -PathValue $_
}

$blockedPathHints = @(
  'wc26-new-suit',
  'new project',
  '월드컵 프로젝트'
)

$failures = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

Write-Info "Current path: $currentPath"

$matchedBlockedHint = $blockedPathHints | Where-Object {
  $normalizedCurrentPath.Contains($_.ToLowerInvariant())
} | Select-Object -First 1

if ($matchedBlockedHint) {
  $failures.Add("Blocked copy path detected: $matchedBlockedHint")
} elseif ($normalizedApprovedRoots -contains $normalizedCurrentPath) {
  Write-Ok 'Approved working folder confirmed.'
} else {
  $failures.Add('This is not an approved working folder.')
}

$gitDirectory = Join-Path $currentPath '.git'
if (Test-Path -LiteralPath $gitDirectory -PathType Container) {
  Write-Ok '.git directory found.'
} else {
  $failures.Add('.git directory is missing.')
}

$packageJsonPath = Join-Path $currentPath 'package.json'
$coreFilePaths = @(
  (Join-Path $currentPath 'index.html'),
  (Join-Path $currentPath 'app.js'),
  (Join-Path $currentPath 'styles.css')
)

$hasPackageJson = Test-Path -LiteralPath $packageJsonPath -PathType Leaf
$hasCoreFiles = $true
foreach ($coreFilePath in $coreFilePaths) {
  if (-not (Test-Path -LiteralPath $coreFilePath -PathType Leaf)) {
    $hasCoreFiles = $false
    break
  }
}

if ($hasPackageJson -or $hasCoreFiles) {
  Write-Ok 'Project marker files confirmed.'
} else {
  $failures.Add('package.json or project core files are missing.')
}

$originResult = Get-GitOutput -Arguments @('config', '--get', 'remote.origin.url')
$originUrl = ($originResult.Output | Select-Object -First 1)
$expectedOriginPatterns = @(
  'https://github.com/marchis1015ab-sketch/2026worldcup-project',
  'https://github.com/marchis1015ab-sketch/2026worldcup-project.git',
  'git@github.com:marchis1015ab-sketch/2026worldcup-project.git'
)

if ($originResult.ExitCode -ne 0 -or [string]::IsNullOrWhiteSpace($originUrl)) {
  $failures.Add('origin remote could not be verified.')
} else {
  $normalizedOrigin = $originUrl.Trim().ToLowerInvariant()
  $expectedOriginsNormalized = $expectedOriginPatterns | ForEach-Object { $_.ToLowerInvariant() }
  if ($expectedOriginsNormalized -contains $normalizedOrigin) {
    Write-Ok "origin remote: $originUrl"
  } else {
    $failures.Add("origin remote is not the approved repository: $originUrl")
  }
}

$branchResult = Get-GitOutput -Arguments @('branch', '--show-current')
$branchName = ($branchResult.Output | Select-Object -First 1)
if ($branchResult.ExitCode -ne 0 -or [string]::IsNullOrWhiteSpace($branchName)) {
  $failures.Add('Current branch could not be verified.')
} elseif ($branchName.Trim() -eq 'main') {
  Write-Ok 'Current branch is main.'
} else {
  $failures.Add("Current branch is not main: $branchName")
}

$vercelProjectPath = Join-Path $currentPath '.vercel\project.json'
if (Test-Path -LiteralPath $vercelProjectPath -PathType Leaf) {
  Write-Ok '.vercel/project.json found.'
} else {
  $warnings.Add('.vercel/project.json is missing. Check the Vercel link manually.')
}

foreach ($warning in $warnings) {
  Write-Warn $warning
}

if ($failures.Count -gt 0) {
  foreach ($failure in $failures) {
    Write-Fail $failure
  }

  Write-Fail '이 폴더에서 작업 금지'
  exit 1
}

Write-Ok 'Safe project root check passed.'
exit 0
