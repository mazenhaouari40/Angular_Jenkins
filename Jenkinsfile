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
                bat 'start npm run ng serve '
                echo 'Now...'
                input message: 'Finished using the website? (Click "Proceed" to continue)'
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
