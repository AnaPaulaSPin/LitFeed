import { Component } from '@angular/core';
import { CardUser } from '../card-user/card-user';

@Component({
  selector: 'app-perfil',
  imports: [CardUser],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  user: any;

  constructor() {
    const userData = localStorage.getItem('user');
    console.log("Usuário:", userData);
    
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

}
