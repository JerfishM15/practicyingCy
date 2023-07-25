class CheckOutPage{

    getFirstName(){
        return cy.get("#first-name")
    }

    getLastName(){
        return cy.get("#last-name")
    }

    getPostalCode(){
        return cy.get('#postal-code')
    }

    getContinueBtn(){
        return cy.get('[value="CONTINUE"]')
    }


    getFinishBtn(){
        return cy.get(".btn_action.cart_button")
    }

    checkOutBtn(){
        return cy.get(".btn_action.checkout_button")
    }

    checkOutError(){
        return cy.get("h3[data-test='error']")
    }
}
export default CheckOutPage;