describe('Visualização de Produtos', () => {
  beforeEach(() => {
    cy.fixture('usuarios').then((user) => {
      cy.login(user.standard, user.password);
    });
    cy.visit('/inventory.html');
  });

  it('Deve exibir a lista de produtos corretamente', () => {
    cy.get('.product_label').should('have.text', 'Products');
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });

  it('Deve exibir a página de detalhes de um produto', () => {
    cy.get('#item_4_title_link').click(); 
    cy.url().should('contain', 'inventory-item.html?id=4');
    cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack');
  });
});