import { Component, Input } from '@angular/core';
import { Editora } from '../../../models/editora';

@Component({
  selector: 'app-editora-card',
  imports: [],
  templateUrl: './editora-card.html',
  styleUrl: './editora-card.scss',
})
export class EditoraCard {
  @Input() editora!: Editora;
}
