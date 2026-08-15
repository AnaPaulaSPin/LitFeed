import { NgIf, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../../../models/users';
import { UsuariosAuth } from '../../../Services/Usuarios/UsuariosAuth';
import { FormsModule } from '@angular/forms';
import { UsuarioCard } from '../../../Card/UsuarioCard/usuario-card/usuario-card';

@Component({
  selector: 'app-todos-usuarios',
  imports: [FormsModule, NgIf, NgFor, UsuarioCard],
  templateUrl: './todos-usuarios.html',
  styleUrl: './todos-usuarios.scss',
})
export class TodosUsuarios {
  usuarios: User[] = []
  usuariosfiltrados: User[] = []
  search: string = ''
  nenhumUsuario = false

  constructor(private service: UsuariosAuth,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarEditoras()
  }

  carregarEditoras() {
    this.service.listarUsuarios().subscribe((editoras) => {
      this.usuarios = editoras
      this.usuariosfiltrados = editoras
      this.cdr.detectChanges()
    })
  }


  filtrarUsuarios() {
    this.nenhumUsuario = false;
    if (this.search.trim() === '') {
      this.usuariosfiltrados = this.usuarios;
      return;
    }

    this.usuariosfiltrados = this.usuarios.filter((usuario) => {
     return usuario.username.toLowerCase().includes(this.search.toLowerCase());
    });

    if(this.usuariosfiltrados.length === 0) {
      this.nenhumUsuario = true;
    }
  }
}
