<template>
    <div>
        <el-container>
            <el-header>
                <div class="menu">
                    <a class="logo-link"><img src="../../../public/logo1.png" alt="logo" class="logo-image1" /></a>
                    <span class="logo-text1">
                        <router-link to="/home" class="text">查专业</router-link>
                    </span>
                    <span class="logo-text1">
                        <router-link to="/home/university" class="text">查院校</router-link>
                    </span>
                    <span class="logo-text1">
                        <router-link to="/home/recommend" class="text">智能推荐系统</router-link>
                    </span>
                    <el-input v-model="inputContent" class="searchinput" placeholder="请输入您要查询的信息"
                        prefix-icon="el-icon-search">
                        <el-button slot="append" class="searchbtn" @click="searchput">搜索</el-button>
                    </el-input>

                    <span class="logo-text2">
                        <router-link to="/logout" class="text1">注销</router-link>
                        <i style="color: rgb(24, 24, 24)"
                            class="next-icon next-icon-arrow-down next-xs language-icon"></i>
                    </span>
                </div>

            </el-header>
            <el-main>
                <router-view />
            </el-main>

        </el-container>


    </div>
</template>

<script>
export default {
    name: "Home_page",
    data(){
        return{
            inputContent:'',
            searchResult:[],
        }
        
    },
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: coral;
    color: #333;
    text-align: center;
    line-height: 65px;
}

.el-main {
    text-align: center;
    overflow: hidden;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.menu {
    margin-left: 400px;
}

.logo-image1 {
    height: 60px;
    position: absolute;
    margin-left: -400px;
}

.logo-text1 {
    margin-top: 20px;
    margin-left: 40px;
    font-family: PingFang SC,Microsoft YaHei,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
}

.text {
    color: white;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell,
        "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", Arial;
        font-family: PingFang SC,Microsoft YaHei,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
}

.text:active,
text1:active {
    font-weight: bold;
}

.text:hover,text1:hover{
    color:#ccc;
}

.searchinput {
    margin-left: 80px;
    width: 290px;
}

.searchbtn:active {
    font-weight: bold;
}

.text1 {
    padding-top: 10px;
    padding-left: 40px;
    font-size: 13px;
    color: white;
    font-family: PingFang SC,Microsoft YaHei,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
}
</style>