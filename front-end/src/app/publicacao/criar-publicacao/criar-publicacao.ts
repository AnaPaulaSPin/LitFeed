import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-criar-publicacao',
  imports: [],
  templateUrl: './criar-publicacao.html',
  styleUrl: './criar-publicacao.scss',
})
export class CriarPublicacao {
  user: any;
  @Output() fechar = new EventEmitter<void>();

  constructor() {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  publicar() {
    // Lógica para publicar a publicação
    console.log('Publicação publicada!');
  }

  fecharCard() {
    this.fechar.emit();
  }

}
