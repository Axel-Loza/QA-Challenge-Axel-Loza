import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../support/pages/HomePage'
import MainPage from '../../../support/pages/MainPage'
import LoginPage from '../../../support/pages/LoginPage'


// Scenario: Create single task and validate it was created succesfully
Given('user login to the site', () => {
  cy.visit("https://todoist.com/")
  HomePage.clickOnLoginButton()
  LoginPage.login()
})
When('user click on create new task', () => {
  MainPage.clickOnCreateNewTask()
})
And('type the name for the task', () => {
  MainPage.typeTaskName()
})
And('select the day as today', () => {
  MainPage.selectTodayDate()
})
And('click on Add Task button', () => {
  MainPage.clickSubmitTask()
})
Then('the task is created on today site', () => {
  MainPage.validateTaskToday()
})
And('the task is created on inbox site', () => {
  MainPage.validateTaskInbox()
})

// Scenario Outline: Create multiple tasks and validate that they have been created successfully
And("type the name {string}{string} for the task", 
function (Name,Number) {
  MainPage.typeMultiTaskName().type(Name + Number);
})
And('select the day as today', () => {
  MainPage.selectTodayDate()
})
And('click on Add Task button', () => {
  MainPage.clickSubmitTask()
})
Then('the task {string}{string} is created on today site', (Name, Number) => {
  MainPage.validateMultiTaskToday().contains(Name + Number)
})
And('the task {string}{string} is created on inbox site', (Name, Number) => {
  MainPage.validateMultiTaskInbox().contains(Name + Number)
})