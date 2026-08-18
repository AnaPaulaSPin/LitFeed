package com.litfeed.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.litfeed.backend.entity.Autor;
import com.litfeed.backend.repository.AutorRepository;

@Service
public class AutorService {
  private final AutorRepository repository;

    public AutorService(AutorRepository repository) {
        this.repository = repository;
    }

   public List<Autor> listarAutores(){
     return repository.findAll();
   }
   
   public Optional<Autor> buscarPorId(Long id) {
     return repository.findById(id);
   }

}
