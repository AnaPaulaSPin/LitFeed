import { NgFor } from '@angular/common';
import { BookCoverCard } from '../../../Card/book-cover-card/book-cover-card';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Edicao } from '../../../models/edicao';
import { Edicoes } from '../../../Services/edicoes/edicoes';

@Component({
  selector: 'app-todos-livros',
  imports: [BookCoverCard, NgFor],
  templateUrl: './todos-livros.html',
  styleUrl: './todos-livros.scss',
})
export class TodosLivros {
  edicoes: Edicao[] = [];

  constructor(private services: Edicoes, private cdr: ChangeDetectorRef) {
    this.carregarLivros()
  }

  carregarLivros() {
    this.services.listarEdicoes().subscribe((edicoes) => {
    this.edicoes = edicoes;
    this.cdr.detectChanges();
    });
  }
}
