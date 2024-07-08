pipeline {
    agent any
    tools { nodejs "NODEJS" }
    stages {
        stage('Build') {
            steps {
                echo 'Starting Build Stage'
                sh 'npm install'
                echo 'Build Stage Completed'
            }
        }
    }
}
