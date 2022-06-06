class LoginPage {
  typeValidEmail = () => {
    cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env("VALID_EMAIL"), {
        log: false,
      });
    });
  };

  typeValidPassword = () => {
    cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env("VALID_PASS"), {
        log: false,
      });
    });
  };

  typeInvalidEmail = () => {
    cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env("INVALID_EMAIL"), {
        log: false,
      });
    });
  };

  typeInvalidPassword = () => {
    cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.textBoxPasswordLoginPage).type(
        Cypress.env("INVALID_PASS"),
        { log: false }
      );
    });
  };

  clickLoginButton = () => {
    cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.buttonLoginPage).click();
    });
  };

  validateWrongLogin = () => cy.fixture("locatorsLogin.json").then((locator) => {
    cy.get(locator.formLabelLoginPage);
  });

  validateNoEmail = () => {
    return cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.formLabelLoginPage);
    });
  };

  validateNoPassword = () => {
    return cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.formLabelLoginPage);
    });
  };
  login = () => {
    cy.fixture("locatorsLogin.json").then((locator) => {
      cy.get(locator.textBoxEmailLoginPage).type(Cypress.env("VALID_EMAIL"), {
        log: false,
      });
      cy.get(locator.textBoxPasswordLoginPage).type(Cypress.env("VALID_PASS"), {
        log: false,
      });
      cy.get(locator.buttonLoginPage).click();
    });
  };
}

export default new LoginPage();
