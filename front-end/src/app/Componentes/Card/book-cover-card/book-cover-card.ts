import { Component, Input } from '@angular/core';
import { Edicao } from '../../models/edicao';

@Component({
  selector: 'app-book-cover-card',
  imports: [],
  templateUrl: './book-cover-card.html',
  styleUrl: './book-cover-card.scss',
})
export class BookCoverCard {
  @Input() livro!: Edicao;

}
