package com.example.demo;

import com.example.demo.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ArtcleRepo extends CrudRepository<Article, Integer> {

}