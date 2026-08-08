import { Component } from '@angular/core';
import { CardPublicacao } from '../card-publicacao/card-publicacao';

@Component({
  selector: 'app-publicacao',
  imports: [CardPublicacao],
  templateUrl: './publicacao.html',
  styleUrl: './publicacao.scss',
})
export class Publicacao {}
