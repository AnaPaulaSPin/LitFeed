import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Editora } from '../../models/editora';

@Injectable({
  providedIn: 'root',
})
export class Editoras {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/editoras';

  listarEditoras() {
    return this.http.get<Editora[]>(this.apiUrl);
  }

    buscarPorId(id: number){
      return this.http.get<Editora>(`${this.apiUrl}/${id}`);
    }
}
