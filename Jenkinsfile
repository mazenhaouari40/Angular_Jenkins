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
                // Start the Angular application in a separate process and write the PID to a file
                bat 'start /b npm run ng serve > .pidfile 2>&1'
                echo 'Now...'
                echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'
            }
        }
        stage('Kill Process') {
            steps {
                script {
                    // Read PID from .pidfile and terminate the process
                    def pid = bat(script: 'type .pidfile', returnStdout: true).trim()
                    bat "taskkill /PID ${pid} /F"
                }
            }
        }
    }
}
