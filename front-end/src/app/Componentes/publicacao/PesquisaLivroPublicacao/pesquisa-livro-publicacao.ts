import { NgIf, NgFor } from '@angular/common';
import { Component, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { ServiceLivro } from '../../../Services/ServiceLivro/service-livro';
import { CardInformacaoLivro } from '../../Card/Card-InformacaoLivro/card-informacao-livro';
import { Edicao } from '../../../Models/edicao';

@Component({
  selector: 'app-pesquisa-livro-publicacao',
  imports: [CardInformacaoLivro, NgIf, NgFor],
  templateUrl: './pesquisa-livro-publicacao.html',
  styleUrl: './pesquisa-livro-publicacao.scss',
})
export class PesquisaLivroPublicacao {
  @Output() fechar = new EventEmitter<void>();
  @Output() edicaoSelecionada  = new EventEmitter<Edicao>();
  pesquisaLivroAberta = false;
  listaEdicoes: Edicao[] = [];

  constructor(private livrosService: ServiceLivro,
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
