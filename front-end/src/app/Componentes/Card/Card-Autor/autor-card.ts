import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autor-card',
  imports: [],
  templateUrl: './autor-card.html',
  styleUrl: './autor-card.scss',
})
export class AutorCard {
  @Input() autor: any;
}
