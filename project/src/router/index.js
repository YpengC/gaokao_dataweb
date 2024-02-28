import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_page from '@/views/HomePage/Home'
import Login_router from '@/views/LoginView/Login'
import sign_page from '@/views/HomePage/sign'
import table_page from '@/views/HomePage/table'
import index_page from '@/views/HomePage/index1'
import index_page2 from '@/views/HomePage/index2'
import university_page from '@/views/university_page/university'
import major_page from '@/views/university_page/major'
import index_22 from '@/views/university_page/index22'

import NotFound from '@/views/admin/error'

//主要功能:页面跳转
Vue.use(VueRouter)



export default new VueRouter({
  mode: 'history',
  //注意routes不要加r
  routes: [
    {
      //登录页面
      path: '/',
      name:'Login_router',
      component: Login_router,
      
    },
    {
      //主页
      path: '/home',
      name:'Home',
      component: Home_page,
      children:[
        {
          path:'/home/university',
          name:'sign_p',
          component: sign_page,
        },
        {
          path:'/home',
          name:'index_page',
          component: index_page,
        },
        {
          path:'/home/recommend',
          name:'index_page2',
          component: index_page2,
        },
        {
          path:'/home/recommend/table',
          name:'index_22',
          component: index_22,
        },
      ]
    },
    {
      path:'/table',
      name:'table_page',
      component: table_page,
    },
    {
      path:'/university',
      name:'university_page',
      component: university_page,
    },
    {
      path:'/major',
      name:'major_page',
      component: major_page,
    },
    {
      //错误页面404
      path: '*',
      component: NotFound
    }

  ]
})
