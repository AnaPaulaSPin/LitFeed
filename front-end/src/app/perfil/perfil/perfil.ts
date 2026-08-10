import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacao } from '../../publicacao/publicacao/publicacao';
import { Usuario } from '../../Nav-bar/usuario/usuario';
import { CommonModule } from '@angular/common';
import { CriarPublicacao } from '../../publicacao/criar-publicacao/criar-publicacao';
import { Listas } from '../../listas/listas';
import { Favoritos } from '../../favoritos/favoritos';

@Component({
  selector: 'app-perfil',
  imports: [Publicacao, Usuario, CommonModule, CriarPublicacao, Listas, Favoritos],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
    user: any;
    usuarioAtivo: boolean = true; // variavel para identificar que é o usuario logado
    listaAtiva: boolean = false; // variavel para identificar que é a listas do usuario
    favoritosAtivos: boolean = false; // variavel para identificar que é a favoritos do usuario
    publicacoesAtivas: boolean = true; // variavel para identificar que é a publicacoes do usuario
    criarPublicacaoArea: boolean = false; // variavel para abrir a area de criar publicacao

  constructor(private router: Router) {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  editarPerfil(){
    this.router.navigate(['/editar-perfil']);
  }

  criarPublicacao() {
    this.criarPublicacaoArea = true;
  }

  fecharPublicacao() {
    this.criarPublicacaoArea = false;
  }

  ativarPublicacoes() {
    this.publicacoesAtivas = true;
    this.listaAtiva = false;
    this.favoritosAtivos = false;
  }

  ativarListas() {
    this.publicacoesAtivas = false;
    this.listaAtiva = true;
    this.favoritosAtivos = false;
  }

  ativarFavoritos() {
    this.publicacoesAtivas = false;
    this.listaAtiva = false;
    this.favoritosAtivos = true;
  }

  ativarSobre() {
    this.publicacoesAtivas = false;
    this.listaAtiva = false;
    this.favoritosAtivos = false;
  }
}
