package com.example.demo.Controller;

import com.example.demo.Entities.Review;
import com.example.demo.Repositories.ReviewRepo;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/reviews")
@AllArgsConstructor
public class ReviewController
{
    private ReviewRepo reviewRepo;

    @GetMapping("/{id}")
    public ResponseEntity<List<Review>> getReviews(@PathVariable("id") int id)
    {
        List<Review> review = reviewRepo.findAll().stream().filter(rev -> rev.getBookId() == id).toList();
        return ResponseEntity.ok().body(review);
    }

    @PostMapping()
    public ResponseEntity<Review> createReview(@Valid @RequestBody Review review)
    {
        Review reviewAdded = reviewRepo.save(review);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(reviewAdded.getId()).toUri();
        return ResponseEntity.ok().location(location).body(reviewAdded);
    }
}
