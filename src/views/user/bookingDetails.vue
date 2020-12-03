<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 16:43:18
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 02:12:10
 * @FilePath: \h5ysxz\src\views\user\bookingDetails.vue
-->

<template>
  <div class="bookingDetails">
    <van-nav-bar
      title="我的预约"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      z-index="999"
    />

    <div class="content">
      <h4>{{data.name}}</h4>
      <div class="main">
        <van-image
          width="100%"
          height="180"
          :src="data.images"
        />

        <div class="status">
          <span>当前状态</span>
          <span>{{data.status}}</span>
        </div>
        <div class="status">
          <span>预约内容</span>
          <span>{{data.bookingContent}}</span>
        </div>
        <div class="status">
          <span>预约人</span>
          <span>{{data.bookingPerson}}</span>
        </div>
        <div class="status">
          <span>预约时间</span>
          <span>{{data.bookingTime}}</span>
        </div>
        <div class="status">
          <span>接待地址</span>
          <span>{{data.bookingAddress}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { yuyueDetail } from './service'
export default {
  data () {
    return {
      data: {}
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async queryYuyueDetail () {
      console.log(this.$route)
      const { query: { bookingType }, params: { id } } = this.$route
      const res = await yuyueDetail({ id, bookingType })
      if (res.code === 0) {
        this.data = res.data
      }
    }
  },
  mounted () {
    this.queryYuyueDetail()
  }
}
</script>
<style lang="less" scoped>
.bookingDetails {
  width: 100%;
  padding: 56px 16px 0 16px;
  background-color: #f5f6fa;
  .content {
    width: 100%;
    padding: 12px 12px 20px 12px;
    background-color: #fff;
    h4 {
      margin: 0 0 8px 0;
      width: auto;
      height: 20px;
      font-size: 14px;
      font-weight: 500;
      color: #0f1826;
      line-height: 20px;
    }
    .main {
      width: 100%;
      border-top: 1px solid #ebedf0;
      padding-top: 12px;
    }
    .status{
        width: 100%;
        margin-top: 20px;
        span:first-child{
            display: inline-block;
            width:70px;
            color: #6E7580;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }
        span:last-child{
            display: inline-block;
            width: auto;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #0F1826;
        }
    }
  }
}
</style>
