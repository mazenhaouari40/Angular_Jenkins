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
                bat 'start npm run ng serve '
                echo 'Now...'
                echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'
            }
        }
      stage('Wait for User Input') {
            steps {
                script {
                    input message: 'Finished using the website? (Click "Proceed" to continue)'
                }
            }
        }
        stage('Kill') {
            steps {
                    bat 'kill-process.bat'
            }
        }
    }
}
