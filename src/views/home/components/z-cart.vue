<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-24 23:54:26
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 22:31:40
 * @FilePath: \新建文件夹\src\views\home\components\z-cart.vue
-->
<template>
   <div class="z-cart">
       <div class="z-cart-top">
             <div class="title">
                 <img :src="showIcon" >
                 <span>{{title}}</span>
             </div>
             <div class="more" @click.stop="goViewDetail">查看详情</div>
       </div>
       <div class="z-cart-bottom">
             <img :src="pic" />
             <div class="describe">{{title1}}</div>
       </div>
   </div>
</template>

<script>
import useIconImp from '../../../composable/iconImp'
import { computed } from 'vue'
export default {
  props: {
    type: Number,
    title: String,
    pic: String,
    id: String,
    title1: String
  },
  setup (props) {
    const { IconList01, IconList02, IconList03 } = useIconImp()
    const showIcon = computed(() => {
      if (props.type === 1) {
        return IconList01
      }
      if (props.type === 2) {
        return IconList02
      }
      if (props.type === 3) {
        return IconList03
      }
    })
    return { showIcon }
  },
  methods: {
    goViewDetail () {
      if (this.id === '1') {
        this.$router.push({ path: '/view/home/xiaozhen' })
      }
      if (this.id === '3') {
        this.$router.push({ path: '/view/home/enterprise' })
      }
      // /view/home/detail/${6}?title=配套展示
      if (this.id === '2') {
        this.$router.push({ path: `/view/home/detail/${this.id}`, query: { title: this.title } })
      }
      // this.$router.push({ path: `/view/home/detail/:${id}`, query: { title: this.title } })
    }
  }
}
</script>

<style lang="less" scoped>
.z-cart{
    width: 100%;
    margin-top: 16px;
    .z-cart-top{
        width: 100%;
        height: 40px;
        padding: 0 8px;
        display: flex;
        align-content: center;
        background-color: #fff;
        .title{
            flex: 1;
            img{
                width: 20px;
                height: 20px;
                margin-right: 8px;
                vertical-align: text-bottom;
            }
            span{
                font-size: 16px;
                font-weight: 400;
                line-height: 44px;
                color: #0F1826;
            }
        }
        .more{
            width:50px;
            font-size: 12px;
            line-height: 44px;
            color:#1CA4EF;
        }
    }
    .z-cart-bottom{
        position: relative;
        width: 100%;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
        .describe{
            position: absolute;
            padding:0 8px;
            width: 100%;
            left: 8px;
            bottom:8px;
            color: #fff;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            text-overflow:ellipsis; //溢出用省略号显示
            white-space:nowrap; //溢出不换行

        }
    }
}
</style>
