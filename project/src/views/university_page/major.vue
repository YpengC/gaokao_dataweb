<template>
    <div class="major" style="overflow:hidden">
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
                <a>
                    <router-link to="/major" class="text">哲学</router-link>
                </a>
                >
            </div>
            <el-divider class="divider"></el-divider>
            <div class="left-box">
                <div class="title_info">
                    <h1 style="font-size:40px">哲学</h1>
                </div>
                <el-divider class="divider"></el-divider>
                <div class="sign_info">
                    <span class="aa">
                        专业代码:
                    </span>
                    <span class="aaa">10101</span>
                    <span class="aa">
                        专业类:
                    </span>
                    <span class="aaa">哲学类</span>
                    <span class="aa">
                        专业层次:
                    </span>
                    <span class="aaa">本科</span>
                    <span class="aa">
                        授予学位:
                    </span>
                    <span class="aaa">哲学学士</span>
                </div>
                
                <div class="intro">
                    <h3 class="bb">专业介绍</h3>
                </div>
                <div class="content">
                    哲学专业课程体系包括公共基础类课程、通识类课程、专业理论课程、实践教学环节、毕业论文。课程应重视课堂教学和课余讨论环节，鼓励学生积极参与讨论。讨论环节应当视课程内容占有一定比例。课程体系中应当包含创新创业类课程，鼓励学生创造性学习和自主学习，创新创业类课程可以纳入学分体系，具体学分比例由各高校自行规定。
                    本专业学生主要学习马克思主义哲学基本原理、中国哲学和西方哲学等方面的专业知识，以及伦理学、逻辑学、美学、宗教学、科学技术哲学、管理哲学、政治哲学等方面的基础知识；受到中西方哲学的基本理论和发展线索的系统教育，以及创造性思维的培养和业务能力的训练；要求学生比较系统地掌握马克思主义哲学、中国哲学和西方哲学的理论和历史；具有一定的社会科学、人文科学、自然科学、思维科学的相关知识；掌握哲学学科的基本研究方法、治学方法和相应的社会调查能力；了解国内外哲学界最重要的理论前沿和发展动态；了解国内外最重大的实践问题和发展动态；具有分析和解决社会现实问题的初步能力。
                </div>
                <div class="intro">
                    <h3 class="bb">开设具体专业</h3>
                </div>
                <div class="content">
                    马克思主义哲学、中国哲学、西方哲学、科学技术哲学、伦理学、宗教学、美学、逻辑学。哲学是普通高等学校本科专业，基本修业年限为四年，授予哲学学士学位。哲学以具体科学为基础，以整个世界的普遍规律为研究对象。哲学主要课程：哲学概论、马克思主义哲学原理、马克思主义哲学史、中国哲学史、西方哲学史、现代西方哲学、伦理学、宗教学、美学、逻辑学、心理学、中外哲学原著导读、马克思主义哲学原著导读。
                </div>
                <div class="intro">
                    <h3 class="bb">开设院校</h3>
                </div>
                <div class="yx-table-con">
                    <table class="table_title">
                        <tr>
                            <th rowspan="2">院校名称</th>
                            <th rowspan="2" width="170">
                                所在省份
                            </th>
                            <th colspan="4" style="text-align:center">
                                具体信息
                            </th>
                        </tr>
                        <tr>
                            <th width="125">2020录取最低分数线</th>
                            <th width="125">2021录取最低分数线</th>
                            <th width="125">2022录取最低分数线</th>
                            <th width="125">学费</th>
                        </tr>
                    </table>
                </div>
                <div class="tablebb" style="position: relative;">
                    <table :data="yxListPage.slice((currentPage-1)*pageSize,currentPage*pageSize)" class="table_tt">
                        <colgroup>
                            <col>
                            <col width="170">
                            <col width="125">
                            <col width="125">
                            <col width="125">
                            <col width="125">
                        </colgroup>
                    <tbody>
                        <tr v-for="item in yxListPage" :key="item.index">
                            <td>
                                <a href="https://gaokao.chsi.com.cn/sch/schoolInfoMain--schId-1.dhtml" target="_blank">{{item.yxdm}}</a>
                            </td>
                            <td>
                               {{ item.add }}
                            </td>
                            <td>
                                {{ item.s1 }}
                            </td>
                            <td>
                                {{ item.s2 }}
                            </td>
                            <td>
                                {{ item.s3 }}
                            </td>
                            <td>
                                {{ item.cost }}
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div class="right-box">
                <div class="university-rank">
                    <h3 class="r_rank">院校排名</h3>
                    <li style="text-align: center;">
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
                    <li style="text-align: center;">
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
        <div class="lastt">
        <el-pagination
        class="last"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10,15]"
        :page-size="pageSize"
        background
        layout="total,jumper,prev, pager, next,sizes"
        :total="yxListPage.length">
        </el-pagination>
    </div>
    </div>
    
