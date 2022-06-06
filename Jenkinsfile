pipeline{
    agent any

    options{
        ansiColor('xterm')
    }

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
        
    }
}