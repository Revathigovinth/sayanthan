package com.example.helloworld.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@NoArgsConstructor   // 👈 IMPORTANT
@AllArgsConstructor
@Entity
@Table(name = "helloworld")
public class helloworldEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
}
