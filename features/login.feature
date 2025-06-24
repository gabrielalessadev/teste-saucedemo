Funcionalidade: Login e Logout de Usuário
  Como um usuário do sistema Sauce Demo
  Eu quero poder me autenticar e sair da minha conta
  Para garantir o acesso seguro à aplicação.

  Cenário: Validar login com usuário e senha corretos 
    Dado que estou na página de login
    Quando eu insiro as credenciais de um usuário válido
    E clico no botão de login
    Então devo ser redirecionado para a página de produtos

  Cenário: Validar comportamento com usuário e senha incorretos
    Dado que estou na página de login
    Quando eu insiro as credenciais de um usuário inválido
    E clico no botão de login
    Então devo ver uma mensagem de erro apropriada

  Cenário: Realizar logout após login bem-sucedido 
    Dado que fiz login com sucesso
    Quando eu realizo o logout
    Então devo ser redirecionado de volta para a página de login

