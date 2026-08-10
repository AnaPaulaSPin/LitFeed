use litfeed_base;

CREATE TABLE Usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    foto_perfil VARCHAR(255),
    banner VARCHAR(255),
    biografia VARCHAR(255)
);

CREATE TABLE Autor (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Editora (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Genero (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Livro (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    isbn VARCHAR(20) UNIQUE,
    sinopse TEXT,
    capa VARCHAR(255),
    autor_id BIGINT NOT NULL,
    genero_id BIGINT NOT NULL,

    CONSTRAINT id_autor
        FOREIGN KEY (autor_id)
        REFERENCES autor(id),

    CONSTRAINT id_genero
        FOREIGN KEY (genero_id)
        REFERENCES Genero(id)
);
CREATE TABLE Edicao (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    livro_id BIGINT NOT NULL,
    editora_id BIGINT NOT NULL,
    capa VARCHAR(255),
    total_paginas INT NOT NULL,
    ano INT NOT NULL,

    CONSTRAINT id_livro
        FOREIGN KEY (livro_id)
        REFERENCES livro(id),

    CONSTRAINT id_editora
        FOREIGN KEY (editora_id)
        REFERENCES editora(id)
);
