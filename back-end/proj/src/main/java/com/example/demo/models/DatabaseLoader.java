package com.example.demo.models;

import com.example.demo.ArtcleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final ArtcleRepo repository;


    @Autowired
    public DatabaseLoader(ArtcleRepo repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Article art1= new Article();
        art1.setauthor("Quadro");
        art1.setDescription("paisagens parque da cidade");
        art1.setCategory("Pintura");
        art1.setprice(10.0);
        art1.setauthor("João Paulo");
       // this.repository.save(art1);
    }
}