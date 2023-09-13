import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from '../sessao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    usuario: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(2)],
    }),
    senha: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(6)],
    }),
  });

  constructor(
    private sessaoService: SessaoService,
    private router: Router,
  ) {}

  login() {
    if (this.formGroup.invalid) {
      return;
    }

    const { usuario, senha } = this.formGroup.value;

    /*
      IMPORTANTE: para facilitar o estudo,
      utilizamos a lógica abaixo, porém, no
      mundo real haveria uma chamada á uma service
      para acionar uma API e validar
      o USUÁRIO e SENHA
    */
    this.simularChamadaAPI(usuario, senha)?.subscribe({
      next: (resposta) => {
        this.sessaoService.salvarSessao(resposta);
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        alert(erro);
        this.formGroup.reset();
      },
    });
  }

  simularChamadaAPI(usuario: string, senha: string) {
    return usuario === 'routesprotected' &&
      senha === '123456'
      ? // Usuário Válido
        of({
          accessToken: 'aaaa',
          nome: 'RoutesProtected',
        })
      : // usuário Inválido
        throwError(() => {
          const error: any = new Error(
            `Usuário ou senha inválido`,
          );
          error.timestamp = Date.now();
          return error;
        });
  }
}
