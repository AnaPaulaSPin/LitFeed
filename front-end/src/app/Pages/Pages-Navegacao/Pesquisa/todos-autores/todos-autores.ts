import { NgIf, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AutorCard } from '../../../../Componentes/Card/Card-Autor/autor-card';
import { Autor } from '../../../../Models/autor';
import { ServiceAutor } from '../../../../Services/ServiceAutor/service-autor';


@Component({
  selector: 'app-todos-autores',
  imports: [NgIf, NgFor, AutorCard, FormsModule, RouterLink],
  templateUrl: './todos-autores.html',
  styleUrl: './todos-autores.scss',
})
export class TodosAutores {
  search: string = ''
  autores: Autor[] = []
  nenhumAutor = false
  autoresFiltrados: Autor[] = []

  constructor(private services: ServiceAutor,
    private cdr: ChangeDetectorRef) {
      this.carregarAutores()
  }

  carregarAutores(){
    this.services.listarAutores().subscribe((autores) => {
      this.autoresFiltrados = autores
      this.autores = autores
      this.cdr.detectChanges()
    })
  }

  filtrarAutores() {
    this.nenhumAutor = false;
    if (this.search.trim() === '') {
      this.autoresFiltrados = this.autores;
      return;
    }

  this.autoresFiltrados = this.autores.filter((autor) => {
    return autor.nome.toLowerCase().includes(this.search.toLowerCase());
   });

   if(this.autoresFiltrados.length === 0) {
      this.nenhumAutor = true;
    }
  }


}
