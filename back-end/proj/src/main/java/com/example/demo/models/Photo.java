package com.example.demo.models;

import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

public class Photo implements Serializable {
    private long lastModified;
    private String name;
    private long size;
    private String type;
    private MultipartFile file;

    public Photo(long lastModified, String name, long size, String type, MultipartFile file){
    }
}
