// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 

import 'normalize.css'

import axios from 'axios'
window.axios = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  let res = error.response;
  if (res.status == 401) {
      location.href = "http://localhost:8080/mobile.html#/sign/login";
      return false;
  }
  // Do something with response error
  return Promise.reject(error);
});


import Mock from 'mockjs'
window.Mock = Mock
require('../../util/mock/mobile_mock')
require('../../util/mock/xuhong_mock.js')
require('../../util/mock/youqiqin_mock')
require('../../util/mock/lixuebing')

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
