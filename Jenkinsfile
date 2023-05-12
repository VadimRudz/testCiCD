pipeline {
    environment {
        // This registry is important for removing the image after the tests
        registry = "yourname/nodeapp"
    }
    agent any
    stages {
        stage("Test") {
            steps {
                script {
                    // Building the Docker image
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"

                    try {
                        dockerImage.inside() {
                            // Extracting the PROJECTDIR environment variable from inside the container
                            def PROJECTDIR = bat(script: 'echo \$PROJECTDIR', returnStdout: true).trim()

                            // Copying the project into our workspace
                            bat "cp -r '$PROJECTDIR' '$WORKSPACE'"

                            // Running the tests inside the new directory
                            dir("$WORKSPACE$PROJECTDIR") {
                                bat "npm start"
                            }
                        }

                    } finally {
                        // Removing the docker image
                        bat "docker rmi $registry:$BUILD_NUMBER"
                    }
                }
            }
        }
    }
}