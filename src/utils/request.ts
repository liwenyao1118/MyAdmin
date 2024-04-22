import axios from 'axios'
// 用作系统提示的组件
import { ElMessage } from 'element-plus'
// 创建一个定制的新实例
const request = axios.create({
  // 基本请求地址根据环境变量而改变
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时时间
  timeout: 5000
})
// 配置请求拦截器
request.interceptors.request.use((config) => {
  // config包含请求相关的信息，并且其中的headers通常用来携带接口的公共数据
  return config
})
// 配置响应拦截器
request.interceptors.response.use(
  (res) => {
    // 请求成功时
    // 简化响应数据
    return res.data
  },
  (err) => {
    // 遇到错误时,获取错误的相应状态码
    const code = err.response.status
    // 通过相应状态码给予提示
    switch (code) {
      case 401:
        ElMessage.error('未登录')
        break
      case 403:
        ElMessage.error('拒绝访问')
        break
      case 404:
        ElMessage.error('请求地址错误')
        break
      case 500:
        ElMessage.error('服务器错误')
        break
      default:
        ElMessage.error('网络错误')
    }
  }
)
