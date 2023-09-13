# Rotas Protegidas

Quando uma aplicação é desenvolvida, é comum segregar seu uso em várias páginas, ou componentes no caso do Angular, criando rotas de navegação. No mundo real nem todas as rotas devem ser acessíveis dependendo da regra de negócio. Isto faz sentido, por exemplo, quando trabalhamos com perfis ou quando queremos apenas proteger certas rotas de usuários anônimos.

## Development server

- `/home` - será protegida por uma classe que implementa a interface CanActivate. Esta classe irá validar se o usuário foi autenticado, caso contrário irá redirecioná-lo para o login

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
