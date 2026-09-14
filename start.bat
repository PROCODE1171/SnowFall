@echo off
title SNOWFALL - Minecraft Resource Hub
echo ========================================================
echo   ❄ Starting SNOWFALL Minecraft Resource Hub...
echo ========================================================
echo.
echo Opening browser at http://localhost:8080 ...
start http://localhost:8080
echo.
echo Running local web server (Press Ctrl+C to stop)...
python -m http.server 8080
pause
