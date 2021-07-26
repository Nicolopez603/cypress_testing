class HomePage
{

    getSearchBoxInput()
    {
        return cy.get('#search_query_top')
    }

    getSearchBoxButton()
    {
        return cy.get('#searchbox > .btn')
    }

    getAddToCartElement(productDescription)
    {
        return cy.get(cy.get('.ajax_add_to_cart_button '))
    }


    getProceedToCheckoutButton()
    {
        return cy.get('.button-container > .button-medium ')
    }
    
}


export default HomePage;
