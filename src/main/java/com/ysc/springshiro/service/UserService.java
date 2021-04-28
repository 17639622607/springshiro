package com.ysc.springshiro.service;

import com.ysc.springshiro.dao.UserDao;
import com.ysc.springshiro.entity.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    //添加或者编辑user
    public void insertUser(SysUser user){
        //save() 方法的作用是，当主键存在时更新数据，当主键不存在时插入数据。
        userDao.delete(user);
        userDao.save(user);
    }
    //查询集合
    public List<SysUser> findAllUser(){
        return userDao.findAll();
    }
    //按照名字查找用户
    public SysUser findUserByUsername(String username){
        return userDao.findSysUserByUsername(username);
    }
}
