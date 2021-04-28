package com.ysc.springshiro.controller;

import com.ysc.springshiro.common.AjaxResult;
import com.ysc.springshiro.common.BaseController;
import com.ysc.springshiro.entity.SysUser;
import com.ysc.springshiro.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController extends BaseController {
    @Autowired
    UserService userService;

    @GetMapping("/register")
    @ResponseBody
    public String register(String username, String password){
        SysUser user=new SysUser();
        String salt = new SecureRandomNumberGenerator().nextBytes().toString();// 生成盐,默认长度 16 位
        int times = 2;// 设置 hash 算法迭代次数
        user.setUsername(username);
        user.setSalt(salt);
        String encodedPassword = new SimpleHash("md5", password, salt, times).toString();// 得到 hash 后的密码
        user.setPassword(encodedPassword);
        try{
            userService.insertUser(user);
            return "成功";
        }catch (Exception e){
            return "失败";
        }
    }
    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @RequestMapping("/login")
    @ResponseBody
    public AjaxResult ajaxLogin(String username, String password) {
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        try {
            subject.login(token);
            return success();
        }catch (AuthenticationException e){
            return error("用户或密码错误");
        }
    }
    @GetMapping("/logout")
    public String logout() {
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "login";
    }

}
