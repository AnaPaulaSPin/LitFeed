package com.litfeed.backend.dto;

public record UserResponseDTO(
        Long id,
        String nome,
        String username,
        String email,
        String fotoPerfil,
        String banner,
        String biografia
) {}
