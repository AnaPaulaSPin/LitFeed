package com.litfeed.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.litfeed.backend.entity.Genero;

public interface GeneroRepository extends JpaRepository<Genero, Long> {
}