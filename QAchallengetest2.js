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
        //Visit to url
        cy.wait(3000)
        login.dialogdismiss()
        //Dismiss dialogbox1
        cy.wait(1000)
        login.dialogdismiss2()
        //dismiss the another dialog
        cy.wait(1000)

        login.fillemail().type('nrcsk.info@gmail.com')
        //Enter the emailid
        login.fillpassword().type('Test@123')
        //Enter the password
        login.loginbutton()
        //Enter the login button
        cy.wait(3000)
        login.Loginsuccess().should('have.text', "All Products")
        cy.wait(3000)
        //Login successful //
        
        
       
    })

    it('products', function () {
        products.AddtoBasket()
        //Add product 1 to basket
        cy.wait(3000)
        products.item2()
        //Add product 1 to basket2
        products.validateproductquantity().click()
        //Add validate prduct
        cy.wait(3000)
        products.validateapple().should('have.text', " Apple Juice (1000ml) ")
        //Assertion for the validate apple

        //Added a product to cart//
        products.checkout()
        //Checkout the product
        cy.wait(3000)
        
    



    
    })

    it('Address', function () {


        address.Addnewaddress()
        //click the address
        cy.wait(2000)
        address.AddCountry().type("india")
        //enter india
        cy.wait(2000)
        
        address.Addname().type('chandrasekhar nasaka')
        //Enter the name
        cy.wait(2000)
        address.AddMobile().type('9553090030')
        //Enter the mobile number
        cy.wait(2000)
        address.Addzipcode().type('533450')
        //Enter the zipcode
        cy.wait(2000)
       address.AddAddress().type('D.no.4567,chruchroad,ptp,india')
       //Enter the address
       cy.wait(2000)
        address.Addcity().type('pithapuram')
        //Enter city name
        cy.wait(2000)
       address.Addstate().type('Ap')
       //Enter state
       cy.wait(2000)
        address.Addresssubmit()
        //Click on submit button
        cy.wait(3000)



    })

})