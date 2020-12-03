<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-24 22:38:06
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 00:13:58
 * @FilePath: \h5ysxz\src\views\index.vue
-->

<template>
  <div id="view" ref="view">
    <div class="content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
    <div class="tabBar" v-if="flag">
      <van-tabbar v-model="active">
        <van-tabbar-item to="/view/home" icon="wap-home-o">主页</van-tabbar-item>
        <van-tabbar-item to="/view/yuyue" icon="clock-o" >预约</van-tabbar-item>
        <van-tabbar-item to="/view/user" icon="user-o">用户</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'view',
  setup () {
    const route = useRoute()
    const active = computed(() => {
      const { path } = route
      if (path.includes('home')) {
        return 0
      }
      if (path.includes('yuyue')) {
        return 1
      }
      if (path.includes('user')) {
        return 2
      }
    })
    const flag = computed(() => {
      const { meta: { lv } } = route
      if (lv === 1) {
        return true
      }
      return false
    })
    return { active, flag }
  },
  mounted () { }
}
</script>

<style lang="less" scoped>
#view {
  width: 100%;
  min-height: 100vh;
  background: #F5F6FA;
  position: relative;
  // padding-bottom: 50px;
  .content{
    overflow: auto;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
  }
  .tabBar{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    .van-tabbar{
      background-color: #fff;
    }
    .van-tabbar-item--active{
      background-color: #fff;
    }
  }
}
</style>
