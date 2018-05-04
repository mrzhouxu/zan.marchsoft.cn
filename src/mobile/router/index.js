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
      path: '/home/rank',
      name: '排行榜',
      component: resolve =>void(require(['../components/home/record/Rank'], resolve))
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
      meta:{keepAlive:true,select:3},
      component: resolve =>void(require(['../components/home/Mine'], resolve))
    },
    {
      path: '/home/mine/send/:ids',
      name: '我的赞-送人',
      component: resolve =>void(require(['../components/home/mine/Test'], resolve))
    },
    // {
    //   path: '/home/mine/send',
    //   name: '我的赞-送人',
    //   component: resolve =>void(require(['../components/home/mine/Test'], resolve))
    // },
    {
      path: '/manager/approve',
      name: '管理员-审批',
      component: resolve =>void(require(['../components/manager/Approve'], resolve))
    },
    {
      path: '/manager/publish',
      name: '管理员-独家发币',
      component: resolve =>void(require(['../components/manager/Publish'], resolve))
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
    //--------------------尤奇勤
    {
      path: '/center/purchase',
      name: '购买点赞币',
      component: resolve =>void(require(['../components/home/center/purchase'], resolve))
    },
    {
      path: '/center/my_order',
      name: '我的订单',
      component: resolve =>void(require(['../components/home/center/my_order'], resolve))
    },
    {
      path: '/center/apply',
      name: '申请点赞币',
      component: resolve =>void(require(['../components/home/center/apply'], resolve))
    },
    {
      path: '/center/accept',
      name: '接受订单任务',
      component: resolve =>void(require(['../components/home/center/accept'], resolve))
    },
    {
      path: '/center/feedback',
      name: '匿名反馈',
      component: resolve =>void(require(['../components/home/center/feedback'], resolve))
    },
    {
      path: '/center/mody_pass',
      name: '修改密码',
      component: resolve =>void(require(['../components/home/center/mody_pass'], resolve))
    },
    {
      path: '/center/rule_desc',
      name: '规则说明',
      component: resolve =>void(require(['../components/home/center/rule_desc'], resolve))
    },
    {
      path: '/center/sign_out',
      name: '退出登录',
      component: resolve =>void(require(['../components/home/center/sign_out'], resolve))
    },
    //李雪冰路由添加
    // {
    //   path: '/home/record/rank',
    //   name: '排行榜',
    //   component: resolve =>void(require(['../components/home/record/Rank'], resolve))
    // },
    {
      path: '/home/rank/week',
      name: '本周排名',
      component: resolve =>void(require(['../components/home/record/RankWeek'], resolve))
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
