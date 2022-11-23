package com.br.meepleapi.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.br.meepleapi.models.UserModel;

public interface UserService {

	List<UserModel> findAll();

	void save(UserModel userModel);

	void delete(UUID id);

	Optional<UserModel> findById(UUID id);

	UserModel findByEmailAndPassword(String email, String password);

}