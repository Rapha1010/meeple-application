package com.br.meepleapi.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.meepleapi.dtos.MeeplePointDto;
import com.br.meepleapi.dtos.UserDto;
import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.services.UserService;

@RestController
@RequestMapping(value = "/meeple-api/users")
public class UserController {
	
	private UserService userService;
	
	UserController(UserService userService) {
		this.userService = userService; 
	}
	
	@GetMapping
	public ResponseEntity<List<UserModel>> getUserList() {
		return ResponseEntity.ok().body(userService.findAll());
	}	
	
	@GetMapping("/{id}")
	public ResponseEntity<UserModel> getUserById(@PathVariable UUID id) {
		return ResponseEntity.ok().body(userService.findById(id).get());
	}
	
	@GetMapping("/signin/{email}/{password}")
	public ResponseEntity<Object> signinUser(@PathVariable String email, @PathVariable String password) {
		
		Optional<UserModel> userOptional = userService.findByEmailAndPassword(email, password);
		if (!userOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("user is not correct");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(userService.findByEmailAndPassword(email, password).get());
	}
	
	@PostMapping("/signup")
	public ResponseEntity<Object> saveUser(@RequestBody @Valid UserDto obj){
		UserModel userModel = new UserModel();	
		BeanUtils.copyProperties(obj, userModel);
		
		userModel.setCreationDate(LocalDateTime.now(ZoneId.of("UTC")));
		userModel.setLastUpdateDate(LocalDateTime.now(ZoneId.of("UTC")));
		
		userService.save(userModel);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable UUID id) {
		userService.delete(id);
		return  ResponseEntity.status(HttpStatus.OK).build();
	}
	
	@PutMapping("/{userId}")
	public ResponseEntity<Object> putPointByPointId(@PathVariable UUID userId, @RequestBody UserDto obj) {
		
		Optional<UserModel> userOptional = userService.findById(userId);
		if (!userOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Not Found");
		}
		
		UserModel userModel =  userOptional.get();
		
		BeanUtils.copyProperties(obj, userModel);
		userModel.setLastUpdateDate(LocalDateTime.now(ZoneId.of("UTC")));
		
		userService.save(userModel);
		
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
}
