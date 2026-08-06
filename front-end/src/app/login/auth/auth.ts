import { Injectable, inject } from '@angular/core';
import { USERS_FAKE } from '../data/ListUser';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  // verifica se o usuário
  //  existe no array de usuários falsos

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/usuarios';


  login(usernameOrEmail: string, password: string) {
  const user = USERS_FAKE.find(
    u =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.senha === password
  );

  return user;
 }

 cadastrar(nome: string, username: string, email: string, password: string) {
  return this.http.post(`${this.apiUrl}`, { nome, username, email, senha: password });

 }
}
