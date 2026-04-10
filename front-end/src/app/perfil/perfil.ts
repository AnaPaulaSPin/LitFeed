import { Component } from '@angular/core';
import { CardUser } from '../card-user/card-user';

@Component({
  selector: 'app-perfil',
  imports: [CardUser],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {}
