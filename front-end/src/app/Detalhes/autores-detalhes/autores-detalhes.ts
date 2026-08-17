import { Component } from '@angular/core';
import { Autor } from '../../models/autor';
import { Edicao } from '../../models/edicao';

@Component({
  selector: 'app-autores-detalhes',
  imports: [],
  templateUrl: './autores-detalhes.html',
  styleUrl: './autores-detalhes.scss',
})
export class AutoresDetalhes {
  autor?: Autor
  edicoes?: Edicao[] = []

  voltar(){

  }
}
