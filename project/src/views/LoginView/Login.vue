<template>

  <body>
    <div id="root">
      <div class="sc-crHmcD fvvtrT">
        <div style="min-width: 1280px" class="sc-iCfMLu bCMwMe">
          <div dir="ltr" role="row" class="next-row sc-furwcr gxfVWI"
            data-spm-anchor-id="5176.12901015-2.0.i6.7126525cPuQDaH">
            <div dir="ltr" role="gridcell" class="next-col next-col-12 sc-pVTFL bAkHdY">
              <a class="logo-link"><img src="../../assets/index.png" alt="logo" class="logo-image" /></a><span
                class="logo-text">登录</span>
            </div>
            <div dir="ltr" role="gridcell" class="next-col next-col-12 sc-jrQzAO NQuwj">
              <div class="language-element">
                <span class="language-text">用户</span><i style="color: rgb(24, 24, 24)"
                  class="next-icon next-icon-arrow-down next-xs language-icon"></i>
                <div class="language-white-empty-box"></div>
                <div class="language-choice">
                  <div class="type-item">
                    <a class="language-item"><span class="language">International</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="login-wrapper" style="
            background-size: cover;
            background-image: url('https://101.43.163.228/usr/themes/Brave-main/img/2.jpg');
          " data-spm-anchor-id="5176.12901015-2.0.i4.7126525cPuQDaH">
          <div class="login-content">
            <div class="marketing-wrapper">
              <div class="title-header">
                <span class="main-title"></span><span class="sub-title"></span>
              </div>
            </div>
            <div class="sc-gKclnd chpctO" data-spm-anchor-id="5176.12901015-2.0.i5.7126525cPuQDaH">
              <div class="wrapper">
                <div class="qr-method method">
                  <div class="sc-hKwDye bQZbGl">
                    <div class="thpay-channel">
                      <div class="logo_title">
                        <img class="m_logo" src="../../assets/index.png" alt="main_logo" />
                      </div>
                      <div class="logo_text">
                        <span class="l_text">唐皓高考数据平台</span>
                      </div>
                      <div class="produce_text">
                        <a class="p_text" style="margin-left: 15px; font-weight: bold">3000+</a>
                        <a class="p_text" style="margin-left: 90px; font-weight: bold">500+</a>
                        <a class="p_text" style="margin-left: 10px; font-size: 15px">全国各地高校收纳</a>
                        <a class="p_text" style="margin-left: 30px; font-size: 15px">开设专业</a>
                        <a class="p_text" style="margin-left: 15px; font-weight: bold">200+</a>
                        <a class="p_text" style="margin-left: 95px; font-weight: bold">4000+</a>
                        <a class="p_text" style="margin-left: 10px; font-size: 15px">值得信赖的名师顾问</a>
                        <a class="p_text" style="margin-left: 15px; font-size: 15px">成功案例</a>
                      </div>
                      <div class="logo2_text">
                        <span class="ll_text"> ---专业 准确 实时--- </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="password-and-mobile-method method">
                  <div class="sc-dkPtRN WVNKK">
                    <div class="sc-gsDKAQ deZZps">
                      <div class="tabs-nav">
                        <div class="tabs-item active">
                          <div class="tabs-item-text">账号登录</div>
                        </div>
                      </div>
                      <div class="tab-content">
                        <div class="tab-content-item">
                          <div>
                            <div>
                              <div>
                                <!--ref 其实就是之前的id， :model就是v-blind写法-->
                                <el-form ref="form" :model="form" :rules="rules" class="login-box">

                                  <el-form-item label="账号" prop="name">
                                    <el-input class='input' type="text" placeholder="请输入用户名" v-model="form.name"/>
                                  </el-form-item>
                                  <el-form-item label="密码" prop="password">
                                    <el-input  class='input' type="text" placeholder="请输入密码" v-model="form.password" show-password></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-button class="login-button" type="primary" @click="submitForm('form')">登录</el-button>
                                  </el-form-item>
                                </el-form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-content-item hidden">
                          <div>
                            <div class="yellow-tip" style="
                                display: flex;
                                align-items: center;
                                font-size: 12px;
                                margin-top: 10px;
                              ">
                              <i style="margin-right: 4px"
                                class="next-icon next-icon-prompt next-small"></i>若无法登录请及时联系管理员进行处理
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="third-party-login-wrap">
                    <div class="sc-bdvvtL eSqHXk">
                      <div class="third-parties">
                        <div class="third-party-login footer-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="go-to-register"><span>登录</span></div>
            </div>
          </div>
        </div>
        <div class="sc-kDTinF hWQgIp footer" style="height: 178px; min-width: 1280px">
          <div dir="ltr" role="row" class="next-row sc-iqseJM hKpitf">
            <div dir="ltr" role="gridcell" class="next-col next-col-24">
              <div class="about-link-wrap">
                <a class="about-link" target="_blank" rel="noreferrer">关于我们</a><a class="about-link" target="_blank"
                  rel="noreferrer">法律声明及隐私权政策</a><a class="about-link" target="_blank" rel="noreferrer">廉正举报</a><a
                  class="about-link" target="_blank" rel="noreferrer">联系我们</a><a class="about-link" target="_blank"
                  rel="noreferrer">1</a><a class="about-link" target="_blank" rel="noreferrer">2</a><a
                  class="about-link" target="_blank" rel="noreferrer">3</a><a class="about-link" target="_blank"
                  rel="noreferrer">4</a><a class="about-link" target="_blank" rel="noreferrer">5</a><a
                  class="about-link" target="_blank" rel="noreferrer">6</a>
                <div class="footer-search" style="display: none">
                  <div class="page-slot page-slot-0">
                    <div style="height: auto; display: block">
                      <div class="componenet-wrap" id="module-jWU9cOkxM" style="position: relative">
                        <div class="th-common-search-wrapper footer">
                          <input data-spm-click="gostr=/th;locaid=th-search-input"
                            class="th-common-search-input-elem" placeholder="搜索" /><i class="
                              th-icon
                              th-icon-search
                              th-footer-search-button
                            "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="th-login" style="visibility: hidden"></div>
    <div id="transmart-crx-shadow-root"></div>
  </body>
