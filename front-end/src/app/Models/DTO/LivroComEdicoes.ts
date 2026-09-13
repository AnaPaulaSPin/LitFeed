import { Edicao } from "../edicao";
import { Livro } from "../livro";

export interface LivroComEdicoes {
  livro: Livro;
  edicoes: Edicao[];
}
