/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-23 22:37:28
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-12-03 00:09:35
 * @FilePath: \h5ysxz\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const View = () => import('../views/index.vue')
// home
const Home = () => import('../views/home/index.vue')
const Xiaozhen = () => import('../views/home/xiaozhen.vue')
const ViewDetail = () => import('../views/home/viewDetail.vue')
const Enterprise = () => import('../views/home/enterprise.vue')
const EnterpriseDetail = () => import('../views/home/enterpriseDetail.vue')
// login
const Login = () => import('../views/login/index.vue')
// yuyue
const Yuyue = () => import('../views/yuyue/index.vue')
const Activity = () => import('../views/yuyue/activity.vue')
const ActivityDetail = () => import('../views/yuyue/activityDetail.vue')
const Resrvation = () => import('../views/yuyue/reservation.vue')
const SignUp = () => import('../views/yuyue/signUp.vue')
const MeetingPalce = () => import('../views/yuyue/meetingPlace.vue')
const MeetingPlaceDetail = () => import('../views/yuyue/meetingPlaceDetail.vue')
const ReservationMeet = () => import('../views/yuyue/reservationMeet.vue')
// yonghu
const User = () => import('../views/user/index.vue')
const MySuggest = () => import('../views/user/mySuggest.vue')
const MyMessage = () => import('../views/user/myMessage.vue')
const MyBookings = () => import('../views/user/myBookings.vue')
const BookingDetails = () => import('../views/user/bookingDetails.vue')

const routes = [
  {
    path: '/',
    redirect: '/view'
  },
  {
    path: '/login',
    name: 'login',
    meta: { lv: 0 },
    component: Login
  },
  {
    path: '/view',
    name: 'view',
    meta: { lv: 0 },
    redirect: '/view/home',
    component: View,
    children: [
      {
        path: '/view/home',
        name: 'home',
        meta: { lv: 1 },
        component: Home
      },
      {
        path: '/view/home/xiaozhen',
        name: 'xiaozhen',
        meta: { lv: 2 },
        component: Xiaozhen
      },
      {
        path: '/view/home/enterprise',
        name: 'enterprise',
        meta: { lv: 2 },
        component: Enterprise
      },
      {
        path: '/view/home/enterpriseDetail/:id',
        name: 'enterpriseDetail',
        meta: { lv: 2 },
        component: EnterpriseDetail
      },
      {
        path: '/view/home/detail/:id',
        name: 'view-detail',
        meta: { lv: 2 },
        component: ViewDetail
      },
      {
        path: '/view/yuyue',
        name: 'yuyue',
        meta: { lv: 1 },
        component: Yuyue
      },
      {
        path: '/view/yuyue/resrvation',
        name: 'resrvation',
        meta: { lv: 2 },
        component: Resrvation
      },
      {
        path: '/view/yuyue/activity',
        name: 'yuyue-activity',
        meta: { lv: 2 },
        component: Activity
      },
      {
        path: '/view/yuyue/activity-detail/:id',
        name: 'activity-detail',
        meta: { lv: 2 },
        component: ActivityDetail
      },
      {
        path: '/view/yuyue/signUp',
        name: 'signUp',
        meta: { lv: 2 },
        component: SignUp
      },
      {
        path: '/view/yuyue/meetingPlace',
        name: 'meetingPlace',
        meta: { lv: 2 },
        component: MeetingPalce
      },
      {
        path: '/view/yuyue/meetingPlace-detail/:id',
        name: 'meetingPlace-detail',
        meta: { lv: 2 },
        component: MeetingPlaceDetail
      },
      {
        path: '/view/yuyue/reservationMeet',
        name: 'reservationMeet',
        meta: { lv: 2 },
        component: ReservationMeet
      },
      {
        path: '/view/user',
        name: 'user',
        meta: { lv: 1 },
        component: User
      },
      {
        path: '/view/user/mySuggest',
        name: 'mySuggest',
        meta: { lv: 2 },
        component: MySuggest
      },
      {
        path: '/view/user/myMessage',
        name: 'myMessage',
        meta: { lv: 2 },
        component: MyMessage
      },
      {
        path: '/view/user/myBookings',
        name: 'myBookings',
        meta: { lv: 2 },
        component: MyBookings
      },
      {
        path: '/view/user/bookingDetails/:id',
        name: 'bookingDetails',
        meta: { lv: 2 },
        component: BookingDetails
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
