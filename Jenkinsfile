pipeline {
    agent any
    tools { nodejs 'NODEJS' }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build & serve') {
            steps {
                bat 'npm run ng build'
                bat 'npm run ng serve '
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
        stage('Cleanup') {
            steps {
                script {
                    // Read the PID from the .pidfile
                    def pid = readFile('.pidfile').trim()
                    // Kill the process
                    bat "taskkill /PID ${pid} /F"
                }
            }
        }

      

    }
}
