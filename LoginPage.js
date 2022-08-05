class LoginPage
{
visit()
{
    cy.visit('https://juice-shop.guardrails.ai/#/login')



}

dialogdismiss(){

    const button = cy.get('.close-dialog')
    button.click()


}
dialogdismiss2(){

    const button = cy.get('.cc-btn')
    button.click()


}



fillemail()
{
    return cy.get('#login-form > mat-form-field.mat-form-field.ng-tns-c119-7.mat-accent.mat-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted > div > div.mat-form-field-flex.ng-tns-c119-7 > div.mat-form-field-infix.ng-tns-c119-7')
    
}

fillpassword(){

    return cy.get('#login-form > mat-form-field.mat-form-field.ng-tns-c119-8.mat-accent.mat-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted > div > div.mat-form-field-flex.ng-tns-c119-8 > div.mat-form-field-infix.ng-tns-c119-8')
}

loginbutton() {
    const button = cy.get('#loginButton > span.mat-button-wrapper')
    button.trigger('mouseover').click()
}

Loginsuccess(){

    return cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.heading.mat-elevation-z6 > div.ng-star-inserted')
}




}
export default LoginPage