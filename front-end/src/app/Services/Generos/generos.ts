import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../../models/genero';

@Injectable({
  providedIn: 'root',
})
export class Generos {

  private apiUrl = 'http://localhost:8080/generos';

  constructor(private http: HttpClient) {}

  listarGeneros() {
    return this.http.get<Genero[]>(this.apiUrl);
  }
}
