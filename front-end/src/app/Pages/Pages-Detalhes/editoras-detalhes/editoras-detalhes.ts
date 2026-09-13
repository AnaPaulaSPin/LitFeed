import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CardCapaLivro } from '../../../Componentes/Card/Card-CapaLivro/card-capa-livro';
import { Edicao } from '../../../Models/edicao';
import { Editora } from '../../../Models/editora';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceEditora } from '../../../Services/ServiceEditora/service-editora';
import { Livro } from '../../../Models/livro';

@Component({
  selector: 'app-editoras-detalhes',
  imports: [CommonModule, CardCapaLivro, RouterLink],
  templateUrl: './editoras-detalhes.html',
  styleUrl: './editoras-detalhes.scss',
})
export class EditorasDetalhes {
  edicoes: Edicao[] = [];
  editora?: Editora;
  livros: Livro[] = [];



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceEditora: ServiceEditora,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');

  if (!id) {
    return;
  }

  const editoraId = Number(id);

  this.serviceEditora.buscarEditoraComLivrosEEdicoes(editoraId).subscribe({
    next: (resultado) => {
      this.editora = resultado.editora;
      this.livros = resultado.livros;
      this.edicoes = resultado.edicoes;

      this.cdr.detectChanges();
    },
    error: (erro) => {
      console.error('Erro ao carregar detalhes da editora:', erro);
    }
  });
}

  voltar() {
    this.router.navigate(['/editoras'])
  }
}
