import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Editora } from '../../Models/editora';
import { EditoraComLivrosEEdicoes } from '../../Models/DTO/EditoraComLivrosEEdicoes ';

@Injectable({
  providedIn: 'root',
})
export class ServiceEditora {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/editoras';

  listarEditoras() {
    return this.http.get<Editora[]>(this.apiUrl);
  }

  buscarEditoraPorId(id: number) {
    return this.http.get<Editora>(`${this.apiUrl}/${id}`);
  }

  buscarEditoraComLivrosEEdicoes(id: number) {
    return this.http.get<EditoraComLivrosEEdicoes>(
      `${this.apiUrl}/${id}/detalhes`
    );
  }
}
