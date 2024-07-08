@echo off
rem Build the Angular project
npm run ng build

rem Start the Angular server in a new command window
start "" /B npm run ng serve

rem Wait for a short period to allow the server to start
timeout /T 5 /NOBREAK

rem Output instructions to the user
echo Now...
echo Visit http://localhost:4200 to see your Node.js/Angular application in action.
