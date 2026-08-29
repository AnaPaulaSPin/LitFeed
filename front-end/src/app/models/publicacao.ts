import { Edicao } from "./edicao";
import { Genero } from "./genero";
import { User } from "./Usuario";


export class Publicacao {
  id?: number;
  usuario: any;
  edicao?: any;
  genero?: any;
  titulo?: string;
  conteudo?: string;
  midia?: string;
  dataCriacao?: string;
}
