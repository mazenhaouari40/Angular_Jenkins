pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                script {
                    echo 'Checking if deliver.sh exists'
                    if (fileExists('./jenkins/scripts/deliver.sh')) {
                        echo 'deliver.sh found, setting execute permissions'
                        sh 'chmod +x ./jenkins/scripts/deliver.sh'
                        sh './jenkins/scripts/deliver.sh'
                    } else {
                        error 'deliver.sh does not exist'
                    }
                }
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                script {
                    echo 'Checking if kill.sh exists'
                    if (fileExists('./jenkins/scripts/kill.sh')) {
                        echo 'kill.sh found, setting execute permissions'
                        sh 'chmod +x ./jenkins/scripts/kill.sh'
                        sh './jenkins/scripts/kill.sh'
                    } else {
                        error 'kill.sh does not exist'
                    }
                }
            }
        }
    }
}
