import { Component, Input } from '@angular/core';
import { Edicao } from '../../models/edicao';

@Component({
  selector: 'app-card-livro',
  imports: [],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.scss',
})
export class CardLivro {
  @Input() edicao!: Edicao
}
