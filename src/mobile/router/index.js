import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 声明路由 */
let all_router = {
  routes:[
    {
      path: '/',
      component: resolve =>void(require(['../components/home/Record'], resolve))
    },
    {
      path: '/home/record',
      name: '点赞记录',
      component: resolve =>void(require(['../components/home/Record'], resolve))
    },
    {
      path: '/home/recive',
      name: '收到的赞',
      component: resolve =>void(require(['../components/home/Recive'], resolve))
    },
    {
      path: '/home/mine',
      name: '我的赞',
      component: resolve =>void(require(['../components/home/Mine'], resolve))
    },
    {
      path: '/home/center',
      name: '个人中心',
      component: resolve =>void(require(['../components/home/Center'], resolve))
    },
    {
      path: '/sign/login',
      name: '登录',
      component: resolve =>void(require(['../components/sign/Login'], resolve))
    },
  ]
}

all_router.routes.push(
  {
    path: '*',
    component: resolve =>void(require(['../components/404'], resolve))
  }
)


export default new Router(all_router)
