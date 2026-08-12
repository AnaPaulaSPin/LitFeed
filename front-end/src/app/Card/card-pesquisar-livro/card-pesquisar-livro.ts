import { Component, EventEmitter, Output } from '@angular/core';
import { Edicao } from '../../models/edicao';

@Component({
  selector: 'app-card-pesquisar-livro',
  imports: [],
  templateUrl: './card-pesquisar-livro.html',
  styleUrl: './card-pesquisar-livro.scss',
})
export class CardPesquisarLivro {
  @Output() fechar = new EventEmitter<void>();
  @Output() edicaoSelecionada  = new EventEmitter<Edicao>();

  selecionarEdicao(livro: Edicao) {
  this.edicaoSelecionada .emit(livro);
}
}
