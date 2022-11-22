package com.br.meepleapi.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;

public interface MeeplePointRepository extends JpaRepository<MeeplePointModel, UUID>{
	
	List<MeeplePointModel> findAllByUser(UserModel userId);

}
