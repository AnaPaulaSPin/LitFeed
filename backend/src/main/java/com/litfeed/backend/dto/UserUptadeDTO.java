package com.litfeed.backend.dto;

public record UserUptadeDTO(
        String nome,
        String username,
        String email,
        String fotoPerfil,
        String banner,
        String senha,
        String novaSenha,
        String biografia) {
    
}
