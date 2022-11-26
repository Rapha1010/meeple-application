package com.br.meepleapi.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class MeeplePointDto {
	
	@NotNull
	private float point;
	@NotBlank
	private String obs;


}
