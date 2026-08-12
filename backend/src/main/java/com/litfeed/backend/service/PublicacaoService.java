package com.litfeed.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.litfeed.backend.entity.Publicacao;
import com.litfeed.backend.repository.PublicacaoRepository;

@Service
public class PublicacaoService {

    private final PublicacaoRepository repository;

    public PublicacaoService(PublicacaoRepository repository) {
        this.repository = repository;
    }

    public List<Publicacao> listarPublicacoes() {
        return repository.findAll();
    }

    public Publicacao buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Publicação não encontrada"));
    }

    public Publicacao salvar(Publicacao publicacao) {
        return repository.save(publicacao);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}