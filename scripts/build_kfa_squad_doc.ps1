$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

function Get-PlayerCards {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Url
    )

    $html = (Invoke-WebRequest -Uri $Url).Content
    $pattern = '<a href="javascript:;" onclick="view_player\(''(?<id>\d+)''\)">\s*<!--\s*-->\s*<p class="pic" style="background-image:url\(''(?<image>[^'']+)''\);">(?<alt>[^<]+)</p>\s*<p class="name">(?<name>[^<]+)<br />(?<english>[^<]+)</p>\s*<p class="profile"><br />(?<birth>[^<]+)<br />(?<size>[^<]+)<br />(?<club>[^<]+)</p>\s*<p class="position (?<positionClass>[^""]+)">(?<position>[^<]+)</p>'
    $matches = [regex]::Matches(
        $html,
        $pattern,
        [System.Text.RegularExpressions.RegexOptions]::Singleline
    )

    foreach ($match in $matches) {
        [PSCustomObject]@{
            Name = $match.Groups['name'].Value.Trim()
            EnglishName = $match.Groups['english'].Value.Trim()
            Birth = $match.Groups['birth'].Value.Trim()
            Size = $match.Groups['size'].Value.Trim()
            Club = $match.Groups['club'].Value.Trim()
            Position = $match.Groups['position'].Value.Trim()
            ImageUrl = $match.Groups['image'].Value.Trim()
        }
    }
}

$workspace = Split-Path -Parent $PSScriptRoot
$assetsDir = Join-Path $workspace 'kfa-assets\mens-a-team-20260516-final'
$outputPath = Join-Path $workspace 'kfa_mens_a_team_final_squad.html'
$sourcePageUrl = 'https://www.kfa.or.kr/national/?act=nt_man'
$sourcePlayerUrl = 'https://www.kfa.or.kr/national/?act=nt_man&search_val=2025'
$sourceArticleUrl = 'https://www.kfa.or.kr/layer_popup/popup_live.php?act=news_tv_detail&idx=27972&div_code=news'

$rosterJson = @'
[
  {"Name":"\uC870\uD604\uC6B0","Position":"GK","Club":"Ulsan HD"},
  {"Name":"\uAE40\uC2B9\uADDC","Position":"GK","Club":"FC Tokyo"},
  {"Name":"\uC1A1\uBC94\uADFC","Position":"GK","Club":"Jeonbuk Hyundai"},
  {"Name":"\uAE40\uBBFC\uC7AC","Position":"DF","Club":"Bayern Munich"},
  {"Name":"\uC870\uC720\uBBFC","Position":"DF","Club":"Sharjah"},
  {"Name":"\uC774\uD55C\uBC94","Position":"DF","Club":"Midtjylland"},
  {"Name":"\uAE40\uD0DC\uD604","Position":"DF","Club":"Kashima Antlers"},
  {"Name":"\uBC15\uC9C4\uC12D","Position":"DF","Club":"Zhejiang FC"},
  {"Name":"\uC774\uAE30\uD601","Position":"DF","Club":"Gangwon FC"},
  {"Name":"\uC774\uD0DC\uC11D","Position":"DF","Club":"Austria Wien"},
  {"Name":"\uC124\uC601\uC6B0","Position":"DF","Club":"Zvezda"},
  {"Name":"\uC60C\uC2A4 \uCE74\uC2A4\uD2B8\uB85C\uD504","Position":"DF","Club":"Monchengladbach"},
  {"Name":"\uAE40\uBB38\uD658","Position":"DF","Club":"Daejeon Hana"},
  {"Name":"\uC591\uD604\uC900","Position":"MF","Club":"Celtic"},
  {"Name":"\uBC31\uC2B9\uD638","Position":"MF","Club":"Birmingham City"},
  {"Name":"\uD669\uC778\uBC94","Position":"MF","Club":"Feyenoord"},
  {"Name":"\uAE40\uC9C4\uADDC","Position":"MF","Club":"Jeonbuk Hyundai"},
  {"Name":"\uBC30\uC900\uD638","Position":"MF","Club":"Stoke City"},
  {"Name":"\uC5C4\uC9C0\uC131","Position":"MF","Club":"Swansea City"},
  {"Name":"\uD669\uD76C\uCC2C","Position":"MF","Club":"Wolverhampton"},
  {"Name":"\uC774\uB3D9\uACBD","Position":"MF","Club":"Ulsan HD"},
  {"Name":"\uC774\uC7AC\uC131","Position":"MF","Club":"Mainz"},
  {"Name":"\uC774\uAC15\uC778","Position":"MF","Club":"Paris Saint-Germain"},
  {"Name":"\uC624\uD604\uADDC","Position":"FW","Club":"Besiktas"},
  {"Name":"\uC190\uD765\uBBFC","Position":"FW","Club":"LA FC"},
  {"Name":"\uC870\uADDC\uC131","Position":"FW","Club":"Midtjylland"}
]
'@

