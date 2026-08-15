package com.litfeed.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.litfeed.backend.entity.Publicacao;
import com.litfeed.backend.service.PublicacaoService;

@RestController
@RequestMapping("/publicacoes")
public class PublicacaoController {

    private final PublicacaoService service;

    public PublicacaoController(PublicacaoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Publicacao> listarPublicacoes() {
        return service.listarPublicacoes();
    }

    @GetMapping("/{id}")
    public Publicacao buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    public Publicacao salvar(@RequestBody Publicacao publicacao) {
        System.out.println("USUARIO: " + publicacao.getUsuario());
        return service.salvar(publicacao);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }

    @GetMapping("/usuario/{idUsuario}")
    public List<Publicacao> listarPorUsuario(@PathVariable Long idUsuario) {
     return service.listarPorUsuario(idUsuario);
    }


}