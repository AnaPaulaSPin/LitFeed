package com.litfeed.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.litfeed.backend.entity.Editora;
import com.litfeed.backend.service.EditoraService;


@RestController
@RequestMapping("editoras")
public class EditoraController {
    private final EditoraService service;

    public EditoraController(EditoraService service) {
        this.service = service;
    }

    @GetMapping()
    public List<Editora> listarEditoras() {
      return service.listarEditoras();
    }

    @GetMapping("/{id}")
    public Optional<Editora> buscarPorId(@PathVariable Long id) {
      return service.buscarPorId(id);
    }

}
