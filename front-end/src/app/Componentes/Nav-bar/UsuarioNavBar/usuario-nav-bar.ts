import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-usuario-nav-bar',
  imports: [CommonModule ],
  templateUrl: './usuario-nav-bar.html',
  styleUrl: './usuario-nav-bar.scss',
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
