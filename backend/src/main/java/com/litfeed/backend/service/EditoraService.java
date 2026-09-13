package com.litfeed.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.litfeed.backend.dto.EditoraComLivrosEEdicoesDTO;
import com.litfeed.backend.entity.Editora;
import com.litfeed.backend.entity.Edicao;
import com.litfeed.backend.entity.Livro;
import com.litfeed.backend.repository.EditoraRepository;
import com.litfeed.backend.repository.EdicaoRepository;
import com.litfeed.backend.repository.LivroRepository;

@Service
public class EditoraService {

    private final EditoraRepository repository;
    private final LivroRepository livroRepository;
    private final EdicaoRepository edicaoRepository;

    public EditoraService(
            EditoraRepository repository,
            LivroRepository livroRepository,
            EdicaoRepository edicaoRepository) {

        this.repository = repository;
        this.livroRepository = livroRepository;
        this.edicaoRepository = edicaoRepository;
    }

    public List<Editora> listarEditoras() {
        return repository.findAll();
    }

    public Optional<Editora> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public EditoraComLivrosEEdicoesDTO buscarEditoraComLivrosEEdicoes(Long id) {

        Editora editora = repository.findById(id)
                .orElse(null);

        if (editora == null) {
            return null;
        }

        List<Livro> livros = livroRepository.findByEditoraId(id);

        List<Edicao> edicoes = livros.stream()
                .flatMap(livro -> edicaoRepository.findByLivroId(livro.getId()).stream())
                .toList();

        return new EditoraComLivrosEEdicoesDTO(
                editora,
                livros,
                edicoes
        );
    }
}