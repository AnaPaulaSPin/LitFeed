import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../../models/livro';
import { Edicao } from '../../models/edicao';

@Injectable({
  providedIn: 'root',
})
export class Livros {

  private apiUrl = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listarLivros() {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  buscarPorNome(nome: string) {
    return this.http.get<Livro>(`${this.apiUrl}/nome?nome=${nome}`);
  }

  buscarEdicoes(idLivro: number) {
    return this.http.get<Edicao[]>(
      `http://localhost:8080/edicoes/livro/${idLivro}`
    );
  }

  listarLivrosPorAutor(idAutor: number) {
    return this.http.get<Livro[]>(
      `${this.apiUrl}/autor/${idAutor}`
    );
  }

  listarLivrosPorEditora(idEditora: number) {
    return this.http.get<Livro[]>(
      `${this.apiUrl}/editora/${idEditora}`
    );
  }
}
