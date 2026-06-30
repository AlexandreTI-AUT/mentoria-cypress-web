# Mentoria Cypress Web

Projeto desenvolvido durante a **Mentoria Cypress Web**, com foco na automação de testes End-to-End utilizando **Cypress**.

O objetivo deste projeto é praticar conceitos fundamentais de automação de testes, organização de código, comandos customizados e boas práticas de desenvolvimento para testes automatizados.

---

## Tecnologias utilizadas

- JavaScript
- Cypress
- Faker.js
- Node.js
- Git
- GitHub

---

## Funcionalidades testadas

Foram automatizados os seguintes cenários:

- ✅ Cadastro realizado com sucesso
- ✅ Validação de campos obrigatórios
- ✅ Validação do aceite dos Termos de Uso
- ✅ Validação de e-mail inválido
- ✅ Limpeza do formulário
- ✅ Limite máximo de 250 caracteres no campo comentário
- ✅ Exibição da senha

---

## Estrutura do projeto

```
mentoria-cypress-web
│
├── cypress
│   ├── e2e
│   │   └── Formulario-Cadastro
│   │       └── formulario-cadastro.cy.js
│   │
│   ├── fixtures
│   │
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   └── downloads
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Node.js
- npm
- Git

---

## Instalação

Clone o repositório

```bash
git clone https://github.com/AlexandreTI-AUT/mentoria-cypress-web.git
```

Entre na pasta do projeto

```bash
cd mentoria-cypress-web
```

Instale as dependências

```bash
npm install
```

---

## Executando os testes

### Abrir o Cypress

```bash
npx cypress open
```

### Executar em modo Headless

```bash
npx cypress run
```

---

## Boas práticas aplicadas

Durante o desenvolvimento foram aplicadas práticas como:

- Organização dos testes utilizando `describe` e `it`
- Utilização de comandos customizados (`commands.js`)
- Reaproveitamento de código
- Massa de dados dinâmica utilizando Faker
- Separação entre ações e validações
- Cenários positivos e negativos
- Validação de mensagens de sucesso e erro

---

## Comandos customizados

O projeto utiliza comandos customizados para reduzir duplicação de código, tais como:

- `cy.realizarCadastro()`
- `cy.enviarFormulario()`
- `cy.validarSucesso()`
- `cy.validarErro()`
- `cy.limparFormulario()`
- `cy.validarCamposLimpos()`

---

## Aprendizados

Neste projeto foram praticados conceitos importantes de automação de testes, como:

- Automação de testes End-to-End
- Boas práticas no Cypress
- Criação de comandos customizados
- Assertions
- Manipulação de elementos HTML
- Utilização do Faker para geração de dados
- Organização e manutenção de testes automatizados
- Git e GitHub

---

## Competências desenvolvidas

- Cypress
- JavaScript
- Automação de Testes
- Testes Funcionais
- Testes End-to-End (E2E)
- Git
- GitHub
- Organização de código
- Reutilização de código
- Boas práticas em automação

---

## Autora

**Lis Tavares**

Projeto desenvolvido durante a **Mentoria Cypress Web**, aplicando os conceitos aprendidos ao longo das aulas para consolidar conhecimentos em automação de testes com Cypress.