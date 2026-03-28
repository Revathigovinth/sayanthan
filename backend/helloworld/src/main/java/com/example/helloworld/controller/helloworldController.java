package com.example.helloworld.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.helloworld.entity.helloworldEntity;
import com.example.helloworld.repository.helloworldRepository;
import com.example.model.helloworld;

@RestController
@RequestMapping("/api/hello")
public class helloworldController {
	@Autowired
	private helloworldRepository helloworldRepository;
	
    @GetMapping
    public List<helloworldEntity> getHello() {
//        return Arrays.asList(
//                new helloworld(1L, "Rev", "rev@gmail.com"),
//                new helloworld(2L, "Prav", "prav@gmail.com")
//      );
    	return helloworldRepository.findAll();
    	
    }

    
    
}
