Write-Host "Iniciando backend..."
Start-Process -NoNewWindow -FilePath "node" -ArgumentList "src/index.js" -WorkingDirectory "$PSScriptRoot\Backend"

Write-Host "Iniciando frontend..."
cd "$PSScriptRoot\Frontend\toolbox-front"
npm start