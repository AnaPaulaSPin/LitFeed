import { Component } from '@angular/core';
import { Usuario } from '../Nav-bar/usuario/usuario';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Publicacao } from '../publicacao/publicacao/publicacao';



@Component({
  selector: 'app-perfil',
  imports: [CommonModule, Usuario, Publicacao],
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
