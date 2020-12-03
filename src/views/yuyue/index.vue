<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-24 22:58:37
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-27 23:35:15
 * @FilePath: \h5ysxz\src\views\yuyue\index.vue
-->

<template>
    <div id="yuyue">
        <van-nav-bar title="预约报名" :fixed="true" z-index="999" />

        <!-- 轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in data" :key="item">
            <img :style="{width:'100%', height: '211px' }"  :src="item" />
          </van-swipe-item>
        </van-swipe>

        <!-- nav -->
        <div class="yuyueNav">
            <van-grid :border="false" square :column-num="3">
              <van-grid-item to="/view/yuyue/resrvation" >
                <van-image :src="IconYuyue01" />
                <span class="itemStyle">接待预约</span>
              </van-grid-item>
              <van-grid-item to="/view/yuyue/activity" >
                <van-image :src="IconYuyue02" />
                <span class="itemStyle">活动报名</span>
              </van-grid-item>
              <van-grid-item to="/view/yuyue/meetingPlace" >
                <van-image :src="IconYuyue03" />
                <span class="itemStyle">会议场地展示</span>
              </van-grid-item>
            </van-grid>
        </div>

        <!-- content -->
        <div class="cart-list">
            <Ycart v-for="item in activityList.list" :key="item.id" :content="item"></Ycart>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import useIconImp from '../../composable/iconImp'
import Ycart from './compontent/y-cart'
import { queryBanner, queryActivityList } from './service'
export default {
  components: { Ycart },
  setup (props) {
    const { IconYuyue01, IconYuyue02, IconYuyue03, yuyueImg } = useIconImp()

    const data = ref([])
    const activityList = ref([])
    const getBanners = async () => {
      const res = await queryBanner()
      if (res.code === 0) {
        data.value = res.data
      }
    }

    const getActivityList = async () => {
      const res = await queryActivityList({ page: 1, size: 2 })
      if (res.code === 0) {
        activityList.value = res.data
      }
    }

    onMounted(() => {
      getBanners()
      getActivityList()
    })
    return { IconYuyue01, IconYuyue02, IconYuyue03, yuyueImg, data, activityList }
  }
}
</script>

<style lang="less" scoped>
#yuyue{
    width: 100%;
    padding-top: 46px;
    background-color: #F6F5FA;
    .my-swipe .van-swipe-item {
       color: #fff;
       font-size: 20px;
       height: 211px;
       line-height: 211px;
       text-align: center;
       background-color: #39a9ed;
    }
    .yuyueNav{
       width: 100%;
       background-color: #fff;
      /deep/ .van-image .van-image__img{
            width: 46px;
        }
      .itemStyle{
          margin-top: 8px;
          font-size: 12px;
          color: #0F1826;
          white-space: nowrap;
      }
    }
    .cart-list{
        width: 100%;
        margin-top: 16px;
    }
}

</style>
