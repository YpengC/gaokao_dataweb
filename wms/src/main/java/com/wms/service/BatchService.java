package com.wms.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wms.entity.Batch;

public interface BatchService extends IService<Batch>{

    IPage pageCC(IPage<Batch> page, Wrapper wrapper);
}
