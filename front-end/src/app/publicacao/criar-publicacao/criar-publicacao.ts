
import { Component, EventEmitter, Output } from '@angular/core';
import { Livros } from '../../Services/Livros/livros';
import { Generos } from '../../Services/Generos/generos';
import { NgFor, NgIf } from '@angular/common';
import { Livro } from '../../models/livro';
import { Genero } from '../../models/genero';
import { CardLivro } from '../../Card/card-livro/card-livro';
import { FormsModule } from '@angular/forms';
import { Edicao } from '../../models/edicao';
import { ServicePublicacao } from '../../Services/ServicePublicacao/service-publicacao';

@Component({
  selector: 'app-criar-publicacao',
  imports: [NgFor, CardLivro, NgIf, FormsModule],
  templateUrl: './criar-publicacao.html',
  styleUrl: './criar-publicacao.scss',
})
export class CriarPublicacao {

  user: any;

  listaLivros: Livro[] = [];
  listaGeneros: Genero[] = [];

  livroSelecionado: Livro | null = null;
  edicaoSelecionada: Edicao | null = null;
  generoSelecionado: Genero | null = null;
  titulo: any;
  conteudo: any;
  midia: string = '';        // URL temporária da prévia
  arquivoMidia: File | null = null; // arquivo original


  @Output() fechar = new EventEmitter<void>();

  constructor(
    private livroService: Livros,
    private generoService: Generos,
    private publicacaoService: ServicePublicacao
  ) {

    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }

    this.carregarLivros();
    this.carregarGeneros();
  }

 selecionarMidia(event: any) {
  const arquivo = event.target.files[0];

  if (arquivo) {
    this.arquivoMidia = arquivo;
    this.midia = URL.createObjectURL(arquivo);
  }
 }

  publicar() {
   let nomeMidia = '';

   if (this.arquivoMidia) {
    nomeMidia = this.arquivoMidia.name;
   }

    const publicacao = {
    usuario: this.user,
    edicao: null,
    genero: this.generoSelecionado,
    titulo: this.titulo,
    conteudo: this.conteudo,
    midia: nomeMidia
  }
   console.log(publicacao);
   this.publicacaoService.publicar(publicacao).subscribe({
    next: (publicacaoCriada) => {
      console.log('Publicação criada:', publicacaoCriada);
      alert('Publicação publicada com sucesso!');
    },

    error: (erro) => {
      console.error('Erro ao publicar:', erro);
      alert('Erro ao publicar.');
    }
  });
  }

  fecharCard() {
    this.fechar.emit();
  }

  carregarLivros() {
    this.livroService.listarLivros().subscribe({
      next: (livros) => {
        console.log('Livros recebidos:', livros);
        this.listaLivros = livros;
      },
      error: (erro) => {
        console.error('Erro ao carregar livros:', erro);
      }
    });
  }

  carregarGeneros() {
    this.generoService.listarGeneros().subscribe({
      next: (generos) => {
        console.log('Gêneros recebidos:', generos);
        this.listaGeneros = generos;
      },
      error: (erro) => {
        console.error('Erro ao carregar gêneros:', erro);
      }
    });
  }

}
