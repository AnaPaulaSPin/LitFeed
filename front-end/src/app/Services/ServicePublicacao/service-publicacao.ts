import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacao } from '../../publicacao/publicacao/publicacao';

@Injectable({
  providedIn: 'root',
})
export class ServicePublicacao {
  private apiUrl = 'http://localhost:8080/publicacoes';

  constructor(private http: HttpClient) {}

  listarPublicacoes() {
    return this.http.get<Publicacao[]>(this.apiUrl);
  }

  buscarPublicacao(id: number) {
    return this.http.get<Publicacao>(`${this.apiUrl}/${id}`);
  }

  publicar(publicacao: Publicacao) {
    return this.http.post<Publicacao>(this.apiUrl, publicacao);
  }

  deletarPublicacao(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
