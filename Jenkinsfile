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
                bat 'start /B npm run ng serve & echo %PROCESS_ID% > angular-server.pid'
                echo 'Now...'
                input message: 'Finished using the website? (Click "Proceed" to continue)'  

                def pid = readFile('angular-server.pid').trim()
                bat "taskkill /F /PID ${pid}"
            }
        }
    }
}
