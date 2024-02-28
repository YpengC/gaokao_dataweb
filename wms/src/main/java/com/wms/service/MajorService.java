package com.wms.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wms.entity.Major;

public interface MajorService extends IService<Major> {
    IPage pageCC(IPage<Major> page, Wrapper wrapper);
}
