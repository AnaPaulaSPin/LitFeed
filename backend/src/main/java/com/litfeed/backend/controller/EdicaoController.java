package com.litfeed.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.service.EdicaoService;

@RestController
@RequestMapping("/edicoes")
public class EdicaoController {

    private final EdicaoService service;

    public EdicaoController(EdicaoService service) {
        this.service = service;
    }

    @GetMapping("/livro/{idLivro}")
    public List<Edicao> buscarPorLivro(@PathVariable Long idLivro) {
        return service.buscarPorLivro(idLivro);
    }

    @GetMapping
    public List<Edicao> listarTodas() {
     return service.listarTodas();
    }
}
