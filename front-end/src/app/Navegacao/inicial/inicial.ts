import { NgFor, SlicePipe } from '@angular/common';
import { ChangeDetectorRef, Component  } from '@angular/core';
import { BookCoverCard } from '../../Card/book-cover-card/book-cover-card';
import { Livro } from '../../models/livro';
import { Livros } from '../../Services/Livros/livros';
import { Edicao } from '../../models/edicao';
import { Edicoes } from '../../Services/edicoes/edicoes';


@Component({
  selector: 'app-inicial',
  imports: [BookCoverCard, NgFor,SlicePipe],
  templateUrl: './inicial.html',
  styleUrl: './inicial.scss',
})
export class Inicial {

  livros: Edicao[] = [];

  constructor(private services: Edicoes, private cdr: ChangeDetectorRef) {
    this.carregarLivros();
  }

  carregarLivros() {
    this.services.listarEdicoes().subscribe({
      next: (livros) => {
        this.livros = livros;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar livros:', erro);
      }
    });
  }
}
