import { Component } from '@angular/core';
import { CardUser } from '../card-user/card-user';
import { Usuario } from '../Nav-bar/usuario/usuario';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, CardUser, Usuario],
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
