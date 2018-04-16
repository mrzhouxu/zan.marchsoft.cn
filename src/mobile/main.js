// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 

import axios from 'axios'
window.axios = axios

import Mock from 'mockjs'
window.Mock = Mock
require('../../util/mock/mobile_mock')

// 引入全部组件
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';

Vue.use(Mint);


import {filters} from './filter'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
