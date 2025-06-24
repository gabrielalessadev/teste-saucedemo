describe('Visualizacao de Produtos', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('Exibir a lista de produtos corretamente', () => {
    cy.get('.title').should('have.text', 'Products');
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });

  it('Validar a exibição da lista de produtos após login', () => {
    cy.get('#item_4_title_link > .inventory_item_name').click();
    cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('.inventory_details_price').should('be.visible');
  });
});