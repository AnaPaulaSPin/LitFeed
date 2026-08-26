import { Component, Input } from '@angular/core';
import { Edicao } from '../../../Models/edicao';

@Component({
  selector: 'app-card-informacao-livro',
  imports: [],
  templateUrl: './card-informacao-livro.html',
  styleUrl: './card-informacao-livro.scss',
})
export class CardInformacaoLivro {
  @Input() edicao!: Edicao
}
