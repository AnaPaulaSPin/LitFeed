package com.litfeed.backend.service;

import org.springframework.stereotype.Service;

import com.litfeed.backend.dto.UserResponseDTO;
import com.litfeed.backend.entity.User;
import com.litfeed.backend.exception.BusinessException;
import com.litfeed.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repository;


    public UserService(UserRepository repository){
        this.repository = repository;
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
    user.setBiografia("Escreva aqui um pouco sobre você");


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
}