pipeline {
  agent any
  environment {
    DOCKER_HUB = credentials('docker-hub-credentials')  //you will set this up in jenkins
    IMAGE_NAME = 'aisha10/simple-node-app'
    IMAGE_TAG = "${env.BUILD_NUMBER}"
  }

  stages{
    stage('checkout'){
      steps{
        git branch: 'main' , url: 'https://github.com/Aishwarya-Nikam30/Jenkins-CI-CD-Project.git'
      }
    }
    stage('build'){
      steps{
        script{
          docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
        }
      }
    }
    stage('test'){
      steps{
        sh 'npm test'
      }
    }
    stage('deploy'){
      steps{
        script{
          docker.withRegistry('https://registry.hub.docker.com','docker-hub-credentials'){
            docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
          }
        }
      }
    }
  }
    post{
      always{
        echo 'Pipeline completed - cleaning up'
        sh 'docker system prune -f'
      }
      success{
        echo 'Pipeline Succeeded'
      }
      failure{
        echo 'Pipeline failed'
      }
    }
}
