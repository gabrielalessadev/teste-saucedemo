describe('Funcionalidade de Checkout', () => {

  beforeEach(() => {

    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
  });

  it('Deve completar o fluxo de checkout com sucesso', () => {
 
    cy.url().should('contain', '/checkout-step-one.html');

    cy.fixture('dados_checkout').then((data) => {
      cy.get('#first-name').type(data.firstName);
      cy.get('#last-name').type(data.lastName);
      cy.get('#postal-code').type(data.postalCode);
    });
    
    cy.get('#continue').click();
    
    cy.url().should('contain', '/checkout-step-two.html');
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt');
    
    cy.get('#finish').click();

    cy.url().should('contain', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
  });
});