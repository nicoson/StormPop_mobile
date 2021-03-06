// import * as types from './mutation-types'

// state
export const state = {
  'loginStatus': JSON.parse(localStorage.getItem('loginStatus') || '{}'), // 用户登录状态
  'userInfo': JSON.parse(localStorage.getItem('userInfo') || '{}'), // 用户登录信息
  'prodInfo': JSON.parse(localStorage.getItem('prodInfo') || '{}'), // 用户登录信息
  'accounts': JSON.parse(localStorage.getItem('accounts') || '[]'), // 登陆过的用户
  'cartNum': JSON.parse(localStorage.getItem('cartNum') || 0) // 登陆过的用户
}

// mutations
export const mutations = {
  update_userInfo (state, data) {
    state.userInfo = data
    localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
  },
  update_prodInfo (state, data) {
    state.prodInfo = data
    localStorage.setItem('prodInfo', JSON.stringify(state.prodInfo))
  },
  update_orderInfo (state, data) {
    state.orderInfo = data
    localStorage.setItem('orderInfo', JSON.stringify(state.orderInfo))
  },
  update_loginStatus (state, data) {
    state.loginStatus = data
    localStorage.setItem('loginStatus', JSON.stringify(state.loginStatus))
  },
  update_cartNum (state) {
    state.cartNum = JSON.parse(localStorage.getItem('cart') || '[]').length
    localStorage.setItem('cartNum', state.cartNum)
  }
}

// function clear(state) {
//   state.friend.hasGetFriendList = 0
//   state.friend.hasGetNewFriends = 0

//   state.sidebar = {
//     'isShowSideBar': false,
//     'isInit': true,
//     'isShowMask': false
//   }
//   state.warn = {
//     'isShow': false,
//     'message': ''
//   }
//   state.loginStatus = {}
//   state.userInfo = {}

//   // 注意不能清空accounts,即登录过的用户
//   localStorage.removeItem('loginStatus')
//   localStorage.removeItem('userInfo')
// }