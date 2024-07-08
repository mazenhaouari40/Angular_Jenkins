@echo off
setlocal

rem Read the PID from .pidfile
set /p PID=<.pidfile

rem Check if PID is not empty
if not "%PID%"=="" (
    echo Terminating process with PID %PID%
    rem Terminate the process
    taskkill /PID %PID% /F
) else (
    echo No PID found in .pidfile
)

endlocal
