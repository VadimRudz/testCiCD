pipeline {
    environment {
        // This registry is important for removing the image after the tests
        registry = "yourname/nodeapp"
    }
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Get the current Git commit hash
                    def commitHash = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
                    
                    // Set the Docker image tag
                    def dockerImageTag = "my-app:${commitHash}"

                    // Build the Docker image
                    sh "docker build -t ${dockerImageTag} ."
                }
            }
        }
        stage("Test") {
            steps {
                script {
                    // Create a unique container name
                    def containerName = "my-app-test-${UUID.randomUUID().toString()}"

                    // Run the container with the tests
                    sh "docker run --name ${containerName} my-app:${commitHash} npm start"

                    // Remove the container after the tests are completed
                    sh "docker rm ${containerName}"
                }
            }
        }
    }
}