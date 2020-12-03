<!--
 * @Author: ShenYuQiang
 * @Date: 2020-12-02 00:56:50
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 00:17:28
 * @FilePath: \h5ysxz\src\views\home\enterprise.vue
-->
<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 15:16:31
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-26 16:07:11
 * @FilePath: \h5ysxz\src\views\home\viewDetail.vue
-->
<template>
    <div class="enterprise">
        <van-nav-bar
         left-arrow
         @click-left="onClickLeft"
         title="入驻企业"
         :fixed="true"
         z-index="999" />
        <van-tabs v-model="activeName" @change="nameChange">
            <van-tab v-for="item in streetList" :key="item.id" :name="item.code" :title="item.name">
                <van-grid :border="false" square :gutter="10" :column-num="3">
                     <van-grid-item v-for="items in contentInfo" :key="items.id" :style="{width:'90px'}" @click="goDetail(items)">
                         <van-image :src="items.enterpriseLogo" />
                         <span>{{items.enterpriseName}}</span>
                     </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { getStreetList, queryInfoList } from './service'
export default {
  setup () {},
  data () {
    return {
      activeName: '',
      streetList: [],
      contentInfo: []
    }
  },
  watch: {
    activeName: function (val) {
      this.getInfoList({ streetType: val })
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    nameChange (name, title) {
      this.getInfoList({ streetType: name })
    },
    async queryStreetList () {
      const res = await getStreetList()
      if (res.code === 0) {
        this.streetList = res.data
        this.activeName = res.data[0].code
      }
    },
    async getInfoList (params) {
      const res = await queryInfoList(params)
      if (res.code === 0) {
        this.contentInfo = res.data
      }
    },
    goDetail (item) {
      const { id } = item
      if (id) {
        this.$router.push(`/view/home/enterpriseDetail/${id}`)
      }
    }

  },
  mounted () {
    this.queryStreetList()
  }

}
</script>
<style lang="less" scoped>
    .enterprise{
        width:100%;
        height: 100%;
        padding-top: 46px;
        background-color: #F6F5FA;
       /deep/ .van-tabs__content{
          padding-top: 8px ;
          span{
            margin-top: 8px;
          }
        }
    }
</style>
