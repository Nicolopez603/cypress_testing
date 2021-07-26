class ShoppingCartSummaryPage
{
    getProductNameText()
    {
        return cy.get('tr[id^=product]').find('.cart_description > .product-name  a')
    }

    getProductPriceText()
    {
        return cy.get('tr[id^=product]').find('.price')
    }

    getProceedToCheckoutButton()
    {
        return cy.get('.cart_navigation > .button ')
    }


}


export default ShoppingCartSummaryPage;
