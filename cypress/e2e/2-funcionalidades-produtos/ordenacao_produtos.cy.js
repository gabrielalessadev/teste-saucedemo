describe('Ordenação de Produtos', () => {
  beforeEach(() => {
    cy.fixture('usuarios').then((user) => {
      cy.login(user.standard, user.password);
    });
    cy.visit('/inventory.html');
  });

  it('Deve ordenar produtos por nome (Z to A)', () => {
    cy.get('.product_sort_container').select('za');
    cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)');
  });

  it('Deve ordenar produtos por preço (low to high)', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });
});