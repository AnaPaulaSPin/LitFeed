import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  isSignIn = true; // controla qual tela está ativa

  constructor(private router: Router) {}

  changeForm() {
    this.isSignIn = !this.isSignIn;
  }

  goBack() {
  this.router.navigate(['/']);
}


}
