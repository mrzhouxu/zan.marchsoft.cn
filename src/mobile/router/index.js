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
      meta:{select:1},
      component: resolve =>void(require(['../components/home/Record'], resolve))
    },
    {
      path: '/home/recive',
      name: '收到的赞',
      meta:{keepAlive:true,select:2},
      component: resolve =>void(require(['../components/home/Recive'], resolve)),
    },
    {
      path: '/home/recive/buy/:ids',
      name: '收到的币-消费',
      component: resolve =>void(require(['../components/home/recive/Test'], resolve))
    },
    {
      path: '/home/mine',
      name: '我的赞',
      meta:{select:3},
      component: resolve =>void(require(['../components/home/Mine'], resolve))
    },
    {
      path: '/home/mine/send/:ids',
      name: '我的赞-送人',
      component: resolve =>void(require(['../components/home/mine/Test'], resolve))
    },
    {
      path: '/home/mine/send',
      name: '我的赞-送人',
      component: resolve =>void(require(['../components/home/mine/Test'], resolve))
    },
    {
      path: '/manager/approve',
      name: '管理员-审批',
      component: resolve =>void(require(['../components/manager/Approve'], resolve))
    },
    {
      path: '/manager/design',
      name: '管理员-指定组别',
      component: resolve =>void(require(['../components/manager/Design'], resolve))
    },
    {
      path: '/home/center',
      name: '个人中心',
      meta:{select:4},
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