$roster = $rosterJson | ConvertFrom-Json

$lookup = @{}
$playerSources = @(
    $sourcePlayerUrl,
    'https://www.kfa.or.kr/national/?act=nt_man&position=MF&s_idx=6148&search_val=2024',
    'https://www.kfa.or.kr/national/?act=nt_man&position=MF&s_idx=6387&search_val=2025',
    'https://www.kfa.or.kr/national/?act=nt_man&s_idx=6708&search_val=2025'
)

foreach ($url in $playerSources) {
    foreach ($player in Get-PlayerCards -Url $url) {
        $lookup[$player.Name] = $player
    }
}

New-Item -ItemType Directory -Force -Path $assetsDir | Out-Null

$players = foreach ($entry in $roster) {
    if (-not $lookup.ContainsKey($entry.Name)) {
        throw "Missing player info: $($entry.Name)"
    }

    $player = $lookup[$entry.Name]
    $safeName = ($entry.Name -replace '[\\/:*?"<>| ]', '_')
    $ext = [IO.Path]::GetExtension(($player.ImageUrl -split '\?')[0])
    if ([string]::IsNullOrWhiteSpace($ext)) {
        $ext = '.jpg'
    }

    $imageFileName = '{0}_{1}{2}' -f $entry.Position, $safeName, $ext
    $imagePath = Join-Path $assetsDir $imageFileName
    Invoke-WebRequest -Uri $player.ImageUrl -OutFile $imagePath

    [PSCustomObject]@{
        Name = $entry.Name
        EnglishName = $player.EnglishName
        Birth = $player.Birth
        Size = $player.Size
        Club = $entry.Club
        Position = $entry.Position
        ImageRelativePath = ('kfa-assets/mens-a-team-20260516-final/' + $imageFileName)
    }
}

$rows = foreach ($player in $players) {
    @"
        <tr>
          <td class="photo-cell"><img src="$($player.ImageRelativePath)" alt="$($player.Name) photo" /></td>
          <td>$($player.Name)</td>
          <td class="en-name">$($player.EnglishName)</td>
          <td>$($player.Position)</td>
          <td>$($player.Birth)</td>
          <td>$($player.Size)</td>
          <td>$($player.Club)</td>
        </tr>
"@
}

$totalCount = $players.Count
$fwCount = ($players | Where-Object Position -eq 'FW').Count
$mfCount = ($players | Where-Object Position -eq 'MF').Count
$dfCount = ($players | Where-Object Position -eq 'DF').Count
$gkCount = ($players | Where-Object Position -eq 'GK').Count

