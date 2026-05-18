$expectedPath = "C:\Users\Jnote\Desktop\2026worldcup-project"
$currentPath = (Get-Location).Path

Write-Host "Expected:" $expectedPath
Write-Host "Current :" $currentPath

if ($currentPath -ne $expectedPath) {
  Write-Host "ERROR: 현재 경로가 운영 기준 폴더가 아닙니다. 작업 중단."
  exit 1
}

if (!(Test-Path ".\.git")) {
  Write-Host "ERROR: .git 폴더가 없습니다. 작업 중단."
  exit 1
}

if (!(Test-Path ".\.vercel\project.json")) {
  Write-Host "ERROR: .vercel/project.json이 없습니다. 새 Vercel 프로젝트 생성 위험. 작업 중단."
  exit 1
}

if (!(Test-Path ".\index.html")) {
  Write-Host "ERROR: index.html이 없습니다. 작업 중단."
  exit 1
}

if (!(Test-Path ".\app.js")) {
  Write-Host "ERROR: app.js가 없습니다. 작업 중단."
  exit 1
}

Write-Host "OK: 운영 기준 폴더 확인 완료."
