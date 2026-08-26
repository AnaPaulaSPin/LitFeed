import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Autor } from '../../Models/autor';

@Injectable({
  providedIn: 'root',
})
export class ServiceAutor {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/autores';

  listarAutores() {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  buscarAutorPorId(id: number) {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }
}
