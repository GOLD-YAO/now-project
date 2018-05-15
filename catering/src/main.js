// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://196.168.1.199'
const a1 = JSON.stringify({skild:1})
window.localStorage.setItem("parmas",a1)
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import store from './vuex/index';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})
