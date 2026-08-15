package com.litfeed.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.repository.EdicaoRepository;

@Service
public class EdicaoService {

    private final EdicaoRepository repository;

    public EdicaoService(EdicaoRepository repository) {
        this.repository = repository;
    }

    public List<Edicao> buscarPorLivro(Long idLivro) {
        return repository.findByLivroId(idLivro);
    }

    public List<Edicao> listarTodas() {
     return repository.findAll();
    }

    public Edicao buscarPorId(Long id) {
       return repository.getById(id);
    }
}
