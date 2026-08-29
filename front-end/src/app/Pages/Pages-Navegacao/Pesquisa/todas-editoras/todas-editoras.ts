import { NgFor, NgIf } from "@angular/common"
import { ChangeDetectorRef, Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { CardEditora } from "../../../../Componentes/Card/Card-Editora/card-editora"
import { Editora } from "../../../../Models/editora"
import { ServiceEditora } from "../../../../Services/ServiceEditora/service-editora"


@Component({
  selector: 'app-todas-editoras',
  imports: [CardEditora, FormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './todas-editoras.html',
  styleUrl: './todas-editoras.scss',
})
export class TodasEditoras {
  editoras: Editora[] = []
  editorasFiltradas: Editora[] = []
  search: string = ''
  nenhumaEditora = false

  constructor(private service: ServiceEditora,
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
