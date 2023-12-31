import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sessao } from './sessao.model';
import { SessaoService } from './sessao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Guard';
  sessao$: Observable<Sessao | null>;

  logado: boolean = true;

  constructor(private sessaoService: SessaoService) {
    this.sessao$ = this.sessaoService.getSessao();
  }

  logout() {
    this.sessaoService.limparSessao();
  }
}
