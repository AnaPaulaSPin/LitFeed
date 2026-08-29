import { ServiceAutor } from './../../../Services/ServiceAutor/service-autor';

import { NgFor, SlicePipe } from '@angular/common';
import { ChangeDetectorRef, Component  } from '@angular/core';
import { CardCapaLivro } from '../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { RouterLink } from '@angular/router';
import { AutorCard } from '../../../Componentes/Card/Card-Autor/autor-card';
import { CardEditora } from '../../../Componentes/Card/Card-Editora/card-editora';
import { CardUsuario } from '../../../Componentes/Card/CardUsuario/card-usuario';
import { Edicao } from '../../../Models/edicao';
import { Autor } from '../../../Models/autor';
import { Editora } from '../../../Models/editora';
import { Usuario } from '../../../Models/Usuario';
import { ServiceEdicao } from '../../../Services/ServiceEdicao/service-edicao';
import { ServiceEditora } from '../../../Services/ServiceEditora/service-editora';
import { ServiceUsuario } from '../../../Services/ServiceUsuario/service-usuario';


@Component({
  selector: 'app-inicial',
  imports: [CardCapaLivro, NgFor,SlicePipe, RouterLink, AutorCard,  CardEditora, CardUsuario],
  templateUrl: './inicial.html',
  styleUrl: './inicial.scss',
})
export class Inicial {

  livros: Edicao[] = [];
  autores: Autor[] = [];
  editoras: Editora[] = [];
  usuarios: Usuario[] = []

  constructor(private serviceLivros: ServiceEdicao, private cdr: ChangeDetectorRef,
    private serviceAutores: ServiceAutor, private serviceEditoras: ServiceEditora,
    private serviceUsuarios: ServiceUsuario) {
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
