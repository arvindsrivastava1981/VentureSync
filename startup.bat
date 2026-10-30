@echo off
title VentureSync Enterprise - Full Stack Startup
cd /d "C:\Personal\projects\VentureSync"

REM ===========================================
REM PORT CONFIGURATION
REM ===========================================
SET BACKEND_PORT=3000
SET FRONTEND_PORT=3000

REM ===========================================
REM FUNCTION: Check if port is in use and kill it
REM ===========================================
check_and_kill_port() {
    set PORT_TO_CHECK=%1
    echo Checking port %PORT_TO_CHECK%...
    
    REM Check if port is listening using netstat
    for /f "tokens=5 delims=:" %%A in ('netstat -an 2^| findstr ":%PORT_TO_CHECK%" ^| find "LISTEN"') do (
        set PID_FOUND=%%A
    )
    
    if defined PID_FOUND (
        echo Port %PORT_TO_CHECK% is already in use by PID %PID_FOUND%
        taskkill /F /PID %PID_FOUND% >nul 2>&1
        echo Killed process on port %PORT_TO_CHECK%
        timeout /t 1 /nobreak >nul
    ) else (
        echo Port %PORT_TO_CHECK% is free
    )
}

REM ===========================================
REM KILL EXISTING PROCESSES
REM ===========================================
echo ===========================================
echo VentureSync Enterprise - Full Stack
echo ===========================================
echo.

REM Kill any existing Node processes that might be using our ports
taskkill /F /IM node.exe 2>nul
taskkill /F /IM serve.exe 2>nul
echo Existing Node processes cleaned up
timeout /t 1 /nobreak >nul

REM Check and kill ports if in use
check_and_kill_port %BACKEND_PORT%
check_and_kill_port %FRONTEND_PORT%

echo.
echo ===========================================
echo Starting VentureSync Enterprise Stack
echo ===========================================
echo.

REM ===========================================
REM START BACKEND (NestJS)
REM ===========================================
echo Starting Backend (NestJS) on port %BACKEND_PORT%...
cd backend
if exist .env (
    echo Using existing .env file
) else (
    echo Creating .env file...
    echo DATABASE_URL=postgresql://neondb_owner:npg_N4iD0zOCbfKo@ep-rough-mouse-b5bgq0in-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require > .env
    echo JWT_SECRET=venturesync-secret-key >> .env
    echo NODE_ENV=development >> .env
)

REM Start backend in background
start /B node dist/main.js --port %BACKEND_PORT%
echo Backend started with PID: %ERRORLEVEL%
timeout /t 2 /nobreak >nul

REM Wait for backend to be ready
echo Waiting for backend to initialize...
for /L set i=1 to 10 do (
    curl -s http://localhost:%BACKEND_PORT%/auth/login >nul 2>&1
    if errorlevel 1 (
        echo Waiting... (%i/10)
        timeout /t 1 /nobreak >nul
    ) else (
        echo Backend is ready!
        goto BACKEND_READY
    )
)
echo WARNING: Backend may still be starting up
goto BACKEND_READY

:BACKEND_READY
cd ..

REM ===========================================
REM START FRONTEND (Next.js)
REM ===========================================
echo.
echo Starting Frontend (Next.js) on port %FRONTEND_PORT%...
cd frontend

if not exist node_modules (
    echo Installing frontend dependencies...
    npm install --silent 2>&1 | find /i "error" && echo "WARNING: Some install errors occurred"
)

REM Start frontend in background
start /B npx next dev --port %FRONTEND_PORT% > frontend.log 2>&1 &
FRONTEND_PID=$!
echo Frontend started with PID: !FRONTEND_PID%
timeout /t 3 /nobreak >nul

REM Wait for frontend to be ready
echo Waiting for frontend to initialize...
for /L set i=1 to 15 do (
    curl -s http://localhost:%FRONTEND_PORT% >nul 2>&1
    if errorlevel 1 (
        echo Waiting... (%i/15)
        timeout /t 1 /nobreak >nul
    ) else (
        echo Frontend is ready!
        goto FRONTEND_READY
    )
)
echo WARNING: Frontend may still be starting up
goto FRONTEND_READY

:FRONTEND_READY
cd ..

REM ===========================================
echo.
echo ===========================================
echo 🚀 VentureSync Enterprise is now running!
echo ===========================================
echo.
echo "Backend API:  http://localhost:%BACKEND_PORT%"
echo "Frontend UI:  http://localhost:%FRONTEND_PORT%"
echo.
echo "Default Login:"
echo "  Username: admin"
echo "  Password: Test@123"
echo.
echo "Press Ctrl+C to stop both servers"
echo.

REM ===========================================
REM KEEP SCRIPT RUNNING
REM ===========================================
:MAIN_LOOP
timeout /t 5 /nobreak >nul
goto MAIN_LOOP