import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { CardCapaLivro } from '../../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { Edicao } from '../../../../Models/edicao';
import { Autor } from '../../../../Models/autor';
import { ServiceEdicao } from '../../../../Services/ServiceEdicao/service-edicao';

@Component({
  selector: 'app-todos-livros',
  imports: [CardCapaLivro, NgFor, FormsModule, NgIf, RouterLink],
  templateUrl: './todos-livros.html',
  styleUrl: './todos-livros.scss',
})
export class TodosLivros {
  edicoes: Edicao[] = [];
  livrosFiltrados: Edicao[] = [];
  autores : Autor[] = [];
  search: String = '';
  nenhumLivro = false;

  constructor(private services: ServiceEdicao,
    private cdr: ChangeDetectorRef) {
    this.carregarLivros()
  }

  carregarLivros() {
    this.services.listarEdicoes().subscribe((edicoes) => {
    this.livrosFiltrados = edicoes;
    this.edicoes = edicoes;
    this.cdr.detectChanges();
    });
  }

  filtrarLivros() {
    if (this.search.trim() === '') {
      this.livrosFiltrados = this.edicoes;
      this.nenhumLivro = false;
      return;
    }

    this.livrosFiltrados = this.livrosFiltrados.filter(livro =>
    livro.livro.titulo
      .toLowerCase()
      .includes(this.search.toLowerCase())
    );
    if(this.livrosFiltrados.length === 0) {
      this.nenhumLivro = true;
    }
  }
}
