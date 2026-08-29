import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { CardCapaLivro } from '../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { Edicao } from '../../../Models/edicao';
import { Editora } from '../../../Models/editora';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceEditora } from '../../../Services/ServiceEditora/service-editora';
import { ServiceLivro } from '../../../Services/ServiceLivro/service-livro';
import { ServiceEdicao } from '../../../Services/ServiceEdicao/service-edicao';

@Component({
  selector: 'app-editoras-detalhes',
  imports: [CommonModule, CardCapaLivro, RouterLink],
  templateUrl: './editoras-detalhes.html',
  styleUrl: './editoras-detalhes.scss',
})
export class EditorasDetalhes {
  edicoes: Edicao[] = [];
  editora?: Editora;



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceEditora: ServiceEditora,
    private serviceLivro: ServiceLivro,
    private serviceEdicao: ServiceEdicao,
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
          return forkJoin([] as Array<ReturnType<ServiceEdicao['buscarEdicoesPorLivro']>>);
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
