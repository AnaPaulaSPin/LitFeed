import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [NgIf],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss',
})
export class Usuario {
  user: any;

ngOnInit() {
  const userStorage = localStorage.getItem('user');

  if (userStorage) {
    this.user = JSON.parse(userStorage);
  }
}
}
