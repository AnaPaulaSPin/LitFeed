import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Visitante } from './Nav-bar/visitante/visitante';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Visitante],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('front-end');
}
