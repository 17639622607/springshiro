package com.ysc.springshiro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping("/index")
    public String index(){
        return "index";
    }
    @GetMapping("/system/main")
    public String main(){
        return "main";
    }
}
