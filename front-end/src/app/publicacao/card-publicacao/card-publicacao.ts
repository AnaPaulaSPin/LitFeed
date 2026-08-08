import { Component } from '@angular/core';
import { Usuario } from '../../Nav-bar/usuario/usuario';

@Component({
  selector: 'app-card-publicacao',
  imports: [Usuario],
  templateUrl: './card-publicacao.html',
  styleUrl: './card-publicacao.scss',
})
export class CardPublicacao {
  user: any;

  constructor() {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
}
