import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// [pathMatch]A propriedade pathMatch, necessária para redirecionamentos,
// informa ao roteador como ele deve corresponder ao URL fornecido para redirecionar para a rota especificada.
// Como pathMatch: full é fornecido, o roteador redirecionará para o componente um se o
// URL inteiro corresponder ao caminho vazio ('').
