import { Component, Input } from '@angular/core';
import { Edicao } from '../../../Models/edicao';

@Component({
  selector: 'app-card-livro',
  imports: [],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.scss',
})
export class CardInformacaoLivro {
  @Input() edicao!: Edicao
}
