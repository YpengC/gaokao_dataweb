package com.wms.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@Data
@EqualsAndHashCode(callSuper = false)
@TableName("school")
@ApiModel(value="School对象", description="")
public class School implements Serializable {
    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty(value = "城市")
    private String city;

    @ApiModelProperty(value = "类型")
    private String type;

    @ApiModelProperty(value = "主管部门")
    private String zhuguan;

    @ApiModelProperty(value = "学校名")
    private String name;

    @ApiModelProperty(value = "位置")
    private String place;

    @ApiModelProperty(value = "分类")
    private String classify;

    @ApiModelProperty(value = "官网网址")
    private String schoolUrl;

    @ApiModelProperty(value = "官方电话")
    private String phone;

    @ApiModelProperty(value = "学校邮箱")
    private String email;

    @ApiModelProperty(value = "重点学科")
    private String zhongdian;

    @ApiModelProperty(value = "硕士点数")
    private String shuoshi;

    @ApiModelProperty(value = "博士点数")
    private String boshi;

    @ApiModelProperty(value = "院士点数")
    private String yuanshi;

    @ApiModelProperty(value = "创办年份")
    private String cretime;

    @ApiModelProperty(value = "重点实验室数量")
    private String shiyanshi;

    @ApiModelProperty(value = "占地面积")
    private String acreage;

    @ApiModelProperty(value = "藏书数量")
    private String bookNum;

    @ApiModelProperty(value = "全国排名")
    private String ranking;

    @ApiModelProperty(value = "访问次数")
    private String visitNum;

    @ApiModelProperty(value = "介绍")
    private String introduce;
}
