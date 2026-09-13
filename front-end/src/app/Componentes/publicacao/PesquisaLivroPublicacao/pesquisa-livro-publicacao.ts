import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { ServiceLivro } from '../../../Services/ServiceLivro/service-livro';
import { CardInformacaoLivro } from '../../Card/Card-InformacaoLivro/card-informacao-livro';
import { Edicao } from '../../../Models/edicao';

@Component({
  selector: 'app-pesquisa-livro-publicacao',
  imports: [CardInformacaoLivro, CommonModule ],
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
  this.livrosService.buscarLivroPorNome(nome).subscribe({
    next: (resultado) => {
      if (resultado) {
        this.listaEdicoes = resultado.edicoes;
        this.cdr.detectChanges();
      } else {
        this.listaEdicoes = [];
      }
    },
    error: (erro) => {
      console.error('Erro ao pesquisar livro:', erro);
      this.listaEdicoes = [];
    }
  });
}


}
