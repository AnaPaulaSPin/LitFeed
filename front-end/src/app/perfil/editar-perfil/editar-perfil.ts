import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  imports: [FormsModule],
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.scss',
})
export class EditarPerfil {
  user: any;

  constructor() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

}
