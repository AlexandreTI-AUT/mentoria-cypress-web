import { faker } from '@faker-js/faker';

Cypress.Commands.add('realizarCadastro', (dados = {}) => {

    const usuario = {
        nome: faker.name.fullName(),
        email: faker.internet.email().toLowerCase(),
        telefone: faker.phone.number('###########'),
        nascimento: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toLocaleDateString('pt-BR'),
        genero: faker.helpers.arrayElement(['Masculino', 'Feminino', 'Outro']),
        comentario: faker.lorem.sentence(),
        senha: faker.internet.password(12, true),
        termos: true,
        ...dados
    };

    cy.get('[data-testid="input-nome"]').type(usuario.nome);
    cy.get('[data-testid="input-email"]').type(usuario.email);
    cy.get('[data-testid="input-telefone"]').type(usuario.telefone);
    cy.get('[data-testid="input-nascimento"]').type(usuario.nascimento);
    cy.get(`.genero-opcoes > :nth-child(${['Masculino', 'Feminino', 'Outro'].indexOf(usuario.genero) + 1})`).click();
    cy.get('[data-testid="input-comentario"]').type(usuario.comentario);
    cy.get('[data-testid="input-senha"]').type(usuario.senha);
    if (usuario.termos) {
        cy.get('[name="termos"]').click();

    }
});