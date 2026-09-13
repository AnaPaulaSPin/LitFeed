import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../../Models/livro';
import { LivroComEdicoes } from '../../Models/DTO/LivroComEdicoes';




@Injectable({
  providedIn: 'root',
})
export class ServiceLivro {

  private apiUrl = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listarLivros() {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  buscarLivroPorNome(nome: string) {
  return this.http.get<LivroComEdicoes>(
    `${this.apiUrl}/nome?nome=${nome}`
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
