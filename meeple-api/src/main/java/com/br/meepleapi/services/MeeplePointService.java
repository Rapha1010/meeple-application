package com.br.meepleapi.services;

import java.util.List;
import java.util.UUID;

import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;

public interface MeeplePointService {
	
	void save(MeeplePointModel MeeplePoint);
	
	List<MeeplePointModel> findAll();

	List<MeeplePointModel> findAllByUser(UserModel userModel);

}
