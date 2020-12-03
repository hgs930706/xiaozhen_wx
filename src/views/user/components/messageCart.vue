<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 18:15:41
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 02:42:29
 * @FilePath: \h5ysxz\src\views\user\components\messageCart.vue
-->
<template>
    <div class="messageCart">
        <div class="time">{{content.createTime}}</div>
        <div class="content">
            <!-- ,//1活动消息、2接待预约消息、3会议场地预约消息、0其它' -->
            <h3 v-if="content.msgType==1">活动预约</h3>
            <h3 v-if="content.msgType==2">接待预约</h3>
            <h3 v-if="content.msgType==3">会议场地预约</h3>
            <h3 v-if="content.msgType==0">其他</h3>

            <p v-if="content.approvalStatus==1" class="message">您好，您已成功预约</p>
             <p v-if="content.approvalStatus==2" class="message">您好，您的预约被拒绝</p>
            <p>
                <span v-if="content.msgType==1">活动名称：</span>
                <span v-if="content.msgType==2">接待预约：</span>
                <span v-if="content.msgType==3">接待预约：</span>
                <span>{{content.name}}</span>
            </p>
            <p>
                <span v-if="content.msgType==1">活动地址：</span>
                <span v-if="content.msgType==2">接待地址：</span>
                <span v-if="content.msgType==3">接待地址：</span>
                <span>{{content.receiveAddress}}</span>
            </p>
            <p>
                <span v-if="content.msgType==1">活动时间：</span>
                <span v-if="content.msgType==2">预约时间：</span>
                <span v-if="content.msgType==3">预约时间：</span>
                <span>{{content.bookingTime}}</span>
            </p>

            <p class="mark">
                <span>备注：</span>
                <span>{{content.msgContent}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    content: Object
  }
}
</script>
<style lang="less" scoped>
.messageCart{
    width: 100%;
    .time{
      width: 100%;
      margin: 20px 0 12px 0;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      color: #6E7580;
      line-height: 20px;
    }
    .content{
        width: 100%;
        padding: 16px;
        background-color: #fff;
        h3{
           margin: 0 0 4px 0;
           font-size: 16px;
           font-weight: 400;
           color: #0F1826;
           line-height: 22px;
        }
        p.message{
            margin: 0 0 16px 0;
            width: 100%;
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            color: #7E7E7E;
            line-height: 20px;
        }
        p{
            margin: 0 0 2px 0;
            width: auto;
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            color: #181818;
            line-height: 20px;
        }
        p.mark{
            padding: 16px 0 10px 0;
        }
    }
}
</style>
