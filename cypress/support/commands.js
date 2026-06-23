import { faker } from '@faker-js/faker';

Cypress.Commands.add('realizarCadastro', (dados = {}) => {

  const usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    comentario: faker.lorem.sentence(),
    senha: faker.internet.password(12),
    termos: true,
    ...dados
  };

  if (usuario.nome) cy.get('[data-testid="input-nome"]').type(usuario.nome);
  if (usuario.email) cy.get('[data-testid="input-email"]').type(usuario.email);
  if (usuario.comentario) cy.get('[data-testid="input-comentario"]').type(usuario.comentario);
  if (usuario.senha) cy.get('[data-testid="input-senha"]').type(usuario.senha);
  if (usuario.termos) cy.get('[name="termos"]').click();

});

Cypress.Commands.add('enviarFormulario', () => {
  cy.get('[data-testid="btn-submit"]').click();
});

Cypress.Commands.add('validarSucesso', () => {
  cy.get('.success-message')
    .should('be.visible')
    .and('contain', 'Cadastro realizado com sucesso');


});Cypress.Commands.add('limparFormulario', () => {
  cy.get('[data-testid="btn-reset"]').click();
});

Cypress.Commands.add('validarErro', (mensagem) => {
  cy.get('.error-message')
    .should('be.visible')
    .and('contain', mensagem);
});

