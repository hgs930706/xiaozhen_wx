<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 16:36:56
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-27 23:37:49
 * @FilePath: \h5ysxz\src\views\yuyue\compontent\y-cart.vue
-->

<template>
    <div class="y-cart" @click.stop="goyuyueDetail">
        <img :src="content.activityImage">
        <div class="wenzi">
            <p>{{content.activityDetail}}</p>
            <p>{{`${content.createTime} —— ${content.endTime}`}}</p>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    content: Object
  },
  methods: {
    goyuyueDetail () {
      const { id } = this.content
      if (!id) {
        this.$notify('信息缺失！！！')
      }
      this.$router.push({ path: `/view/yuyue/activity-detail/${id}` })
    }
  }
}
</script>
<style lang="less" scoped>
.y-cart{
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
        p{
            margin:0
        }
        p:first-child{
            margin-bottom: 4px;
            font-size: 16px;
            font-weight: 400;
            color: #333;
            line-height: 22px;
            overflow: hidden;
            text-overflow:ellipsis; //溢出用省略号显示
            white-space:nowrap;
        }
        p:last-child{
            font-size: 12px;
            font-weight: 400;
            color: #6E7580;
            line-height: 17px;
        }
    }

}
</style>
