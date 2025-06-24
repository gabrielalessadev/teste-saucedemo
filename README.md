# Projeto de Automação de Testes para Sauce Demo

Este projeto contém uma suíte de testes automatizados de ponta-a-ponta (E2E) para o site de e-commerce de demonstração [Sauce Demo](https://www.saucedemo.com/v1/). O objetivo é validar as funcionalidades críticas da aplicação, desde o login de um usuário até a finalização da compra, utilizando Cypress.

## Funcionalidades Automatizadas
A suíte de testes cobre as seguintes funcionalidades:
* Login e Logout
* Visualização e Ordenação de Produtos
* Gerenciamento do Carrinho de Compras (Adicionar item único e múltiplos, remover item)
* Fluxo de Checkout (Finalização da compra)

# Modo de Execução Direta

npm run cy:run

npx cypress open

# Cenários de Teste (BDD)

Abaixo estão as especificações de comportamento que guiaram a automação, localizadas na pasta

login.feature

#language: pt
Funcionalidade: Login e Logout de Usuário
  Cenário: Login com credenciais válidas e logout subsequente
    Dado que eu estou na página de login do Sauce Demo
    Quando eu preencho o campo "usuário" com "standard_user"
    E preencho o campo "senha" com "secret_sauce"
    E clico no botão de login
    Então eu devo ser redirecionado para a página de produtos
    Quando eu realizo o logout
    Então eu devo ser redirecionado de volta para a página de login

  Cenário: Tentativa de login com um usuário bloqueado
    Dado que eu estou na página de login do Sauce Demo
    Quando eu preencho o campo "usuário" com "locked_out_user"
    E preencho o campo "senha" com "secret_sauce"
    E clico no botão de login
    Então eu devo ver uma mensagem de erro "Epic sadface: Sorry, this user has been locked out."

produtos.feature

#language: pt
Funcionalidade: Gerenciamento e Visualização de Produtos
  Contexto:
    Dado que eu sou um usuário logado com sucesso

  Cenário: Validar a exibição da lista de produtos
    Então eu devo ver uma lista com pelo menos um produto

  Cenário: Ordenar produtos por preço (menor para maior)
    Quando eu seleciono a opção de ordenação "Price (low to high)"
    Então os produtos devem ser exibidos ordenados pelo menor preço

carrinho.feature

#language: pt
Funcionalidade: Gerenciamento do Carrinho de Compras
  Contexto:
    Dado que eu sou um usuário logado com sucesso na página de produtos

  Cenário: Adicionar um produto ao carrinho
    Quando eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    Então o ícone do carrinho deve mostrar o número "1"

  Cenário: Adicionar múltiplos produtos ao carrinho
    Quando eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    E eu adiciono o produto "Sauce Labs Bike Light" ao carrinho
    Então o ícone do carrinho deve mostrar o número "2"

  Cenário: Remover um produto do carrinho
    Dado que eu adicionei um produto ao carrinho
    Quando eu acesso o carrinho de compras
    E eu removo o produto do carrinho
    Então o carrinho de compras deve estar vazio

checkout.feature

#language: pt
Funcionalidade: Finalização de Compra (Checkout)
  Cenário: Realizar uma compra com sucesso
    Dado que eu sou um usuário logado e adicionei um item ao carrinho
    Quando eu acesso o carrinho de compras
    E eu clico em "Checkout"
    E eu preencho os dados de entrega
    E eu continuo para o próximo passo
    Então eu devo ver o resumo do pedido
    Quando eu finalizo a compra
    Então eu devo ver a mensagem de sucesso "THANK YOU FOR YOUR ORDER"