package com.example.demo;

import com.example.demo.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeResource {
    private UserRepository userRepository;


    @GetMapping("/")
    public String home() {
        return "main_page";
    }
    @GetMapping("/about")
    public String about_page() { return "about"; }
    @GetMapping("/contacts")
    public String contacts_page() {
        return "contacts";
    }
    @GetMapping("/events")
    public String events_page() { return "events"; }
    @GetMapping("/login")
    public String login_page() { return "login"; }
    @GetMapping("/add_articles")
    public String add_article_page() { return "add_articles"; }
    @GetMapping("/profile")
    public String profile_page() { return "perfil"; }
    /*@GetMapping("/user")
    //public String user() {
    //    return ("<h1>Welcome User</h1>");
  //  }

    @GetMapping("/admin")
    public String admin() {
        return ("<h1>Welcome Admin</h1>");
    }*/
}

