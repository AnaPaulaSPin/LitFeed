import { Editora } from './editora';
import { Livro } from './livro';

export interface Edicao {
  id: number;
  livro: Livro;
  editora: Editora;
  conteudo: string;
  capa: string;
  ano: number;
  total_paginas: number;
}
