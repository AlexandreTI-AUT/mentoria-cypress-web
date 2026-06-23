import { faker } from '@faker-js/faker';

Cypress.Commands.add('realizarCadastro', (dados = {}) => {

    const dataNascimento = faker.date.birthdate({
        min: 18,
        max: 120,
        mode: 'age'
    });

    const usuario = {
        nome: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        telefone: faker.phone.number('##9########'),
        dataNascimento: dataNascimento.toLocaleDateString('pt-BR'),
        genero: faker.helpers.arrayElement(['Masculino', 'Feminino', 'Outro']),
        comentario: faker.lorem.sentence(),
        senha: faker.internet.password(12),
        termos: true,
        ...dados
    };

    cy.get('[data-testid="input-nome"]').type(usuario.nome);
    cy.get('[data-testid="input-email"]').type(usuario.email);
    cy.get('[data-testid="input-telefone"]').type(faker.helpers.replaceSymbols(usuario.telefone));
    cy.get('[data-testid="input-nascimento"]').type(usuario.dataNascimento);
    cy.get(".genero-opcoes > :nth-child(2)").click();
    cy.get('[data-testid="input-comentario"]').type(usuario.comentario);
    cy.get('[data-testid="input-senha"]').type(usuario.senha);
    cy.get('[name="termos"]').click();

});

Cypress.Commands.add('enviarFormulario', () => {
    cy.get('[data-testid="btn-submit"]').click();
});

Cypress.Commands.add('validarSucesso', () => {
    cy.get('.success-message')
        .should('be.visible')
        .and('contain', 'Cadastro realizado com sucesso');


}); Cypress.Commands.add('limparFormulario', () => {
    cy.get('[data-testid="btn-reset"]').click();
});

Cypress.Commands.add('validarErro', (mensagem) => {
    cy.get('.error-message')
        .should('be.visible')
        .and('contain', mensagem);
});

