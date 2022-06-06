class HomePage {
  clickOnLoginButton = () => {
    cy.fixture("locatorsHome.json").then((locator) => {
      cy.get(locator.buttonLoginHomePage).click();
    });
  };
}
export default new HomePage();
