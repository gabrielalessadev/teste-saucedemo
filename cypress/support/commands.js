Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('#login-button').click();
    cy.url().should('contain', '/inventory.html');
  });
});