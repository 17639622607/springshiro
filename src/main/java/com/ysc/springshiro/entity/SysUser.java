package com.ysc.springshiro.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.Entity;
import javax.persistence.*;
@Data
@ToString
@Entity
@Table
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})
public class SysUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    private String username;
    private String password;
    private String salt;
    private Integer enabled;
}
