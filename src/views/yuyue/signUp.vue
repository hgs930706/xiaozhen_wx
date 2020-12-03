<!--
 * @Author: ShenYuQiang
 * @Date: 2020-11-27 10:10:22
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-02 00:33:15
 * @FilePath: \h5ysxz\src\views\yuyue\signUp.vue
-->
<template>
    <div id="signUp">
        <van-nav-bar
         title="活动报名"
         left-arrow
         @click-left="onClickLeft"
         :fixed="true"
         z-index="999" />
        <!--  -->
        <div class="activity-pic">
          <img :src="img" alt="">
        </div>
        <!--  -->
        <div class="signUp-title">
            <h4>
              <span>◆</span>
              <span>活动报名</span>
            </h4>
            <div class="description">
                {{detail}}
            </div>
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
                name="picker"
                v-model="value"
                label="预约场次"
                placeholder="点击选择城场次"
                @click="showPicker = true"
              />
              <van-popup v-model:show="showPicker" position="bottom">
                <van-picker
                  :columns="newColumns"
                  @confirm="onConfirm"
                  @cancel="showPicker = false"
                />
              </van-popup>
              <van-field name="uploader" label="文件上传">
                 <template #input>
                   <!-- :before-read="beforeRead" -->
                   <!-- :after-read="afterRead" -->
                   <van-uploader :max-count="3" multiple  v-model="form.files" />
                 </template>
               </van-field>
              <div style="margin: 16px;">
                <van-button block type="primary" native-type="submit">
                  确认提交
                </van-button>
              </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { querySelectCount, addBooking } from './service'

export default {
  data () {
    return {
      showPicker: false,
      value: '',
      columns: [],
      form: {
        bookingUnit: undefined,
        mobile: undefined,
        bookingPerson: undefined,
        joinPeople: undefined,
        activityCountId: undefined,
        files: []
      }
    }
  },
  setup () {
    const { query: { img, detail, id } } = useRoute()
    return { img, detail, id }
  },
  computed: {
    newColumns () {
      const arr = []
      this.columns.forEach(item => {
        arr.push(item.count)
      })
      return arr
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },

    async getSelectCount () {
      const res = await querySelectCount({ id: this.id })
      if (res.code === 0) {
        this.columns = res.data
      }
    },

    async addActivity (params) {
      const res = await addBooking(params)
      if (res) {
        return res
      }
    },

    onConfirm (value) {
      this.form.activityCountId = this.columns.find(item => item.count === value).id
      this.value = value
      this.showPicker = false
    },

    async onSubmit () {
      const params = new FormData()

      Object.keys(this.form).forEach(item => {
        if (item === 'files') {
          this.form[item].forEach(v => {
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
        this.$router.push({ path: '/view/yuyue/activity' })
      } else {
        this.$notify({ type: 'danger', message: res.message })
      }
    }
  },
  mounted () {
    this.getSelectCount()
  }
}
</script>

<style lang="less" scoped>
    #signUp{
        width: 100%;
        padding-top: 46px;
        background-color: #F6F5FA;
        .activity-pic{
          width: 100%;
          height: 211px;
          img{
            width: 100%;
            height: 211px;
          }
        }
        .signUp-title{
            width: 100%;
            padding: 20px 16px 16px 16px;
            background: #fff;
            h4{
              width: 100%;
              margin: 0 0 13px 0;
              span:first-child{
                  margin-right: 16px;
                  font-size: 18px;
                  color: #32A2DF;;
              }
              span:last-child{
                  font-size: 18px;
                  font-weight: 400;
                  color: #0F1826;
                  line-height: 25px;
              }
            }
            .description{
                font-size: 14px;
                font-weight: 400;
                color: #6E7580;
                line-height: 24px;
            }
        }
        .signUp-form{
            width: 100%;
            padding: 32px 16px 0 16px;
            background-color: #fff;
            h4{
              width: 100%;
              margin: 0 0 13px 0;
            }
        }
    }

</style>
