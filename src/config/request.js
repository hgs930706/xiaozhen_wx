/* eslint-disable no-prototype-builtins */
/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 20:00:12
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 22:33:51
 * @FilePath: \新建文件夹\src\config\request.js
 */

import axios from 'axios'
import router from '../router/index'

// const baseUrl = 'http://192.168.31.27:8081'
const baseUrl = '/'
const timeOut = 5 * 1000

const $axios = axios.create({
  baseURL: baseUrl,
  timeout: timeOut
})

$axios.interceptors.request.use(
  (config) => {
    const { headers } = config
    const Token = localStorage.getItem('token')
    if (!headers.hasOwnProperty('Authorization') && Token) {
      headers.Authorization = Token
    }
    return config
  },
  (error) => {
    console.log(error, 'error')
    return Promise.reject(error)
  }
)

$axios.interceptors.response.use(
  (response) => {
    // if (response.status === 401) {
    //   router.push('/login')
    // }
    return response.data
  },
  (error) => {
    if (error.response.status === 403) {
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default $axios
