package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.*;

import java.time.LocalDate;

@Entity @Table(name = "books")
@NoArgsConstructor @AllArgsConstructor
public class Book
{
    @Id @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Setter @Getter
    @Column(name = "title", nullable = false, unique = true)
    @NotBlank(message = "Enter a title") @Size(min = 1, max = 255, message = "Title must be between 1 and 255 characters")
    private String title;

    @Setter @Getter
    @Column(name = "author", nullable = false)
    @NotBlank(message = "Enter author with name") @Size(min = 1, max = 255, message = "Author name must be between 1 and 255 characters")
    private String author;

    @Setter @Getter
    @Column(name = "page_count", nullable = false)
    @Min(value = 1, message = "Page count must be greater than 0")
    private long pageCount;

    @Setter @Getter
    @Column(name = "content", nullable = false)
    @NotBlank(message = "Enter some content") @Size(min = 1, max = 510, message = "Content must be between 1 and 510 characters")
    private String content;

    @Setter @Getter
    @Column(name = "publish_date", nullable = false)
    @PastOrPresent(message = "Publish date must be in the past")
    private LocalDate publishDate;

    @Setter @Getter
    @Column(name = "addition_date", nullable = false)
    @FutureOrPresent(message = "Addition date must be in the future")
    private LocalDate additionDate;
}
