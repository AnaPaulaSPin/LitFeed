import { NgIf, NgFor, CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServiceEdicao } from '../../../Services/ServiceEdicao/service-edicao';
import { ServiceLivro } from '../../../Services/ServiceLivro/service-livro';
import { CardInformacaoLivro } from '../../../Componentes/Card/Card-InformacaoLivro/card-informacao-livro';
import { Edicao } from '../../../Models/edicao';

@Component({
  selector: 'app-livros-detalhes',
  imports: [CommonModule, CardInformacaoLivro, RouterLink],
  templateUrl: './livros-detalhes.html',
  styleUrl: './livros-detalhes.scss',
})
export class LivrosDetalhes {
  edicoesRelacionadas: Edicao[] = [];
  edicao!: Edicao;
  abaAtiva: 'edicoes' | 'resenhas' | 'publicacoes' = 'edicoes';

  constructor(
    private serviceEdicao: ServiceEdicao,
    private serviceLivro: ServiceLivro,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.serviceEdicao.buscarEdicaoPorId(Number(id)).subscribe({
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
    this.serviceEdicao.listarEdicoesPorLivro(this.edicao.livro.id).subscribe({
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
