
import { NgFor, SlicePipe } from '@angular/common';
import { ChangeDetectorRef, Component  } from '@angular/core';
import { BookCoverCard } from '../../Card/book-cover-card/book-cover-card';
import { Edicao } from '../../models/edicao';
import { Edicoes } from '../../Services/edicoes/edicoes';
import { RouterLink } from '@angular/router';
import { Autor } from '../../models/autor';
import { Autores } from '../../Services/autores/autores';
import { AutorCard } from '../../Card/Card-Autor/autor-card';
import { Editora } from '../../models/editora';
import { Editoras } from '../../Services/editoras/editoras';
import { EditoraCard } from '../../Card/EditoraCard/editora-card/editora-card';
import { User } from '../../models/users';
import { UsuariosAuth } from '../../Services/Usuarios/UsuariosAuth';
import { UsuarioCard } from '../../Card/UsuarioCard/usuario-card/usuario-card';


@Component({
  selector: 'app-inicial',
  imports: [BookCoverCard, NgFor,SlicePipe, RouterLink, AutorCard,  EditoraCard, UsuarioCard],
  templateUrl: './inicial.html',
  styleUrl: './inicial.scss',
})
export class Inicial {

  livros: Edicao[] = [];
  autores: Autor[] = [];
  editoras: Editora[] = [];
  usuarios: User[] = []

  constructor(private serviceLivros: Edicoes, private cdr: ChangeDetectorRef,
    private serviceAutores: Autores, private serviceEditoras: Editoras,
    private serviceUsuarios: UsuariosAuth) {
    this.carregarLivros();
    this.carregarAutores();
    this.carregarEditoras();
    this.carregarUsuarios();
  }

  carregarLivros() {
    this.serviceLivros.listarEdicoes().subscribe({
      next: (livros) => {
        this.livros = livros;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar livros:', erro);
      }
    });
  }

  carregarAutores() {
  this.serviceAutores.listarAutores().subscribe({
    next: (autores) => {
      this.autores = autores;
      this.cdr.detectChanges();
    },
    error: (erro) => {
      console.error('Erro ao carregar autores:', erro);
    }
  });
}
  carregarEditoras() {
    this.serviceEditoras.listarEditoras().subscribe({
      next: (editoras) => {
        this.editoras = editoras;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.log('Erro ao carregar editoras:', erro);
      }
    });
  }

  carregarUsuarios() {
    this.serviceUsuarios.listarUsuarios().subscribe({
      next: (usuarios) =>{
        this.usuarios = usuarios,
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.log('Erro ao carregar editoras:',erro);
      }
    });
  }
}
