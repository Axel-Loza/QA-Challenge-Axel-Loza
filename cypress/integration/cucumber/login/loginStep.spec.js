import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage  from "../../../support/pages/homePage";
import mainPage  from "../../../support/pages/mainPage";
import loginPage  from "../../../support/pages/loginPage";
Given('user enter in to the site', () => {
    cy.visit("https://todoist.com/")
})
And('have valid login credentials', () => {
})

When('user need to login click on Login', () => {
    homePage.clickOnLoginButton();
})
And('enter valid Email', () => {
    loginPage.typeValidEmail();
})
And('enter valid Password', () => {
    loginPage.typeValidPasswor();
 })
 Then('click Log in button', () => { 
    loginPage.clickLoginButton();
 })
 And('the login to page is done succesfully', () => {
    mainPage.validatesuccesfulLogin();
 })
And('don`t have valid credentials', () => {
})
When('user click on Login', () => {
    homePage.clickOnLoginButton();
})
And('enter invalid credentials', () => {
    loginPage.typeInvalidEmail();
    loginPage.typeInvalidPasswor();
    loginPage.clickLoginButton();
})
Then('the login is unsuccesfully, label of incorrect credentials is showed', () => {
    loginPage.validateWrongLogin();
 })


