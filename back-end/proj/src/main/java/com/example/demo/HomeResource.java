package com.example.demo;

import com.example.demo.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;

@RestController
public class HomeResource {
    private UserRepository userRepository;


    @GetMapping("/")
    public String home() {
        return ("/../pages/main_page.jsp");
    }

    @GetMapping("/piece")
    public String arte() {
        return ("/../pages/pieces.jsp");
    }

    @GetMapping("/user")
    public String user() {
        return ("<h1>Welcome User</h1>");
    }

    @GetMapping("/admin")
    public String admin() {
        return ("<h1>Welcome Admin</h1>");
    }
}

