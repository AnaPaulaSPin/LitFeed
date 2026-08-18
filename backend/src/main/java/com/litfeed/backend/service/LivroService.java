package com.litfeed.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.litfeed.backend.entity.Autor;
import com.litfeed.backend.entity.Livro;
import com.litfeed.backend.repository.LivroRepository;

@Service
public class LivroService {

    private final LivroRepository repository;

    public LivroService(LivroRepository repository) {
        this.repository = repository;
    }

    public List<Livro> listarLivros() {
        return repository.findAll();
    }

    public Livro buscarPorNome(String nome) {
        return repository.findByTitulo(nome)
                .orElse(null);
    }

    public List<Livro> listarLivrosPorAutor(Autor autor) {
        return repository.findByAutor(autor);
    }

    public List<Livro> listarLivrosPorAutor(Long autorId) {
        return repository.findByAutorId(autorId);
    } 
}
