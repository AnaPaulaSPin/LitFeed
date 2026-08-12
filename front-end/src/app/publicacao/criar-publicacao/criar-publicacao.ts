import { Component, EventEmitter, Output } from '@angular/core';
import { Livros } from '../../Services/Livros/livros';
import { Generos } from '../../Services/Generos/generos';
import { NgFor, NgIf } from '@angular/common';
import { Livro } from '../../models/livro';
import { Genero } from '../../models/genero';
import { CardLivro } from '../../Card/card-livro/card-livro';
import { FormsModule } from '@angular/forms';

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
  generoSelecionado: Genero | null = null;


  @Output() fechar = new EventEmitter<void>();

  constructor(
    private livroService: Livros,
    private generoService: Generos
  ) {

    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }

    this.carregarLivros();
    this.carregarGeneros();
  }

  publicar() {
    console.log('Publicação publicada!');
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
