import { Component } from '@angular/core';
import { Usuario } from "../../Nav-bar/usuario/usuario";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-user-layout',
  imports: [Usuario, RouterOutlet],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {}
