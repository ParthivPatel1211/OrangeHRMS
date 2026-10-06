
pipeline {
    agent any

    tools {
        nodejs 'NODEJS27'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'call npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'call npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'if exist allure-results rmdir /s /q allure-results'
                bat 'call npx playwright test login.spec.js --project=chromium'
            }
        }
    }

    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'target/allure-results']]
            ])
            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
        }
    }
}