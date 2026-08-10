package com.litfeed.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
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
@Table(name = "Publicacao")
@Getter
@Setter
public class Publicacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "idUsuario", nullable = false)
    private User usuario;

    @ManyToOne
    @JoinColumn(name = "idEdicao")
    private Edicao edicao;

    @ManyToOne
    @JoinColumn(name = "idGenero")
    private Genero genero;

    private String titulo;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String conteudo;

    private String midia;

    @Column(name = "data_criacao")
    private LocalDateTime dataCriacao;

}
