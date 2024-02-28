<template>
  <div class="Recommend">
    <div class="title" style="line-height: 200px;">
      <h1 class="hone">专业推荐</h1>
    </div>
    <el-divider class="divider" style="width:20px"></el-divider>
    <div class="box">
        <div class="select">
            <el-select v-model="value" placeholder="请选择文科/理科">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="value1" placeholder="请选择线差/总分">
    <el-option
      v-for="item in optionss"
      :key="item.value1"
      :label="item.label1"
      :value="item.value1">
    </el-option>
  </el-select>
        </div>
        <div class="textt">
        <p>“智能推荐”功能使用说明</p>
        <p style="text-align:left;margin-top: 20px;">一、“智能推荐”功能是为了帮助高考考生以最快捷的方式选定大致报考学校范围，可按照线差法和总分法进行选定：1）线差法：适用于模考和估分填报阶段的考生，一本线上的考生可以选定“一本线”，二本线上但未到达一本线的考生，可以选定“二本线”，然后在“范围”的输入框内设置线上分数。2）总分法：适用于2022年6月24日后出分阶段的考生，可按照上浮、下浮区间预估考取学校的大致范围，分数上下浮动在 0-30 之间，根据上浮和下浮预估区间，可清晰的按批次分别列出可选择学校范围。</p>
        <p style="text-align:left;margin-top: 20px;">二、智能推荐功能只是为考生模糊选择学校范围，没有按照“冲一冲”、“稳一稳”、“保一保”的算法进行推荐。适合冲高的院校数量不超过30%，唐皓教育团队本着为考生和家长负责的态度，不愿意看到家长们盲目冲高院校，让孩子的专业被调剂或者选择了自己不喜欢的专业，不希望一个孩子的学校和专业选择毁在一个“冲一冲”的功能上。无论模考阶段，还是出分报考阶段，只需要根据自己的排名选择附近的学校即可。</p>
         </div> 
      </div>
    <el-divider class="divider" style="width:20px"></el-divider>
  </div>

  
</template>

<script>
export default {
    name:"index_page2",
    data() {
      return {
        options: [{
          value: '选项1',
          label: '文科'
        }, {
          value: '选项2',
          label: '理科'
        }],
        value: '',
        optionss: [{
          value1: '选项1',
          label1: '线差'
        }, {
          value1: '选项2',
          label1: '总分'
        }],
        value1: ''
      }
    },
}
</script>

<style lang="scss" scoped>
.hone{
  font-size: 40px;
  color:#ffff
}
.title{
  background-color:#dcdcdc;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  width: 1422.67px;
  margin-left: -20px;
  margin-top: -20px;
  text-align: center;
  justify-content: center;
}
.box {
    width: 1350px;
    height: 600px;
    margin-top: 20px;
    overflow: hidden;
    font-size: 18px;
    line-height: 40px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.5px;
    font-weight: 100px;
    color: #333;

}
p{
    margin: 0 0 10px;
}

.select{
  margin-top:0px;
  text-align: left;
  padding-left:40px;
  
}
.el-select{
  margin-left:40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  
}
.textt{
  padding: 80px;
}
.el-divider{
    width:1350px;
    height:2px;
    display:inline-block;
    position: relative;
}
</style>