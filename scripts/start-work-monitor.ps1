$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

& powershell -ExecutionPolicy Bypass -File ".\scripts\check-project-root.ps1"

$port = if ($env:WORK_MONITOR_PORT) {
  [int]$env:WORK_MONITOR_PORT
} else {
  8787
}

function Get-LocalIPv4List {
  $addresses = @()
  try {
    $addresses = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop |
      Where-Object {
        $_.IPAddress -notlike "127.*" -and
        $_.IPAddress -notlike "169.254.*"
      } |
      Select-Object -ExpandProperty IPAddress -Unique
  } catch {
    $addresses = [System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() |
      Where-Object { $_.OperationalStatus -eq "Up" } |
      ForEach-Object { $_.GetIPProperties().UnicastAddresses } |
      Where-Object {
        $_.Address.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork -and
        -not $_.Address.IPAddressToString.StartsWith("127.") -and
        -not $_.Address.IPAddressToString.StartsWith("169.254.")
      } |
      ForEach-Object { $_.Address.IPAddressToString } |
      Select-Object -Unique
  }
  return @($addresses)
}

$localIps = Get-LocalIPv4List
$localUrl = "http://127.0.0.1:$port/"

Write-Host ""
Write-Host "WC26 Work Monitor"
Write-Host "Project root: $projectRoot"
Write-Host "Monitor URL : $localUrl"
Write-Host "Work target : http://127.0.0.1:5500/"
Write-Host ""
Write-Host "Tablet URLs:"
if ($localIps.Count -eq 0) {
  Write-Host "  No non-loopback IPv4 address was detected."
} else {
  foreach ($ip in $localIps) {
    Write-Host "  http://$ip`:$port/"
  }
}
Write-Host ""
Write-Host "Live Server 5500 must already be running for preview mode."
Write-Host "Stop with Ctrl+C."
Write-Host ""

Start-Job -Name "wc26-work-monitor-browser" -ScriptBlock {
  param($url)
  Start-Sleep -Seconds 2
  Start-Process $url
} -ArgumentList $localUrl | Out-Null

try {
  & node ".\tools\work-monitor\server.js"
  if ($LASTEXITCODE -ne 0) {
    throw "work-monitor server exited with code $LASTEXITCODE"
  }
} finally {
  Get-Job -Name "wc26-work-monitor-browser" -ErrorAction SilentlyContinue | Remove-Job -Force -ErrorAction SilentlyContinue
}
