/// <reference types="cypress" />

describe('Formulário de Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://alexandreti-aut.github.io/formulario-cadastro/');
    });

    it('Deve preencher o formulário de cadastro com sucesso', () => {
        cy.get('[data-testid="input-nome"]').type('John Doe');
        cy.get('[data-testid="input-email"]').type('john.doe@example.com');
        cy.get('[data-testid="input-telefone"]').type('12345678900');
        cy.get('[data-testid="input-nascimento"]').type('01-01-1990');
        cy.get('.genero-opcoes > :nth-child(1)').click();
        cy.get('[data-testid="input-comentario"]').type('Este é um comentário de teste.');
        cy.get('[data-testid="input-senha"]').type('SenhaSegura123');
        cy.get('[name="termos"]').click();
        cy.get('[data-testid="btn-submit"]').click();
        cy.get('.success-message').should('have.text', '✅ Cadastro realizado com sucesso!')
    });

    it('Deve exibir mensagem de erro ao tentar enviar o formulário sem preencher os campos obrigatórios', () => {
        cy.get('[data-testid="btn-submit"]').click();
        cy.get('div.error-message').should('have.text', '⚠️ Por favor, preencha todos os campos obrigatórios.')
    });


});