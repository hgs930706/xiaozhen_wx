<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-24 22:45:10
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-01 21:49:28
 * @FilePath: \h5ysxz\src\views\login\index.vue
-->

<template>
    <div id="login">
        <div class="layout">
             <p>LOGO</p>
             <van-button round type="success" size="large" @click="login">授权微信头像昵称</van-button>
             <a @click="goBack">暂不登录</a>
        </div>
    </div>
</template>

<script>
import { login } from './service'
export default {
  data () {
    return {}
  },
  methods: {
    async login () {
      const res = await login()
      if (res.code === 0) {
        return res
      }
    },
    goBack () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
#login{
    width: 100%;
    height:100%;
    background-color:#fff;
    position:relative;
    .layout{
      position: absolute;
      width: 100%;
      height: 211px;
      padding: 0 35px;
      top: 50%;
      transform: translateY(-50%);
      p{
        margin: 0 0 83px 0;
        width: 100%;
        height: 42px;
        font-size: 30px;
        font-weight: 500;
        color: #181818;
        line-height: 42px;
        text-align: center;
      }
      a{
          display: inline-block;
          margin-top: 16px;
          width:100%;
          text-align: center;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: #1CA4EF;
          line-height: 20px;
          text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
      }
    }
}
</style>
