import { Edicao } from "./edicao";
import { Genero } from "./genero";
import { User } from "./users";


export interface publicacao {
  id: number;
  usuario: User;
  genero: Genero;
  edicao: Edicao;
  titulo: string;
  conteudo: string;
  midia: string;
  dataCriacao: Date;
}
