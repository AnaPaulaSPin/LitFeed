package com.litfeed.backend.dto;

import java.util.List;

import com.litfeed.backend.entity.Autor;
import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.entity.Livro;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AutorComLivrosEEdicoesDTO {

    private Autor autor;
    private List<Livro> livros;
    private List<Edicao> edicoes;

    public AutorComLivrosEEdicoesDTO() {
    }

    public AutorComLivrosEEdicoesDTO(
            Autor autor,
            List<Livro> livros,
            List<Edicao> edicoes) {
        this.autor = autor;
        this.livros = livros;
        this.edicoes = edicoes;
    }
}