
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceUsuario } from '../../Services/ServiceUsuario/service-usuario';


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
    private authService: ServiceUsuario
  ) {}

  changeForm() {
    this.isSignIn = !this.isSignIn;
  }

  goBack() {
    this.router.navigate(['/']);
  }

 login() {
  this.authService.login(
    this.loginIdentifier,
    this.loginPassword
  ).subscribe({
    next: (user) => {

      localStorage.setItem('user', JSON.stringify(user));

      this.router.navigate(['/perfil']);
    },

    error: (erro) => {
      alert(erro.error.message ?? 'Usuário ou senha inválidos');
    }
  });
}

 cadastrar() {

  this.authService.cadastrar(
    this.registerName,
    this.registerUsername,
    this.registerEmail,
    this.registerPassword
  ).subscribe({

    next: (usuario) => {

      this.user = usuario;

      localStorage.setItem(
        'user',
        JSON.stringify(usuario)
      );

      console.log("Usuário cadastrado:", usuario);
      this.router.navigate(['/perfil']);

    },

    error: (erro) => {
      alert(erro.error);

    }

  });

}

}
