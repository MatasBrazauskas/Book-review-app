package com.example.demo.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.*;

@Entity @Table(name = "reviews")
@NoArgsConstructor @AllArgsConstructor
public class Review
{
    @Id @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Setter @Getter
    @Column(name = "book_id", nullable = false)
    @Min(1)
    private long bookId;

    @Setter @Getter
    @Column(name = "reviewer_name", length = 255, nullable = false)
    @Size(min = 1, max = 255)
    private String reviewerName;

    @Setter @Getter
    @Column(name = "content", nullable = false)
    @Size(min = 1, max = 510)
    private String content;

    @Setter @Getter
    @Column(name = "rating")
    @Min(1) @Max(10)
    private float rating;
}
