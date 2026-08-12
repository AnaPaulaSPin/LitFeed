import { ChangeDetectorRef, Component } from '@angular/core';
import { CardPublicacao } from '../card-publicacao/card-publicacao';
import { Publicacao } from '../../models/publicacao';
import { NgFor, NgIf } from '@angular/common';
import { ServicePublicacao } from '../../Services/ServicePublicacao/service-publicacao';

@Component({
  selector: 'app-publicacao',
  imports: [CardPublicacao, NgFor, NgIf],
  templateUrl: './publicacao.html',
  styleUrl: './publicacao.scss',
})
export class PublicacaoModel {

  listaPublicacoes: Publicacao[] = [];
  carregandoPublicacoes = true;

  constructor(private publicacaoService: ServicePublicacao,
    private cdr: ChangeDetectorRef) {
    this.carregarPublicacoes();
  }

  carregarPublicacoes() {
    this.carregandoPublicacoes = true;
    
    this.publicacaoService.listarPublicacoes().subscribe({
      next: (publicacoes) => {
        this.listaPublicacoes = publicacoes;
        this.carregandoPublicacoes = false;
        this.cdr.detectChanges();
      },

      error: (erro) => {
        console.error('ERRO:', erro);

        this.carregandoPublicacoes = false;
      }
    });
  }
}
