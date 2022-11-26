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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.meepleapi.dtos.MeeplePointDto;
import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.repositories.RankInterface;
import com.br.meepleapi.services.MeeplePointService;
import com.br.meepleapi.services.UserService;

@RestController
@RequestMapping(value = "/meeple-api/point")
public class MeeplePointController {

	private MeeplePointService meeplePointService;
	private UserService userService;

	MeeplePointController(MeeplePointService meeplePointService, UserService userService) {
		this.meeplePointService = meeplePointService;
		this.userService = userService;
	}

	@PostMapping("/{userId}")
	public ResponseEntity<Object> savePoint(@PathVariable(value = "userId") UUID userId,
			@RequestBody @Valid MeeplePointDto obj) {
		MeeplePointModel meeplePoint = new MeeplePointModel();
		BeanUtils.copyProperties(obj, meeplePoint);

		Optional<UserModel> userOptional = userService.findById(userId);
		if (!userOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Not Found");
		}

		meeplePoint.setCreationDate(LocalDateTime.now(ZoneId.of("UTC")));
		meeplePoint.setLastUpdateDate(LocalDateTime.now(ZoneId.of("UTC")));

		meeplePoint.setUser(userOptional.get());

		meeplePointService.save(meeplePoint);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	@GetMapping
	public ResponseEntity<List<MeeplePointModel>> getPoint() {
		return ResponseEntity.ok().body(meeplePointService.findAll());
	}	
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<Object> getUserById(@PathVariable UUID userId) {
		
		Optional<UserModel> userOptional = userService.findById(userId);
		if (!userOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Not Found");
		}
		
		return ResponseEntity.ok().body(meeplePointService.findAllByUser(userOptional.get()));
	}
	
	@GetMapping("/rank")
	public ResponseEntity<List<RankInterface>> getMeepleRank() {
		List<RankInterface> rank = meeplePointService.getMeepleRank();
		System.out.println(rank);
		return ResponseEntity.ok().body(rank);
	}
	
	@PutMapping("/{pointId}")
	public ResponseEntity<Object> putPointByPointId(@PathVariable UUID pointId, @RequestBody MeeplePointDto obj) {
		
		Optional<MeeplePointModel> meeplePointModelOptional = meeplePointService.findById(pointId);
		if (!meeplePointModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Point Not Found");
		}
		
		MeeplePointModel meeplePointModel =  meeplePointModelOptional.get();
		
		BeanUtils.copyProperties(obj, meeplePointModel);
		meeplePointModel.setLastUpdateDate(LocalDateTime.now(ZoneId.of("UTC")));
		
		meeplePointService.save(meeplePointModel);
		
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	@GetMapping("/{pointId}")
	public ResponseEntity<Object> getPointByPointId(@PathVariable UUID pointId) {
		
		Optional<MeeplePointModel> meeplePointModelOptional = meeplePointService.findById(pointId);
		if (!meeplePointModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Point Not Found");
		}
	
		
		return ResponseEntity.ok().body(meeplePointModelOptional.get());
	}
	
	@DeleteMapping("/{pointId}")
	public ResponseEntity<Object> deletePointByPointId(@PathVariable UUID pointId) {
		
		Optional<MeeplePointModel> meeplePointModelOptional = meeplePointService.findById(pointId);
		if (!meeplePointModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Point Not Found");
		}
		
		meeplePointService.deleteById(pointId);
		
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
}
