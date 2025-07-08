package com.example.demo.Repositories;

import com.example.demo.Entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepo extends JpaRepository<Book, Long>
{
    public Optional<Book> findByTitle(String title);
}