$document = @"
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Korea Men's National Team Final Squad</title>
  <style>
    :root {
      --bg: #f5f1e8;
      --surface: #fffdf8;
      --line: #d6c8ae;
      --text: #1f1a14;
      --muted: #6a5d50;
      --accent: #bf1730;
      --accent-soft: #f3d7dd;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Malgun Gothic", "Apple SD Gothic Neo", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top right, #f8e5bf 0, transparent 28%),
        linear-gradient(180deg, #f8f4ec 0%, var(--bg) 100%);
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px 64px;
    }

    .hero {
      background: linear-gradient(135deg, rgba(191, 23, 48, 0.96), rgba(136, 11, 28, 0.96));
      color: #fff;
      padding: 32px;
      border-radius: 24px;
      box-shadow: 0 18px 40px rgba(92, 22, 31, 0.18);
    }

    .hero h1 {
      margin: 0 0 12px;
      font-size: clamp(28px, 5vw, 44px);
      line-height: 1.1;
    }

    .hero p {
      margin: 6px 0;
      font-size: 15px;
      line-height: 1.6;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
      margin: 24px 0 0;
    }

    .stat {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 16px;
      padding: 14px 16px;
    }

    .stat strong {
      display: block;
      font-size: 24px;
      margin-bottom: 4px;
    }

    .card {
      margin-top: 24px;
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 22px;
      padding: 24px;
      box-shadow: 0 14px 30px rgba(77, 57, 37, 0.08);
      overflow: hidden;
    }

    .card h2 {
      margin: 0 0 8px;
      font-size: 24px;
    }

    .card p {
      margin: 0 0 18px;
      color: var(--muted);
      line-height: 1.6;
    }

    .table-wrap {
      overflow-x: auto;
      border-radius: 18px;
      border: 1px solid var(--line);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 920px;
      background: #fff;
    }

    thead th {
      background: #f0e6d3;
      color: #30261d;
      text-align: left;
      padding: 14px 16px;
      font-size: 14px;
      border-bottom: 1px solid var(--line);
    }

    tbody td {
      padding: 12px 16px;
      border-bottom: 1px solid #eadfca;
      vertical-align: middle;
      font-size: 14px;
    }

    tbody tr:nth-child(even) {
      background: #fffaf0;
    }

    tbody tr:hover {
      background: #fff3df;
    }

    .photo-cell {
      width: 104px;
    }

    .photo-cell img {
      width: 72px;
      height: 72px;
      object-fit: cover;
      border-radius: 16px;
      display: block;
      border: 2px solid var(--accent-soft);
      background: #f2ede3;
    }

    .en-name {
      color: var(--muted);
      font-size: 13px;
    }

    .source {
      margin-top: 18px;
      font-size: 13px;
      color: var(--muted);
    }

    .source a {
      color: var(--accent);
    }

    @media (max-width: 768px) {
      main {
        padding: 20px 14px 36px;
      }

      .hero,
      .card {
        border-radius: 18px;
        padding: 18px;
      }
    }
  </style>
</head>
<body>
  <main>
    <section class="hero">
      <h1>2026-05-16 Final Squad</h1>
      <p>Rebuilt from the KFA final squad article dated May 16, 2026.</p>
      <p>Article: Son Heungmin included, with Lee Gihyuk and Lee Donggyeong as surprise additions.</p>
      <div class="stats">
        <div class="stat"><strong>$totalCount</strong><span>Total</span></div>
        <div class="stat"><strong>$gkCount</strong><span>GK</span></div>
        <div class="stat"><strong>$dfCount</strong><span>DF</span></div>
        <div class="stat"><strong>$mfCount</strong><span>MF</span></div>
        <div class="stat"><strong>$fwCount</strong><span>FW</span></div>
      </div>
    </section>

    <section class="card">
      <h2>Squad Table</h2>
      <p>Photo and player profile data come from KFA player pages. Club names follow the May 16 final squad article.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>English Name</th>
              <th>Position</th>
              <th>Birth</th>
              <th>Size</th>
              <th>Club</th>
            </tr>
          </thead>
          <tbody>
$($rows -join "")
          </tbody>
        </table>
      </div>
      <p class="source">
        Sources:
        <a href="$sourceArticleUrl">$sourceArticleUrl</a>,
        <a href="$sourcePageUrl">$sourcePageUrl</a>
      </p>
    </section>
  </main>
</body>
</html>
"@

Set-Content -Path $outputPath -Value $document -Encoding UTF8
Write-Output "Created: $outputPath"
