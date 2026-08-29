import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { UsuarioNavBar } from '../../Nav-bar/UsuarioNavBar/usuario-nav-bar';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, UsuarioNavBar],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {}
