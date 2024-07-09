@echo off
REM Check if .pidfile exists
if not exist .pidfile (
    echo .pidfile not found!
    exit /b 1
)

REM Read the PID from the .pidfile
set /p PID=<.pidfile

REM Kill the process with the specified PID
taskkill /PID %PID% /F
