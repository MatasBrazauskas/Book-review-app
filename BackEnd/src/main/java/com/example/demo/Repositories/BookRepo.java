package com.example.demo.Repositories;

import com.example.demo.Entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Book, Long>
{
}
