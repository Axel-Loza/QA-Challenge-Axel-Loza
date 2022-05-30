class loginPage{
    
    typeValidEmail = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxEmailLoginPage).type(Cypress.env('VALID_EMAIL'));
        })
    }

    typeValidPasswor = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env('VALID_PASS'));
        })
    }

    typeInvalidEmail = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxEmailLoginPage).type(Cypress.env("INVALID_EMAIL"));
        })
    }

    typeInvalidPasswor = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env("INVALID_PASS"));
        })
    }

    clickLoginButton = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.buttonLoginPage).click();
        })
    }

    validateWrongLogin = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=>{
            cy.get(locator.formLabelLoginPage).contains('Wrong email or password.');
        })
    }
}

export default new loginPage();