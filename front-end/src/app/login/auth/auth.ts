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

}
