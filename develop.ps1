& .\scripts\install.ps1
& .\scripts\setEnv.ps1
$cwd = (Get-Location).Path;
Start-Process -WorkingDirectory ($cwd) powershell {

    Set-Location "./client; npm run start";
}
Start-Process -WorkingDirectory ($cwd) powershell {
    Set-Location "./server; npm run dev"
}