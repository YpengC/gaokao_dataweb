package com.wms.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.wms.entity.Majsch;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface MajschMapper extends BaseMapper<Majsch> {
    IPage pageCC(IPage<Majsch> page, @Param(Constants.WRAPPER) Wrapper wrapper);

    IPage pageSchool(IPage<Majsch> page, @Param(Constants.WRAPPER) Wrapper wrapper);

    IPage pageMajor(IPage<Majsch> page, @Param(Constants.WRAPPER) Wrapper wrapper);
}
