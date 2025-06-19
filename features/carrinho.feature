Funcionalidade: Gerenciamento do Carrinho de Compras
  Contexto:
    Dado que eu sou um usuário logado com sucesso na página de produtos

  Cenário: Adicionar um produto ao carrinho e validar
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