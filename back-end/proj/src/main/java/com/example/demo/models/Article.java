package com.example.demo.models;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity

@Table
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    private String title;
    private String description;
    private String category;
    private double price;
    private String author;



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Article ar = (Article) o;
        return Objects.equals(id, ar.id) &&
                Objects.equals(title, ar.title) &&
                Objects.equals(description, ar.description) &&
                Objects.equals(category, ar.category) &&
                Objects.equals(price, ar.price) &&
                Objects.equals(author, ar.author);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, category, price, author);
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public String getCategory (){
        return category;
    }

    public void setCategory (String category){
        this.category = category;
    }

    public double getprice (){
        return price;
    }

    public void setprice (double price){
        this.price = price;
    }

    public String getauthor (){
        return author;
    }

    public void setauthor (String author){
        this.author = author;
    }
    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", title ='" + title + '\'' +
                '}';
    }
}


