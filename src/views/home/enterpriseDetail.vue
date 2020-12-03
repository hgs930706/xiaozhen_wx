<!--
 * @Author: ShenYuQiang
 * @Date: 2020-12-03 00:03:51
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 01:05:54
 * @FilePath: \h5ysxz\src\views\home\enterpriseDetail.vue
-->
<template>
    <div class="enterpriseDetail">
         <van-nav-bar
         left-arrow
         @click-left="onClickLeft"
         title="企业详情"
         :fixed="true"
         z-index="999" />
         <van-image
            width="100%"
            height="211"
            :src="content.enterpriseLogo"
        />
        <div class="content">
              <p>
                  <span>企业名称</span>
                  <span>{{content.enterpriseName}}</span>
              </p>
              <p>
                  <span>入驻地址</span>
                  <span>{{content.enterpriseEnterAddress}}</span>
              </p>
              <p>
                  <span>联系电话</span>
                  <span>{{content.enterpriseMobile}}</span>
              </p>
              <p>
                  <span>企业网址</span>
                  <span>{{content.enterpriseWeb}}</span>
             </p>
             <van-divider />
             <div :style="{width:'100%',position:'relative'}">
                 <h4>企业简介</h4>
                 <p class="enterpriseDetailitem">{{content.enterpriseDetail}}</p>
                 <p class="tishi">长安下图识别二维码，关注企业</p>
                 <van-image
                    width="100"
                    height="100"
                    :src="content.enterpriseQr"
                 />
             </div>
        </div>
    </div>
</template>
<script>
import { queryQiyeDetail } from './service'
export default {
  data () {
    return {
      content: {}
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async getContent () {
      const { params: { id } } = this.$route
      const res = await queryQiyeDetail({ id })
      if (res.code === 0) {
        this.content = res.data
      } else {
        this.$notify({ type: 'danger', message: res.message })
      }
    }
  },
  mounted () {
    this.getContent()
  }
}
</script>
<style lang="less" scoped>
.enterpriseDetail{
    position: relative;
    width: 100%;
    height:100%;
    padding-top: 46px;
    background-color: #F6F5FA;
    .content{
        position: absolute;
        top: 175px;
        left: 50%;
        transform: translateX(-50%);
        width: 88%;
        padding:30px 20px 0;
        background-color: #fff;
        p{
            width: 100%;
            height: 20px;
            span:first-child{
                font-size: 14px;
                font-weight: 400;
                color:#6E7580;
                line-height: 20px;
                margin-right: 20px;
            }
            span:last-child{
                font-size: 14px;
                font-weight: 400;
                color:#000000;
                line-height: 20px;
            }
        }
        h4{
            width: 100%;
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            color: #6E7580;
            line-height: 20px;
        }
        .enterpriseDetailitem{
            width: 100%;
            height: 26px;
            font-size: 14px;
            color: #0F1826;
            line-height: 26px;
        }
        .tishi{
            width: 100%;
            height: 18px;
            line-height: 18px;
            font-size: 14px;
            color: #6E7580;
            text-align: center;
        }
        /deep/ .van-image{
           position: absolute;
           bottom: -180px;
           left: 50%;
           transform: translateX(-50%);
        }
    }
}
</style>
