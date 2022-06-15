package com.example.demo;

import com.example.demo.models.MyUserDetails;

public class Session {
    private MyUserDetails info;
    private static Session single_instance = null;
    private Session() {}
    public static Session getInstance() {
        if (single_instance == null)
            single_instance = new Session();
        return single_instance;
    }
    public MyUserDetails getInfo() {
        return info;
    }
    public void setInfo(MyUserDetails info) {
        this.info = info;
    }
}
