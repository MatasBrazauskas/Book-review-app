package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor @AllArgsConstructor
public class MainPageBooksDTO
{
    @Setter @Getter
    private long id;

    @Setter @Getter
    private String title;

    @Setter @Getter
    private String author;

    @Setter @Getter
    private LocalDate publish_date;
}
