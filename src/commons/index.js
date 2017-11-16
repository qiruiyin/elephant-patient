import Vue from 'vue'
import router from '../router'
import store from '../store'
import hold from './hold'
import qs from 'qs'

import wordBook from './wordBook'

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
