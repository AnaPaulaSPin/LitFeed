import { NgIf, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Edicao } from '../../models/edicao';
import { Edicoes } from '../../Services/edicoes/edicoes';
import { Livros } from '../../Services/Livros/livros';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardLivro } from '../../Card/card-livro/card-livro';

@Component({
  selector: 'app-livros-detalhes',
  imports: [NgIf, NgFor, CardLivro, RouterLink],
  templateUrl: './livros-detalhes.html',
  styleUrl: './livros-detalhes.scss',
})
export class LivrosDetalhes {
  edicoesRelacionadas: Edicao[] = [];
  edicao!: Edicao;
  abaAtiva: 'edicoes' | 'resenhas' | 'publicacoes' = 'edicoes';

  constructor(
    private serviceEdicao: Edicoes,
    private serviceLivro: Livros,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.serviceEdicao.getEdicao(Number(id)).subscribe({
        next: (edicao) => {
          this.edicao = edicao;

          console.log(edicao);

          this.carregarEdicoesRelacionadas();
        },
        error: (erro) => {
          console.error('Erro ao carregar edição:', erro);
        }
      });
    }
  }

  carregarEdicoesRelacionadas() {
    this.serviceLivro.buscarEdicoes(this.edicao.livro.id).subscribe({
      next: (edicoes) => {
        this.edicoesRelacionadas = edicoes;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar edições relacionadas:', erro);
      }
    });
  }

  voltar() {
    history.back();
  }
}
