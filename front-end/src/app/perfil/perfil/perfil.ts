import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacao } from '../../publicacao/publicacao/publicacao';
import { Usuario } from '../../Nav-bar/usuario/usuario';

@Component({
  selector: 'app-perfil',
  imports: [Publicacao, Usuario],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
    user: any;
  usuarioAtivo: boolean = true; // variavel para identificar que é o usuario logado

  constructor(private router: Router) {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  editarPerfil(){
    this.router.navigate(['/editar-perfil']);
  }



}
