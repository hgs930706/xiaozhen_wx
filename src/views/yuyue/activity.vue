<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 17:07:38
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 00:11:25
 * @FilePath: \h5ysxz\src\views\yuyue\activity.vue
-->
<template>
    <div id="activity" ref="activity">
    <!-- nav -->
       <van-nav-bar
         title="活动"
         left-arrow
         @click-left="onClickLeft"
         :fixed="true"
         z-index="999" />
       <!--  -->
       <div class="cart-list">
          <Ycart
           v-for="item in list"
           :key="item.id"
           :content="item">
          </Ycart>
       </div>
    </div>
</template>

<script>
import { queryActivityList } from './service'
import Ycart from './compontent/y-cart'

export default {
  components: { Ycart },
  data () {
    return {
      list: [],
      size: 5,
      page: 1
    }
  },
  setup () {},
  methods: {
    onClickLeft () {
      this.$router.back()
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
    },

    async getActivityList (params) {
      const res = await queryActivityList(params)
      if (res) {
        return res
      }
    },

    async getList () {
      const res = await this.getActivityList({ page: this.page, size: this.size })
      if (res.code === 0) {
        if (res.data.list.length > 0) {
          this.list = [...this.list, ...res.data.list]
        }
      }
    }
  },
  mounted () {
    this.getList()
    window.addEventListener('scroll', this.handleScroll, true)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>

<style lang="less" scoped>
#activity{
  width: 100%;
  padding-top: 46px;
  background-color: #F6F5FA;
  .cart-list{
    width: 100%;
    .y-cart:first-child{
      margin-top: 0;
    }
  }
}
</style>
