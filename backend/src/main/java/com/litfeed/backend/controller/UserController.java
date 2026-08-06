package com.litfeed.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.litfeed.backend.dto.UserResponseDTO;
import com.litfeed.backend.entity.User;
import com.litfeed.backend.service.UserService;

@RestController
@RequestMapping("/usuarios")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public void listarUsuarios() {


    }

    @GetMapping("/{id}")
    public void buscarUsuario(Long id) {

    }

    @PostMapping
public ResponseEntity<UserResponseDTO> cadastrarUsuario(@RequestBody User user){

    UserResponseDTO usuario = service.cadastrar(user);

    return ResponseEntity.ok(usuario);
    
}

    @PutMapping("/{id}")
    public void atualizarUsuario(Long id) {

    }

    @DeleteMapping("/{id}")
    public void excluirUsuario(Long id) {

    }
}
