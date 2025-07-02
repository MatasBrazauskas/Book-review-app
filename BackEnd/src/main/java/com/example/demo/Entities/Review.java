package com.example.demo.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Table(name = "reviews")
@NoArgsConstructor @AllArgsConstructor
public class Review
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Setter @Getter
    @Column(name = "book_id", nullable = false)
    private long bookId;

    @Setter @Getter
    @Column(name = "reviewer_name", length = 255, nullable = false)
    private String reviewerName;

    @Setter @Getter
    @Column(name = "content", nullable = false)
    private String content;

    @Setter @Getter
    @Column(name = "rating")
    private float rating;
}
