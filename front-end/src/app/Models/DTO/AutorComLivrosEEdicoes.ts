import { Livro } from '../livro';
import { Edicao } from '../edicao';
import { Autor } from '../autor';

export interface AutorComLivrosEEdicoes {
  autor: Autor;
  livros: Livro[];
  edicoes: Edicao[];
}
