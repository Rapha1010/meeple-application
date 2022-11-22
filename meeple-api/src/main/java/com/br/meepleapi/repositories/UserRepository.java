package com.br.meepleapi.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.meepleapi.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, UUID>{

}
