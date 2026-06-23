/// <reference types="cypress" />

describe("Formulário de Cadastro", () => {
  beforeEach(() => {
    cy.visit("https://alexandreti-aut.github.io/formulario-cadastro/");
  });

  it("Deve preencher o formulário de cadastro com sucesso", () => {
    cy.realizarCadastro();
    cy.enviarFormulario();
    cy.validarSucesso();
  });

  it("Deve exibir mensagem de erro ao tentar enviar o formulário sem preencher os campos obrigatórios", () => {
    cy.enviarFormulario();

    cy.validarErro("Por favor, preencha todos os campos obrigatórios");
  });
  it("Deve exibir erro ao tentar cadastrar sem preencher o comentário", () => {
    cy.realizarCadastro({
      comentario: "",
    });

    cy.enviarFormulario();

    cy.validarErro("Por favor, preencha todos os campos obrigatórios");
  });

  it("Deve exibir erro ao tentar cadastrar sem aceitar os termos", () => {
    cy.realizarCadastro({
      termos: false,
    });

    cy.enviarFormulario();

    cy.validarErro("Por favor, preencha todos os campos obrigatórios");
  });

  it("Deve impedir cadastro com e-mail inválido", () => {
    cy.realizarCadastro({
      email: "email-invalido",
    });

    cy.enviarFormulario();

    cy.get('[data-testid="input-email"]')
      .invoke("prop", "validity")
      .its("valid")
      .should("equal", false);
  });

  it("Deve limpar os campos ao clicar no botão Limpar", () => {
    cy.get('[data-testid="input-nome"]').type("John Doe");
    cy.get('[data-testid="input-email"]').type("john.doe@example.com");
    cy.get('[data-testid="input-telefone"]').type("11999999999");
    cy.limparFormulario();

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

  it("Deve exibir a senha ao clicar no botão mostrar senha", () => {
    cy.get('[data-testid="input-senha"]').type("Senha123");

    cy.get(".toggle-password").click();

    cy.get('[data-testid="input-senha"]').should("have.attr", "type", "text");
  });

  it("Deve limpar todos os campos do formulário", () => {
    cy.realizarCadastro();
    cy.limparFormulario();

    cy.get('[data-testid="input-nome"]').should("have.value", "");
    cy.get('[data-testid="input-email"]').should("have.value", "");
    cy.get('[data-testid="input-comentario"]').should("have.value", "");
  });
});
