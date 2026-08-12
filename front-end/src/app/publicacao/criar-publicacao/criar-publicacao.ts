import { Component, EventEmitter, Output } from '@angular/core';
import { Livros } from '../../Services/Livros/livros';
import { NgFor, NgIf } from '@angular/common';
import { Livro } from '../../models/livro';
import { CardLivro } from '../../Card/card-livro/card-livro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-publicacao',
  imports: [NgFor, CardLivro, NgIf,FormsModule ],
  templateUrl: './criar-publicacao.html',
  styleUrl: './criar-publicacao.scss',
})
export class CriarPublicacao {
  user: any;
  listaLivros: Livro[] = [];
  livroSelecionado: any = null;
  @Output() fechar = new EventEmitter<void>();

  constructor(private livroService: Livros) {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }

    this.carregarLivros();
  }

  publicar() {
    // Lógica para publicar a publicação
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
  selecionarLivro(livro: any) {
    this.livroSelecionado = livro;
   }

}
