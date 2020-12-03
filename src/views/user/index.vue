<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-24 22:54:39
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 01:23:07
 * @FilePath: \h5ysxz\src\views\user\index.vue
-->
<template>
    <div id="user">
        <van-nav-bar title="我的" :fixed="true" z-index="999" />
        <div class="mian">
            <div class="info">
                <div class="imgInfo">
                     <van-image
                       round
                       width="64"
                       height="64"
                       :src="info.headImgurl||defaultImg"
                     />
                </div>
               <!--  -->
               <div v-if="!info.nickname" class="userInfo" @click="goLogin">
                    <h3>{{userName}}</h3>
                    <p>点击登录</p>
               </div>
               <div v-else class="userInfo2">
                    <h3>{{ info.nickname }}</h3>
               </div>
            </div>
            <div class="content">
              <van-grid :border="false" square :column-num="3">
                  <van-grid-item to="/view/user/myBookings" >
                    <van-image :src="IconUser01" />
                    <span class="itemStyle">我的预约</span>
                  </van-grid-item>
                  <van-grid-item to="/view/user/myMessage" >
                    <van-image :src="IconUser02" />
                    <span class="itemStyle">我的消息</span>
                  </van-grid-item>
                  <van-grid-item to="/view/user/mySuggest" >
                    <van-image :src="IconUser03" />
                    <span class="itemStyle">意见建议</span>
                  </van-grid-item>
              </van-grid>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import useIconImp from '../../composable/iconImp'
import { getUserInfo } from './service'
export default {
  setup () {
    const { defaultImg, IconUser01, IconUser02, IconUser03 } = useIconImp()
    const userName = ref('登录/注册')
    return { defaultImg, IconUser01, IconUser02, IconUser03, userName }
  },
  data () {
    return {
      info: {}
    }
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    async queryInfo () {
      const res = await getUserInfo()
      if (res.code === 0) {
        this.info = res.code
      }
    }
  },
  mounted () {
    this.queryInfo()
  }
}
</script>

<style lang="less" scoped>
#user{
    width: 100%;
    padding-top:46px;
    background-color: #F6F5FA;
    .mian{
        width: 100%;
        height: 100%;
        padding-top:21px;
        background-color: #fff;
        .info{
            display: flex;
            width: 100%;
            height:94px;
            padding:18px 0 12px 34px;
            background: url('../../assets/icon/bg@2x.png');
            background-size: 100% 100%;
            .imgInfo{
               width: 64px;
            }
            .userInfo{
               flex: 1;
               margin-left: 16px;
                h3,p{
                    margin: 0;
                }
                h3{
                  margin: 4px 0;
                   width: auto;
                   height: 33px;
                   font-size: 24px;
                   font-weight: 500;
                   color: #0F1826;
                   line-height: 33px;
                }
                p{
                   height: 20px;
                   font-size: 14px;
                   font-weight: 400;
                   color: #ADB2BA;
                   line-height: 20px;
                }
            }
            .userInfo2{
               flex: 1;
               margin-left: 16px;
                h3{
                   margin: 4px 0;
                   width: auto;
                    height: 33px;
                    font-size: 24px;
                    font-weight: 500;
                    color: #0F1826;
                    line-height: 33px;
                }
            }
        }
        .content{
            width: 100%;
            padding: 30px 16px 0 16px;
            .van-grid{
               border-top: 1px solid #ccc;
            }
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
    }
}
</style>
