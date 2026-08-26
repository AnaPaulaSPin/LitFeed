import { Component, Input } from '@angular/core';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-autor-card',
  imports: [],
  templateUrl: './autor-card.html',
  styleUrl: './autor-card.scss',
})
export class AutorCard {
  @Input() autor: any;
}
