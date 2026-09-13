package com.litfeed.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.litfeed.backend.dto.AutorComLivrosEEdicoesDTO;
import com.litfeed.backend.entity.Autor;
import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.entity.Livro;
import com.litfeed.backend.repository.AutorRepository;
import com.litfeed.backend.repository.EdicaoRepository;
import com.litfeed.backend.repository.LivroRepository;

@Service
public class AutorService {
  private final AutorRepository repository;
  private final LivroRepository livroRepository;
  private final EdicaoRepository edicaoRepository;

    public AutorService(AutorRepository repository, LivroRepository livroRepository, EdicaoRepository edicaoRepository) {
        this.repository = repository;
        this.livroRepository = livroRepository;
        this.edicaoRepository = edicaoRepository;
    }

   public List<Autor> listarAutores(){
     return repository.findAll();
   }
   
   public Optional<Autor> buscarPorId(Long id) {
     return repository.findById(id);
   }

   public AutorComLivrosEEdicoesDTO buscarAutorComLivrosEEdicoes(Long id) {

        Autor autor = repository.findById(id)
                .orElse(null);

        if (autor == null) {
            return null;
        }

        List<Livro> livros = livroRepository.findByAutorId(id);

        List<Edicao> edicoes = livros.stream()
                .flatMap(livro -> edicaoRepository.findByLivroId(livro.getId()).stream())
                .toList();

        return new AutorComLivrosEEdicoesDTO(autor, livros, edicoes);
    }
}
