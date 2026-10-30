@echo off
title VentureSync Enterprise Startup
cd /d "C:\Personal\projects\VentureSync"

echo ===========================================
echo VentureSync Enterprise - Full Stack Startup
echo ===========================================
echo.

echo 1/4 - Cleaning up existing processes...
taskkill /F /IM node.exe 2>nul >nul
echo Done.

echo 2/4 - Starting Auth API Server (port 3001)...
cd auth-server
if not exist node_modules (
    echo Installing auth server dependencies...
    npm install --silent 2>&1 | find /i "error" >nul
)
start "VentureSync Auth API" cmd /c "npm start"
echo Auth API starting on http://localhost:3001
cd ..

echo 3/4 - Starting Frontend (Next.js) Server (port 3000)...
cd frontend
if not exist node_modules (
    echo Installing frontend dependencies...
    npm install --silent 2>&1 | find /i "error" >nul
)
start "VentureSync Frontend" cmd /c "npm run dev"
echo Frontend starting on http://localhost:3000
cd ..

echo 4/4 - Initialization Complete
echo.
echo ===========================================
echo VentureSync Enterprise is now running!
echo ===========================================
echo.
echo "Frontend UI:  http://localhost:3000"
echo "Auth API:     http://localhost:3001"
echo.
echo "Default Login:"
echo "  Username: admin"
echo "  Password: Test@123"
echo.
echo "Register new users at: http://localhost:3000/register"
echo.
echo Close the opened windows to stop the servers.
echo.

pause
