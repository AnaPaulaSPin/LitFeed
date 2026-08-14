
import { NgFor, SlicePipe } from '@angular/common';
import { ChangeDetectorRef, Component  } from '@angular/core';
import { BookCoverCard } from '../../Card/book-cover-card/book-cover-card';
import { Edicao } from '../../models/edicao';
import { Edicoes } from '../../Services/edicoes/edicoes';
import { RouterLink } from '@angular/router';
import { Autor } from '../../models/autor';
import { Autores } from '../../Services/autores/autores';
import { AutorCard } from '../../Card/Autor/autor/autor';
import { Editora } from '../../models/editora';
import { Editoras } from '../../Services/editoras/editoras';
import { EditoraCard } from '../../Card/EditoraCard/editora-card/editora-card';


@Component({
  selector: 'app-inicial',
  imports: [BookCoverCard, NgFor,SlicePipe, RouterLink, AutorCard,  EditoraCard],
  templateUrl: './inicial.html',
  styleUrl: './inicial.scss',
})
export class Inicial {

  livros: Edicao[] = [];
  autores: Autor[] = [];
  editoras: Editora[] = []

  constructor(private serviceLivros: Edicoes, private cdr: ChangeDetectorRef,
    private serviceAutores: Autores, private serviceEditoras: Editoras) {
    this.carregarLivros();
    this.carregarAutores();
    this.carregarEditoras();
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
}
