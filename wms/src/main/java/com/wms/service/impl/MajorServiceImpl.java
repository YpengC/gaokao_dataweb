package com.wms.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wms.entity.Major;
import com.wms.mapper.MajorMapper;
import com.wms.service.MajorService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MajorServiceImpl extends ServiceImpl<MajorMapper, Major> implements MajorService {

    @Resource
    private MajorMapper majorMapper;
    @Override
    public IPage pageCC(IPage<Major> page, Wrapper wrapper) {
        return majorMapper.pageCC(page,wrapper);
    }
}
