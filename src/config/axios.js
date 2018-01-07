/**
 * Create By Mohaiyo 2017-10-23
 */
'use strict'
// import { Toast,Indicator } from 'mint-ui'
import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
import Message from '@/components/common/message/index.js'

const baseURL = '/'
// 请求头配置
axios.interceptors.request.use(config => {
  // 判断localStorage中是否存在api_token
  // if (localStorage.getItem('api_token')) {
  //     //  存在将api_token写入 request header
  //     config.headers.apiToken = `${localStorage.getItem('api_token')}`
  // }
  // 这里可以加一些动作, 比如来个进度条开始动作
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  return res

  // 这里的return res返回的是一个对象, 内容如下
  // {
  //   // 服务器提供的响应
  //   data: {},
  //   // 服务器响应的HTTP状态代码
  //   status: 200,
  //   // 服务器响应的HTTP状态消息
  //   statusText: 'OK',
  //   // 服务器响应头
  //   headers: {},
  //   // axios 的配置
  //   config: {}
  // }
}, error => {
  // 这里我们把错误信息扶正, 后面就不需要写 catch 了
  return Promise.resolve(error.res)
})
function checkStatus (res) {
  // 这里可以加一些动作, 比如来个进度条结束动作
  NProgress.done()
  // 如果http状态码正常，则直接返回数据
  if (res && (res.status === 200 || res.status === 304)) {
    // 这里, 如果不需要除 data 外的其他数据, 可以直接 return response.data, 这样可以让后面的代码精简一些
    return res.data
  }
  // 异常状态下, 把错误信息返回去
  // 因为前面我们把错误扶正了, 不然像 404, 500 这样的错误是走不到这里的
  return {
    code: -404,
    msg: '网络错误，请耐心等候！'
  }
}
// checkCode
function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.code !== 200) {
    Message({
      message: res.msg,
      type: 'error',
      showClose: true
    })
  }
  return res
}

// 公共post/get请求方式配置
export default {
  post (url, params) { //  post
    return axios({
      method: 'post',
      baseURL,
      url,
      data: qs.stringify(params),
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus).then(checkCode)
  },
  get (url, params) { // get
    return axios({
      method: 'get',
      baseURL,
      url,
      params, // get 请求时带的参数
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus).then(checkCode)
  }
}
