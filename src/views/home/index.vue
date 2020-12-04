<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-23 22:37:28
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 22:26:19
 * @FilePath: \新建文件夹\src\views\home\index.vue
-->
<template>
  <div id="home">
    <van-nav-bar title="艺尚小镇" :fixed="true" z-index="999" />
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :style="{width:'100%', height: '266px' }"  :src="lunbo01" />
      </van-swipe-item>
    </van-swipe>
    <!-- grid -->
    <div class="homeNav">
      <van-grid :border="false" square :column-num="5">
        <van-grid-item to="/view/home/xiaozhen" >
          <van-image :src="Icon01" />
          <span class="itemStyle">小镇简介</span>
        </van-grid-item>
        <van-grid-item to="/view/yuyue">
          <van-image :src="Icon02" />
          <span class="itemStyle">预约报名</span>
        </van-grid-item>
        <van-grid-item :to="`/view/home/detail/${6}?title=配套展示`">
          <van-image :src="Icon03" />
          <span class="itemStyle">配套展示</span>
        </van-grid-item>
        <van-grid-item  to="/view/home/enterprise">
          <van-image :src="Icon04" />
          <span class="itemStyle">入驻企业</span>
        </van-grid-item>
        <van-grid-item  :to="`/view/home/detail/${5}?title=一件智慧游`" >
          <van-image :src="Icon05" />
          <span class="itemStyle">一件智慧游</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="cart-list">
        <Zcart :type="1" title="小镇简介" id="1" :pic="h1" title1=" XX小镇位于杭州市余杭区，地处长三角一体化发……" />
        <Zcart :type="2" title="配套展示" id="2" :pic="h2" title1=" 小镇突出“一中心四街区”的空间格局，以东湖公园…… "   />
        <Zcart :type="3" title="入驻企业" id="3" :pic="h3" title1=" 独具特色的时尚产业集聚，实现了从服装到艺术时…… "/>
    </div>
  </div>
</template>

<script>
import Zcart from './components/z-cart'
import useIconImp from '../../composable/iconImp'
export default {
  name: 'Home',
  components: { Zcart },
  setup () {
    const { h1, h2, h3, Icon01, Icon02, Icon03, Icon04, Icon05, lunbo01 } = useIconImp()

    return { h1, h2, h3, Icon01, Icon02, Icon03, Icon04, Icon05, lunbo01 }
  },
  methods: {
    saveToken () {
      const { query: { authorization } } = this.$route
      if (authorization) {
        localStorage.setItem('token', authorization)
      }
    }
  },
  mounted () {
    this.saveToken()
  }
}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  padding-top: 46px;
  background-color: #F6F5FA;
  .my-swipe .van-swipe-item {
    height: 266px;
    color: #fff;
    font-size: 20px;
    line-height: 266px;
    text-align: center;
    background-color: #39a9ed;
  }
  .homeNav{
    width: 100%;
    height: 118px;
    padding: 16px 0;
    background-color: #fff;
     .itemStyle{
       margin-top: 8px;
       font-size: 12px;
       color: #0F1826;
       white-space: nowrap;
     }
  }
  .cart-list{
     width: 100%;
  }
}
</style>
