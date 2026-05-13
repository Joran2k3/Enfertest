$content = Get-Content 'data.js' -Raw

# Extract all tema: values from questions using regex
$temaMatches = [regex]::Matches($content, 'tema:\s*(\d+|"[^"]+"|''[^'']+'')')
$temasEncontrados = @{}

foreach ($m in $temaMatches) {
    $val = $m.Groups[1].Value.Trim('"').Trim("'")
    if ($temasEncontrados.ContainsKey($val)) {
        $temasEncontrados[$val]++
    } else {
        $temasEncontrados[$val] = 1
    }
}

Write-Host "=== VALORES de tema: ENCONTRADOS EN PREGUNTAS ==="
$temasEncontrados.GetEnumerator() | Sort-Object Name | ForEach-Object {
    Write-Host ("  tema: " + $_.Key + " => " + $_.Value + " preguntas")
}

# Extract asignatura blocks
$asigMatches = [regex]::Matches($content, 'asignatura:\s*"([^"]+)".*?tema:\s*(\d+|"[^"]+"|''[^'']+'')', [System.Text.RegularExpressions.RegexOptions]::Singleline)

$byAsig = @{}
foreach ($m in $asigMatches) {
    $asig = $m.Groups[1].Value
    $tema = $m.Groups[2].Value.Trim('"').Trim("'")
    $key = "$asig|$tema"
    if ($byAsig.ContainsKey($key)) {
        $byAsig[$key]++
    } else {
        $byAsig[$key] = 1
    }
}

Write-Host ""
Write-Host "=== CONTEO POR ASIGNATURA Y TEMA ==="
$byAsig.GetEnumerator() | Sort-Object Name | ForEach-Object {
    Write-Host ("  " + $_.Key + " => " + $_.Value + " preguntas")
}
