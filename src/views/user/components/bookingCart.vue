<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 17:19:45
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 02:02:51
 * @FilePath: \h5ysxz\src\views\user\components\bookingCart.vue
-->
<template>
    <div class="bookingCart">
      <div class="cart-header">
          <div class="title">
              <span>{{content.name||'暂无信息'}}</span>
              <span> > </span>
          </div>
          <div class="status">
            <span v-if="content.status==='审批拒绝'" :style="{color:'red'}" >{{content.status}}</span>
            <span v-if="content.status==='审批通过'" :style="{color:'green'}" >{{content.status}}</span>
            <span v-if="content.status==='待审批'" :style="{color:'yellow'}" >{{content.status}}</span>
          </div>
      </div>
      <div class="cart-content">
          <div class="cart-time">
              <span>预约时间</span>
              <span>{{content.bookingTime}}</span>
          </div>
          <div class="cart-addr">
              <span>接待地址</span>
              <span>{{content.bookingAddress}}</span>
          </div>
          <div class="goDetail">
              <van-button type="default" size="small" @click="viewDetail(content)">查看详情</van-button>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    content: Object
  },
  methods: {
    viewDetail (content) {
      const { bookingType, id } = content
      this.$router.push({ path: `/view/user/bookingDetails/${id}`, query: { bookingType } })
    }
  }
}
</script>
<style lang="less" scoped>
.bookingCart{
    width: 100%;
    padding:12px 12px 0 12px;
    margin-top: 12px;
    background-color: #fff;
    .cart-header{
       width: 100%;
       display: flex;
       margin: 8px 0;
       .title{
           flex: 2;
           span{
             height: 20px;
             font-size: 14px;
             font-weight: 500;
             color: #0F1826;
             line-height: 20px;
           }
       }
       .status{
           flex: 1;
           text-align: right;
           height: 20px;
           font-size: 14px;
           font-weight: 400;
           color: #58BB65;
           line-height: 20px;
       }
    }
    .cart-content{
       width: 100%;
       border-top:1px solid #EBEDF0;
       padding: 12px 6px;
       .cart-time{
          width: 100%;
          margin-bottom: 4px;
          span{
            font-size: 14px;
            font-weight: 400;
            color: #0F1826;
            line-height: 24px;
          }
       }
       .cart-addr{
          width: 100%;
          margin-bottom: 23px;
          span{
            font-size: 14px;
            font-weight: 400;
            color: #0F1826;
            line-height: 24px;
          }
       }
       .goDetail{
          width: 100%;
          text-align: right;
       }
    }
}
</style>
