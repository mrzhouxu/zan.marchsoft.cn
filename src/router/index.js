import Vue from 'vue'
import Router from 'vue-router'
import pc from './pc_router'
import mobile from './mobile_router'

Vue.use(Router)

var all_router = {
  routes:[

  ]
}

//pc 路由
for(let i of pc){
  i.path = '/pc'+(i.path.charAt(0)==='/'?'':'/')+i.path
  all_router.routes.push(i)
}

//mobile 路由
for(let i of mobile){
  i.path = '/mobile'+(i.path.charAt(0)==='/'?'':'/')+i.path
  all_router.routes.push(i)
}

let path404 = {
  path: '*',
  component: resolve =>void(require(['../components/404'], resolve))
}
all_router.routes.push(path404)


export default new Router(all_router)
