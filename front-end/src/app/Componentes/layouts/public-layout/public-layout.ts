import { Component } from '@angular/core';
import { VisitanteNavBar } from "../../Nav-bar/VisitanteNavBar/visitante-nav-bar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-public-layout',
  imports: [VisitanteNavBar, RouterOutlet],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {}
