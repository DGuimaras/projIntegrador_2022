package com.example.demo.models;
import java.util.Date;
import org.springframework.context.annotation.Primary;

import javax.persistence.*;

@Entity
@Table
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private String body;
    private int tag_id;
    private Date data_inscr;
    private boolean active;

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public Date getData_inscr() {
        return data_inscr;
    }

    public void setData_inscr(Date data_inscr) {
        this.data_inscr = data_inscr;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
