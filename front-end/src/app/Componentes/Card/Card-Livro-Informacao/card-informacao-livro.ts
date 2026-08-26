import { NgIf, NgFor } from '@angular/common';
import { Component, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Edicao } from '../../models/edicao';
import { CardLivro } from '../CardInformacaoLivro/card-informacao-livro';
import { NgModel } from '@angular/forms';
import { Livros } from '../../Services/Livros/livros';

@Component({
  selector: 'app-card-informacao-livro',
  imports: [CardLivro, NgIf, NgFor],
  templateUrl: './card-informacao-livro.html',
  styleUrl: './card-informacao-livro.scss',
})
export class CardInformacaoLivro {
  @Output() fechar = new EventEmitter<void>();
  @Output() edicaoSelecionada  = new EventEmitter<Edicao>();
  pesquisaLivroAberta = false;
  listaEdicoes: Edicao[] = [];

  constructor(private livrosService: Livros,
    private cdr: ChangeDetectorRef
  ) {}


  selecionarEdicao(livro: Edicao) {
   this.edicaoSelecionada .emit(livro);
  }

pesquisarLivro(nome: string) {
  this.livrosService.buscarPorNome(nome).subscribe({
    next: (livro) => {
      if (livro) {
        console.log('Livro encontrado:', livro);

        this.livrosService.buscarEdicoes(livro.id).subscribe({
          next: (edicoes) => {
            this.listaEdicoes = edicoes;
            console.log('Edições encontradas:', edicoes);
            this.cdr.detectChanges();
          },
          error: (erro) => {
            console.error('Erro ao buscar edições:', erro);
          }
        });

      } else {
        alert('Livro não encontrado.');
      }
    },

    error: (erro) => {
      console.error('Erro ao pesquisar livro:', erro);
      alert('Livro não encontrado.');
    }
  });
}


}
