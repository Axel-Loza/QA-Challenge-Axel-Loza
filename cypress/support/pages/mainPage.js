class MainPage {
  // Common
  validatesuccesfulLogin = (element) => {
    cy.fixture('locatorsMain.json').then((locator) => {
      cy.get(locator.headerMainPage).should('contain','Today')
    })
  }

  clickOnCreateNewTask = (element) => {
    cy.fixture('locatorsMain.json').then((locator) => {
      cy.get(locator.createNewTaskButton).click()
    })
  }

  selectTodayDate = (element) => {
    cy.fixture('locatorsMain.json').then((locator) => {
      if(cy.get(locator.dueTimeSelector).contains("Today")){

      }
      else{
        cy.get(locator.dueTimeSelector).click()
        cy.get(locator.todaySelectorOption).click()
      }
     
    })
  }

  clickSubmitTask = (element) => {
    cy.fixture('locatorsMain.json').then((locator) => {
      cy.get(locator.submitTaskButton).click()
      cy.reload()
    })
  }

  // Single Task
  typeTaskName = (element) => {
    cy.fixture('locatorsMain.json').then((locator) => {
      cy.get(locator.titleTaskTextbox).type("test Task aut")
    })
  }

  validateTaskToday = (element) => {
    cy.fixture('locatorsMain.json').then((locator) => {
      cy.get(locator.agendaToday).should('contain',"test Task aut")
    })
  }

  validateTaskInbox = (element) => {
    cy.fixture('locatorsMain.json').then((locator) => {
      cy.get(locator.goToInboxButton).click()
      cy.get(locator.agendaInbox).should('contain',"test Task aut")
    })
  }

  //Multiple task
  typeMultiTaskName = (element) => {
    return cy.fixture('locatorsMain.json').then((locator) => {
    cy.get(locator.titleTaskTextbox)
    })
  }

  validateMultiTaskToday = (element) => {
  return cy.fixture('locatorsMain.json').then((locator) => {
     cy.get(locator.agendaToday)
    })
  }

  validateMultiTaskInbox = (element) => {
    return cy.fixture('locatorsMain.json').then((locator) => {
      cy.get(locator.goToInboxButton).click()
      cy.get(locator.agendaInbox)
    })
  }
}


export default new MainPage();