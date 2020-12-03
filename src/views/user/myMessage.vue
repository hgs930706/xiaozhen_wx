<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 16:41:55
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 02:23:29
 * @FilePath: \h5ysxz\src\views\user\myMessage.vue
-->

<template>
    <div id="myMessage">
       <!-- nav -->
       <van-nav-bar
         title="我的消息"
         left-arrow
         @click-left="onClickLeft"
         :fixed="true"
         z-index="999" />

        <div class="content">
           <MessageCart v-for="item in message" :key="item.id" :content="item"></MessageCart>
        </div>
    </div>
</template>
<script>
import { queryMyMessage } from './service'
import MessageCart from './components/messageCart'
export default {
  components: { MessageCart },
  data () {
    return {
      message: [],
      page: 1,
      size: 5
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async getMessageList () {
      const params = {
        page: this.page,
        size: this.size
      }
      const res = await queryMyMessage(params)
      if (res.code === 0 && res.data.list.length > 0) {
        this.message = [...this.message, ...res.data.list]
      } else {
        this.$notify({ type: 'danger', message: res.msg })
      }
    },
    handleScroll (e) {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = e.target.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = e.target.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = e.target.scrollHeight
      if (scrollTop + windowHeight === scrollHeight) {
        // 写后台加载数据的函数
        this.page += 1
        this.getMessageList()
      }
    }
  },
  mounted () {
    this.getMessageList()
    window.addEventListener('scroll', this.handleScroll, true)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>
<style lang="less" scoped>
#myMessage{
    width: 100%;
    padding-top: 46px;
    background-color: #F6F5FA;
    .content{
        width: 100%;
        padding: 0 16px;
    }
}
</style>
