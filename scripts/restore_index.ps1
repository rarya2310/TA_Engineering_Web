# Restore script: copies src\index.html.bak -> src\index.html if index.html is missing
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptRoot "..")
$src = Join-Path $projectRoot 'src\index.html'
$bak = Join-Path $projectRoot 'src\index.html.bak'

if (-not (Test-Path $src) -and (Test-Path $bak)) {
    Copy-Item -Path $bak -Destination $src -Force
    Write-Output "Restored src\index.html from backup ($bak)."
} elseif (-not (Test-Path $bak)) {
    Write-Output "Backup not found: $bak"
} else {
    Write-Output "No action: src\index.html exists."
}
