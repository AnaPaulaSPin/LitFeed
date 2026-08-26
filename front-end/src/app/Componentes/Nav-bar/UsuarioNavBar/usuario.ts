import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-Us',
  imports: [NgIf, RouterLink],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss',
})
export class UsuarioNavBar {
  user: any;
  menuAberto = false;

ngOnInit() {
  const userStorage = localStorage.getItem('user');

  if (userStorage) {
    this.user = JSON.parse(userStorage);
  }
}

abrirMenu() {
  this.menuAberto = !this.menuAberto;
}

logout(){
  localStorage.removeItem('user');
  this.user = null;
  this.menuAberto = false;
  window.location.href = '/';
}
}
