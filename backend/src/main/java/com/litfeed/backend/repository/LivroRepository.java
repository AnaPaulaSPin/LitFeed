package com.litfeed.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.litfeed.backend.entity.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long> {
}
