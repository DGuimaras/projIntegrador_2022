package com.example.demo;

import com.example.demo.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtcleRepo extends JpaRepository<Article, Integer> {}