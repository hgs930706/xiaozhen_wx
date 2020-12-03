<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 17:00:57
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-28 09:40:17
 * @FilePath: \h5ysxz\src\views\yuyue\activityDetail.vue
-->
<template>
    <div class="activityDetail">
       <!-- nav -->
       <van-nav-bar
         title="活动详情"
         left-arrow
         @click-left="onClickLeft"
         :fixed="true"
         z-index="999" />
       <!--  -->
        <div class="activity-pic">
          <img :src="itemDetail.activityImage" alt="">
        </div>
        <div class="content">
            <h4>{{itemDetail.activityName}}</h4>
            <div class="item">
               <h5>活动时间</h5>
               <p>{{`${itemDetail.activityStartTime||'暂无信息'} —— ${itemDetail.activityEndTime||'暂无信息'}`}}</p>
            </div>
            <div class="item">
               <h5>活动地址</h5>
               <p>{{itemDetail.activityAddress}}</p>
            </div>
            <div class="item">
               <h5>活动场数</h5>
               <p>{{itemDetail.activityCount}}</p>
            </div>
            <div class="item">
               <h5>活动详情</h5>
               <p>{{itemDetail.activityDetail}}</p>
            </div>
             <div class="item">
               <h5>活动备注</h5>
               <p>{{itemDetail.activityRemark}}</p>
            </div>
            <van-button type="primary" block  @click="signUp">立即报名</van-button>
        </div>

    </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useIconImp from '../../composable/iconImp'
import { queryActivityItemDetail } from './service'
export default {
  setup () {
    const route = useRoute()
    const { params: { id } } = route
    const { yuyueImg } = useIconImp()
    const itemDetail = ref({})

    const getActivityItemDeatil = async () => {
      const { params: { id } } = route
      const res = await queryActivityItemDetail({ id })
      if (res.code === 0) {
        itemDetail.value = { ...res.data }
      }
    }

    onMounted(() => {
      getActivityItemDeatil()
    })
    return { yuyueImg, itemDetail, id }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    signUp () {
      this.$router.push({
        path: '/view/yuyue/signUp',
        query: {
          img: this.itemDetail.activityImage,
          detail: this.itemDetail.activityDetail,
          id: this.id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.activityDetail{
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
