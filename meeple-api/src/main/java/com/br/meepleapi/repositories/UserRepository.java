package com.br.meepleapi.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.meepleapi.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, UUID>{

	Optional<UserModel> findByEmailAndPassword(String email, String password);

}
