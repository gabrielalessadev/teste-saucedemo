Funcionalidade: Gerenciamento do Carrinho de Compras
  Como um cliente da loja
  Eu quero poder adicionar, remover e verificar itens no meu carrinho
  Para ter controle sobre a minha compra.

  Cenário: Adicionar produtos ao carrinho
    Dado que estou na página de produtos
    Quando eu adiciono um item ao carrinho
    Então o ícone do carrinho deve ser atualizado para indicar "1" item

  Cenário: Remover produtos do carrinho
    Dado que adicionei um produto ao carrinho
    E estou na página do carrinho
    Quando eu removo o produto
    Então o carrinho deve ser exibido como vazio

  Cenário: Validar que os itens adicionados estão corretos
    Dado que adicionei um produto específico ao carrinho
    Quando eu navego para a página do carrinho
    Então o mesmo produto deve estar listado com o preço e a quantidade corretos
