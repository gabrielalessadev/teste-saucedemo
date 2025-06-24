describe('Ordenacao de produtos', () => {
  beforeEach(() => {
    cy.fixture('usuarios').then((user) => {
      cy.login(user.standard, user.password);
    });
   
  });

  it('Ordenar produtos por nome (Z to A)', () => {
    cy.get('.product_sort_container').select('za');
    cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)');
  });

  it('Ordenar produtos por preço(low to high)', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });
});