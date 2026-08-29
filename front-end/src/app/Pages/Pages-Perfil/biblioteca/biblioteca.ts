import { NgFor } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CardCapaLivro } from '../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { Edicao } from '../../../Models/edicao';
import { ServiceEdicao } from '../../../Services/ServiceEdicao/service-edicao';

@Component({
  selector: 'app-biblioteca',
  imports: [NgFor, CardCapaLivro],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.scss',
})
export class Biblioteca {
  activeFilter = 'todos';
  edicoes: Edicao[] = [];
  quantidadeEdicoes = 0;

  constructor(
    private services: ServiceEdicao,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarEdicoes();
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  carregarEdicoes() {

  }
}
