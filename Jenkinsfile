pipeline {
    agent any
    tools { nodejs 'NODEJS' }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
     stage('Testing Stage') {
            steps {
                bat 'ng test --no-watch --code-coverage'
            }
        }
        stage('Deliver') {
            steps {
                bat 'npm run ng build'
              bat 'start /B npm run ng serve'
                echo 'Now...'
                echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'
                input message: 'Finished using the website? (Click "Proceed" to continue)'  
              bat 'npx kill-port 4200'
            }
        }
    }
}
