import { Component } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  imports: [],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.scss',
})
export class Biblioteca {
  activeFilter = 'todos';

setFilter(filter: string) {
  this.activeFilter = filter;
}
}
