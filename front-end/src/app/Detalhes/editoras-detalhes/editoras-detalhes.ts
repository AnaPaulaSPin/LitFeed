import { Component } from '@angular/core';
import { BookCoverCard } from '../../Card/book-cover-card/book-cover-card';
import { Edicao } from '../../models/edicao';
import { Editora } from '../../models/editora';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editoras-detalhes',
  imports: [BookCoverCard, RouterLink],
  templateUrl: './editoras-detalhes.html',
  styleUrl: './editoras-detalhes.scss',
})
export class EditorasDetalhes {
  edicoes: Edicao[] = []
  editora: any

  constructor(private router: Router) {

  }

  voltar() {
    this.router.navigate(['/editoras'])
  }
}
