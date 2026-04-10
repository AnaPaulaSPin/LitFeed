import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Perfil } from './perfil/perfil';
import { CardUser } from './card-user/card-user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  {path: 'perfil', component: Perfil},
  {path: 'teste', component: CardUser}


];
