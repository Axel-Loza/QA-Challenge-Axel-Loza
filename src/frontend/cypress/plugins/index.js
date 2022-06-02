/// <reference types="cypress" />

// add cucumber constant
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
console.log('App is running on port: ', path.join(__dirname, '..', '..', '..', '..', '.env') );
require('dotenv').config({path: path.join(__dirname, '..', '..', '..', '..', '.env')})

module.exports = (on, config) => {
  config.env.VALID_EMAIL = process.env.USER_EMAIL
  config.env.VALID_PASS = process.env.USER_PASSWORD
  config.env.INVALID_EMAIL = process.env.INVALID_EMAIL
  config.env.INVALID_PASS = process.env.INVALID_PASSWORD
  on('file:preprocessor', cucumber())
  return config
}
// /Users/hugo.loza/Documents/QA /Axel QA challenge/QA-Challenge-Axel-Loza/.env