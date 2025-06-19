describe('Funcionalidade de Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve fazer login com sucesso usando usuário padrão', () => {
    cy.fixture('usuarios').then((user) => {
      cy.get('[data-test="username"]').type(user.standard);
      cy.get('[data-test="password"]').type(user.password);
      cy.get('#login-button').click();
      cy.url().should('contain', '/inventory.html');
      cy.get('.product_label').should('be.visible');
    });
  });

  it('Deve exibir mensagem de erro para usuário bloqueado', () => {
    cy.fixture('usuarios').then((user) => {
      cy.get('[data-test="username"]').type(user.locked_out);
      cy.get('[data-test="password"]').type(user.password);
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });

  it('Deve exibir mensagem de erro para credenciais inválidas', () => {
    cy.fixture('usuarios').then((user) => {
      cy.get('[data-test="username"]').type(user.invalid);
      cy.get('[data-test="password"]').type(user.invalid_password);
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });
});

describe('Funcionalidade de Logout', () => {
  it('Deve fazer logout com sucesso', () => {
    cy.fixture('usuarios').then((user) => {
      cy.login(user.standard, user.password);
    });
    cy.visit('/inventory.html');
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('not.contain', '/inventory.html');
    cy.get('#login-button').should('be.visible');
  });
});