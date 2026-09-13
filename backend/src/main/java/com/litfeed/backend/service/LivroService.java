package com.litfeed.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.litfeed.backend.dto.LivroComEdicoesDTO;
import com.litfeed.backend.entity.Autor;
import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.entity.Livro;
import com.litfeed.backend.repository.EdicaoRepository;
import com.litfeed.backend.repository.LivroRepository;

@Service
public class LivroService {

    private final LivroRepository repository;
    private final EdicaoRepository edicaoRepository;

    public LivroService(LivroRepository repository, EdicaoRepository edicaoRepository) {
        this.repository = repository;
        this.edicaoRepository = edicaoRepository;
    }

    public List<Livro> listarLivros() {
        return repository.findAll();
    }

    public LivroComEdicoesDTO buscarPorNome(String nome) {
     Livro livro = repository.findByTitulo(nome)
            .orElse(null);

     if (livro == null) {
        return null;
     }

     List<Edicao> edicoes = edicaoRepository.findByLivroId(livro.getId());

     return new LivroComEdicoesDTO(livro, edicoes);
   }

    public List<Livro> listarLivrosPorAutor(Autor autor) {
        return repository.findByAutor(autor);
    }

    public List<Livro> listarLivrosPorAutor(Long autorId) {
        return repository.findByAutorId(autorId);
    } 

    public List<Livro> listarLivrosPorEditora(Long editoraId) {
        return repository.findByEditoraId(editoraId);
    }

    
}
