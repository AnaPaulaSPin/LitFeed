import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Usuario } from '../../Nav-bar/usuario/usuario';
import { Publicacao } from '../../models/publicacao';
import { CardLivro } from '../../Card/CardInformacaoLivro/card-informacao-livro';


@Component({
  selector: 'app-card-publicacao',
  imports: [Usuario, CardLivro, NgIf],
  templateUrl: './card-publicacao.html',
  styleUrl: './card-publicacao.scss',
})
export class CardPublicacao {
  user: any;
  MenuAberto = false;
  curtido = false;
  republicado = false;
  @Input() publicacao!: Publicacao

  constructor() {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }

  }
  abrirMenu() {
    this.MenuAberto = !this.MenuAberto;
  }

  curtir() {
    this.curtido = !this.curtido;
  }

  republicar() {
    this.republicado = !this.republicado;
  }

  comentarios(){

  }

}
