package com.example.demo;

import com.example.demo.models.Article;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.apache.tomcat.util.http.fileupload.MultipartStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Objects;

@Controller // This means that this class is a Controller
@RequestMapping(path="/article") // This means URL's start with /demo (after Application path)
public class ArticleController {
    @Autowired
    private ArtcleRepo artcleRepo;
    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewArticle(@RequestPart("photo") MultipartFile article_data,
                                              @RequestPart("title") String title,
                                              @RequestPart("description") String description,
                                              @RequestPart("price") String price,
                                              @RequestPart("author") String author,
                                              @RequestPart("contatos") String contatos) throws IOException {
        Article n = new Article();
        n.setTitle(title);
        n.setDescription(description);
        n.setprice(Double.parseDouble(price));
        n.setauthor(author);
        n.setCategory("this_one");
        artcleRepo.save(n);
        File file = new File("./proj/src/main/resources/static/articles/" +n.getId()+ ".png");
        try(OutputStream outputStream = new FileOutputStream(file)){
            IOUtils.copy(article_data.getInputStream(), outputStream);
        } catch (IOException e) {}
        System.out.println(file);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Article> getAllArticles() {
        // This returns a JSON or XML with the Articles

        System.out.println(artcleRepo.findAll());
        return artcleRepo.findAll();
    }
}