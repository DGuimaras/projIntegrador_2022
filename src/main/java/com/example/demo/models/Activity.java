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
    private Date data_inscr;
    private boolean active;

    private Activity() {}

    public Activity(String title, String body, int tag_id, Date data_inscr,
                    boolean active) {
        this.title = title;
        this.body = body;
        this.tag_id = tag_id;
        this.data_inscr = data_inscr;
        this.active = active;
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
                Objects.equals(data_inscr, event.data_inscr) &&
                Objects.equals(active, event.active);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, title, body, tag_id, data_inscr, active);
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

    @Override
    public String toString() {
        return "Activity{" +
                "id=" + id +
                ", title ='" + title + '\'' +
                '}';
    }
}


