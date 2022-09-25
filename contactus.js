/// <reference types="Cypress" />

describe('Smoke Test', function () {

    beforeEach(function () {
        cy.restoreLocalStorage();

    })

    afterEach(function () { 

        cy.saveLocalStorage();

    })

    it('Testing ContactUs page', function () {
        
        cy.visit('https://www.founderandlightning.com/contact',{timeout: 12000},{ force: true })
        cy.log('Redirection of the contact page')
        cy.url().should('eq',"https://www.founderandlightning.com/contact")
        cy.log('Assertion for the Url redirected')
        cy.get("input[id='firstname-b15d4232-7672-429d-81fd-a00020bddf95']").type('chandra')
        cy.log('Entered Firstname')
        cy.get("input[id='lastname-b15d4232-7672-429d-81fd-a00020bddf95']").type('nasaka')
        cy.log('Entered lastname')
        cy.get("input[id='email-b15d4232-7672-429d-81fd-a00020bddf95']").type('nrcsk.info@gmail.com')
        cy.log('Entered Email')
        cy.get("input[id='mobilephone-b15d4232-7672-429d-81fd-a00020bddf95']").type('9553090030')
        cy.log('Entered phone number')
        cy.get('select[id="how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95"]').select("LinkedIn").should('have.value', "LinkedIn")
        cy.log('Click on the linkedin in dropdown')
        cy.get("textarea[id='message-b15d4232-7672-429d-81fd-a00020bddf95']").type('This is a test assignment')
        cy.log('Enter text in the message textbox')
        //Custom command for bypassing recaptcha but its not working
        Cypress.Commands.add("clickRecaptcha", () => {
            cy.window().then(win => {
              win.document
                .querySelector("body > div.rc-anchor.rc-anchor-invisible.rc-anchor-light.rc-anchor-invisible-nohover")
                .contentDocument.getElementById("recaptcha-token")
                .click();
            });
          });
          cy.wait(500)
          cy.get("input[value='Send Message >']").click()
          cy.log('Click on the send message button')
       
    })

})