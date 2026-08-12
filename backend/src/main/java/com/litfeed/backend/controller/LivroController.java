package com.litfeed.backend.controller;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.litfeed.backend.entity.Livro;
import com.litfeed.backend.service.LivroService;

@RestController
@RequestMapping("/livros")
public class LivroController {
    private final LivroService service;

    public LivroController(LivroService service) {
        this.service = service;
    }
    
    @GetMapping
    public List<Livro> listarLivros() {
        return service.listarLivros();
    }
    @GetMapping("/nome")
public Livro buscarPorNome(@RequestParam String nome) {
    return service.buscarPorNome(nome);
}
}
