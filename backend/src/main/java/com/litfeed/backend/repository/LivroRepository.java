package com.litfeed.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.litfeed.backend.entity.Autor;
import com.litfeed.backend.entity.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {

    Optional<Livro> findByTitulo(String titulo);
    
    List<Livro> findByAutor(Autor autor);
    
    List<Livro> findByAutorId(Long autorId);

}
