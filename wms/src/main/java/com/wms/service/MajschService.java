package com.wms.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wms.entity.Majsch;

public interface MajschService extends IService<Majsch> {
    IPage pageCC(IPage<Majsch> page, Wrapper wrapper);

    IPage pageSchool(IPage<Majsch> page, Wrapper wrapper);

    IPage pageMajor(IPage<Majsch> page, Wrapper wrapper);
}
