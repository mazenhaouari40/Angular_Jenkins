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
                bat '''
                start npm run ng serve
                echo %PROCESS_ID% > .pidfile
                '''
                echo 'Now...'
                echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'
            }
        }
      stage('kill'){
          steps{
                // Lire le contenu du fichier .pidfile dans une variable
                    bat '''
                    set /p PID=<.pidfile
                    REM Terminer le processus avec le PID lu
                    taskkill /PID %PID%
                    '''
          }
      }
    }
}
