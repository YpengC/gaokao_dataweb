<template>
    <div class="major">
        <div class="title" style="line-height: 200px;">
            <h1 class="hone">专业库</h1>
        </div>
        <div class="box">
            <div class="box-title">
                <a><img class="img_1" src="../../../public/logo2.png" /></a>
                <a>
                    <router-link to="/home" class="text">首页</router-link>
                </a>
                >
                <a>
                    <router-link to="/home" class="text">查专业</router-link>
                </a>
                >
            </div>
            <div class="left-box">
                <div class="search_box">
                    <div class="search">
                        <a><img class="img_3" src="../../../public/logo3.png" /></a>
                        <a class="text_1">专业大全</a>
                        <input class="select" id="majorName" name="majorName" placeholder="请输入您要查询的信息"
                            type="text" @input="SearchAction($event)"/>
                    </div>
                    <el-divider class="divider" style="width:20px"></el-divider>
                    
                </div>
                <div class="major_message" v-if="searchresult.length > 0">
                    <div class="subject_message" v-for="item of searchresult" v-bind:key="item">
                        <div class="info-box">
                            
                            <router-link to="/major">
                                <div class="info-title">
                                    <a class="name-title" style="margin-left:20px;font-size: 23px;">
                                        {{ item.major }}
                                    </a>
                                </div>
                                <div class="sign-title">
                                    <span class="tt">专业代码:</span>
                                    <span class="ttt">{{ item.id }}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span class="tt">授予学位:</span>
                                    <span class="ttt">{{ item.degree }}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span class="tt">专业层次:</span>
                                    <span class="ttt">{{ item.sort }}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span class="tt">修学年限:</span>
                                    <span class="ttt">{{ item.dtime }}</span>
                                </div>
                                <div class="two-title">
                                    <span
                                        class="tttt">本专业学生主要学习马克思主义哲学基本原理、中国哲学和西方哲学等方面的专业知识，以及伦理学、逻辑学、美学、宗教学、科学技术哲学、管理哲学、政治哲学等方面的基础知识；受到中西方哲学的基本理论和发展线索的系统...</span>
                                </div>                         
                        </router-link>
                        </div>
                    </div>
                </div>
                <div class="major_message" v-else>
                    <div class="subject_message" v-for="item of majorData" v-bind:key="item">
                        <div class="info-box">
                            
                            <router-link to="/major">
                                <div class="info-title">
                                    <a class="name-title" style="margin-left:20px;font-size: 23px;">
                                        {{ item.major }}
                                    </a>
                                </div>
                                <div class="sign-title">
                                    <span class="tt">专业代码:</span>
                                    <span class="ttt">{{ item.id }}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span class="tt">授予学位:</span>
                                    <span class="ttt">{{ item.degree }}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span class="tt">专业层次:</span>
                                    <span class="ttt">{{ item.sort }}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span class="tt">修学年限:</span>
                                    <span class="ttt">{{ item.dtime }}</span>
                                </div>
                                <div class="two-title">
                                    <span
                                        class="tttt">本专业学生主要学习马克思主义哲学基本原理、中国哲学和西方哲学等方面的专业知识，以及伦理学、逻辑学、美学、宗教学、科学技术哲学、管理哲学、政治哲学等方面的基础知识；受到中西方哲学的基本理论和发展线索的系统...</span>
                                </div>                         
                        </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-box">
                <div class="university-rank">
                    <h3 class="r_rank">院校排名</h3>
                    <li>
                        <a>本科院校</a>
                    </li>
                    <div class="rank-box">
                        <ul style="dispaly:block;">
                            <li v-for="(item, index) in items" :key="item.id | index">
                                <span class="rank-span">{{ (index + 1) }}</span>
                                <a class="rank-a" href="http://43.142.27.116:9090/client/universityDetail/10003">{{
                                        item.message
                                }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="major-rank">
                    <h3 class="r_rank">专业热门排名</h3>
                    <li>
                        <a>本科专业</a>
                    </li>
                    <div class="rank-box">
                        <ul style="dispaly:block;">
                            <li v-for="(major, index) in majors" :key="major.id | index">
                                <span class="rank-span">{{ (index + 1) }}</span>
                                <a class="rank-a" href="http://43.142.27.116:9090/client/universityDetail/10003">{{
                                        major.message
                                }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>

import majorData from '@/data/major'

export default {
    name: "index_page",
    data() {
        return {
            input: '',
            majorData,
            searchresult:[],
            items: [
                { message: '清华大学' },
                { message: '北京大学' },
                { message: '上海交通大学' },
                { message: '复旦大学' },
                { message: '中国人民大学' },
                { message: '南京大学' },
                { message: '浙江大学' },
                { message: '武汉大学' },
                { message: '北京师范大学' },
                { message: '南开大学' },
                { message: '同济大学' },
                { message: '华东师范大学' },
                { message: '北京航空航天大学' },
                { message: '厦门大学' },
                { message: '东南大学' },
                { message: '中山大学' },
            ],
            majors: [
                { message: '计算机专业' },
                { message: '金融专业' },
                { message: '临床医学专业' },
                { message: '法学专业' },
                { message: '新闻与传播学专业' },
                { message: '建筑学专业' },
                { message: '新能源专业' },
                { message: '口腔医学专业' },
                { message: '软件工程专业' },
                { message: '电子商务专业' },
            ]
        }

    },
    methods:{
    SearchAction(e){
      const inputVal =e.target.value;
      this.searchresult=this.majorData.filter((item)=>{
        if(item.major.includes(inputVal)){
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
    width: 1440px;
    margin-left: -20px;
    margin-top: -20px;
    text-align: center;
}

.box {
    width: 1440px;
    height: 2300px;
    display: flex;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
}

.left-box {
    width: 920px;
    height: 2200px;
    margin-top: 70px;
    margin-left: 15px;
    position: relative;
}

.box-title {
    width: 920px;
    height: 50px;
    background-color: #dcdcdc;
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-left: 15px;
    position: absolute;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.img_1 {
    width: 45px;
    height: 40px;
    float: left;
    margin-left: 20px;
}

.text {
    color: black;
    letter-spacing: 1.5px;
    font-size: 13px;
}

.search_box {
    width: 920px;
    height: 120px;
    background-color: #ffff;
    margin-top: 0px;
    padding-top: 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.search {
    width: 880px;
    height: 50px;
    background-color: coral;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.searchinput {
    margin-left: 80px;
    width: 290px;
}

.img_3 {
    width: 60px;
    height: 55px;
    float: left;
    margin-left: 40px;
}

.text_1 {
    color: black;
    letter-spacing: 1.5px;
    font-size: 20px;
    margin-left: 20px;
}

.divider {
    width: 880px;
    display: inline-block;
    position: relative;
    color: bisque;
}

.major_message {
    width: 920px;
    height: 900px;

}

.subject_message {
    width: 920px;
    height: 150px;
    background-color: #ffff;
    margin-top: 15px;
    align-items: center;
    text-align: center;
    display: flex;
    border-radius: 4px
}
.subject_message:hover{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.info-box {
    width: 900px;
    height: 130px;
}

.info-title {
    text-align: left;
    margin-top: 0px;
    font-size: 20px;
    color: black;
}


.sign-title {
    display: flex;
    text-align: left;
    margin-top: 10px;
}

.tt {
    display: inline-block;
    background: #fff;
    color: #545454;
    font-size: 14px;
    line-height: 20px;
    padding: 0 4px;
    height: 20px;
    margin-left: 14px;

}

.ttt {
    display: inline-block;
    background: #fff;
    color: #272727;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    margin-left: 4px;

}

.two-title {
    text-align: left;
    margin-top: 10px;
    margin-left: 14px;
    height: 60px;
    font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial;
}

.tttt {
    display: inline-block;
    background: #fff;
    color: #333;
    font-size: 16px;
    line-height: 25px;
    height: 20px;
    margin-left: 4px;
    max-width: 900px;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    /*超出部分用...代替*/
}


.right-box {
    width: 420px;
    height: 2000px;
    margin-left: 25px;

}

.university-rank {
    width: 420px;
    height: 750px;
    background: #ffff;
}


.rank-box {
    width: 300px;
    margin-left: 30px;
    margin-top: 30px;
}

ol,
ul,
li {
    list-style-type: none;
    margin: 15px 0;
}

.r_rank {
    width: 100%;
    height: 26px;
    line-height: 26px;
    border-left: solid 4px #eb010a;
    margin-bottom: 10px;
    font-weight: bold;
    color: #111;
    padding: 0 20px;
    overflow: hidden;
    font-size: 21px;
    text-align: left;
}

.rank-span {
    background: #eb010a;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    margin-left: 0px;
    display: inline-block;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    text-align: center;
}

.rank-a {
    width: 240px;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #404040;
    vertical-align: middle;
    margin-left: 15px;
    text-align: left;
}

.rank-a:hover {
    color: coral;

}

.major-rank {
    width: 420px;
    height: 550px;
    margin-top: 80px;
    background: #ffff;
}

.sort_box{
    text-align: left;
    //vertical-align:text-top;
    margin-left: 30px;  
    margin-top:20px  
}
.aa{
    height: 24px;
font-size: 13px;
font-weight: 300;
padding-left: 6px;
padding-right: 6px;
margin-right: 10px;
min-width: 40px;
line-height: 24px;
text-align: center;
user-select: none;
}
.aaa{
height: 24px;
font-size: 13px;
font-weight: 300;
padding-left: 6px;
padding-right: 6px;
margin-right: 10px;
min-width: 40px;
line-height: 24px;
text-align: center;
user-select: none;
}

input{
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    margin-left:40px;
    padding-left: 15px;
    width: 320px;
    height:40px;
    font-size: 14px;
}
</style>




