pipeline {
    agent any
    tools { nodejs 'NODEJS' }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run ng build'
            }
        }
        stage('Serve') {
            steps {
              
                bat 'npm run ng serve '
                echo 'Now...'
                echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'

                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                
                REM Lire le contenu du fichier .pidfile dans une variable
                set /p PID=<.pidfile
                
                REM Terminer le processus avec le PID lu
                taskkill /PID %PID%

            }
        }
    }
}
