/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 20:14:33
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 22:23:13
 * @FilePath: \h5ysxz\vue.config.js
 */
module.exports = {
  devServer: {
    port:3002,
    proxy: {
      '/': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
