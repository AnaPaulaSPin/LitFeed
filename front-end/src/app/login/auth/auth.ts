import { Injectable } from '@angular/core';
import { USERS_FAKE } from '../data/users';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  login(username: string, password: string) {
    const user = USERS_FAKE.find(
      u => u.username === username && u.password === password
    );

    return user;
}
}
