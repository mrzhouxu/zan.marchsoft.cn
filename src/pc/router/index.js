import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 声明路由 */
var all_router = {
  routes:[
    {
      path: '/',
      component: resolve =>void(require(['../components/Test'], resolve))
    },
    {
      path: '/test',
      component: resolve =>void(require(['../components/Test'], resolve))
    }
  ]
}

all_router.routes.push(
  {
    path: '*',
    component: resolve =>void(require(['../components/404'], resolve))
  }
)


export default new Router(all_router)
