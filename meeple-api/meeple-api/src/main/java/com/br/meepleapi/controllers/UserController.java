package com.br.meepleapi.controllers;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.meepleapi.dtos.UserDto;
import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.services.UserService;

@RestController
@RequestMapping(value = "/meeple-api")
public class UserController {
	
	private UserService userService;
	
	UserController(UserService userService) {
		this.userService = userService; 
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<UserModel>> getUserList() {
		return ResponseEntity.ok().body(userService.findAll());
	}	
	
	@GetMapping("/users/{id}")
	public ResponseEntity<UserModel> getUserById(@PathVariable UUID id) {
		return ResponseEntity.ok().body(userService.findById(id));
	}
	
	@PostMapping("/signup")
	public ResponseEntity<Object> saveUser(@RequestBody @Valid UserDto obj){
		UserModel userModel = new UserModel();	
		BeanUtils.copyProperties(obj, userModel);
		userService.save(userModel);
		return ResponseEntity.status(HttpStatus.OK).body("User signed success");
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable UUID id) {
		userService.delete(id);
		return  ResponseEntity.status(HttpStatus.OK).body("User deleted success");
	}
	
}
