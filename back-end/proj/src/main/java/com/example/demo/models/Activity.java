package com.example.demo.models;
import java.util.Date;
import java.util.Objects;

import org.springframework.context.annotation.Primary;

import javax.persistence.*;

@Entity
@Table
public class Activity {
    private  @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
    private String title;
    private String body;
    private int tag_id;
    private boolean active;


    public Activity() {

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Activity event = (Activity) o;
        return Objects.equals(id, event.id) &&
                Objects.equals(title, event.title) &&
                Objects.equals(body, event.body) &&
                Objects.equals(tag_id, event.tag_id) &&
                Objects.equals(active, event.active);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, title, body, tag_id, active);
    }

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

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public int getTag_id() {
        return tag_id;
    }

    public void setTag_id(int tag_id) {
        this.tag_id = tag_id;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    @Override
    public String toString() {
        return "Activity{" +
                "id=" + id +
                ", title ='" + title + '\'' +
                '}';
    }
}


