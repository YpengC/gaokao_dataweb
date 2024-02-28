package com.wms.service;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wms.entity.Strategy;

public interface StrategyService extends IService<Strategy> {
    IPage pageCC(IPage<Strategy> page, Wrapper wrapper);
}
