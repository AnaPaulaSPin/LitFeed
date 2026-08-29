import { ChangeDetectorRef, Component } from '@angular/core';
import { CardPublicacao } from '../../../Componentes/Card/Card-Publicacao/card-publicacao';
import { NgFor, NgIf } from '@angular/common';
import { Publicacao } from '../../../Models/publicacao';
import { Usuario } from '../../../Models/Usuario';
import { ServicePublicacao } from '../../../Services/ServicePublicacao/service-publicacao';


@Component({
  selector: 'app-publicacao',
  imports: [CardPublicacao, NgFor, NgIf],
  templateUrl: './publicacao.html',
  styleUrl: './publicacao.scss',
})
export class PublicacaoModel {

  listaPublicacoes: Publicacao[] = [];
  carregandoPublicacoes = true;
  user?: Usuario;

  constructor(private publicacaoService: ServicePublicacao,
    private cdr: ChangeDetectorRef) {
    this.carregarUsuario();
  }

  carregarUsuario() {
    const usuarioSalvo = localStorage.getItem('user');


    if (usuarioSalvo) {
      this.user = JSON.parse(usuarioSalvo);
      this.carregarPublicacoes();
      console.log('user:', this.user);
    }
  }

  carregarPublicacoes() {
    this.carregandoPublicacoes = true;


    this.publicacaoService.listarPublicacoesPorUsuario(this.user!.id).subscribe({
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
