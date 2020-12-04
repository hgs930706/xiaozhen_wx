/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 20:14:33
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 22:31:17
 * @FilePath: \新建文件夹\vue.config.js
 */

module.exports = {
  devServer: {
    port: 3002,
    proxy: {
      '/': {
        target: 'http://47.105.143.238:8081',// 测试地址
        ws: true,
        changeOrigin: true
      }
    },
    disableHostCheck: true
  }
}
// module.exports = {
//   devServer: {
//     host: '192.168.31.27',
//     port: 3002,
//     open: true,
//     hot: true,
//     // 内网穿透
//     disableHostCheck: true
//   },
//   lintOnSave: false
// }
