Funcionalidade: Gerenciamento e Visualização de Produtos
  Contexto:
    Dado que eu sou um usuário logado com sucesso

  Cenário: Validar a exibição da lista de produtos
    Então eu devo ver uma lista com pelo menos um produto

  Cenário: Ordenar produtos por preço (menor para maior)
    Quando eu seleciono a opção de ordenação "Price (low to high)"
    Então os produtos devem ser exibidos ordenados pelo menor preço