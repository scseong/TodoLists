package com.project.todolist.domain.acount.controller;

import com.project.todolist.domain.acount.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    @Autowired
    MemberService service;


}
