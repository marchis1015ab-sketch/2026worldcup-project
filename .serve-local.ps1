$ErrorActionPreference = 'Stop'

$workspace = Split-Path -Parent $MyInvocation.MyCommand.Path
$endpoint = [System.Net.IPAddress]::Parse('127.0.0.1')
$listener = [System.Net.Sockets.TcpListener]::new($endpoint, 5500)
$listener.Start()

function Get-ContentType($filePath) {
  switch ([System.IO.Path]::GetExtension($filePath).ToLowerInvariant()) {
    '.html' { 'text/html; charset=utf-8' }
    '.css' { 'text/css; charset=utf-8' }
    '.js' { 'application/javascript; charset=utf-8' }
    '.jpg' { 'image/jpeg' }
    '.jpeg' { 'image/jpeg' }
    '.png' { 'image/png' }
    '.webp' { 'image/webp' }
    default { 'application/octet-stream' }
  }
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()
      while (($line = $reader.ReadLine()) -ne '') { }

      $target = '/'
      if ($requestLine) {
        $parts = $requestLine.Split(' ')
        if ($parts.Length -ge 2) {
          $target = $parts[1]
        }
      }

      $relativePath = $target.TrimStart('/')
      if ([string]::IsNullOrWhiteSpace($relativePath)) {
        $relativePath = 'index.html'
      }

      $relativePath = $relativePath.Split('?')[0]
      $relativePath = $relativePath -replace '/', '\'
      $file = Join-Path $workspace $relativePath

      if ((Test-Path $file -PathType Leaf) -and ([System.IO.Path]::GetFullPath($file).StartsWith($workspace, [System.StringComparison]::OrdinalIgnoreCase))) {
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $header = "HTTP/1.1 200 OK`r`nContent-Type: $(Get-ContentType $file)`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
        $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
        $stream.Write($headerBytes, 0, $headerBytes.Length)
        $stream.Write($bytes, 0, $bytes.Length)
      } else {
        $body = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
        $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
        $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
        $stream.Write($headerBytes, 0, $headerBytes.Length)
        $stream.Write($body, 0, $body.Length)
      }
    } finally {
      if ($reader) { $reader.Dispose() }
      if ($stream) { $stream.Dispose() }
      $client.Dispose()
    }
  }
} finally {
  $listener.Stop()
}
