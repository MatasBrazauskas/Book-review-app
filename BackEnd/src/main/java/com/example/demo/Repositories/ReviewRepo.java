package com.example.demo.Repositories;

import com.example.demo.Entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review, Long>
{
}
