package com.litfeed.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.litfeed.backend.entity.Genero;
import com.litfeed.backend.repository.GeneroRepository;

@Service
public class GeneroService {

    private final GeneroRepository repository;

    public GeneroService(GeneroRepository repository) {
        this.repository = repository;
    }

    public List<Genero> listarGeneros() {
        return repository.findAll();
    }
}