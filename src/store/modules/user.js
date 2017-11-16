// 用户信息存储
import * as types from '../mutation-types'
// 用户等级
// 普通用户：common，会员：member ，合伙人： partner ，梦想合伙人： dreamPartner

export default {
  state: {
    img: '', // 头像
    name: '', // 姓名
    userId: '', // 用户关键词
    openId: '', // 用户微信生成的openId
    mobile: '', // 用户电话
    wxAccount: '', // 微信账号
  },
  mutations: {
    updateUserImg (state, payload) {
      state.img = payload.img
    },
    updateUserName (state, payload) {
      state.name = payload.name
    },
    updateUserOpenId (state, payload) {
      state.openId = payload.openId
    },
    updateUserUserId (state, payload) {
      state.userId = payload.userId
    },
    updateUserMobile (state, payload) {
      state.mobile = payload.mobile
    },
    updateUserWxAccount (state, payload) {
      state.wxAccount = payload.wxAccount
    },
  }
}
