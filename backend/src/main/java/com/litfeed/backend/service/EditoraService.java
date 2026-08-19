package com.litfeed.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.litfeed.backend.entity.Editora;
import com.litfeed.backend.repository.EditoraRepository;

@Service
public class EditoraService {
    private final EditoraRepository repository;

    public EditoraService(EditoraRepository repository) {
        this.repository = repository;
    }

    public List<Editora> listarEditoras(){
      return repository.findAll();
    }

    public Optional<Editora> buscarPorId(Long id) {
      return repository.findById(id);
    }

}
