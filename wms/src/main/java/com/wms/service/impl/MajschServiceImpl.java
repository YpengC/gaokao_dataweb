package com.wms.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wms.entity.Majsch;
import com.wms.mapper.MajschMapper;
import com.wms.service.MajschService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MajschServiceImpl extends ServiceImpl<MajschMapper, Majsch> implements MajschService {

    @Resource
    private MajschMapper majschMapper;

    @Override
    public IPage pageCC(IPage<Majsch> page, Wrapper wrapper) {
        return majschMapper.pageCC(page,wrapper);
    }

    public IPage pageSchool(IPage<Majsch> page, Wrapper wrapper) {
        return majschMapper.pageSchool(page,wrapper);
    }

    public IPage pageMajor(IPage<Majsch> page, Wrapper wrapper) {
        return majschMapper.pageMajor(page,wrapper);
    }
}
