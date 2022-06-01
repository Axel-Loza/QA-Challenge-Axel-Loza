import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../support/pages/HomePage'
import MainPage from '../../../support/pages/MainPage'
import LoginPage from '../../../support/pages/LoginPage'

//Scenario: User log succesfully on web platform

Given('user enter in to the site', () => {
  cy.visit("https://todoist.com/")
})
When('user click on Login', () => {
  HomePage.clickOnLoginButton()
})
And('enter valid Email', () => {
  LoginPage.typeValidEmail()
})
And('enter valid Password', () => {
  LoginPage.typeValidPassword()
})
Then('click Log in button', () => {
  LoginPage.clickLoginButton()
})
And('the login to page is done succesfully', () => {
  MainPage.validatesuccesfulLogin()
})

// Scenario: Try to login with invalid credentials 

And('enter invalid credentials', () => {
  LoginPage.typeInvalidEmail()
  LoginPage.typeInvalidPassword()
  LoginPage.clickLoginButton()
})
Then('the login is unsuccesfully, label of incorrect credentials is showed', () => {
  LoginPage.validateWrongLogin()
})

// Scenario: Try to login with no email

And('enter login with no email', () => {
    LoginPage.typeInvalidPassword()
    LoginPage.clickLoginButton()
  })

Then('the login is unsuccesfully, label of no email is showed', () => {
    LoginPage.clickLoginButton()
    LoginPage.validateNoEmail()
  })

// Scenario: Try to login with no password

  And('enter login with no password', () => {
    LoginPage.typeInvalidEmail()
    LoginPage.clickLoginButton()
  })

Then('the login is unsuccesfully, label of no password is showed', () => {
    LoginPage.clickLoginButton()
    LoginPage.validateNoPassword()
  })
