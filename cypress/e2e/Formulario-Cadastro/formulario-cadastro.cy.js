/// <reference types="cypress" />

describe("Formulário de Cadastro", () => {
  beforeEach(() => {
    cy.visit("https://alexandreti-aut.github.io/formulario-cadastro/");
  });

  it("Deve preencher o formulário de cadastro com sucesso", () => {
    cy.get('[data-testid="input-nome"]').type("John Doe");
    cy.get('[data-testid="input-email"]').type("john.doe@example.com");
    cy.get('[data-testid="input-telefone"]').type("12345678900");
    cy.get('[data-testid="input-nascimento"]').type("01-01-1990");
    cy.get(".genero-opcoes > :nth-child(1)").click();
    cy.get('[data-testid="input-comentario"]').type(
      "Este é um comentário de teste.",
    );
    cy.get('[data-testid="input-senha"]').type("SenhaSegura123");
    cy.get('[name="termos"]').click();
    cy.get('[data-testid="btn-submit"]').click();
    cy.get(".success-message").should(
      "have.text",
      "✅ Cadastro realizado com sucesso!",
    );
  });

  it("Deve exibir mensagem de erro ao tentar enviar o formulário sem preencher os campos obrigatórios", () => {
    cy.get('[data-testid="btn-submit"]').click();
    cy.get("div.error-message").should(
      "have.text",
      "⚠️ Por favor, preencha todos os campos obrigatórios.",
    );
  });
  it('Deve exibir erro ao tentar cadastrar sem preencher o comentário', () => {
  cy.get('[data-testid="input-nome"]').type('John Doe');
  cy.get('[data-testid="input-email"]').type('john.doe@example.com');
  cy.get('[data-testid="input-telefone"]').type('11999999999');
  cy.get('[data-testid="input-nascimento"]').type('1990-01-01');
  cy.get('.genero-opcoes > :nth-child(2)').click();
  cy.get('[data-testid="input-senha"]').type('SenhaSegura123');
  cy.get('[name="termos"]').click();
  cy.get('[data-testid="btn-submit"]').click();

  cy.get('div.error-message').should('be.visible');
});

  it("Deve exibir erro ao tentar cadastrar sem preencher campos obrigatórios", () => {
    cy.get('[data-testid="btn-submit"]').click();

    cy.get("div.error-message").should(
      "have.text",
      "⚠️ Por favor, preencha todos os campos obrigatórios.",
    );
  });

  it("Deve exibir erro ao tentar cadastrar sem aceitar os termos", () => {
    cy.get('[data-testid="input-nome"]').type("John Doe");
    cy.get('[data-testid="input-email"]').type("john.doe@example.com");
    cy.get('[data-testid="input-telefone"]').type("11999999999");
    cy.get('[data-testid="input-nascimento"]').type("1990-01-01");
    cy.get(".genero-opcoes > :nth-child(2)").click();
    cy.get('[data-testid="input-senha"]').type("SenhaSegura123");

    cy.get('[data-testid="btn-submit"]').click();

    cy.get("div.error-message").should("be.visible");
  });

 it('Deve impedir cadastro com e-mail inválido', () => {
  cy.get('[data-testid="input-nome"]').type('John Doe');
  cy.get('[data-testid="input-email"]').type('email-invalido');
  cy.get('[data-testid="input-telefone"]').type('11999999999');
  cy.get('[data-testid="input-nascimento"]').type('1990-01-01');
  cy.get('.genero-opcoes > :nth-child(2)').click();
  cy.get('[data-testid="input-comentario"]').type('Comentário teste');
  cy.get('[data-testid="input-senha"]').type('SenhaSegura123');
  cy.get('[name="termos"]').click();

  cy.get('[data-testid="btn-submit"]').click();

  cy.get('[data-testid="input-email"]')
    .invoke('prop', 'validity')
    .its('valid')
    .should('equal', false);
});

  it("Deve limpar os campos ao clicar no botão Limpar", () => {
    cy.get('[data-testid="input-nome"]').type("John Doe");
    cy.get('[data-testid="input-email"]').type("john.doe@example.com");
    cy.get('[data-testid="input-telefone"]').type("11999999999");
    cy.get('[data-testid="btn-reset"]').click();

    cy.get('[data-testid="input-nome"]').should("have.value", "");
    cy.get('[data-testid="input-email"]').should("have.value", "");
    cy.get('[data-testid="input-telefone"]').should("have.value", "");
  });

  it("Não deve permitir comentário com mais de 250 caracteres", () => {
    const comentario = "A".repeat(251);

    cy.get('[data-testid="input-comentario"]').type(comentario);

    cy.get('[data-testid="input-comentario"]')
      .invoke("val")
      .should("have.length.at.most", 250);
  });

it('Deve exibir a senha ao clicar no botão mostrar senha', () => {
  cy.get('[data-testid="input-senha"]').type('Senha123');

  cy.get('.toggle-password').click();

  cy.get('[data-testid="input-senha"]')
    .should('have.attr', 'type', 'text');
});

  it("Deve limpar todos os campos do formulário", () => {
    cy.get('[data-testid="input-nome"]').type("John Doe");
    cy.get('[data-testid="input-email"]').type("john@email.com");
    cy.get('[data-testid="input-comentario"]').type("Comentário teste");

    cy.get('[data-testid="btn-reset"]').click();

    cy.get('[data-testid="input-nome"]').should("have.value", "");
    cy.get('[data-testid="input-email"]').should("have.value", "");
    cy.get('[data-testid="input-comentario"]').should("have.value", "");
  });
});
