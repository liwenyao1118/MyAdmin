import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index'
// 导入静态的路由，模仿动态路由，后作替换
import routeRules from '@/router/routes'

export const useUserStore = defineStore('user', () => {
  const token = ref('' || localStorage.getItem('token'))
  const userRoutes = reactive(routeRules)
  async function userLogin(user) {
    const result = await reqLogin(user)
    console.log(result)
    if (result.code == '200') {
      token.value = result.data.token
      localStorage.setItem('token', token.value)
      return Promise.resolve(true)
    } else {
      return Promise.reject(new Error(result.data.message))
    }
  }
  return { userLogin, userRoutes }
})
