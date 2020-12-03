<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 10:10:22
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 23:21:03
 * @FilePath: \h5ysxz\src\views\yuyue\reservationMeet.vue
-->
<template>
  <div id="reserVationMeet">
    <van-nav-bar
      title="场地预约"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      z-index="999"
    />
    <!--  -->
    <div class="activity-pic">
      <img :src="img || yuyueImg" alt="" />
    </div>
    <!--  -->
    <div class="signUp-title">
      <h4>
        <span>◆</span>
        <span>活动报名</span>
      </h4>
      <div class="description">{{ detail }}</div>
    </div>
    <!--  -->
    <div class="signUp-form">
      <h4>请填写</h4>
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.bookingUnit"
          name="预约单位"
          label="预约单位"
          required
          placeholder="预约单位"
          :rules="[{ required: true, message: '请填写预约单位' }]"
        />
        <van-field
          v-model="form.bookingPerson"
          name="预约人"
          label="预约人"
          required
          placeholder="预约人"
          :rules="[{ required: true, message: '请填写预约人' }]"
        />
        <van-field
          v-model="form.mobile"
          name="联系电话"
          label="联系电话"
          required
          placeholder="联系电话"
          :rules="[{ required: true, message: '请填写联系电话' }]"
        />
        <van-field
          v-model="form.joinPeople"
          name="参与人数"
          label="参与人数"
          placeholder="参与人数"
        />

        <van-field
          readonly
          clickable
          name="datetimePicker"
          v-model="form.bookingStartTime"
          label="开始时间"
          placeholder="点击选择开始时间"
          @click="startTimeshowPicker = true"
        />
        <van-popup v-model:show="startTimeshowPicker" position="bottom">
          <van-datetime-picker
            type="datetime"
            title="选择完整时间"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="startTimeConfirm"
            @cancel="startTimeshowPicker = false"
          />
        </van-popup>

        <van-field
          readonly
          clickable
          name="datetimePicker"
          v-model="form.bookingEndTime"
          label="结束时间"
          placeholder="点击选择结束时间"
          @click="endTimeshowPicker = true"
        />
        <van-popup v-model:show="endTimeshowPicker" position="bottom">
          <van-datetime-picker
            type="datetime"
            title="选择完整时间"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="endTimeConfirm"
            @cancel="endTimeshowPicker = false"
          />
        </van-popup>

        <van-field name="checkboxGroup" label="会议类型">
          <template #input>
            <van-checkbox-group
              v-model="form.meetingType"
              direction="horizontal"
            >
              <van-checkbox
                v-for="item in state.meetingType"
                :key="item"
                :name="item"
                shape="square"
                >{{ item }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field>

        <van-field name="checkboxGroup" label="会议室桌型">
          <template #input>
            <van-checkbox-group
              v-model="form.meetingTable"
              direction="horizontal"
            >
              <van-checkbox
                v-for="item in state.meetingTable"
                :key="item"
                :name="item"
                shape="square"
                >{{ item }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field>

        <van-field name="checkboxGroup" label="会议室用品">
          <template #input>
            <van-checkbox-group
              v-model="form.meetingGoods"
              direction="horizontal"
            >
              <van-checkbox
                v-for="item in state.meetingGoods"
                :key="item"
                :name="item"
                shape="square"
                >{{ item }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field
          v-model="form.remark"
          rows="2"
          autosize
          label="备注"
          type="textarea"
          maxlength="200"
          placeholder="请输入备注"
          show-word-limit
        />
        <div style="margin: 16px">
          <van-button block type="primary" native-type="submit">
            确认提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useIconImp from '../../composable/iconImp'
import { queryMeetSelect, addMeeting } from './service'
import $moment from 'moment'
export default {
  data () {
    return {
      startTimeshowPicker: false,
      endTimeshowPicker: false,
      meetTypeshowPicker: false,
      meetGoodsshowPicker: false,
      meetTableshowPicker: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      form: {
        // meetingAreaId
        bookingUnit: '',
        bookingPerson: '',
        mobile: '',
        // remarkInfo: '',
        bookingStartTime: '',
        bookingEndTime: '',
        // receiveAddress: '',
        joinPeople: '',
        meetingTable: [],
        meetingType: [],
        meetingGoods: [],
        remark: ''
      }
    }
  },
  setup () {
    const {
      query: { img, detail, id }
    } = useRoute()
    const state = ref({})
    const { yuyueImg } = useIconImp()

    const querySelect = async (params) => {
      const res = await queryMeetSelect(params)
      if (res.code === 0) {
        state.value = { ...res.data }
      }
    }
    onMounted(() => {
      querySelect({ id })
    })
    return { yuyueImg, img, detail, id, state }
  },
  methods: {
    $moment,
    onClickLeft () {
      this.$router.back()
    },
    startTimeConfirm (val) {
      this.form.bookingStartTime = $moment(val).format('YYYY-MM-DD HH:mm:ss')
      this.startTimeshowPicker = false
    },
    endTimeConfirm (val) {
      this.form.bookingEndTime = $moment(val).format('YYYY-MM-DD HH:mm:ss')
      this.endTimeshowPicker = false
    },
    meetTypeConfirm (val) {
      this.form.meetingType = val
      this.meetTypeshowPicker = false
    },
    meetTableoConfirm (val) {
      this.form.meetingTable = val
      this.meetTableshowPicker = false
    },
    meetGoodsConfirm (val) {
      this.form.meetingGoods = val
      this.meetGoodsshowPicker = false
    },
    async addMeet (params) {
      const res = await addMeeting(params)
      if (res.code === 0) {
        return res
      }
    },
    async onSubmit () {
      const params = Object.assign({}, this.form)
      // Object.keys(this.form).forEach(item => {
      //   if (item === 'files') {
      //     this.form[item].forEach(v => {
      //       params.append(item, v.file)
      //     })
      //   } else {
      //     params.append(item, this.form[item])
      //   }
      // })
      for (const k in params) {
        if (Array.isArray(params[k])) {
          params[k] = params[k].join()
        }
      }
      if (this.id) {
        params.meetingAreaId = this.id
      }
      const res = await this.addMeet(params)
      if (res.code === 0) {
        this.$router.push({ path: '/view/yuyue/meetingPlace' })
      } else {
        this.$notify({ type: 'danger', message: res.message })
      }
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped>
#reserVationMeet {
  width: 100%;
  padding-top: 46px;
  background-color: #f6f5fa;
  .activity-pic {
    width: 100%;
    height: 211px;
    img {
      width: 100%;
      height: 211px;
    }
  }
  .signUp-title {
    width: 100%;
    padding: 20px 16px 16px 16px;
    background: #fff;
    h4 {
      width: 100%;
      margin: 0 0 13px 0;
      span:first-child {
        margin-right: 16px;
        font-size: 18px;
        color: #32a2df;
      }
      span:last-child {
        font-size: 18px;
        font-weight: 400;
        color: #0f1826;
        line-height: 25px;
      }
    }
    .description {
      font-size: 14px;
      font-weight: 400;
      color: #6e7580;
      line-height: 24px;
    }
  }
  .signUp-form {
    width: 100%;
    padding: 32px 16px 0 16px;
    background-color: #fff;
    h4 {
      width: 100%;
      margin: 0 0 13px 0;
    }
  }
}
</style>
