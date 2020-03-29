import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      component: () => import('../view/Login.vue'),
      meta: "登录页面"
    },
    {
      path: '/',
      redirect: '/tables'
    },
    {
      path: '/',
      component: () => import('../view/Index.vue'),
      meta: {title: '首页'},
      children: [
        {
          path: '/userindex',
          component: () => import('../view/user/index.vue'),
          meta: {title: '个人用户'},
        },
        {
          path: '/tables',
          component: () => import('../view/tables/tables.vue'),
          meta: {title: '基础表格'},
        },
      ]
    }
  ]
})
