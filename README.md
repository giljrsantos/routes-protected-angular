# Rotas Protegidas

Quando uma aplicação é desenvolvida, é comum segregar seu uso em várias páginas, ou componentes no caso do Angular, criando rotas de navegação. No mundo real nem todas as rotas devem ser acessíveis dependendo da regra de negócio. Isto faz sentido, por exemplo, quando trabalhamos com perfis ou quando queremos apenas proteger certas rotas de usuários anônimos.

## Como proteger suas rotas - Angular Guard

- `/home` - será protegida por uma classe que implementa a interface CanActivate. Esta classe irá validar se o usuário foi autenticado, caso contrário irá redirecioná-lo para o login
- `/login` - formulário simples para autenticação do usuário

## CanActivate

O guarda Angular CanActivate é executado antes de navegarmos para uma rota que nos permite cancelar a navegação. Neste tutorial aprenderemos o que é CanActivateguard e como usá-lo para proteger a rota. Criaremos um CanActivateaplicativo de exemplo simples para mostrar como usá-lo em aplicativos reais

## Casos de uso do CanActivate Guard
    Verificando se um usuário fez login
    Verificando se um usuário tem permissão
Um dos casos de uso deste guarda é verificar se o usuário está logado no sistema. Se o usuário não estiver logado, o guarda poderá redirecioná-lo para a página de login.
