pipeline {
    agent any
    tools { nodejs 'NODEJS' }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                bat 'npm run ng build'
                bat 'start /B npm run ng serve'
                echo 'Now...'
                input message: 'Finished using the website? (Click "Proceed" to continue)'

                 bat '''
                  REM Check if .pidfile exists
                  if not exist .pidfile (
                      echo .pidfile not found!
                      exit /b 1
                  )
                  
                  REM Read the PID from the .pidfile
                  set /p PID=<.pidfile
                  
                  REM Kill the process with the specified PID
                  taskkill /PID %PID% /
                '''
            }
        }
    }
}
