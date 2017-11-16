import Vue from 'vue'
import commonFun from 'src/commons'
import store from 'src/store'
import Router from 'vue-router'
import routerLink from './router-link'
import hold from 'src/commons/hold'
import wordBook from 'src/commons/wordBook'

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

Vue.use(Router)

const router = new Router({
  routes: routerLink
})

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0);

router.beforeEach((to, from, next) => {
  next()
  // 切换效果结束
})

router.afterEach((to, from, next) => {
 
  store.commit('updateLoadingStatus', {isLoading: false})
  // 设置标题
  global.document.title = to.meta.title || '大象医生'
  // 滚动条回到头部
  global.scrollTo(0, 0)
})

export default router
