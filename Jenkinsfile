pipeline {
    agent any
    tools { nodejs 'NODEJS' }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                // Use Windows-style paths and correct command
                bat 'jenkins\\scripts\\deliver.bat'
                
                // Wait for user input
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                
                // Ensure the batch file exists and is executable
                bat 'jenkins\\scripts\\kill.bat'
            }
        }
    }
}
