///<reference types="cypress" />
//funcionalidade
describe("Login", () => {
  //cenario
    it("Login com sucesso", () => {
      //Dodo que
      //abrir aplicação
      cy.visit("https://automationpratice.com.br/login");
      //preenche email e senha
      cy.get('#user').type('gal_corsantos@hotmail.com')
      cy.get('#password').type('123456')

      //Quando
      //clico em entrar
      cy.get('#btnLogin').click()

      //Então
      //login é realizado
      cy.get('#swal2-title').should('be.visible')

      //E
      //Valida mensagem
      cy.get('#swal2-title').should('have.text', 'Login realizado')
    });

    it("E-mail invalido", () => {
      cy.visit("https://automationpratice.com.br/login");
      cy.get('#user').type('gal_corsantos@ho')
      cy.get('#password').type('123456')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    });

    it("Senha invalida", () => {
      cy.visit("https://automationpratice.com.br/login");
      cy.get('#user').type('gal_corsantos@hotmail.com')
      cy.get('#password').type('agtd1')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    });

    it("Senha vazia", () => {
      cy.visit("https://automationpratice.com.br/login");
      cy.get('#user').type('gal_corsantos@hotmail.com')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    });

    it("E-mail vazio", () => {
      cy.visit("https://automationpratice.com.br/login");
      cy.get('#password').type('123456')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    });
  });
  
