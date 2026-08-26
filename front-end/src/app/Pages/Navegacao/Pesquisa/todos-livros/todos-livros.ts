import { NgFor, NgIf } from '@angular/common';
import { BookCoverCard } from '../../../Card/book-cover-card/book-cover-card';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Edicao } from '../../../models/edicao';
import { Edicoes } from '../../../Services/edicoes/edicoes';
import { Autor } from '../../../models/autor';
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todos-livros',
  imports: [BookCoverCard, NgFor, FormsModule, NgIf, RouterLink],
  templateUrl: './todos-livros.html',
  styleUrl: './todos-livros.scss',
})
export class TodosLivros {
  edicoes: Edicao[] = [];
  livrosFiltrados: Edicao[] = [];
  autores : Autor[] = [];
  search: String = '';
  nenhumLivro = false;

  constructor(private services: Edicoes,
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
