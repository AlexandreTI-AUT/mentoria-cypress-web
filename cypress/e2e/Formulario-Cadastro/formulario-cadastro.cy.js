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

  it("Deve permitir cadastro sem preencher o comentário", () => {
    cy.realizarCadastro({
      comentario: "",
    });

    cy.enviarFormulario();

    cy.validarSucesso();
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
    cy.realizarCadastro();

    cy.limparFormulario();

    cy.validarCamposLimpos();
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
});
