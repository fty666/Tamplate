import axios from 'axios'
import {post, fetch, patch, put} from './http.js'
import {Message} from 'element-ui';

//登录用户信息
const UserInfo = {
  account: '',
  password: ''
}
//接口地址
const urls = 'http://localhost:3001/';
//请求接口
const PostData = function (url, option, callback, hedas) {
  if (hedas == undefined) {
    hedas = {}
  }
  post(urls + url, option, hedas).then(resp => {
    //根据后台返回的正确标准信息来判断
    if (resp.ok == true) {
      if (resp.data == undefined) {
        callback(resp);
      } else {
        callback(resp.data);
      }
    } else {
      Message({
        message: '服务器繁忙，请稍后再试',
        type: 'error'
      });
    }
  }, error => {
    Message({
      message: '服务器繁忙，请稍后再试',
      type: 'error'
    });
  })
}
const GetData = function (url, option, callback, hedas) {
  if (hedas == undefined) {
    hedas = {}
  }
  fetch(urls + url, option).then(resp => {
    console.log(res);
    // if (resp.state == 1) {
    //   if (resp.data == undefined) {
    //     callback(resp);
    //   } else {
    //     if (url == "/v1/admin/admin/signIn") {
    //       callback(resp);
    //     } else {
    //       callback(resp.data);
    //     }
    //   }
    // } else {
    //   Vue.prototype.$message({
    //     message: resp.message,
    //     type: 'warning'
    //   });
    // }
  }, error => {
    // Vue.prototype.$message({
    //   message: '服务器繁忙，请稍后再试',
    //   type: 'error'
    // });
  })
}
export default {
  UserInfo,
  GetData,
  PostData
}
