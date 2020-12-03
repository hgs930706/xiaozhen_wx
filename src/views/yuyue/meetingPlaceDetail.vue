<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 17:00:57
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-28 21:26:17
 * @FilePath: \h5ysxz\src\views\yuyue\meetingPlaceDetail.vue
-->
<template>
    <div class="meetingPlaceDetail">
       <!-- nav -->
       <van-nav-bar
         title="场地详情"
         left-arrow
         @click-left="onClickLeft"
         :fixed="true"
         z-index="999" />
       <!--  -->
        <div class="activity-pic">
          <img :src="itemDetail.meetingImage||yuyueImg" alt="">
        </div>
        <div class="content">
            <h4>{{itemDetail.meetingName}}</h4>
            <div class="item">
               <h5>会议室简介</h5>
               <p>{{itemDetail.meetingDateil||'暂无信息'}}</p>
            </div>
            <div class="item">
               <h5>会议室地址</h5>
               <p>{{itemDetail.meetingAddress||'暂无信息'}}</p>
            </div>
            <div class="item">
               <h5>可容纳人数</h5>
               <p>{{itemDetail.meetingCapacity||0}}人</p>
            </div>
            <div class="item">
               <h5>可用会议类型</h5>
               <p>{{itemDetail.meetingType||'暂无信息'}}</p>
            </div>
            <div class="item">
               <h5>场地桌型</h5>
               <p>{{itemDetail.meetingTable||'暂无信息'}}</p>
            </div>
            <div class="item">
               <h5>可用场地物品</h5>
               <p>{{itemDetail.meetingGoods||'暂无信息'}}</p>
            </div>
            <div class="item">
               <h5>备注</h5>
               <p>{{itemDetail.meetingRemark||'暂无信息'}}</p>
            </div>
            <van-button type="primary" block  @click="signUp">立即报名</van-button>
        </div>

    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { queryMeetingDetail } from './service'
export default {
  name: 'meetingPlace-detail',
  setup () {
    const { params: { id } } = useRoute()
    const itemDetail = ref({})

    const getMeetingDetail = async () => {
      const res = await queryMeetingDetail({ id })
      if (res.code === 0) {
        itemDetail.value = res.data
      }
    }

    onMounted(() => {
      getMeetingDetail()
    })
    return { id, itemDetail }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    signUp () {
      this.$router.push({
        path: '/view/yuyue/reservationMeet',
        query: {
          img: this.itemDetail.meetingImage,
          detail: this.itemDetail.meetingDateil,
          id: this.itemDetail.id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.meetingPlaceDetail{
   width: 100%;
   padding-top: 46px;
   background-color: #F6F5FA;
   .activity-pic{
      width: 100%;
      height: 211px;
      img{
        width: 100%;
        height: 211px;
      }
   }
   .content{
     width: 100%;
     padding: 20px 16px 10px 16px;
     h4{
       margin: 0 0 32px 0;
       font-size: 18px;
       font-weight: 400;
       line-height: 25px;
       color: #0F1826;
     }
     .item{
       width: 100%;
       padding-top:16px;
      h5{
       margin: 0;
       font-size: 14px;
       font-weight: 400;
       color: #0F1826;
       line-height: 20px;
      }
      p{
        font-size: 14px;
        font-weight: 400;
        color: #6E7580;
        line-height: 24px;
      }
     }
   }
}
</style>
