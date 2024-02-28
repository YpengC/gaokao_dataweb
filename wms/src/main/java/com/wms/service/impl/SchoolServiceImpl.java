package com.wms.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wms.entity.School;
import com.wms.mapper.SchoolMapper;
import com.wms.service.SchoolService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;

@Service
public class SchoolServiceImpl extends ServiceImpl<SchoolMapper, School> implements SchoolService {

    @Resource
    private SchoolMapper schoolMapper;

    @Override
    public IPage pageC(IPage<School> page, Wrapper wrapper) {
        return schoolMapper.pageC(page,wrapper);
    }
}
