import { Component, Input } from '@angular/core';
import { User } from '../../../models/users';

@Component({
  selector: 'app-usuario-card',
  imports: [],
  templateUrl: './usuario-card.html',
  styleUrl: './usuario-card.scss',
})
export class UsuarioCard {
  @Input () usuario!: User;
}
