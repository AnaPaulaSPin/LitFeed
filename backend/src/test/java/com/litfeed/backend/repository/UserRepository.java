package com.litfeed.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.litfeed.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);

}