</template>

<script>


export default {
    name: "major_page",
    data() {
        return {
            input: '',
            currentPage: 1,
            pageSize: 5,  //22
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
            ],
            yxListPage:[
                {
                    yxdm:'北京大学',
                    add:'北京',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'清华大学',
                    add:'北京',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                    
                },
                {
                    yxdm:'北京工业大学',
                    add:'北京',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'复旦大学',
                    add:'上海',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'上海交通大学',
                    add:'上海',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'中北大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'中南大学',
                    add:'上海',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山西大学',
                    add:'山西',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'北京邮电大学',
                    add:'北京',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'山东大学',
                    add:'山东',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },
                {
                    yxdm:'苏州大学',
                    add:'江苏',
                    s1:'550',
                    s2:'550',
                    s3:'550',
                    cost:'5500'
                },

            ],
        }

    },
    methods: {
     tableList_() {
      let result = this.yxListPage.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
      return result;
    },

    handleSizeChange: function (size) {
                this.pageSize = size;
    },
    handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
    },
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
    background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);
    width: 1440px;
    margin-left: -20px;
    margin-top: -20px;
    text-align: center;
}

.box {
    width: 1440px;
    height: 2200px;
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
    position: absolute;
}

.title_info{
    text-align: center;
}

.sign_info{
    width:985px;
    align-content: center;
    justify-content: center;
    margin-top: 30px;
    margin-left: 40px;
}

.aa{
    display: inline-flex;
    height: 25px;
    line-height: 25px; 
    padding: 0 7px;
    border: 1px solid #e6bb84;
    border-radius: 3px;
    background: #eacb9f;
    vertical-align: middle;
    overflow: hidden;
    font-size: 16px;
}
.aaa{
    margin-right: 100px;
    margin-left: 5px;
    line-height: 25px;
    vertical-align: middle;
    font-size: 16px;
    letter-spacing:1px;
}

.intro{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    margin-left:40px;
    margin-top: 50px;
    padding-bottom: 16px;
    border-bottom: 1px solid #dee7f0;

}

.bb{
    height: 20px;
line-height: 20px;
padding-left: 14px;
border-left: 3px solid #eb010a;
font-size: 16px;
font-weight: 700;
}

.content{
    padding: 0 18px;
    line-height: 32px;
    font-size: 16px;
    margin-left:30px;
    margin-top:20px;
    text-indent: 2em;
}

.table_title{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    word-wrap: break-word;
    text-align: left;
    margin-left:30px;
    
}

.table_title th {
  line-height: 28px;
  padding: 8px 18px;
  background: #eacb9f;
  font-size: 16px;
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
}

.table_tt{
    margin-left: 30px;
    text-align: center;
    font-size: 16px;
    color:black;
}

.table_tt a{
    color:black;
}
.table_tt td {
  height: 50px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: #fff;
  vertical-align: middle;
  
}

.table_tt tr:hover a {
  color: coral;
}
.table_tt tr:nth-child(2n) td {
  background: rgba(236,241,246,.3);
}
.box-title {
    width: 920px;
    height: 50px;
   // background-color: #dcdcdc;
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-left: 15px;
    position: absolute;
  //  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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





.text_1 {
    color: black;
    letter-spacing: 1.5px;
    font-size: 20px;
    margin-left: 20px;
}

.divider {
    display: inline-block;
    position: relative;
    color: bisque;
    margin-top: 50px;
    margin-left:10px;
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
.lastt{
    margin-top:0px;
    margin-left: 300px;
    margin-bottom: 80px;
}
</style>




