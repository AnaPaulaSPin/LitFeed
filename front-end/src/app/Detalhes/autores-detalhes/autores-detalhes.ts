import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Autor } from '../../models/autor';
import { Edicao } from '../../models/edicao';
import { Edicoes } from '../../Services/edicoes/edicoes';
import { Livros } from '../../Services/Livros/livros';
import { Autores } from '../../Services/autores/autores';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BookCoverCard } from '../../Card/book-cover-card/book-cover-card';

@Component({
  selector: 'app-autores-detalhes',
  imports: [CommonModule,NgIf, NgFor, RouterLink, BookCoverCard],
  templateUrl: './autores-detalhes.html',
  styleUrl: './autores-detalhes.scss',
})
export class AutoresDetalhes {
  autor?: Autor;
  livros: any[] = [];
  edicoes?: Edicao[] = [];

  constructor(
    private serviceAutor: Autores,
    private serviceEdicao: Edicoes,
    private serviceLivro: Livros,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // 1. Primeiro busca o autor pelo ID
      this.serviceAutor.buscarAutorPorId(+id).subscribe((autor) => {
        this.autor = autor;
        console.log(autor)

        // 2. Depois busca os livros do autor
        this.serviceLivro.listarLivrosPorAutor(+id).subscribe((livros) => {
          this.livros = livros;

          // 3. Para cada livro, busca as edições correspondentes
          if (livros && livros.length > 0) {
            const edicoesRequests = livros.map((livro: any) =>
              this.serviceEdicao.buscarEdicoesPorLivro(livro.id)
            );

            forkJoin(edicoesRequests).subscribe((edicoesArray: any) => {
              // Combina todas as edições em um único array
              this.edicoes = edicoesArray.flat();
              this.cdr.detectChanges();
            });
          }
        });
      });
    }
  }

  voltar(){

  }

  carregarAutor(){

  }
}
