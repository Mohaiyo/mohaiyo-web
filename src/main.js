/*
 * @Author: mohaiyo
 * @gitHub: 'https://github.com/Mohaiyo'
 * @Date: 2018-02-24 15:42:26
 * @Last Modified by:   mohaiyo
 * @Last Modified time: 2018-02-24 15:42:26
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './config/axios.js'
import Message from '@/components/common/message/index.js'
import 'assets/fonts/iconfont.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

// 使用全局弹框提示
Vue.prototype.$message = Message
// 注册全局$axios方法
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
