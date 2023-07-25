import CheckOutPage from "../integration/pageObjects/checkOutPage";
import LoginPage from "../integration/pageObjects/loginPage";
import TabBar from "../integration/pageObjects/tabBar";
const loginPage = new LoginPage;
const checkOutPage= new CheckOutPage;
const tabBar = new TabBar;

Cypress.Commands.add('openLoginPage',()=>{

    cy.visit(Cypress.env('baseUrl'));

})


Cypress.Commands.add('login', (username, password)=>{

    loginPage.getUsernameField().type(username)
    loginPage.getPasswordField().type(password)
    loginPage.getLoginBtn().click()
})

Cypress.Commands.add('checkOut', (firstName, lastName, postalCode)=>{
    checkOutPage.checkOutBtn().click()
    checkOutPage.getFirstName().type(firstName)
    checkOutPage.getLastName().type(lastName)
    checkOutPage.getPostalCode().type(postalCode)
    checkOutPage.getContinueBtn().click()
    checkOutPage.getFinishBtn().click()
})


Cypress.Commands.add('logOut', ()=>{

   tabBar.tabBarBtn().click()
   tabBar.logOutBtn().click()


})


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })