Funcionalidade: Gerenciamento e Visualização de Produtos
  Contexto: Como um usuário logado no sistema
            Eu quero poder visualizar e ordenar a lista de produtos
            Para encontrar os itens que desejo de forma eficiente.

  Cenário: Validar a exibição da lista de     produtos
    Quando eu estou na página de produtos
    Então o título "Products" deve ser exibido
    E a lista de produtos deve conter um ou mais itens

   Cenário: Ordenar produtos por preço (menor para maior)
    Dado que eu estou na página de produtos
    Quando eu seleciono a opção de ordenação "Price (low to high)"
    Então o primeiro item da lista deve ser o de menor preço
