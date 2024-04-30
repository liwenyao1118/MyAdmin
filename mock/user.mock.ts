import { defineMock } from 'vite-plugin-mock-dev-server'
import user from './data/user.ts'
import mock from 'mockjs'

export default defineMock([
  {
    // 获取验证码接口
    url: '/api/getVerificationCode',
    method: 'GET',
    body(){
      // 生成随机的4位字符串
      const randomStr = mock.Random.string( 'upper',4)
      return {code: 200, data: mock.Random.image('100x40', '#ffcc33', '#FFF', 'png', randomStr)}
    }
  },
  {
    // 登录接口
    url: '/api/user/login',
    method: 'POST',
    response(req, res) {
      //  判断当前用户列表是否存在当前用户
      const targetUser = user.value.find((item) => {
        if (item.username == req.body.username && item.password == req.body.password) {
          return item
        }
      })
      //   如果不存在，返回结果
      if (!targetUser) {
        res.end(JSON.stringify({ code: 201, data: { message: '账号或者密码不正确' } }))
      }
      // 如果用户存在，则返回token
      const { token } = targetUser
      res.end(JSON.stringify({ code: 200, data: { token } }))
    }
  },
  {
    // 获取用户信息接口
    url: '/api/user/info',
    method: 'GET',
    body({ headers }) {
      // 获取当前请求携带的token，判断该用户是否存在
      const reqToken = headers.token
      const targetUser = user.value.find((item) => {
        if (item.token == reqToken) {
          return item
        }
      })
      console.log(targetUser)

      // 如果不存在，返回结果
      if (!targetUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      //   如果存在，返回用户信息
      return { code: 200, data: { targetUser } }
    }
  }
])
