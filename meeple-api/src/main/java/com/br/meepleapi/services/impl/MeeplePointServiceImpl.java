package com.br.meepleapi.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.br.meepleapi.dtos.MeeplePointDto;
import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.repositories.MeeplePointRepository;
import com.br.meepleapi.repositories.RankInterface;
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

	@Override
	public List<RankInterface> getMeepleRank() {
		return meeplePointRepository.getMeepleRank();
	}

	@Override
	public Optional<MeeplePointModel> findById(UUID pointId) {
		return meeplePointRepository.findById(pointId);
	}
	
	@Override
	public void deleteById(UUID pointId) {
		meeplePointRepository.deleteById(pointId);
	}
}
