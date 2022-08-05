/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage";
import Products from "../PageObjects/Products";
import Address from "../PageObjects/Address";






describe('Smoke Test', function () {
// runs before each tests in the block
    beforeEach(function () {
        cy.restoreLocalStorage();

    })
//runs after each tests in the block
    afterEach(function () { 

        cy.saveLocalStorage();

    })
    const login = new LoginPage
    const products = new Products
    const address = new Address

    


    it('Login JuiceShop', function () {
        
        login.visit()
        //visit the url huiceshop
        cy.wait(3000)
        login.dialogdismiss()
        //dismiss the dialog
        cy.wait(1000)
        login.dialogdismiss2()
        //dismiss the another dialog
        cy.wait(1000)
        login.fillemail().type('nrcsk.info@gmail.com')
        //enter the email id in the textbox
        login.fillpassword().type('Test@123')
        //emter the password in the text box
        login.loginbutton()
        //click on the login button
        cy.wait(3000)

        login.Loginsuccess().should('have.text', "All Products")
        //success login assertion
        cy.wait(3000)
        //Login successful //
        
        
       
    })


    it('products', function () {

        products.search()
        //Search products by name apple
        products.applevalidate().should('have.text', " Apple Juice (1000ml) ")
        //Validate the text for apple
        products.applevalidate2().should('have.text', " Apple Pomace ")
        //Validate the text for apple2






    })

})