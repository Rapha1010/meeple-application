package com.br.meepleapi.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.http.ResponseEntity;

import com.br.meepleapi.dtos.MeeplePointDto;
import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.repositories.RankInterface;

public interface MeeplePointService {
	
	void save(MeeplePointModel MeeplePoint);
	
	List<MeeplePointModel> findAll();

	List<MeeplePointModel> findAllByUser(UserModel userModel);

	List<RankInterface> getMeepleRank();

	Optional<MeeplePointModel> findById(UUID pointId);

	void deleteById(UUID pointId);

}
