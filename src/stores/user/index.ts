import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {reqLogin} from '@/api/user/index'

export const useUserStore = defineStore('user', () => {
  let token = ref(''||localStorage.getItem('token'))
  async function userLogin(user){
    const result = await reqLogin(user)
    console.log(result)
    if(result.code == '200') {
        token.value = result.data.token
        localStorage.setItem('token',token.value)
        return Promise.resolve(true)
    }else{
        return Promise.reject(new Error(result.data.message))
    }
    
  }
  return { userLogin }
})
