import { Component, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PesquisaLivroPublicacao } from '../PesquisaLivroPublicacao/pesquisa-livro-publicacao';
import { CardInformacaoLivro } from '../../Card/Card-InformacaoLivro/card-informacao-livro';
import { Genero } from '../../../models/genero';
import { Edicao } from '../../../Models/edicao';
import { ServiceLivro } from '../../../Services/ServiceLivro/service-livro';
import { ServiceGenero } from '../../../Services/ServiceGenero/service-genero';
import { ServicePublicacao } from '../../../Services/ServicePublicacao/service-publicacao';


@Component({
  selector: 'app-criar-publicacao',
  imports: [NgFor, NgIf, FormsModule,PesquisaLivroPublicacao, CardInformacaoLivro],
  templateUrl: './criar-publicacao.html',
  styleUrl: './criar-publicacao.scss',
})
export class CriaPublicacao {

  user: any;
  listaGeneros: Genero[] = [];
  edicaoSelecionada: Edicao | null = null;
  generoSelecionado: Genero | null = null;
  pesquisaLivroAberta = false;

  titulo: any;
  conteudo: any;

  midia: string = '';
  arquivoMidia: File | null = null;

  @Output() fechar = new EventEmitter<void>();

  constructor(
    private livroService: ServiceLivro,
    private generoService: ServiceGenero,
    private publicacaoService: ServicePublicacao,
    private cdr: ChangeDetectorRef
  ) {

    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }

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
      edicao: this.edicaoSelecionada,
      genero: this.generoSelecionado,
      titulo: this.titulo,
      conteudo: this.conteudo,
      midia: nomeMidia
    };

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

  carregarGeneros() {

    this.generoService.listarGeneros().subscribe({

      next: (generos) => {
        console.log('Gêneros recebidos:', generos);

        this.listaGeneros = generos;

        setTimeout(() => {
          this.cdr.detectChanges();
        });
      },

      error: (erro) => {
        console.error('Erro ao carregar gêneros:', erro);
      }

    });
  }

  abrirPesquisaLivro(){
    this.pesquisaLivroAberta = true;
  }

  fecharPesquisaLivro() {
   this.pesquisaLivroAberta = false;
  }

  selecionarEdicao(edicao: Edicao) {
  this.edicaoSelecionada = edicao;
  this.pesquisaLivroAberta = false;
}

}
