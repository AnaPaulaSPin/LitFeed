import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { UserLayout } from './layouts/user-layout/user-layout';
import { Feed } from './feed/feed';
import { Login } from './login/login';
import { EditarPerfil } from './perfil/editar-perfil/editar-perfil';
import { Perfil } from './perfil/perfil/perfil';
import { Biblioteca } from './biblioteca/biblioteca';
import { Inicial } from './Navegacao/inicial/inicial';


export const routes: Routes = [

  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'login',
        component: Login
      }
    ]
  },

  {
    path: '',
    component: UserLayout,
    children: [
      {
        path: 'perfil',
        component: Perfil
      },
      {
        path: 'editar-perfil',
        component: EditarPerfil
      },
      {
        path: 'feed',
        component: Feed
      },
      {
        path: 'biblioteca',
        component: Biblioteca
      },
      {
        path: 'navegacao',
        component: Inicial
      }
    ]
  }

];
