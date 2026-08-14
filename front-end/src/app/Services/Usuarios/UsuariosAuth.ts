import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/users';


@Injectable({
  providedIn: 'root',
})
export class UsuariosAuth {
  // verifica se o usuário
  //  existe no array de usuários falsos

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/usuarios';

  listarUsuarios(){
    return this.http.get<User[]>(this.apiUrl);
  }


  login(usernameOrEmail: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { usernameOrEmail, password });
  }

  cadastrar(nome: string, username: string, email: string, password: string) {
   return this.http.post(`${this.apiUrl}`, { nome, username, email, senha: password });
  }

  atualizarUsuario(
  id: number,
  nome?: string,
  username?: string,
  email?: string,
  senha?: string,
  novaSenha?: string,
  banner?: string,
  fotoPerfil?: string,
  biografia?: string
) {
  return this.http.put(`${this.apiUrl}/${id}`, {
    nome,
    username,
    email,
    senha,
    novaSenha,
    banner,
    fotoPerfil,
    biografia
  });
}

}
