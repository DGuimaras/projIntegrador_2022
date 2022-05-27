package com.example.demo;

import com.example.demo.models.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class HomeResource {
    private UserRepository userRepository;


    @GetMapping("/")
    public String home() {
        return ("<h1>Welcome</h1>");
    }

    @GetMapping("/user")
    public String user() {
        return ("<h1>Welcome User</h1>");
    }
    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody
    String addNewUser (@RequestParam String name, @RequestParam String email) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        User n = new User();
        n.setUserName("name");
        n.setPassword("email");
        userRepository.save(n);
        return "Saved";
    }
    @GetMapping("/admin")
    public String admin() {
        return ("<h1>Welcome Admin</h1>");
    }
}

