package com.ysc.springshiro.controller;

import com.ysc.springshiro.common.AjaxResult;
import com.ysc.springshiro.entity.SysUser;
import com.ysc.springshiro.service.UserService;
import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/system/user")
public class UserController  {
    @Autowired
    private UserService userService;

}
