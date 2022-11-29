package com.br.meepleapi.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.meepleapi.models.MeeplePointModel;
import com.br.meepleapi.models.UserModel;

public interface MeeplePointRepository extends JpaRepository<MeeplePointModel, UUID>{
	
	List<MeeplePointModel> findAllByUser(UserModel userId);
	
	@Query(value = "SELECT user_model.name, sum(meeple_point_model.point) as points FROM public.user_model"
			+ "	inner join meeple_point_model ON meeple_point_model.user_user_id = user_model.user_id"
			+ "	group by user_model.name order by points desc", nativeQuery=true)
	List<RankInterface> getMeepleRank();

	void deleteByUser(UserModel user);


}
