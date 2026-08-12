import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../../models/livro';

@Injectable({
  providedIn: 'root',
})
export class Livros {

  private apiUrl = 'http://localhost:8080/livros'

  constructor(private http: HttpClient){}

  listarLivros() {
  return this.http.get<Livro[]>(this.apiUrl);
}

}
