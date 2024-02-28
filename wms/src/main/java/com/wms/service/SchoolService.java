package com.wms.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wms.entity.School;

public interface SchoolService extends IService<School> {

    IPage pageC(IPage<School> page, Wrapper wrapper);
}
