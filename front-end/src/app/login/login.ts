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
  loginIdentifier = '';
  loginPassword = '';

  registerUsername = '';
  registerEmail = '';
  registerPassword = '';

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
    // Aqui você pode implementar a lógica de cadastro, como enviar os dados para um serviço ou API.
    // Por enquanto, apenas exibe um alerta com os dados de cadastro.
    alert(`Cadastro realizado com sucesso!\nUsername: ${this.registerUsername}\nEmail: ${this.registerEmail}`);
  }
}
