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
@TableName("major")
@ApiModel(value="Major对象", description="")
public class Major implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty(value = "专业代码")
    private String code;

    @ApiModelProperty(value = "专业名")
    private String name;

    @ApiModelProperty(value = "专业类")
    private String clas;

    @ApiModelProperty(value = "授予学位")
    private String degree;

    @ApiModelProperty(value = "专业层次")
    private String arrangement;

    @ApiModelProperty(value = "修学年限")
    private String time;

    @ApiModelProperty(value = "专业介绍")
    private String introduce;

    @ApiModelProperty(value = "具体专业")
    private String majorSpecific;
}
