import { NgFor, SlicePipe } from '@angular/common';
import { ChangeDetectorRef, Component  } from '@angular/core';
import { BookCoverCard } from '../../Card/book-cover-card/book-cover-card';
import { Edicao } from '../../models/edicao';
import { Edicoes } from '../../Services/edicoes/edicoes';
import { RouterLink } from '@angular/router';
import { Autor } from '../../models/autor';
import { Autores } from '../../Services/autores/autores';
import { AutorCard } from '../../Card/Autor/autor/autor';


@Component({
  selector: 'app-inicial',
  imports: [BookCoverCard, NgFor,SlicePipe, RouterLink, AutorCard],
  templateUrl: './inicial.html',
  styleUrl: './inicial.scss',
})
export class Inicial {

  livros: Edicao[] = [];
  autores: Autor[] = [];

  constructor(private serviceLivros: Edicoes, private cdr: ChangeDetectorRef,
    private serviceAutores: Autores) {
    this.carregarLivros();
    this.carregarAutores();
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
}
