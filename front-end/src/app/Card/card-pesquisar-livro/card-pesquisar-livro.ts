import { NgIf, NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Edicao } from '../../models/edicao';
import { CardLivro } from '../card-livro/card-livro';
import { NgModel } from '@angular/forms';
import { Livros } from '../../Services/Livros/livros';

@Component({
  selector: 'app-card-pesquisar-livro',
  imports: [CardLivro, NgIf, NgFor],
  templateUrl: './card-pesquisar-livro.html',
  styleUrl: './card-pesquisar-livro.scss',
})
export class CardPesquisarLivro {
  @Output() fechar = new EventEmitter<void>();
  @Output() edicaoSelecionada  = new EventEmitter<Edicao>();
  pesquisaLivroAberta = false;
  listaEdicoes: Edicao[] = [];

  constructor(private livrosService: Livros) {}


  selecionarEdicao(livro: Edicao) {
   this.edicaoSelecionada .emit(livro);
  }

pesquisarLivro(nome: string) {
  this.livrosService.buscarPorNome(nome).subscribe({
    next: (livro) => {
      if (livro) {
        console.log('Livro encontrado:', livro);

        // Próximo passo: buscar as edições desse livro
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
