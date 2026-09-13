import { Edicao } from "../edicao";
import { Editora } from "../editora";
import { Livro } from "../livro";


export interface EditoraComLivrosEEdicoes {
  editora: Editora;
  livros: Livro[];
  edicoes: Edicao[];
}
