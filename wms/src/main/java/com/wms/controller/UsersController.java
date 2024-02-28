package com.wms.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.wms.common.QueryPageParam;
import com.wms.common.Result;
import com.wms.entity.Menu;
import com.wms.entity.User;
import com.wms.entity.Users;
import com.wms.service.MenuService;
import com.wms.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private MenuService menuService;

    @PostMapping("/save")
    public Result save(@RequestBody Users users){
        return usersService.save(users)?Result.suc():Result.fail();
    }
    //更新
    @PostMapping("/update")
    public Result update(@RequestBody Users users){
        return usersService.updateById(users)?Result.suc():Result.fail();
    }
    //删除
    @GetMapping("/del")
    public Result del(@RequestParam String id){
        return usersService.removeById(id)?Result.suc():Result.fail();
    }

    @PostMapping("/listPageC1")
    public Result listPage(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String name = (String)param.get("name");

        Page<Users> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<Users> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(name) && !"null".equals(name)){
            lambdaQueryWrapper.like(Users::getName,name);
        }

        IPage result = usersService.pageCC(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }

    @PostMapping("/login")
    public Result login(@RequestBody Users users){
        List list = usersService.lambdaQuery()
                .eq(Users::getNo,users.getNo())
                .eq(Users::getPassword,users.getPassword()).list();


        if(list.size()>0){
            Users users1 = (Users)list.get(0);
            List menuList = menuService.lambdaQuery().like(Menu::getMenuright,users1.getId()).list();
            HashMap res = new HashMap();
            res.put("users",users1);
            res.put("menu",menuList);
            return Result.suc(res);
        }
        return Result.fail();
    }
}
