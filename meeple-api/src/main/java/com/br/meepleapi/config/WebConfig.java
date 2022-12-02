package com.br.meepleapi.config;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.br.meepleapi.models.UserModel;
import com.br.meepleapi.repositories.UserRepository;

@Configuration
@EnableWebMvc
public class WebConfig implements CommandLineRunner, WebMvcConfigurer   {
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
        	.allowCredentials(false)
            .allowedMethods("GET", "POST", "PUT", "DELETE");
    }

	@Override
	public void run(String... args) throws Exception {
		
		UserModel user = new UserModel("admin","rapha.tavares1010@gmail.com","123456",true, LocalDateTime.now(),LocalDateTime.now());
		
		 if (userRepository.findAll().isEmpty() == true) {
			 userRepository.save(user);
		 }
		
		
	}
	
	
	
	
	
}