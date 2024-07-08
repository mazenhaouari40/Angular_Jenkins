@ECHO OFF

npm run ng build
npm run ng serve > NUL & (START "" cmd /c "echo $! > .pidfile")

echo Now...
echo Visit http://localhost:4200 to see your Node.js/Angular application in action.