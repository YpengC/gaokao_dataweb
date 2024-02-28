package com.wms.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.wms.common.QueryPageParam;
import com.wms.common.Result;
import com.wms.entity.Batch;
import com.wms.service.BatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/goodstype")
public class BatchController {

    @Autowired
    private BatchService batchService;

    @PostMapping("/save")
    public Result save(@RequestBody Batch batch){
        return batchService.save(batch)?Result.suc():Result.fail();
    }
    //更新
    @PostMapping("/update")
    public Result update(@RequestBody Batch batch){
        return batchService.updateById(batch)?Result.suc():Result.fail();
    }
    //删除
    @GetMapping("/del")
    public Result del(@RequestParam String id){
        return batchService.removeById(id)?Result.suc():Result.fail();
    }

    @PostMapping("/listPage")
    public Result listPage(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String no = (String)param.get("no");
        String number = (String)param.get("number");
        String strategy = (String)param.get("strategy");

        Page<Batch> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<Batch> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(no) && !"null".equals(no)){
            lambdaQueryWrapper.like(Batch::getNo,no);
        }
        if(StringUtils.isNotBlank(number) && !"null".equals(number)){
            lambdaQueryWrapper.eq(Batch::getNumber,number);
        }
        if(StringUtils.isNotBlank(strategy) && !"null".equals(strategy)){
            lambdaQueryWrapper.eq(Batch::getStrategy,strategy);
        }

        IPage result = batchService.pageCC(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }
}
