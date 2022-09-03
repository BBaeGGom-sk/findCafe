package com.cafeproject.findcafe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing // auditing 활성화
@SpringBootApplication
public class FindCafeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FindCafeApplication.class, args);
	}

}
