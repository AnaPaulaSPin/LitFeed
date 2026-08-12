package com.litfeed.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.litfeed.backend.entity.Edicao;

public interface EdicaoRepository extends JpaRepository<Edicao, Long> {

    List<Edicao> findByLivroId(Long idLivro);

}
