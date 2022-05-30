class loginPage{
    
    typeValidEmail = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxEmailLoginPage).type("validEmail@gmail.com");
        })
    }

    typeValidPasswor = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxPasswordLoginPage).type("CorrectPassword");
        })
    }

    typeInvalidEmail = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxEmailLoginPage).type("invalidEmail@gmail.com");
        })
    }

    typeInvalidPasswor = (element) =>{
        cy.fixture('locatorsLogin.json').then((locator)=> {
            cy.get(locator.textBoxPasswordLoginPage).type("invalidPassword");
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