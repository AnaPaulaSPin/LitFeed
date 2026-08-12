import { Component } from '@angular/core';
import { CardPublicacao } from '../card-publicacao/card-publicacao';
import { Publicacao } from '../../models/publicacao';
import { NgFor } from '@angular/common';
import { ServicePublicacao } from '../../Services/ServicePublicacao/service-publicacao';

@Component({
  selector: 'app-publicacao',
  imports: [CardPublicacao, NgFor],
  templateUrl: './publicacao.html',
  styleUrl: './publicacao.scss',
})
export class PublicacaoModel {

  listaPublicacoes: Publicacao[] = [];

  constructor(private publicacaoService: ServicePublicacao) {
    this.carregarPublicacoes();
  }

  carregarPublicacoes() {
    this.publicacaoService.listarPublicacoes().subscribe({
      next: (publicacoes) => {
        this.listaPublicacoes = publicacoes;
      },
      error: (erro) => {
        console.error('Erro ao carregar publicações:', erro);
      }
    });
  }
}
