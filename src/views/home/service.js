/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 21:27:56
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 00:15:45
 * @FilePath: \h5ysxz\src\views\home\service.js
 */
import $axios from '../../config/request'
import { stringify } from 'qs'

const getHomeList = async () => {
  return $axios({
    url: '/api/enterpriseInfo/default',
    method: 'GET'
  })
}

const getStreetList = async () => {
  return $axios({
    url: '/api/dict/street',
    method: 'GET'
  })
}

const queryInfoList = async (params) => {
  return $axios({
    url: `/api/enterpriseInfo/list?${stringify(params)}`,
    method: 'GET'
  })
}

const queryQiyeDetail = async (params) => {
  return $axios({
    url: `/api/enterpriseInfo/detail?${stringify(params)}`,
    method: 'GET'
  })
}

export { getHomeList, getStreetList, queryInfoList, queryQiyeDetail }
