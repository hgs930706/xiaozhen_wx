/*
 * @Author: ShenYuQiang
 * @Date: 2020-12-01 21:18:53
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-01 21:22:25
 * @FilePath: \h5ysxz\src\views\login\service.js
 */
import $axios from '../../config/request'

const login = async () => {
  return $axios({
    url: '/api/wx/login',
    method: 'GET'
  })
}

export { login }
