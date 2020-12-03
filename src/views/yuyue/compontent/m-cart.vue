<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 11:32:09
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-28 19:32:47
 * @FilePath: \h5ysxz\src\views\yuyue\compontent\m-cart.vue
-->

<template>
    <div class="m-cart" @click.stop="goyuyueMeet">
        <img :src="content.meetingImage">
        <div class="wenzi">
            <h3>{{content.meetingName}}</h3>
            <p class="wenzi-style">{{content.meetingDateil}}</p>
            <p class="wenzi-capacity">{{content.meetingCapacity||0}}人场地</p>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    content: Object
  },
  methods: {
    goyuyueMeet () {
      this.$router.push({ path: `/view/yuyue/meetingPlace-detail/${this.content.id}` })
    }
  }
}
</script>
<style lang="less" scoped>
.m-cart{
    width: 100%;
    margin-top: 16px;
    img{
        display: block;
        width: 100%;
        height: 193px;
    }
    .wenzi{
        width: 100%;
        padding: 12px 16px 16px 16px;
        background-color: #fff;
        h3{
            margin: 0 0 8px 0;
            font-size: 16px;
            font-weight: 400;
            color: #0F1826;
            line-height: 22px;
        }
        p{
            margin:0
        }
        .wenzi-style{
            width: 100%;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 400;
            color: #6E7580;
            line-height: 24px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .wenzi-capacity{
            font-size: 14px;
            font-weight: 400;
            color: #6E7580;
            line-height: 20px;
        }
    }

}
</style>
