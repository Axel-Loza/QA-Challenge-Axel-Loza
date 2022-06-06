class MainPage {
  // Common
  validateSuccessfulLogin = () => {
    return cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.headerMainPage);
    });
  };

  clickOnCreateNewTask = () => {
    cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.createNewTaskButton).click();
    });
  };

  selectTodayDate = () => {
    cy.fixture("locatorsMain.json").then((locator) => {
      if (cy.get(locator.dueTimeSelector).contains("Today")) {
        //empty
      } else {
        cy.get(locator.dueTimeSelector).click();
        cy.get(locator.todaySelectorOption).click();
      }
    });
  };

  clickSubmitTask = () => {
    cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.submitTaskButton).click();
      cy.reload();
    });
  };

  // Single Task
  typeTaskName = () => {
    cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.titleTaskTextBox).type("test Task aut");
    });
  };

  validateTaskToday = () => {
    return cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.agendaToday);
    });
  };

  validateTaskInbox = () => {
    return cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.goToInboxButton).click();
      cy.get(locator.agendaInbox);
    });
  };

  //Multiple task
  typeMultiTaskName = () => {
    return cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.titleTaskTextBox);
    });
  };

  validateMultiTaskToday = () => {
    return cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.agendaToday);
    });
  };

  validateMultiTaskInbox = () => {
    return cy.fixture("locatorsMain.json").then((locator) => {
      cy.get(locator.goToInboxButton).click();
      cy.get(locator.agendaInbox);
    });
  };
}

export default new MainPage();
