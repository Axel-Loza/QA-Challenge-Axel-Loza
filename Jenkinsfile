pipeline{
    agent any

    tools {nodejs "nodejs"} 

    stages{
        stage("Env Variables"){
            steps{
                sh 'printenv'                                               
            }
        }

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
                sh 'npm run lint'
            }
        }

        stage('backend'){
            steps{
                echo "running backend test"
                sh 'npm run runTest'
            }
        }

        stage('Frontend'){
            steps{
                echo "running frontend test"
                sh 'npm run cypress:headless '
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