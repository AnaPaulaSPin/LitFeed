package com.litfeed.backend.dto;

import java.util.List;

import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.entity.Livro;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LivroComEdicoesDTO {

    private Livro livro;
    private List<Edicao> edicoes;

    public LivroComEdicoesDTO() {
    }

    public LivroComEdicoesDTO(Livro livro, List<Edicao> edicoes) {
        this.livro = livro;
        this.edicoes = edicoes;
    }
}