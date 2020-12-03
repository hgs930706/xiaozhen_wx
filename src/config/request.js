/* eslint-disable no-prototype-builtins */
/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 20:00:12
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 22:49:28
 * @FilePath: \h5ysxz\src\config\request.js
 */

import axios from 'axios'
import router from '../router/index'

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
    if (response.status === 401) {
      router.push('/login')
    }
    return response.data
  },
  (error) => {
    console.log(error, 'error111')
    return Promise.reject(error)
  }
)

export default $axios
