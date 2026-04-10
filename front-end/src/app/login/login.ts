import { Auth } from './auth/auth';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  isSignIn = true;

  // inputs controlados
  username = '';
  password = '';

  constructor(private router: Router,  private authService: Auth) {}

  changeForm() {
    this.isSignIn = !this.isSignIn;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  login() {
    const user = this.authService.login(this.username, this.password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/perfil']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

}
