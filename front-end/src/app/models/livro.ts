import { Autor } from "./autor";
import { Genero } from "./genero";

export interface Livro {
  id: number;
  titulo: string;
  isbn: string;
  autor: Autor;
  genero: Genero;
  sinopse: string;
  capa: string;
}
