<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 15:16:31
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 22:24:49
 * @FilePath: \新建文件夹\src\views\home\viewDetail.vue
-->
<template>
    <div class="viewDetail">
        <van-nav-bar
         left-arrow
         @click-left="onClickLeft"
         :title="title"
         :fixed="true"
         z-index="999" />
        <h4>敬请期待...</h4>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  setup () {
    const route = useRoute()
    const title = computed(() => {
      const { query } = route
      return query.title
    })
    return { title }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }

}
</script>
<style lang="less" scoped>
    .viewDetail{
        width:100%;
        height: 100%;
        padding-top: 46px;
        background-color: #F6F5FA;
    }
</style>
