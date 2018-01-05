// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './config/axios.js'
import Message from '@/components/common/message/index.js'
import './assets/fonts/iconfont.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
