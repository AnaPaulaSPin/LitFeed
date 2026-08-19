import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { BookCoverCard } from '../../Card/book-cover-card/book-cover-card';
import { Edicao } from '../../models/edicao';
import { Editora } from '../../models/editora';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Editoras } from '../../Services/editoras/editoras';
import { Livros } from '../../Services/Livros/livros';
import { Edicoes } from '../../Services/edicoes/edicoes';
import { forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-editoras-detalhes',
  imports: [CommonModule, BookCoverCard, RouterLink],
  templateUrl: './editoras-detalhes.html',
  styleUrl: './editoras-detalhes.scss',
})
export class EditorasDetalhes {
  edicoes: Edicao[] = [];
  editora?: Editora;



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceEditora: Editoras,
    private serviceLivro: Livros,
    private serviceEdicao: Edicoes,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    const editoraId = Number(id);
    this.serviceEditora.buscarPorId(editoraId).pipe(
      switchMap((editora) => {
        this.editora = editora;
        return this.serviceLivro.listarLivrosPorEditora(editoraId);
      }),
      switchMap((livros) => {
        if (livros.length === 0) {
          return forkJoin([] as Array<ReturnType<Edicoes['buscarEdicoesPorLivro']>>);
        }

        return forkJoin(
          livros.map((livro) => this.serviceEdicao.buscarEdicoesPorLivro(livro.id))
        );
      })
    ).subscribe({
      next: (edicoesPorLivro) => {
        this.edicoes = edicoesPorLivro
          .flat()
          .filter((edicao) => edicao.editora?.id === editoraId);
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar detalhes da editora:', erro)
    });
  }

  voltar() {
    this.router.navigate(['/editoras'])
  }
}
