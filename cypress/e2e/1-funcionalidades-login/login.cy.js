describe('Funcionalidade de Login', () => {

  it('Validar login com usuário e senha corretos ', () => {
    cy.visit('/'); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.title').should('be.visible');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Validar comportamento com usuário e senha incorretos ', () => {
    cy.visit('/'); 
    
    cy.fixture('usuarios').then((user) => {
      cy.get('[data-test="username"]').type(user.invalid);
      cy.get('[data-test="password"]').type(user.invalid_password);
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });
});


describe('Realizar logout após login bem-sucedido ', () => {

  it('Deve fazer logout com sucesso', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/'); // Verifica se voltou para a página inicial
  });
});