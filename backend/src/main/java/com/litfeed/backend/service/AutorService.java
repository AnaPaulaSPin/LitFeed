package com.litfeed.backend.service;

import java.util.List;

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

}
