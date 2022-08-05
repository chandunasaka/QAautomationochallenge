/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage";
import Products from "../PageObjects/Products";
import Address from "../PageObjects/Address";






describe('Smoke Test', function () {

    beforeEach(function () {
        cy.restoreLocalStorage();

    })

    afterEach(function () { 

        cy.saveLocalStorage();

    })
    const login = new LoginPage
    const products = new Products
    const address = new Address

    


    it('Login JuiceShop', function () {
        
        login.visit()
        cy.wait(3000)
        login.dialogdismiss()
        cy.wait(1000)
        login.dialogdismiss2()
        //dismiss the another dialog
        cy.wait(1000)
        login.fillemail().type('nrcsk.info@gmail.com')
        login.fillpassword().type('Test@123')
        login.loginbutton()
        cy.wait(3000)
        login.Loginsuccess().should('have.text', "All Products")
        cy.wait(3000)
        //Login successful //
        
        
       
    })

    it('products', function () {
        products.AddtoBasket()
        cy.wait(3000)
        products.validateproductquantity().click()
        cy.wait(3000)
        products.validateapple().should('have.text', " Apple Juice (1000ml) ")
        //Added a product to cart//
        products.checkout()
        cy.wait(3000)
        
    



    
    })

    it('Address', function () {


        address.Addnewaddress()
        cy.wait(2000)
        address.AddCountry().type("india")
        cy.wait(2000)
        
        address.Addname().type('chandrasekhar nasaka')
        cy.wait(2000)
        address.AddMobile().type('9553090030')
        cy.wait(2000)
        address.Addzipcode().type('533450')
        cy.wait(2000)
       address.AddAddress().type('D.no.4567,chruchroad,ptp,india')
       cy.wait(2000)
        address.Addcity().type('pithapuram')
        cy.wait(2000)
       address.Addstate().type('Ap')
       cy.wait(2000)
        address.Addresssubmit()
        cy.wait(3000)



    })

})