import { CommonModule  } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CardCapaLivro } from '../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { Edicao } from '../../../Models/edicao';
import { ServiceEdicao } from '../../../Services/ServiceEdicao/service-edicao';

@Component({
  selector: 'app-biblioteca',
  imports: [CommonModule, CardCapaLivro],
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
  ) {}



  setFilter(filter: string) {
    this.activeFilter = filter;
  }

}
