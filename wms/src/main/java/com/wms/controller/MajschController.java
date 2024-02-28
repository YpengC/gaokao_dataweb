package com.wms.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.wms.common.QueryPageParam;
import com.wms.common.Result;
import com.wms.entity.Majsch;
import com.wms.service.MajschService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/majsch")
public class MajschController {

    @Autowired
    private MajschService majschService;



    @PostMapping("/listPageCC")
    public Result listPageCC(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String majorName = (String)param.get("majorName");

        Page<Majsch> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<Majsch> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(majorName) && !"null".equals(majorName)){
            lambdaQueryWrapper.like(Majsch::getMajorName,majorName);
        }


        IPage result = majschService.pageCC(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }

    @PostMapping("/listPageSchool")
    public Result listPageSchool(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String number = (String)param.get("number");

        Page<Majsch> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<Majsch> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(number) && !"null".equals(number)){
            lambdaQueryWrapper.like(Majsch::getNumber,number);
        }


        IPage result = majschService.pageSchool(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }

    @PostMapping("/listPageMajor")
    public Result listPageMajor(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String schoolName = (String)param.get("schoolName");

        Page<Majsch> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<Majsch> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(schoolName) && !"null".equals(schoolName)){
            lambdaQueryWrapper.like(Majsch::getSchoolName,schoolName);
        }


        IPage result = majschService.pageMajor(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }
}