</template>


<script>
export default {
  name: "Login_router",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //标记isLogin为ture,表示已经登录状态
          sessionStorage.setItem("isLogin", "true");
          this.$router.push({ name: "home", params: { name: this.form.name } });
        } else {
          this.$message({
            message: "用户名或密码错误",
            type: "warning",
          });
          return false;
        }
      });
    },
  },
  
};
</script>



<style lang="scss" scoped>

@import "../../css/index.css";
@import "../../css/index11.css";
@import "../../css/login11.css";

.m_logo {
  height: 80px;
  margin-left: -55px;
  margin-top: -70px;
}

.logo_text {
  margin-top: 20px;
  width: 350px;
}

.l_text {
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell,
    "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
  font-size: 30px;
  margin-left: -20px;
  margin-right: 90px;
  text-align: left;
  font-weight: bold;
  color: black;
}

.produce_text {
  margin-top: 30px;
  height: 200px;
  width: 300px;
  margin-left: -50px;
}

.p_text {
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell,
    "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
  font-size: 20px;
  line-height: 35px;
  padding: 20px;
  color: black;
}

.logo2_text {
  height: 30px;
}

.ll_text {
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell,
    "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
  margin-left: 35px;
  color: coral;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
}

.login-box{
  margin-top:40px;
}

::v-deep.input{
	width: 230px;
	border-top-width: 0px;
	border-left-width: 0px;
	border-right-width: 0px;
	border-bottom-width: 1px;
  line-height: 50px;
}
::v-deep.input:focus {
  border: none;
  border-bottom: 2px solid #eee !important;
  box-shadow: none;
}


.login-button{
  margin-top:10px;
  background:coral;
  width: 300px;
}

.logo-image{
  height:60px;
}

.logo-text{
  margin-top: 20px;
  margin-left: 10px;
}

</style>


