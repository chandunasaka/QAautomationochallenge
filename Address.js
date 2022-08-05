class Address{

    AddCountry(){

        return cy.get('[data-placeholder="Please provide a country."]')
        
    
    
    }

    Addname(){

        return cy.get('[placeholder="Please provide a name."]')
    }


    AddMobile(){

        return cy.get('[placeholder="Please provide a mobile number."]')
    }

    Addzipcode(){

        return cy.get('[placeholder="Please provide a ZIP code."]')
    }

    AddAddress(){

        return cy.get('[placeholder="Please provide an address."]')
    }
    Addcity(){

        return cy.get('[placeholder="Please provide a city."]')
    }
    Addstate(){
    return cy.get('[placeholder="Please provide a state."]')

    }

    Addresssubmit(){

        const button = cy.get('#submitButton')
        button.trigger('mouseover').click({ force: true })
    
    
    }
    Addnewaddress()
    {
     const button = cy.get('#card > app-address > mat-card > div > button > span.mat-button-wrapper > span')
     button.click({ force: true })

    }



}
export default Address