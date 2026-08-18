package com.litfeed.backend.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.litfeed.backend.entity.Autor;
import com.litfeed.backend.service.AutorService;

@RestController
@RequestMapping("autores")
public class AutorController {
    private final AutorService service;
    public AutorController(AutorService service) {
        this.service = service;
    }
    
    @GetMapping()
    public List<Autor> listarAutores() {
       return service.listarAutores();
    }
    
    @GetMapping("/{id}")
    public Optional<Autor> buscarPorId(@PathVariable Long id) {
       return service.buscarPorId(id);
    }
}
