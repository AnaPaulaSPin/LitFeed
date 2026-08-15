import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edicao } from '../../models/edicao';

@Injectable({
  providedIn: 'root',
})

export class Edicoes {
  private apiUrl = 'http://localhost:8080/edicoes';

  constructor(private http: HttpClient) {}

  listarEdicoes(): Observable<Edicao[]> {
    return this.http.get<Edicao[]>(this.apiUrl);
  }

  getEdicao(id: number) {
   return this.http.get<Edicao>(`${this.apiUrl}/${id}`);
 }
}
