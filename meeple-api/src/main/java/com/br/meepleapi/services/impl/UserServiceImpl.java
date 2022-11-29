package com.br.meepleapi.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.repositories.MeeplePointRepository;
import com.br.meepleapi.repositories.UserRepository;
import com.br.meepleapi.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	private UserRepository userRepository;
	
	private MeeplePointRepository meeplePointRepository;
	
	UserServiceImpl(UserRepository userRepository, MeeplePointRepository meeplePointRepository) {
		this.userRepository = userRepository;
		this.meeplePointRepository = meeplePointRepository;
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
	@Transactional
	public void delete(UUID id) {
		meeplePointRepository.deleteByUser(this.findById(id).get());
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
