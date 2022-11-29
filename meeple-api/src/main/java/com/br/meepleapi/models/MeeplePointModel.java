package com.br.meepleapi.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
public class MeeplePointModel implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "point_id")
	private UUID pointId;
	@Column(name = "point")
	private float point;
	@Column(name = "obs")
	private String obs;
	
	@Column(nullable = false)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
	private LocalDateTime creationDate;
	
	@Column(nullable = false)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
	private LocalDateTime lastUpdateDate;
	
	@ManyToOne(optional = false)
	private UserModel user;

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MeeplePointModel other = (MeeplePointModel) obj;
		return Objects.equals(user, other.user);
	}

	@Override
	public int hashCode() {
		return Objects.hash(user);
	}
}
