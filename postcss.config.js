/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-23 23:03:30
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-23 23:17:43
 * @FilePath: \h5ysxz\postcss.config.js
 */

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
