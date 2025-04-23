## Projeto de Automação Web com Cypress
Este projeto tem como objetivo automatizar os testes da funcionalidade de login do site Automation Pratice, utilizando a ferramenta Cypress.

## Tecnologias Utilizadas
- Cypress — Framework de testes end-to-end moderno para aplicações web.
- JavaScript — Linguagem utilizada para escrever os testes.

## Estrutura dos Testes
Todos os testes estão localizados no arquivo login.cy.js e seguem a seguinte organização:

## Funcionalidade: Login
Cenários testados:
1. Login com sucesso

Verifica se o usuário consegue realizar login com credenciais válidas.

2. E-mail inválido

Testa a validação de e-mail com formato incorreto.

3. Senha inválida

Verifica se a aplicação responde corretamente a uma senha incorreta.

4. Senha vazia

Testa o comportamento da aplicação quando o campo senha está em branco.

5. E-mail vazio

Testa o comportamento da aplicação quando o campo e-mail está em branco.

## Resultados Esperados
- Mensagem de sucesso ao realizar login com dados corretos.
- Mensagens de erro específicas para cada cenário inválido testado.

## Observações
O site utilizado para os testes é apenas para fins de demonstração.
