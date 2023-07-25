/// <reference types="Cypress"/>
import CheckOutPage from "../pageObjects/checkOutPage";
import ProductsPage from "../pageObjects/productsPage"
import FinishPage from "../pageObjects/finishPage"

describe('Test suite', function(){
    const productsPage= new ProductsPage();
    const finishPage = new FinishPage();
    const checkOutPage= new CheckOutPage();
 /*   
*/
//Declarando la data 
    let userdata;
    before(function(){
    cy.fixture('example').then(function(data){

        userdata = data
        })
    })

it('End2End', ()=>{
    
    //ingresando a la pagina
    cy.log('ingresando a la pagina')
    cy.openLoginPage()

    //Haciendo login valido
    cy.log('Haciendo login valido')
    cy.login(userdata.username, userdata.password)

    //seleccionando producto
    cy.log('seleccionando producto')
    productsPage.productName().then((el)=>{
        const productText = el.text()
        expect(productText.includes(userdata.product)).to.be.true
    })

    productsPage.addToCartBtn().click()
    productsPage.cartBtn().click()
    

    //haciendo CheckOut
    cy.log('haciendo CheckOut')
    cy.checkOut(userdata.firstName, userdata.lastName, userdata.postalCode)

    //verificando que se hizo el checkout
    cy.log('verificando que se hizo el checkout')
    finishPage.getCompleteMsg().then(function(element){

        const textHeader = element.text()
        expect(textHeader.includes(userdata.completemsg)).to.be.true

    })
    

    cy.log('Hacer logOut')
    cy.logOut()
    
    
})


it('failed checkOut', ()=>{
    //abriendo la pagina
    cy.log('abriendo la pagina')
    cy.openLoginPage()

    //haciendo login en la pagina saucedemo
    cy.log('haciendo login en la pagina saucedemo')
    cy.login(userdata.username, userdata.password);

    //seleccionando producto
    cy.log('seleccionando producto')
    productsPage.productName().then((el)=>{
        const productText = el.text()
        expect(productText.includes(userdata.product)).to.be.true
    })

    productsPage.addToCartBtn().click()
    productsPage.cartBtn().click()

    //validando mensaje de error en checkout
    cy.log('validando mensaje de error en checkout')
    checkOutPage.checkOutBtn().click()
    checkOutPage.getFirstName().should('be.empty')
    checkOutPage.getLastName().should('be.empty')
    checkOutPage.getPostalCode().should('be.empty')
    checkOutPage.getContinueBtn().click()

    checkOutPage.checkOutError().then((elem)=>{
        const errorTxt = elem.text()
        expect(errorTxt.includes("Error:")).to.be.true
    })

    //haciendo logout
    cy.log('Hacer logOut')
    cy.logOut()

})

it('remover producto desde el carro de compra',()=>{


    //Abriendo la pagina
    cy.openLoginPage()

    //Haciendo login
    cy.login(userdata.username, userdata.password)

    //entrando al producto
    productsPage.productName().click()

    //agregando el producto al carrito
    productsPage.addToCartFromProductBtn().click()
    productsPage.backBtn().click({force: true})

    //remover producto desde el carrito 
    productsPage.cartBtn().click()
    productsPage.removeBtn().click()

    //volver a la pagina principal
    productsPage.continueShpBtn().click()

    //hacer loOut
    cy.logOut()


    







})

})

