describe('Funcionalidade de Checkout', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
        // CORREÇÃO: Ajuste o seletor para o ID correto do botão
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('.shopping_cart_link').click();
    });

    it('Deve completar o fluxo de checkout com sucesso', () => {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Gabriel');
        cy.get('[data-test="lastName"]').type('Alessandro');
        cy.get('[data-test="postalCode"]').type('12345678');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
});
