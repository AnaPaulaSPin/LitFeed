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
  isSignIn = false; // false = login, true = cadastro

  // inputs controlados
  loginIdentifier = '';
  loginPassword = '';

  registerUsername = '';
  registerEmail = '';
  registerPassword = '';
  registerName = '';
  user: any;

  constructor(
    private router: Router,
    private authService: Auth
  ) {}

  changeForm() {
    this.isSignIn = !this.isSignIn;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  login() {
    const user = this.authService.login(
      this.loginIdentifier,
      this.loginPassword
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log("Usuário:", user);
      this.router.navigate(['/perfil']);
    } else {
      alert('Usuário ou senha inválidos');
   }
  }

  cadastrar() {
    this.authService.cadastrar(
      this.registerName,
      this.registerUsername,
      this.registerEmail,
      this.registerPassword
    ).subscribe({
  next: () => {
    console.log("Usuário cadastrado com sucesso!");
        this.registerUsername = '';
        this.registerEmail = '';
        this.registerPassword = '';
        this.registerName = '';
        this.isSignIn = false; // Volta para a tela de login após o cadastro
  },
  error: (erro) => {
    console.log("Erro ao cadastrar:", erro);
  }
});

  }

}
