package com.litfeed.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Edicao")
@Setter
@Getter 
public class Edicao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "livro_id", nullable = false)
    Livro livro;

    @ManyToOne
    @JoinColumn(name = "editora_id", nullable = false)
    Editora editora;

    String capa;
    Integer ano;
    Integer total_paginas;

}
