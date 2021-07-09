package com.project.todolist.domain.acount.service;

import com.project.todolist.domain.acount.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Autowired
    MemberMapper mapper;
}
