package com.example.demo.Controller;

import com.example.demo.Entities.Book;
import com.example.demo.Repositories.BookRepo;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
@AllArgsConstructor
public class BookController
{
    private BookRepo bookRepo;

    @GetMapping("/get-books")
    public ResponseEntity<List<Book>> getBooks(@RequestParam(defaultValue = "") String book_title)
    {
        List<Book> books;
        if(!book_title.isEmpty())
            books = bookRepo.findAll().stream().filter(bk -> bk.getTitle().contains(book_title)).toList();
        else
            books = bookRepo.findAll();

        return ResponseEntity.ok().body(books);
    }

    @PostMapping()
    public ResponseEntity<Book> createBook(@RequestBody Book book)
    {
        System.out.println(book.getPublishDate());
        Book addiction = bookRepo.save(book);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(addiction.getId()).toUri();
        return ResponseEntity.created(location).body(addiction);
    }
}
