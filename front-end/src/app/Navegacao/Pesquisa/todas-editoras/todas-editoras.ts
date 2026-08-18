import { Editora } from './../../../models/editora';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { EditoraCard } from '../../../Card/EditoraCard/editora-card/editora-card';
import { FormsModule } from '@angular/forms';
import { Editoras } from '../../../Services/editoras/editoras';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todas-editoras',
  imports: [EditoraCard, FormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './todas-editoras.html',
  styleUrl: './todas-editoras.scss',
})
export class TodasEditoras {
  editoras: Editora[] = []
  editorasFiltradas: Editora[] = []
  search: string = ''
  nenhumaEditora = false

  constructor(private service: Editoras,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarEditoras()
  }

  carregarEditoras() {
    this.service.listarEditoras().subscribe((editoras) => {
      this.editorasFiltradas = editoras
      this.editoras = editoras
      this.cdr.detectChanges()
    })
  }


  filtrarEditoras() {
    this.nenhumaEditora = false;
    if (this.search.trim() === '') {
      this.editorasFiltradas = this.editoras;
      return;
    }

    this.editorasFiltradas = this.editoras.filter((autor) => {
     return autor.nome.toLowerCase().includes(this.search.toLowerCase());
    });

    if(this.editorasFiltradas.length === 0) {
      this.nenhumaEditora = true;
    }
  }
}
