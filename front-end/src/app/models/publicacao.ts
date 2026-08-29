import { Edicao } from "./edicao";
import { Genero } from "./genero";
import { Usuario } from "./Usuario";

export class Publicacao {
  id?: number;
  usuario!: Usuario;
  edicao?: Edicao;
  genero?: Genero;
  titulo?: string;
  conteudo?: string;
  midia?: string;
  dataCriacao?: string;
}
