class mainPage{

    validatesuccesfulLogin = (element) =>{
        cy.fixture('locatorsMain.json').then((locator)=>{
            cy.get(locator.headerMainPage).contains('Today');
        })
    }
}

export default new mainPage();