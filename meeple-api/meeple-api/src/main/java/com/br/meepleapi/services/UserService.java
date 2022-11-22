package com.br.meepleapi.services;

import java.util.List;
import java.util.UUID;

import com.br.meepleapi.models.UserModel;

public interface UserService {

	List<UserModel> findAll();

	void save(UserModel userModel);

	void delete(UUID id);

	UserModel findById(UUID id);

}