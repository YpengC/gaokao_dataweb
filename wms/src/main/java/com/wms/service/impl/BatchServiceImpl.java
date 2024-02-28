package com.wms.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wms.entity.Batch;
import com.wms.mapper.BatchMapper;
import com.wms.service.BatchService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class BatchServiceImpl extends ServiceImpl<BatchMapper,Batch> implements BatchService {

    @Resource
    private BatchMapper batchMapper;

    @Override
    public IPage pageCC(IPage<Batch> page, Wrapper wrapper) {
        return batchMapper.pageCC(page,wrapper);
    }
}
