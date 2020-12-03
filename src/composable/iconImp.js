/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 14:12:59
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-01 02:03:00
 * @FilePath: \h5ysxz\src\composable\iconImp.js
 */

import { reactive } from 'vue'

export default function iconImp () {
  const Icon = reactive({
    lunbo01: require('./../assets/lb01.png'),
    h1: require('../assets/h1 (1).png'),
    h2: require('../assets/h1 (2).png'),
    h3: require('../assets/h1 (3).png'),
    xiaozhen01: require('../assets/xiaozhen_img_01@2x.png'),
    xiaozhen02: require('../assets/xiaozhen_img_02@2x.png'),
    xiaozhen03: require('../assets/xiaozhen_img_03@2x.png'),
    xiaozhen04: require('../assets/xiaozhen_img_04@2x.png'),
    xiaozhen05: require('../assets/xiaozhen_img_05@2x.png'),
    xiaozhen06: require('../assets/xiaozhen_img_06@2x.png'),
    xiaozhen07: require('../assets/xiaozhen_img_07@2x.png'),
    Icon01: require('./../assets/icon/Home_icon_01@2x.png'),
    Icon02: require('./../assets/icon/Home_icon_02@2x.png'),
    Icon03: require('./../assets/icon/Home_icon_03@2x.png'),
    Icon04: require('./../assets/icon/Home_icon_04@2x.png'),
    Icon05: require('./../assets/icon/Home_icon_05@2x.png'),
    IconList01: require('./../assets/icon/home_icon_list_01@2x.png'),
    IconList02: require('./../assets/icon/home_icon_list_02@2x.png'),
    IconList03: require('./../assets/icon/home_icon_list_03@2x.png'),
    IconYuyue01: require('../assets/icon/order_icon_01@2x.png'),
    IconYuyue02: require('../assets/icon/order_icon_02@2x.png'),
    IconYuyue03: require('../assets/icon/order_icon_03@2x.png'),
    yuyueImg: require('../assets/yuyue_img_02@2x.png'),
    defaultImg: require('../assets/icon/default.png'),
    IconUser01: require('../assets/icon/order_icon_01@2x.png'),
    IconUser02: require('../assets/icon/order_icon_02@2x.png'),
    IconUser03: require('../assets/icon/order_icon_03@2x.png')
  })

  return { ...Icon }
}
