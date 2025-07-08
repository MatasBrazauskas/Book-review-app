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
    @Column(name = "title", nullable = false)
    @NotBlank @Size(min = 1, max = 255)
    private String title;

    @Setter @Getter
    @Column(name = "author", nullable = false)
    @NotBlank @Size(min = 1, max = 255) @Pattern(regexp = ". .")
    private String author;

    @Setter @Getter
    @Column(name = "page_count", nullable = false)
    @Min(1)
    private long pageCount;

    @Setter @Getter
    @Column(name = "content", nullable = false)
    @NotBlank @Size(min = 1, max = 510)
    private String content;

    @Setter @Getter
    @Column(name = "publish_date", nullable = false)
    @PastOrPresent
    private LocalDate publishDate;

    @Setter @Getter
    @Column(name = "addition_date", nullable = false)
    @FutureOrPresent
    private LocalDate additionDate;
}
