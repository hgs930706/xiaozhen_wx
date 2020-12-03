<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-26 21:06:50
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 23:36:28
 * @FilePath: \h5ysxz\src\views\yuyue\reservation.vue
-->
<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 10:10:22
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-28 19:05:43
 * @FilePath: \h5ysxz\src\views\yuyue\signUp.vue
-->
<template>
  <div id="resrvation">
    <van-nav-bar
      title="接待预约"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      z-index="999"
    />
    <!--  -->
    <div class="activity-pic">
      <img :src="lunbo01" alt="" />
    </div>
    <!--  -->
    <div class="signUp-title">
      <h4>
        <span>◆</span>
        <span>活动报名</span>
      </h4>
      <div class="description">
        {{ detail || "暂无信息" }}
      </div>
    </div>
    <!--  -->
    <div class="signUp-form">
      <h4>请填写</h4>
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.bookingCompany"
          name="预约单位"
          label="预约单位"
          required
          placeholder="预约单位"
          :rules="[{ required: true, message: '请填写预约单位' }]"
        />
        <van-field
          v-model="form.bookingName"
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
          v-model="form.visitCount"
          name="参观人数"
          label="参观人数"
          required
          placeholder="参观人数"
          :rules="[{ required: true, message: '请填写参观人数' }]"
        />
        <van-field
          readonly
          clickable
          required
          :rules="[{ required: true, message: '请填写参观时间' }]"
          name="datetimePicker"
          v-model="form.bookingTime"
          label="参观时间"
          placeholder="点击选择参观时间"
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
        <van-field name="checkboxGroup" label="参观方式">
          <template #input>
            <van-checkbox-group
              v-model="form.visitType"
              direction="horizontal"
            >
              <van-checkbox
                v-for="item in columns"
                :key="item"
                :name="item"
                shape="square"
                >{{ item }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader :max-count="3" multiple v-model="form.files" />
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
import useIconImp from '../../composable/iconImp'
import { querySelectCount, queryContent, addYuyue } from './service'
import $moment from 'moment'
export default {
  data () {
    return {
      startTimeshowPicker: false,
      showPicker: false,
      value: '',
      columns: [],
      detail: '',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      form: {
        bookingCompany: '',
        bookingTime: '',
        mobile: '',
        bookingName: '',
        visitCount: '',
        visitType: '',
        remark: '',
        files: []
      }
    }
  },
  setup () {
    const { lunbo01 } = useIconImp()
    return { lunbo01 }
  },
  computed: {
    newColumns () {
      const arr = []
      this.columns.forEach((item) => {
        arr.push(item.count)
      })
      return arr
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },

    async getContent () {
      const res = await queryContent()
      if (res.code === 0) {
        this.data = res.data
      }
    },

    startTimeConfirm (val) {
      this.form.bookingTime = $moment(val).format('YYYY-MM-DD HH:mm:ss')
      this.startTimeshowPicker = false
    },

    async getSelectCount () {
      const res = await querySelectCount({ id: this.id })
      if (res.code === 0) {
        this.columns = res.data
      } else {
        this.columns = ['观光车', '徒步']
      }
    },

    async addActivity (params) {
      const res = await addYuyue(params)
      if (res) {
        return res
      }
    },

    onConfirm (value) {
      this.visitType = value
      this.showPicker = false
    },

    async onSubmit () {
      const params = new FormData()

      Object.keys(this.form).forEach((item) => {
        if (item === 'files') {
          this.form[item].forEach((v) => {
            params.append(item, v.file)
          })
        } else {
          params.append(item, this.form[item])
        }
      })

      if (this.id) {
        params.append('activityId', this.id)
      }
      const res = await this.addActivity(params)
      if (res.code === 0) {
        this.$router.push({ path: '/view/yuyue' })
      } else {
        this.$notify({ type: 'danger', message: res.message })
      }
    }
  },
  mounted () {
    this.getSelectCount()
    this.getContent()
  }
}
</script>

<style lang="less" scoped>
#resrvation {
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
