// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 

import axios from 'axios'
window.axios = axios

import Mock from 'mockjs'
window.Mock = Mock
require('../../util/mock/pc_mock')

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
