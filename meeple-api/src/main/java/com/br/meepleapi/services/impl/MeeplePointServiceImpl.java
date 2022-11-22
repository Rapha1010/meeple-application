package com.br.meepleapi.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.repositories.MeeplePointRepository;
import com.br.meepleapi.services.MeeplePointService;

@Service
public class MeeplePointServiceImpl implements MeeplePointService {
	
	private MeeplePointRepository meeplePointRepository;
	
	MeeplePointServiceImpl(MeeplePointRepository meeplePointRepository) {
		this.meeplePointRepository = meeplePointRepository;
	}

	@Override
	public void save(MeeplePointModel meeplePoint) {
		meeplePointRepository.save(meeplePoint);
	}

	@Override
	public List<MeeplePointModel> findAll() {
		return meeplePointRepository.findAll();
	}

	@Override
	public List<MeeplePointModel> findAllByUser(UserModel user) {
		return meeplePointRepository.findAllByUser(user);
	}

}
