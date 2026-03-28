package com.example.helloworld.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.helloworld.entity.helloworldEntity;

public interface helloworldRepository extends JpaRepository<helloworldEntity,Long>{

}
