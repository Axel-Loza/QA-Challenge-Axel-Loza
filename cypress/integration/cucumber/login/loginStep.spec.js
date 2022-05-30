import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('user enter in to the site', () => {
    cy.visit("https://todoist.com/")
})
And('have valid login credentials', () => {

    
})

When('user need to login click on Login', () => {
    cy.get('div.app_appContainer__ry8xc main.accessibility_overflowHidden__59iXq div._1VW2IAXspnU_UbdPzpiVYe:nth-child(1) header._33RQ-ydezjGtu2Xes16zQx._3CvfB3hUrMD9uuhcMyA4NX nav._16GZpESfDXUbe6aWQqTaWB div.MTF3N._1lTj0 ul._3XsmI li:nth-child(1) > a._1vrBX-JExqmMRnkPWrYFN9').click();
})
And('enter valid Email', () => {
    let validEmail = "correctEmail@wizeline.com"
    cy.get('#labeled-input-1')
    .type(validEmail);
})
And('enter valid Password', () => {
    let validPass = "CorrectPass"
    cy.get('#labeled-input-3')
    .type(validPass);
    
 })
 Then('click Log in button', () => { 
     cy.get('[data-gtm-id="start-email-login"]')
     .click();
 })
 And('the login to page is done succesfully', () => {
    cy.get('header').contains('Today');
 })
 

And('don`t have valid credentials', () => {
    let invalidEmail = "user@wrong.mail";
    let invalidPassword = "wrongPassword";
})
When('user click on Login', () => {
    cy.get('div.app_appContainer__ry8xc main.accessibility_overflowHidden__59iXq div._1VW2IAXspnU_UbdPzpiVYe:nth-child(1) header._33RQ-ydezjGtu2Xes16zQx._3CvfB3hUrMD9uuhcMyA4NX nav._16GZpESfDXUbe6aWQqTaWB div.MTF3N._1lTj0 ul._3XsmI li:nth-child(1) > a._1vrBX-JExqmMRnkPWrYFN9')
    .click();
})
And('enter invalid credentials', () => {
    let invalidEmail = "aaaa@wizeline.com"
    cy.get('#labeled-input-1')
    .type(invalidEmail);

    let invalidPass = "aaaaa"
    cy.get('#labeled-input-3')
    .type(invalidPass);

    cy.get('[data-gtm-id="start-email-login"]')
    .click();
})
Then('the login is unsuccesfully, label of incorrect credentials is showed', () => {
    cy.get('#todoist_app')
    .contains('Wrong email or password.');
 })


