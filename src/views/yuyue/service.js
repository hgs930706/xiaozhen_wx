/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 22:03:04
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 23:06:10
 * @FilePath: \h5ysxz\src\views\yuyue\service.js
 */
import $axios from '../../config/request'
import { stringify } from 'qs'

// 图片
const queryBanner = async () => {
  return $axios({
    url: '/api/activityBooking/banner',
    method: 'GET'
  })
}

// 活动列表
const queryActivityList = async (params) => {
  return $axios({
    url: `/api/activityBooking/list?${stringify(params)}`,
    method: 'GET'
  })
}

// 活动详情
const queryActivityItemDetail = async (params) => {
  return $axios({
    url: `/api/activityBooking/detail?${stringify(params)}`,
    method: 'GET'
  })
}

// 活动场次下拉框

const querySelectCount = async (params) => {
  return $axios({
    url: `/api/activityBooking/selectCount?${stringify(params)}`,
    method: 'GET'
  })
}

// 活动报名

const addBooking = async (params) => {
  return $axios({
    url: '/api/activityBooking/insert',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: params
  })
}

// 场地列表

const queryMeetingList = async (params) => {
  return $axios({
    url: `/api/meetingAreaBooking/list?${stringify(params)}`,
    method: 'GET'
  })
}

// 场地详情
const queryMeetingDetail = async (params) => {
  return $axios({
    url: `/api/meetingAreaBooking/detail?${stringify(params)}`,
    method: 'GET'
  })
}

// 场地下拉
const queryMeetSelect = async (params) => {
  return $axios({
    url: `/api/meetingAreaBooking/select?${stringify(params)}`,
    method: 'GET'
  })
}

// 预约场地
const addMeeting = async (params) => {
  return $axios({
    url: '/api/meetingAreaBooking/insert',
    method: 'POST',
    // headers: { 'Content-Type': 'multipart/form-data' },
    data: params
  })
}

//  获取简介 和 图片
const queryContent = async () => {
  return $axios({
    url: '/api/dict/visitBooking',
    method: 'GET'
  })
}

//  新增预约
const addYuyue = async (params) => {
  return $axios({
    url: '/api/receiveBooking/insert',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: params
  })
}
export {
  queryBanner, queryActivityList, queryActivityItemDetail, querySelectCount, addBooking,
  queryMeetingList, queryMeetingDetail, queryMeetSelect, addMeeting, queryContent, addYuyue
}
