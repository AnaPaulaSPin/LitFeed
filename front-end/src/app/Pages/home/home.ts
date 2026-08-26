import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Visitante } from '../Nav-bar/visitante/visitante';

@Component({
  selector: 'app-home',
  imports: [Footer,Visitante],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
