import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacao } from '../../publicacao/publicacao/publicacao';
import { Usuario } from '../../Nav-bar/usuario/usuario';
import { CommonModule } from '@angular/common';
import { CriarPublicacao } from '../../publicacao/criar-publicacao/criar-publicacao';

@Component({
  selector: 'app-perfil',
  imports: [Publicacao, Usuario, CommonModule, CriarPublicacao],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
    user: any;
    usuarioAtivo: boolean = true; // variavel para identificar que é o usuario logado
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
}
