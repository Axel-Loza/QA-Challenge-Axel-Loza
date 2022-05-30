/// <reference types="cypress" />
//add cucumber constant
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

