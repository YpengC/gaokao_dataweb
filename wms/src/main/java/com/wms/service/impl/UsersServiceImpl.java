package com.wms.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wms.entity.Users;
import com.wms.mapper.UsersMapper;
import com.wms.service.UsersService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UsersServiceImpl extends ServiceImpl<UsersMapper, Users> implements UsersService {

    @Resource
    private UsersMapper usersMapper;

    @Override
    public IPage pageCC(IPage<Users> page, Wrapper wrapper) {
        return usersMapper.pageCC(page,wrapper);
    }
}
