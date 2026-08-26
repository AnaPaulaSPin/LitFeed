import { Component, Input } from '@angular/core';
import { User } from '../../../models/users';

@Component({
  selector: 'app-card-usuario',
  imports: [],
  templateUrl: './card-usuario.html',
  styleUrl: './card-usuario.scss',
})
export class CardUsuario {
  @Input () usuario!: User;
}
