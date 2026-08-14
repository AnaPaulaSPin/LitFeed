import { Component, Input } from '@angular/core';
import { Autor } from '../../../models/autor';

@Component({
  selector: 'app-autor',
  imports: [],
  templateUrl: './autor.html',
  styleUrl: './autor.scss',
})
export class AutorCard {
  @Input() autor: any;
}
