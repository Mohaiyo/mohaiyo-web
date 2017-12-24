/**
 * Create By Mohaiyo 2017-10-23
 */
'use strict'
// import { Toast,Indicator } from 'mint-ui'
import axios from 'axios'
import qs from 'qs'

const baseURL = ''
// 请求头配置
axios.interceptors.request.use(config => {
    // 判断localStorage中是否存在api_token
    // if (localStorage.getItem('api_token')) {
    //     //  存在将api_token写入 request header
    //     config.headers.apiToken = `${localStorage.getItem('api_token')}`;
    // }
    // Indicator.open({
    //     text: '加载中...',
    //     spinnerType: 'fading-circle'
    // });
  return config
}, error => {
    // Indicator.close();
  return Promise.reject(error)
})
axios.interceptors.response.use(res => {
    // Indicator.close();
  return res
}, error => {
    // Indicator.close();
  return Promise.resolve(error.res)
})
function checkStatus (res) {
    // 如果http状态码正常，则直接返回数据
  if (res && (res.status === 200 || res.status === 304)) {
    return res
  }
// 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}
// checkCode
function checkCode (res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    console.log('网络错误，请稍后再试')
    // Toast({
    //   message: res.msg,
    //   position: 'top',
    //   duration: 2000
    // })
  }
  if (res.data && (!res.data.success)) {
    // Toast({
    //   message: res.data.error_msg,
    //   position: 'bottom',
    //   duration: 2000
    // })
    // alert(res.data.error_msg)
  }
  return res
}

// 返回结果校验
// const errCheck = (o) => {
//     if (!o) {
//         MessageBox.alert( '系统繁忙，请稍后再试！', '提示', {
//             confirmButtonText: '确定'
//         })
//         return false
//     } else if (o && (typeof o == 'string') ) {
//         o = JSON.parse(o)
//     }
//     // 错误检查
//     if (o.errorCode != '0000') {
//         if (o.errorCode == '9000') {
//             MessageBox.alert( o.errorMsg, '提示', {
//                 confirmButtonText: '确定',
//                 callback: action => {
//                     localStorage.clear()
//                     window.location.href = '/' //返回登陆页
//                 }
//             })
//             return false
//         } else {
//             MessageBox.alert( o.errorMsg || '没有返回errorMsg', '提示', {
//                 confirmButtonText: '确定'
//             })
//             return false
//         }
//     } else {
//         return true
//     }
// }

// 公共post/get请求方式配置
export default {
  post (url, params) {  //  post
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
    }).then(
        (res) => {
          return checkStatus(res)
        }
    ).then(
        (res) => {
          return checkCode(res)
        }
    )
  },
  get (url, params) {  // get
    return axios({
      method: 'get',
      baseURL,
      url,
      params, // get 请求时带的参数
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
        (res) => {
          return checkStatus(res)
        }
    ).then(
        (res) => {
          return checkCode(res)
        }
    )
  }
}
