// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 

import 'normalize.css'

import axios from 'axios'
window.axios = axios
window.axios.defaults.withCredentials = true
window.axios.defaults.xsrfCookieName = null
window.axios.defaults.xsrfHeaderName = null
axios.defaults.baseURL = 'http://localhost:3030';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const Qs = require('qs');
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if(config.method === 'post') {
      config.data = Qs.stringify( {
          ...config.data
      })
      console.log(config.data)
  } 
  return config;
}, function (error) {
  loadinginstace.close()
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  let res = error.response;
  // console.log(res)
  if (res&&res.status == 401) {
      // location.replace("http://localhost:8080/mobile.html#/sign/login") 
      location.href = "http://localhost:8080/mobile.html#/sign/login";
      // location.reload();
      return false;
  }
  // Do something with response error
  return Promise.reject(error);
});


// import Mock from 'mockjs'
// window.Mock = Mock
// require('../../util/mock/mobile_mock')
// require('../../util/mock/xuhong_mock.js')
// require('../../util/mock/youqiqin_mock')
// require('../../util/mock/lixuebing')

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
