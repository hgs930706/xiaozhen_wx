/*
 * @Author: ShenYuQiang
 * @Date: 2020-12-03 01:10:23
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 02:15:59
 * @FilePath: \h5ysxz\src\views\user\service.js
 */

import $axios from '../../config/request'
import { stringify } from 'qs'

const getUserInfo = async () => {
  return $axios({
    url: '/api/wxUser/detail',
    method: 'GET'
  })
}

// 提意见
const commitMessage = async (params) => {
  return $axios({
    url: '/api/feedback/insert',
    method: 'POST',
    data: params
  })
}

// yuyue列表
const yuyueList = async (params) => {
  return $axios({
    url: '/api/feedback/bookings',
    method: 'GET'
  })
}

// yuyue详情
const yuyueDetail = async (params) => {
  return $axios({
    url: `/api/feedback/detail?${stringify(params)}`,
    method: 'GET'
  })
}

// 我的消息
const queryMyMessage = async (params) => {
  return $axios({
    url: `/api/msgAction/msgs?${stringify(params)}`,
    method: 'GET'
  })
}
export { getUserInfo, commitMessage, yuyueList, yuyueDetail, queryMyMessage }
