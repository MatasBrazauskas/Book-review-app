package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity @Table(name = "books")
@NoArgsConstructor @AllArgsConstructor
public class Book
{
    @Id @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Setter @Getter
    @Column(name = "title", nullable = false)
    private String title;

    @Setter @Getter
    @Column(name = "author", nullable = false)
    private String author;

    @Setter @Getter
    @Column(name = "page_count", nullable = false)
    private long pageCount;

    @Setter @Getter
    @Column(name = "content", nullable = false)
    private String content;

    @Setter @Getter
    @Column(name = "publish_date", nullable = false)
    private LocalDate publishDate;

    @Setter @Getter
    @Column(name = "addition_date", nullable = false)
    private LocalDate additionDate;
}
