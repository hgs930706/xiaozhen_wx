<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 16:40:59
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 01:43:36
 * @FilePath: \h5ysxz\src\views\user\myBookings.vue
-->
<template>
    <div id="myBookings">
       <!-- nav -->
       <van-nav-bar
         title="我的预约"
         left-arrow
         @click-left="onClickLeft"
         :fixed="true"
         z-index="999" />
       <!--  -->
        <div class="bookingContent">
            <BookingCart v-for="item in yList" :key="item.id" :content="item"></BookingCart>
        </div>
    </div>
</template>
<script>
import BookingCart from './components/bookingCart'
import { yuyueList } from './service'
export default {
  components: { BookingCart },
  data () {
    return {
      yList: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async getYuyueList () {
      const res = await yuyueList()
      if (res.code === 0) {
        this.yList = res.data
      } else {
        this.$notify({ type: 'danger', message: res.msg })
      }
    }
  },
  mounted () {
    this.getYuyueList()
  }
}
</script>
<style lang="less" scoped>
#myBookings{
    width: 100%;
    padding-top: 46px;
    background-color: #F5F6FA;
    .bookingContent{
        width: 100%;
        padding: 0 16px;
    }
}
</style>
