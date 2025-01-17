package com.microsoft.hackathon.copilotdemo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class DemoController {

    @GetMapping("/hello")
    public String hello(@RequestParam String key) {
        if ("world".equals(key)) {
            return "hello world";
        }
        return "hello";
    }
}