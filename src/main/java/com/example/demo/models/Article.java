package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table
public class Article {

    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
    private String title;
    private String description;
    private String category;
    private double price;
    private String author;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getdescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory (String category){
        return category;
    }

    public void setCategory (String category){
        this.category = category;
    }

    public double getprice (double price){
        return price;
    }

    public void setprice (double price){
        this.price = price;
    }

    public String getauthor (String author){
        return author;
    }

    public void setauthor (String author){
        this.author = author;
    }

}

