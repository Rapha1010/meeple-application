package com.br.meepleapi.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.repositories.UserRepository;
import com.br.meepleapi.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	private UserRepository userRepository;
	
	UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@Override
	public List<UserModel> findAll() {
		return userRepository.findAll();
	}
	
	@Override
	public void save(UserModel userModel) {
		userRepository.save(userModel);	
	}

	@Override
	public void delete(UUID id) {
		userRepository.deleteById(id);
	}

	@Override
	public Optional<UserModel> findById(UUID id) {
		return userRepository.findById(id);
	}

	@Override
	public Optional<UserModel> findByEmailAndPassword(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

}
