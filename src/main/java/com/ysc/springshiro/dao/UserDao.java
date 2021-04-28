package com.ysc.springshiro.dao;

import com.ysc.springshiro.entity.SysUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<SysUser, Integer> {
    //按照名字查找user
    public SysUser findSysUserByUsername(String username);
}
