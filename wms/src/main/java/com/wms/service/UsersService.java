package com.wms.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wms.entity.Users;

public interface UsersService extends IService<Users> {
    IPage pageCC(IPage<Users> page, Wrapper wrapper);
}
