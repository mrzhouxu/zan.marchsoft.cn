// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 

import axios from 'axios'
window.axios = axios;
// window.axios = require('axios');

// window.axios.defaults.headers.common = {
//     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf"]').content,
//     'X-Requested-With': 'XMLHttpRequest'
// };

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
