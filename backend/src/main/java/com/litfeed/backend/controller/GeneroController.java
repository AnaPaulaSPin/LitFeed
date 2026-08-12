package com.litfeed.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.litfeed.backend.entity.Genero;
import com.litfeed.backend.service.GeneroService;

@RestController
@RequestMapping("/generos")
public class GeneroController {

    private final GeneroService service;

    public GeneroController(GeneroService service) {
        this.service = service;
    }

    @GetMapping
    public List<Genero> listarGeneros() {
        return service.listarGeneros();
    }
}