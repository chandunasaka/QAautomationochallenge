class Products{



    AddtoBasket(){

        const button = cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(1) > div > mat-card > div:nth-child(2) > button')
        button.trigger('mouseover').click({ force: true })
    
    
    }

    validateproductquantity()

    {
        return cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-navbar > mat-toolbar > mat-toolbar-row > button.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted > span.mat-button-wrapper > span:nth-child(2)')

    }

    validateapple()
    {
     return cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-basket > mat-card > app-purchase-basket > mat-table > mat-row > mat-cell.mat-cell.cdk-cell.cdk-column-product.mat-column-product.ng-star-inserted')

    }
    checkout()
    {
     const button = cy.get('#checkoutButton > span.mat-button-wrapper')
     button.trigger('mouseover').click({ force: true })

    }
    item2()
    {
     const button = cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(2) > div > mat-card > div:nth-child(2) > button > span.mat-button-wrapper > span')
     button.trigger('mouseover').click({ force: true })

    }
    search(){
        const button = cy.get('#searchQuery > span > mat-icon.mat-icon.notranslate.mat-ripple.mat-search_icon-search.ng-tns-c254-1.material-icons.mat-icon-no-color')
        button.type('Apple{enter}')
    }

    applevalidate(){

        return cy.get(' div > mat-grid-tile:nth-child(1) > div > mat-card > div.mat-tooltip-trigger.product > div:nth-child(2) > div.item-name')
    }
    
    applevalidate2(){

        return cy.get(' div > mat-grid-tile:nth-child(2) > div > mat-card > div.mat-tooltip-trigger.product > div:nth-child(2) > div.item-name')
    }

    
}
export default Products