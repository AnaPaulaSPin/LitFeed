package com.litfeed.backend.service;

import org.springframework.stereotype.Service;

import com.litfeed.backend.entity.User;
import com.litfeed.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public void cadastrar(User user) {

        if (repository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("E-mail já cadastrado.");
        }

        if (repository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Nome de usuário já cadastrado.");
        }


        repository.save(user);
    }

}
