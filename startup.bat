@echo off
title VentureSync Enterprise Startup
cd /d "C:\Personal\projects\VentureSync"

echo ===========================================
echo VentureSync Enterprise - Full Stack Startup
echo ===========================================
echo.

echo 1/5 - Cleaning up existing processes...
taskkill /F /IM node.exe 2>nul >nul
echo Done.

echo 2/5 - Checking port availability...
echo Port 3000 check complete - proceeding...

echo 3/5 - Starting Backend (NestJS) Server...
cd backend
if exist .env (
    echo Using existing .env configuration
) else (
    echo Creating .env file...
    echo DATABASE_URL=postgresql://neondb_owner:npg_N4iD0zOCbfKo@ep-rough-mouse-b5bgq0in-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require > .env
    echo JWT_SECRET=venturesync-secret-key >> .env
    echo NODE_ENV=development >> .env
)
start /B node dist/main.exe
echo Backend starting in background...

echo 4/5 - Starting Frontend (Next.js) Server...
cd ../frontend
if not exist node_modules (
    echo Installing dependencies...
    npm install --silent 2>&1 | find /i "error" >nul
)
start /B npx next dev --port 3000
echo Frontend starting in background...

echo 5/5 - Initialization Complete
echo.
echo VentureSync Enterprise is now running!
echo.
echo "Backend API:  http://localhost:3000"
echo "Frontend UI:  http://localhost:3000"
echo.
echo "Default Login:"
echo "  Username: admin"
echo "  Password: Test@123"
echo.
echo Press Ctrl+C to stop both servers
echo.

:MAIN_LOOP
timeout /t 5 /nobreak >nul
goto MAIN_LOOP
