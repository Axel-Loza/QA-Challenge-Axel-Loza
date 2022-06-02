class LoginPage {
  typeValidEmail = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env('VALID_EMAIL'), { log: false })
    })
  }

  typeValidPassword = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env('VALID_PASS'),{ log: false })
    })
  }

  typeInvalidEmail = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env('INVALID_EMAIL'), { log: false })
    })
  }

  typeInvalidPassword = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env('INVALID_PASS'), { log: false })
    })
  }

  clickLoginButton = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.buttonLoginPage).click()
    })
  }

  validateWrongLogin = (element) => {
    return cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.formLabelLoginPage)
    })
  }

  validateNoEmail = (element) => {
    return cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.formLabelLoginPage)
    })
  }

  validateNoPassword = (element) => {
    return cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.formLabelLoginPage)
    })
  }
  login = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env('VALID_EMAIL'), { log: false })
      cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env('VALID_PASS'), { log: false })
      cy.get(locator.buttonLoginPage).click()
    })
  }
  

}

export default new LoginPage();
