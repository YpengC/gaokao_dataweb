import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';             //全局引入element
import 'element-ui/lib/theme-chalk/index.css';    //全局引入element的样式
import VueRouter from 'vue-router'

//使用axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
//使用Vue-Router
Vue.use(VueRouter);
//全局注入element
Vue.use(ElementUI);     


//路由跳转之前
router.beforeEach((to,from,next)=>{
  //
  let isLogin = sessionStorage.getItem('isLogin');
  //注销
  if(to.path=='/logout'){
    //清空isLogin的值,表示未登录
  sessionStorage.clear();
  //跳转到登录页面
  next({path:'/'});
  }
  else if(to.path=='/'){
    //判断是否登录，不为空(已登录)，跳转到首页
    if(isLogin!=null){
      next({path:'/home'});
    }
  }
  else if(isLogin==null){
    next({path:'/'});
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
