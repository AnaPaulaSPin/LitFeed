package com.litfeed.backend.service;

import java.util.List;

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

}
