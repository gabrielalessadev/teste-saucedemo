describe('Funcionalidade do Carrinho de Compras', () => {

     beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });
    it('Adicionar produtos ao carrinho ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
    });

    it('Adicionar múltiplos produtos ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('.shopping_cart_badge').should('contain', '3');
    });

    it('Remover produtos do carrinho e validar', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        // Um carrinho vazio não deve ter o ícone com o número
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});