$content = Get-Content 'data.js' -Encoding UTF8 -Raw

# Find lines containing "Interactivas"
$lines = $content -split "`n"
$lineNum = 0
foreach ($line in $lines) {
    $lineNum++
    if ($line -match "Interactivas") {
        Write-Host ("Line " + $lineNum + ": " + $line.Trim())
    }
}
