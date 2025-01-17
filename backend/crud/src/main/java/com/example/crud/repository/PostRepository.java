package com.example.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.crud.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}
