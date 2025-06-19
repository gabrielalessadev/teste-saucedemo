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