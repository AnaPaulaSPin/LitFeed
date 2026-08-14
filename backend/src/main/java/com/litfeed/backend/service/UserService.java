package com.litfeed.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.litfeed.backend.dto.LoginDTO;
import com.litfeed.backend.dto.UserResponseDTO;
import com.litfeed.backend.dto.UserUptadeDTO;
import com.litfeed.backend.entity.User;
import com.litfeed.backend.exception.BusinessException;
import com.litfeed.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repository;


    public UserService(UserRepository repository){
        this.repository = repository;
    }

    public List<UserResponseDTO> listaTodos() {
      return repository.findAll()
        .stream()
        .map(user -> new UserResponseDTO(
            user.getId(),
            user.getNome(),
            user.getUsername(),
            user.getEmail(),
            user.getFotoPerfil(),
            user.getBanner(),
            user.getBiografia()
         ))
         .toList();
      }

 public UserResponseDTO cadastrar(User user){

    if(repository.existsByEmail(user.getEmail())){
        throw new BusinessException("E-mail já cadastrado.");
    }

    if(repository.existsByUsername(user.getUsername())){
        throw new BusinessException("Nome de usuário já cadastrado.");
    }


    user.setFotoPerfil("assets/Padrao/UserPadrao.webp");
    user.setBanner("assets/Padrao/FundoPadrao.png");
    user.setBiografia("Um leitor(a) que entrou no LitFeed para compartilhar suas leituras e descobertas literárias.");


    User usuarioSalvo = repository.save(user);


    return new UserResponseDTO(
        usuarioSalvo.getId(),
        usuarioSalvo.getNome(),
        usuarioSalvo.getUsername(),
        usuarioSalvo.getEmail(),
        usuarioSalvo.getFotoPerfil(),
        usuarioSalvo.getBanner(),
        usuarioSalvo.getBiografia()
    );
  }

 public UserResponseDTO login(LoginDTO dados) {

    User user;

    if (dados.usernameOrEmail().contains("@")) {

        user = repository.findByEmail(dados.usernameOrEmail())
                .orElseThrow(() ->
                        new BusinessException("Usuário não encontrado")
                );

    } else {

        user = repository.findByUsername(dados.usernameOrEmail())
                .orElseThrow(() ->
                        new BusinessException("Usuário não encontrado")
                );

    }

    System.out.println("Senha banco: " + user.getSenha());
    System.out.println("Senha digitada: " + dados.password());
    if (!user.getSenha().equals(dados.password())) {
        throw new BusinessException("Senha incorreta");
    }


    return new UserResponseDTO(
            user.getId(),
            user.getNome(),
            user.getUsername(),
            user.getEmail(),
            user.getFotoPerfil(),
            user.getBanner(),
            user.getBiografia()
    );
}

  public UserResponseDTO atualizarUsuario(Long id, UserUptadeDTO dados) {
    boolean nenhumDadoAlterado =
            (dados.nome() == null || dados.nome().isBlank()) &&
            (dados.username() == null || dados.username().isBlank()) &&
            (dados.email() == null || dados.email().isBlank()) &&
            (dados.novaSenha() == null || dados.novaSenha().isBlank());


    if (nenhumDadoAlterado) {
        throw new RuntimeException("Nenhuma alteração foi informada.");
    }

    User usuario = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
            
    if(dados.novaSenha() != null && !dados.novaSenha().isEmpty()) {
        if(usuario.getSenha() == null || !usuario.getSenha().equals(dados.senha())) {
            throw new BusinessException("Senha atual incorreta");
        }
        usuario.setSenha(dados.novaSenha());
    } 

    if (!dados.nome().equals(usuario.getNome()) && !dados.nome().isBlank()) {
        usuario.setNome(dados.nome());
    }

    if (!dados.username().equals(usuario.getUsername()) && !dados.username().isBlank()) {
        usuario.setUsername(dados.username());
    }

    if (!dados.email().equals(usuario.getEmail()) && !dados.email().isBlank()) {
        usuario.setEmail(dados.email());
    }

    if(!dados.biografia().equals(usuario.getBiografia())) {
        if(dados.biografia() == null || dados.biografia().isBlank()) {
            usuario.setBiografia("Um leitor(a) que entrou no LitFeed para compartilhar suas leituras e descobertas literárias.");
        } else {
            usuario.setBiografia(dados.biografia());
        }
        System.out.println("Biografia atualizada: " + usuario.getBiografia());
    }

    if (dados.fotoPerfil() != null && !dados.fotoPerfil().equals(usuario.getFotoPerfil())) {
        usuario.setFotoPerfil("assets/DataUsers/icons/" + dados.fotoPerfil());
    }

    if (dados.banner() != null && !dados.banner().equals(usuario.getBanner())) {
            usuario.setBanner("assets/DataUsers/banner/" + dados.banner());
   } 

    repository.save(usuario);

    return new UserResponseDTO(
            usuario.getId(),
            usuario.getNome(),
            usuario.getUsername(),
            usuario.getEmail(),
            usuario.getFotoPerfil(),
            usuario.getBanner(),
            usuario.getBiografia()
    );
}


}