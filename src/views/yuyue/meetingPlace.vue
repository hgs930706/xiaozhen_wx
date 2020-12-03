<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 11:29:52
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 00:15:19
 * @FilePath: \h5ysxz\src\views\yuyue\meetingPlace.vue
-->
<template>
    <div id="meetingPlace" ref="meetingPlace">
    <!-- nav -->
       <van-nav-bar
         title="会议场地"
         left-arrow
         @click-left="onClickLeft"
         :fixed="true"
         z-index="999" />
       <!--  -->
       <div class="cart-list">
          <Mcart
           v-for="item in list"
           :key="item.id"
           :content="item"
           >
          </Mcart>
       </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import useIconImp from '../../composable/iconImp'
import Mcart from './compontent/m-cart'
import { queryMeetingList } from './service'
export default {
  components: { Mcart },
  setup () {
    const listArr01 = ref(['1', '2', '3', '4'])
    const { yuyueImg } = useIconImp()
    return { listArr01, yuyueImg }
  },
  data () {
    return {
      list: [],
      page: 1,
      size: 5
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async queryList (params) {
      const res = await queryMeetingList(params)
      if (res) {
        return res
      }
    },
    async getList () {
      const res = await this.queryList({ page: this.page, size: this.size })
      if (res.code === 0 && res.data.list.length > 0) {
        this.list = [this.list, ...res.data.list]
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
        this.getList()
      }
    }

  },
  mounted () {
    this.getList()
    window.addEventListener('scroll', this.handleScroll, true)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll, true) //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>

<style lang="less" scoped>
#meetingPlace{
  width: 100%;
  padding-top: 46px;
  background-color: #F6F5FA;
  .cart-list{
    width: 100%;
    .m-cart:first-child{
      margin-top: 0;
    }
  }
}
</style>
