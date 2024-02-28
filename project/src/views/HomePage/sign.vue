<template>
  <div class="content">
    <div class="title" style="line-height: 200px;">
      <h1 class="hone">院校库</h1>
    </div>
    <div class='sign' data-tab="report" id="report-tab" style="width: 1250.67px">
      <input class="select" id="majorName" name="majorName" placeholder="请输入您要查询的大学名称" type="text" @input="SearchAction($event)"/>
      <section data-tag="tag" style="padding-top:50px;margin-top: -20px;">
        <span class="label">省份</span>
        <div class="tab-content">
          <span class="active">全部</span>
          <span class="" @click="ClickAction('山西')">山西</span>
          <span class="" @click="ClickAction('辽宁')">辽宁</span>
          <span class="" @click="ClickAction('吉林')">吉林</span>
          <span class="" @click="ClickAction('黑龙江')">黑龙江</span>
          <span class="" @click="ClickAction('内蒙古')">内蒙古</span>
          <span class="" @click="ClickAction('河北')">河北</span>
          <span class="" @click="ClickAction('陕西')">陕西</span>
          <span class="" @click="ClickAction('宁夏')">宁夏</span>
          <span class="" @click="ClickAction('山东')">山东</span>
          <span class="" @click="ClickAction('安徽')">安徽</span>
          <span class="" @click="ClickAction('江苏')">江苏</span>
          <span class="" @click="ClickAction('浙江')">浙江</span>
          <span class="" @click="ClickAction('重庆')">重庆</span>
          <span class="" @click="ClickAction('上海')">上海</span>
          <span class="" @click="ClickAction('天津')">天津</span>
          <span class="" @click="ClickAction('北京')">北京</span>
          <span class="" @click="ClickAction('四川')">四川</span>
          <span class="" @click="ClickAction('贵州')">贵州</span>
          <span class="" @click="ClickAction('云南')">云南</span>
          <span class="" @click="ClickAction('广西')">广西</span>
          <span class="" @click="ClickAction('甘肃')">甘肃</span>
          <span class="" @click="ClickAction('新疆')">新疆</span>
          <span class="" @click="ClickAction('西藏')">西藏</span>
          <span class="" @click="ClickAction('青海')">青海</span>
          <span class="" @click="ClickAction('河南')">河南</span>
          <span class="" @click="ClickAction('湖北')">湖北</span>
          <span class="" @click="ClickAction('湖南')">湖南</span>
          <span class="" @click="ClickAction('江西')">江西</span>
          <span class="" @click="ClickAction('台湾')">台湾</span>
          <span class="" @click="ClickAction('福建')">福建</span>
          <span class="" @click="ClickAction('广东')">广东</span>
          <span class="" @click="ClickAction('海南')">海南</span>
          <span class="" @click="ClickAction('香港')">香港</span>
          <span class="" @click="ClickAction('澳门')">澳门</span>
        </div>
       
      </section>
      
      <section data-tag="publish">
        <span class="label">批次</span>
        <div class="tab-content">
          <span class="active">全部</span><span class="">一本A</span><span class="">一本B</span><span class="">二本A</span><span
            class="">二本B</span>
        </div>
      </section>
      <section data-tag="pay">
        <span class="label">文/理</span>
        <div class="tab-content">
          <span class="active" style="margin-left: 20px">全部</span><span class="">文科</span><span class="">理科</span>
        </div>
      </section>
      <section data-tag="publish">
        <span class="label">排序</span>
        <div class="tab-content">
          <span class="active">全部</span><span class="">最新</span><span class="">最热</span>
        </div>
      </section>
    </div>
    <div class="university_message" v-if="searchresult.length>0">
      <div class="university" v-for="item of searchresult" v-bind:key="item">
        <a target="_blank">
          <img :src="item.imgUrl" :alt="item.un_name" class="un_img" />
        </a>
        <div class="info-box">
          <router-link to="/university">
            <div class="info-title">
              <a class="name-title">
                {{ item.universityName }}
              </a>
            </div>
            <div class="sign-title">
              <span class="tt">{{ item.nature }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort1 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort2 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort3 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort4 }}</span>
            </div>
            <div class="two-title">
              <span class="tttt">城市:</span>
              <span class="ttt">
                {{ item.city }}
              </span>
              <el-divider direction="vertical"></el-divider>
              <span class="tttt">类型:</span>
              <span class="ttt">
                {{ item.un_nature }}
              </span>
              <el-divider direction="vertical"></el-divider>
              <span class="tttt">主管部门:</span>
              <span class="ttt">
                {{ item.department }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="university_message" v-else-if="clickresult.length>0">
      <div class="university" v-for="item of clickresult" v-bind:key="item">
        <a target="_blank">
          <img :src="item.imgUrl" :alt="item.un_name" class="un_img" />
        </a>
        <div class="info-box">
          <router-link to="/university">
            <div class="info-title">
              <a class="name-title">
                {{ item.universityName }}
              </a>
            </div>
            <div class="sign-title">
              <span class="tt">{{ item.nature }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort1 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort2 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort3 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort4 }}</span>
            </div>
            <div class="two-title">
              <span class="tttt">城市:</span>
              <span class="ttt">
                {{ item.city }}
              </span>
              <el-divider direction="vertical"></el-divider>
              <span class="tttt">类型:</span>
              <span class="ttt">
                {{ item.un_nature }}
              </span>
              <el-divider direction="vertical"></el-divider>
              <span class="tttt">主管部门:</span>
              <span class="ttt">
                {{ item.department }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="university_message" v-else>
      <div class="university" v-for="item of signData" v-bind:key="item">
        <a target="_blank">
          <img :src="item.imgUrl" :alt="item.un_name" class="un_img" />
        </a>
        <div class="info-box">
          <router-link to="/university">
            <div class="info-title">
              <a class="name-title">
                {{ item.universityName }}
              </a>
            </div>
            <div class="sign-title">
              <span class="tt">{{ item.nature }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort1 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort2 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort3 }}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="tt">{{ item.sort4 }}</span>
            </div>
            <div class="two-title">
              <span class="tttt">城市:</span>
              <span class="ttt">
                {{ item.city }}
              </span>
              <el-divider direction="vertical"></el-divider>
              <span class="tttt">类型:</span>
              <span class="ttt">
                {{ item.un_nature }}
              </span>
              <el-divider direction="vertical"></el-divider>
              <span class="tttt">主管部门:</span>
              <span class="ttt">
                {{ item.department }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import signData from '@/data/sign'

export default {
  name: "sign_page",
  data(){
    return{
      signData,
      searchresult:[],
      clickresult:[],
    }
  },
  methods:{
    SearchAction(e){
      const inputVal =e.target.value;
      this.searchresult=this.signData.filter((item)=>{
        if(item.universityName.includes(inputVal)){
          return item;
        }
      })
    },
    ClickAction(value){
      const inputVal = value;
      this.clickresult=this.signData.filter((item)=>{
        if(item.city.includes(inputVal)){
          return item;
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.hone {
  font-size: 40px;
  color: #ffff
}

.title {
  background-color: #dcdcdc;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  width: 1422.67px;
  margin-left: -20px;
  margin-top: -20px;
  text-align: center;
}

.sign {
  height: 300px;
  margin-top: -20px;
  background: #FFFFFF;
}

[data-tab="report"] [data-tag] .tab-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-box-pack: baseline;
  -ms-flex-pack: baseline;
  justify-content: baseline;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding-left: 3.75rem;
  font-family: PingFang SC, Microsoft YaHei, Helvetica Neue For Number,
    -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Hiragino Sans GB,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  width: 1000px;
}

[data-tab="report"] [data-tag] .tab-content>span.active,
[data-tab="report"] [data-tag] .tab-content>span:hover,
[data-tab="report"] [data-tag] .tab-content a.active,
[data-tab="report"] [data-tag] .tab-content a:hover {
  color: #f75c2f;
}

[data-tab="report"] [data-tag] .tab-content>span:first-child {
  text-indent: -3.75rem;
}

[data-tab="report"] [data-tag] .tab-content>span,
[data-tab="report"] [data-tag] .tab-content a {
  color: #333;
  margin-left: 1.75rem;
  cursor: pointer;
}

.tab-content>.active {
  display: block;
}

*,
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

[data-tab="report"] {
  white-space: nowrap;
}

[data-tab="report"] {
  white-space: nowrap;
}

[data-tab="report"] [data-tag] .label {
  color: #666;
}

[data-tab="report"] [data-tag] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: baseline;
  -ms-flex-pack: baseline;
  justify-content: baseline;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;
  color: #292b2c;
  font-family: PingFang SC, Microsoft YaHei, Helvetica Neue For Number,
    -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Hiragino Sans GB,
    Helvetica Neue, Helvetica, Arial, sans-serif;
}

[data-tab="report"],
[data-tab="report"] [data-tag] {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: calc(100% - 19.0625rem);
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0px;
  margin-left: 66px;
  margin-top: 0px;
  padding-left: 20px
}

[data-tab="report"] {
  white-space: nowrap;
}

[data-tab="report"] [data-tag] .tab-content>span:nth-child(2) {
  text-indent: -1.75rem;
}

.university_message {
  margin-top: 20px;
  width: 1250.67px;
  height: 1490px;
  margin-left: 66px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.university {
  width: 600px;
  height: 129px;
  background: #FFFFFF;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 20px 29px 22px;
  border-radius: 6px

}
.university:hover{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.un_img {
  display: block;
  width: 80px;
  height: 80px;
  margin-right: 16px;
}


.info-box {
  flex: 1;
  font-size: 14px;
  align-items: center;
  margin-top: -80px;
  margin-left: 20px;
}

.info-title {
  font-size: 18px;
  line-height: 26px;
  height: 26px;
  color: black;
  text-decoration: none;
  width: 300px;
  text-align: left;
  margin-left: 85px;
  padding-top: -20px;
  margin-top: -70px;
}

.sign-title {
  width: 400px;
  text-align: left;
  margin-left: 80px;
  margin-top: 8px;
}

.tt {
  display: inline-block;
  background: #fff;
  color: #545454;
  font-size: 12px;
  line-height: 20px;
  padding: 0 4px;
  height: 20px;

}

.two-title {
  width: 500px;
  text-align: left;
  margin-left: 80px;
  margin-top: 10px;
}

.tttt {
  display: inline-block;
  background: #fff;
  color: #545454;
  font-size: 14px;
  line-height: 20px;
  padding: 0 4px;
  height: 20px;

}

.ttt {
  display: inline-block;
  background: #fff;
  color: black;
  font-size: 15px;
  line-height: 20px;
  padding: 0 4px;
  margin-right: 19px;
  height: 20px;
}
input{
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    margin-top:15px;
    margin-left:-740px;
    padding-left: 15px;
    width: 320px;
    height:40px;
    font-size: 14px;
}
</style>