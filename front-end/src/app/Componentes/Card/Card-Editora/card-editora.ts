import { Component, Input } from '@angular/core';
import { Editora } from '../../../Models/editora';

@Component({
  selector: 'app-card-editora',
  imports: [],
  templateUrl: './card-editora.html',
  styleUrl: './card-editora.scss',
})
export class CardEditora {
  @Input() editora!: Editora;
}
