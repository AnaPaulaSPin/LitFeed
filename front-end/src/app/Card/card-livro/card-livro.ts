import { Component, Input } from '@angular/core';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-card-livro',
  imports: [],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.scss',
})
export class CardLivro {
  @Input() livro!: Livro
}
