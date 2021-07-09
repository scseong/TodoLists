package com.project.todolist.domain.project.controller;

import com.project.todolist.domain.project.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/category")
@RestController
public class CategoryController {

    @Autowired
    CategoryService service;

    @PostMapping
    public void addCategory(){
//TODO:여기부터
    }
}
