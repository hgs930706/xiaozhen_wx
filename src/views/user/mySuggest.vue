<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 16:39:01
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 01:33:02
 * @FilePath: \h5ysxz\src\views\user\mySuggest.vue
-->

<template>
  <div id="mySuggest">
    <!-- nav -->
    <van-nav-bar
      title="意见建议"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      z-index="999"
    />
    <!--  -->
    <van-field
      v-model="message"
      rows="4"
      autosize
      type="textarea"
      maxlength="200"
      placeholder="请输入意见反馈，我们将不断改进～"
      show-word-limit
    />
    <van-button :style="{'margin-top':'20px'}" type="primary" block @click="submitMessage">提交</van-button>
  </div>
</template>
<script>
import { commitMessage } from './service'
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async submitMessage () {
      const res = commitMessage({ remark: this.message })
      if (res.code === 0) {
        this.$Route.push('/view/user')
      } else {
        this.$notify({ type: 'danger', message: res.msg })
      }
    }
  }
}
</script>
<style lang="less" scoped>
#mySuggest {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 60px 16px 0 16px;
  /deep/ .van-cell{
      background-color: #F5F6FA;
      height: 150px;
      border-radius: 5px;
  }
}
</style>
