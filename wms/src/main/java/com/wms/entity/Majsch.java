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
@TableName("majsch")
@ApiModel(value="Majsch对象", description="")
public class Majsch implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty(value = "学校名称")
    private String schoolName;

    @ApiModelProperty(value = "专业名称")
    private String majorName;

    @ApiModelProperty(value = "专业代码")
    private String majorCode;

    @ApiModelProperty(value = "招生人数")
    private String number;

    @ApiModelProperty(value = "省份")
    private String province;

    @ApiModelProperty(value = "具体专业")
    private String majorSpecific;

    @ApiModelProperty(value = "第一年最低分数线")
    private String minOne;

    @ApiModelProperty(value = "第二年最低分数线")
    private String minTwo;

    @ApiModelProperty(value = "第三年最低分数线")
    private String minThire;

    @ApiModelProperty(value = "学费")
    private String cost;
}
