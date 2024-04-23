import request from '@/utils/request'
import type { UserLogin } from './type'

// 将请求的地址用枚举管理起来
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}
// 登录验证
export function reqLogin<T = UserLogin>(data: T) {
  return request({
    url: API.LOGIN_URL,
    method: 'post',
    data: data
  })
}
// 获取用户信息
export function getUserInfo() {
  return request({
    url: API.USERINFO_URL,
    method: 'get'
  })
}
