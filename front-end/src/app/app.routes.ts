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
import { TodosLivros } from './Navegacao/Pesquisa/todos-livros/todos-livros';
import { TodosAutores } from './Navegacao/Pesquisa/todos-autores/todos-autores';
import { TodasEditoras } from './Navegacao/Pesquisa/todas-editoras/todas-editoras';
import { TodosUsuarios } from './Navegacao/Pesquisa/todos-usuarios/todos-usuarios';
import { Trendings } from './Navegacao/Pesquisa/trendings/trendings';
import { LivrosDetalhes } from './Detalhes/livros-detalhes/livros-detalhes';
import { AutoresDetalhes } from './Detalhes/autores-detalhes/autores-detalhes';
import { EditorasDetalhes } from './Detalhes/editoras-detalhes/editoras-detalhes';


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
      },
      {
        path: 'todos-livros',
        component: TodosLivros
      },
      {
        path: 'todos-autores',
        component: TodosAutores
      },
      {
        path: 'todas-editoras',
        component: TodasEditoras
      },
      {
        path: 'todos-usuarios',
        component: TodosUsuarios
      },
      {
        path: 'trendings',
        component: Trendings
      },
      {
        path: 'detalhesLivro/:id',
        component: LivrosDetalhes
      },
      {
        path: 'detalhesAutor/:id',
        component: AutoresDetalhes
      },
      {
        path: 'detalhesEditora/:id',
        component: EditorasDetalhes
      }

    ]
  }

];
