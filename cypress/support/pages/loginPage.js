class LoginPage {
  typeValidEmail = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env('VALID_EMAIL'))
    })
  }

  typeValidPassword = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env('VALID_PASS'))
    })
  }

  typeInvalidEmail = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env('INVALID_EMAIL'))
    })
  }

  typeInvalidPassword = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env('INVALID_PASS'))
    })
  }

  clickLoginButton = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.buttonLoginPage).click()
    })
  }

  validateWrongLogin = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.formLabelLoginPage).contains("Wrong email or password.")
    })
  }

  validateNoEmail = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.formLabelLoginPage).contains('Please enter a valid email address.')
    })
  }

  validateNoPassword = (element) => {
    cy.fixture('locatorsLogin.json').then((locator) => {
      cy.get(locator.formLabelLoginPage).contains('Passwords must be at least 8 characters long.')
    })
  }
}

export default new LoginPage();
