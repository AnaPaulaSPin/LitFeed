package com.litfeed.backend.dto;

import java.util.List;

import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.entity.Editora;
import com.litfeed.backend.entity.Livro;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EditoraComLivrosEEdicoesDTO {

    private Editora editora;
    private List<Livro> livros;
    private List<Edicao> edicoes;

    public EditoraComLivrosEEdicoesDTO() {
    }

    public EditoraComLivrosEEdicoesDTO(
            Editora editora,
            List<Livro> livros,
            List<Edicao> edicoes) {
        this.editora = editora;
        this.livros = livros;
        this.edicoes = edicoes;
    }
}