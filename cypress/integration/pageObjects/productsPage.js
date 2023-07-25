class ProductsPage {

    productName(){
        return cy.get('#item_4_title_link')
    }
    cartBtn(){
        return cy.get("[data-icon='shopping-cart']")
    }
    addToCartBtn(){
        return cy.get(':nth-child(1) > .pricebar > .btn_primary') //.btn_primary.btn_inventory
    }

    addToCartFromProductBtn(){
        return cy.get('.btn_primary.btn_inventory')
    }
    backBtn(){

        return cy.get('.inventory_details_back_button')
    }

    removeBtn(){
        return cy.get('.btn_secondary.cart_button')
    }

    continueShpBtn(){
        return cy.get('.btn_secondary')
    }
}

export default ProductsPage;