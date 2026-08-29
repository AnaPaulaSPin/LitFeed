import { Routes } from '@angular/router';
import { PublicLayout } from './Componentes/Layouts/public-layout/public-layout';
import { Home } from './Pages/Home/home';
import { Login } from './Pages/Login-Cadastro/login';
import { UserLayout } from './Componentes/Layouts/user-layout/user-layout';
import { Perfil } from './Pages/Pages-Perfil/perfil/perfil';
import { EditarPerfil } from './Pages/Pages-Perfil/editar-perfil/editar-perfil';
import { Feed } from './Pages/Feed/feed';
import { Biblioteca } from './Pages/Pages-Perfil/biblioteca/biblioteca';
import { Inicial } from './Pages/Pages-Navegacao/inicial/inicial';
import { TodosLivros } from './Pages/Pages-Navegacao/Pesquisa/todos-livros/todos-livros';
import { TodosAutores } from './Pages/Pages-Navegacao/Pesquisa/todos-autores/todos-autores';
import { TodasEditoras } from './Pages/Pages-Navegacao/Pesquisa/todas-editoras/todas-editoras';
import { TodosUsuarios } from './Pages/Pages-Navegacao/Pesquisa/todos-usuarios/todos-usuarios';
import { Trendings } from './Pages/Pages-Navegacao/Pesquisa/trendings/trendings';
import { LivrosDetalhes } from './Pages/Pages-Detalhes/livros-detalhes/livros-detalhes';
import { AutoresDetalhes } from './Pages/Pages-Detalhes/autores-detalhes/autores-detalhes';
import { EditorasDetalhes } from './Pages/Pages-Detalhes/editoras-detalhes/editoras-detalhes';


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
