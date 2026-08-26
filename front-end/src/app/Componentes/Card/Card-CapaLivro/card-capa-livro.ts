import { Component, Input } from '@angular/core';
import { Edicao } from '../../../Models/edicao';


@Component({
  selector: 'app-card-capa-livro',
  imports: [],
  templateUrl: './card-capa-livro.html',
  styleUrl: './card-capa-livro.scss',
})
export class CardCapaLivro {
  @Input() livro!: Edicao;

}
