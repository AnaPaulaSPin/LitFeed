import { CommonModule} from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServiceAutor } from '../../../Services/ServiceAutor/service-autor';
import { ServiceEdicao } from '../../../Services/ServiceEdicao/service-edicao';
import { ServiceLivro } from '../../../Services/ServiceLivro/service-livro';
import { CardCapaLivro } from '../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { Edicao } from '../../../Models/edicao';
import { Autor } from '../../../Models/autor';

@Component({
  selector: 'app-autores-detalhes',
  imports: [CommonModule, RouterLink, CardCapaLivro],
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
    this.serviceAutor.buscarAutorComLivrosEEdicoes(+id).subscribe({
      next: (resultado) => {
        this.autor = resultado.autor;
        this.livros = resultado.livros;
        this.edicoes = resultado.edicoes;

        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar autor:', erro);
      }
    });
  }
}

  voltar(){

  }

  carregarAutor(){

  }
}
