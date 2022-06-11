package com.example.demo;

import com.example.demo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.json.simple.JSONObject;

import java.util.Optional;

@Controller // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class MainController {
    @Autowired
    private UserRepository userRepository;
    private User n= new User();
    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (@RequestBody JSONObject user_data) {
        String username = (String) user_data.get("username");
        String pass = (String) user_data.get("password");
        n.setUserName(username);
        n.setPassword(pass);
        n.setRoles("ROLE_USER");
        n.setActive(true);
        userRepository.save(n);

        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path="/sessionInfo")
    public @ResponseBody Optional<User> getUserInfo() {
        if(Session.getInstance().getInfo() == null) return Optional.empty();
        return userRepository.findByUserName(Session.getInstance().getInfo().getUsername());
    }

   /* @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers(Model model) {
        model.addAttribute("users", userRepository.findAll());
        return userRepository.findAll();
    }*/
}