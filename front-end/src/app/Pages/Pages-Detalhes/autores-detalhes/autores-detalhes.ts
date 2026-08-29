import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ServiceAutor } from '../../../Services/ServiceAutor/service-autor';
import { ServiceEdicao } from '../../../Services/ServiceEdicao/service-edicao';
import { ServiceLivro } from '../../../Services/ServiceLivro/service-livro';
import { CardCapaLivro } from '../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { Edicao } from '../../../Models/edicao';
import { Autor } from '../../../Models/autor';

@Component({
  selector: 'app-autores-detalhes',
  imports: [CommonModule,NgIf, NgFor, RouterLink, CardCapaLivro],
  templateUrl: './autores-detalhes.html',
  styleUrl: './autores-detalhes.scss',
})
export class AutoresDetalhes {
  autor?: Autor;
  livros: any[] = [];
  edicoes?: Edicao[] = [];

  constructor(
    private serviceAutor: ServiceAutor,
    private serviceEdicao: ServiceEdicao,
    private serviceLivro: ServiceLivro,
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
