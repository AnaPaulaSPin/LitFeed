import { NgIf, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../../Models/Usuario';
import { CardUsuario } from '../../../../Componentes/Card/CardUsuario/card-usuario';
import { ServiceUsuario } from '../../../../Services/ServiceUsuario/service-usuario';

@Component({
  selector: 'app-todos-usuarios',
  imports: [FormsModule, NgIf, NgFor, CardUsuario],
  templateUrl: './todos-usuarios.html',
  styleUrl: './todos-usuarios.scss',
})
export class TodosUsuarios {
  usuarios: Usuario[] = []
  usuariosfiltrados: Usuario[] = []
  search: string = ''
  nenhumUsuario = false

  constructor(private service: ServiceUsuario,
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
