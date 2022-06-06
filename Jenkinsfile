pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                echo "Installing dependecies:"
                sh '''
                    rm -rf node_modules package-lock.json && npm install
                    rm -rf reports
                '''
            }
        }

        stage('EsLint'){
            steps{
                echo "running EsLint"
                sh 'npm lint'
            }
        }

        stage('Frontend'){
            steps{
                echo "running frontend test"
                sh 'npm cypress:headless '
            }
        }
    }
    
    post{
        success {
            echo 'success!'
            slackSend color: "#11cd4b", channel: "#sqa-challenge-axel", message: "*Build Passed"
            }
        failure {
            echo 'marked as failure'
            slackSend color: "#F50407", channel: "#sqa-challenge-axel", message: "*Build Failed"
            }
    }
}