// import encrypt from '@/common/encrypt'
import {
  request_post
} from '@/common/request'

// const API_CONFIG = '/api/login'
const API_CONFIG = 'http://localhost:3000/getorderinfo'

/**
 * [checkLogin 验证登录]
 * @param  {[type]} options.user [description]
 * @param  {[type]} options.pwd  [description]
 * @return {[type]}              [description]
 */
export const checkOrder = (account) => {
  // pwd = encrypt(pwd)    // 加密登录
  // const url = `${API_CONFIG}/${user}/${pwd}`

  // return request_get(url)
  return request_post(API_CONFIG, {account})
}