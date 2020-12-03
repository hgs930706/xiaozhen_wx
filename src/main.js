/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-23 22:37:28
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-28 23:39:31
 * @FilePath: \h5ysxz\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible'

import Vant from 'vant'
import 'vant/lib/index.css'

// import moment from 'moment'

const app = createApp(App)
// app.config.globalProperties.$moment = moment
app.use(Vant)
app.use(store).use(router).mount('#root')
