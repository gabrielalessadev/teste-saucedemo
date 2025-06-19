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