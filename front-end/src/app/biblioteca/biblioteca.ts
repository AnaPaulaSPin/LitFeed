import { NgFor } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Edicoes } from '../Services/edicoes/edicoes';
import { Edicao } from '../models/edicao';
import { BookCoverCard } from '../Card/book-cover-card/book-cover-card';

@Component({
  selector: 'app-biblioteca',
  imports: [NgFor, BookCoverCard],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.scss',
})
export class Biblioteca {
  activeFilter = 'todos';
  edicoes: Edicao[] = [];
  quantidadeEdicoes = 0;

  constructor(
    private services: Edicoes,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarEdicoes();
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  carregarEdicoes() {
    this.services.listarEdicoes().subscribe({
      next: (edicoes) => {
        this.edicoes = edicoes;
        this.quantidadeEdicoes = edicoes.length;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar edições:', erro);
      }
    });
  }
}
