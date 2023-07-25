class LoginPage{



    getLoginLogo(){
        return cy.get('.bot_column')
    }

    getUsernameField(){
        return cy.get('#user-name')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getLoginBtn(){
        return cy.get('#login-button')
    }
}

export default LoginPage;