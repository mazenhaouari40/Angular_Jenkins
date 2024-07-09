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
              start /B npm run ng serve
              timeout /T 1
              echo %PROCESS_ID% > .pidfile
                '''
                echo 'Now...'
                echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'
                input message: 'Finished using the website? (Click "Proceed" to continue)'  
            }
        }
    }
}
