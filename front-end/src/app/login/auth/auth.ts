import { Injectable } from '@angular/core';
import { USERS_FAKE } from '../data/ListUser';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  // verifica se o usuário existe no array de usuários falsos
  login(usernameOrEmail: string, password: string) {
  const user = USERS_FAKE.find(
    u =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
  );

  return user;
 }

 cadastrar(nome: string, username: string, email: string, password: string) {
  const user = USERS_FAKE.find(
    u =>
      (u.username === username || u.email === email) &&
      u.password === password
  );

  if (!user) {
    const ultimo = USERS_FAKE[USERS_FAKE.length - 1];

    USERS_FAKE.push({id: ultimo.id + 1, nome, username, email, password });
    alert(`Cadastro realizado com sucesso! Faça login com seu usuário/email e senha.`);

  } else {
    alert('Usuário já existe!');
  }
 }
}
