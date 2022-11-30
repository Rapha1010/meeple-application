package com.br.meepleapi.dtos;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class UserDto {
	
	@NotBlank
	private String name;
	@NotBlank
	private String password;
	@NotBlank
	private String email;
	
	private boolean admin;

}
