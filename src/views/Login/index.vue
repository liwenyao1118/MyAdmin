<template>
  <div class="login-container">
    <el-row justify="center">
      <el-col :span="7" :offset="12" :xs="18" class="box">
        <div class="login">
          <h2>CMS-Admin</h2>
          <el-form size="large" :model="userInfo" :rules="rules" ref="loginForm">
            <el-form-item prop="username">
              <el-input clearable :prefix-icon="User" v-model="userInfo.username" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                clearable
                type="password"
                show-password
                :prefix-icon="Lock"
                v-model="userInfo.password"
              />
            </el-form-item>
            <!-- <el-form-item prop="code">
              <el-input :prefix-icon="Warning" v-model="userInfo.code">
                <template #append>
                  <img :src="userInfo.codeImg" title="点击刷新验证码" @click="refreshCode" />
                </template>
              </el-input>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="submitForm" :loading="userInfo.btnStatus">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup name="Login" lang="ts">
import { User, Lock, Warning } from '@element-plus/icons-vue'
import { ref, onMounted, reactive } from 'vue'
// import { reqVerificationCode } from '@/api/user/index'
import { useUserStore } from '@/stores/user/index'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
// 拿到pinia对象
const userStore = useUserStore()
// 拿到路由对象
const router = useRouter()
// 表单数据集合
let userInfo = ref({
  username: 'admin',
  password: '111111',
  code: '',
  codeImg: '',
  Verification: '',
  btnStatus: false
})
// 刷新/获取验证码图片
// async function refreshCode() {
//   const { data } = await reqVerificationCode()
//   userInfo.value.codeImg = data
//   userInfo.value.Verification = data.split('=')[1]
// }
onMounted(() => {
  // 获取验证码
  // refreshCode()
})
// 表单校验规则
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '长度为5~10位字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '长度为6~12位字符', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 4, max: 4, message: '长度为4位字符', trigger: 'blur' }
    // 自定义验证规则
    // { validator: checkCode, trigger: 'blur' }
  ]
})
// 验证码自定义验证规则
// function checkCode(rule: any, value: any, callback: any) {
//   if (value.toLowerCase() == userInfo.value.Verification.toLowerCase()) callback()
//   callback(new Error('验证码错误,请重新输入'))
// }
// 拿到表单组件对象，方便后续验证
const loginForm = ref() as any
// 表单提交行为
async function submitForm() {
  if (!loginForm.value) return
  await loginForm.value.validate(async (valid: any) => {
    if (valid) {
      // 验证通过
      // 按钮变为加载状态
      userInfo.value.btnStatus = true
      // 通过try/catch捕获pinia中登录的状态
      try {
        // 登录请求
        await userStore.userLogin(userInfo.value)
        // 成功后，关闭按钮加载状态
        userInfo.value.btnStatus = false
        // 跳转到首页
        router.push({ name: 'Home' })
        // 给予提示
        ElNotification({
          title: `Hi,${getTime()}好`,
          message: '登录成功',
          type: 'success'
        })
      } catch (err: any) {
        // 将报错信息呈现出来
        ElNotification({
          title: '登录失败',
          message: err.message,
          type: 'error'
        })
        // 失败后，关闭按钮加载状态
        userInfo.value.btnStatus = false
        // 重新刷新验证码
        // refreshCode()
        // 清空验证码
        userInfo.value.code = ''
      }
    }
  })
}
</script>
<style scoped lang="scss">
.login-container {
  height: 100%;
  background-image: url(@/assets/images/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  @media screen and (max-width: 768px) {
    .box {
      margin-left: 0 !important;
    }
  }
  .login {
    margin-top: 25vh;
    background-image: url(@/assets/images/login_form.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 0 30px 20px;
    h2 {
      text-align: center;
      font-size: 2em;
      line-height: 2em;
      font-weight: bolder;
      background-image: linear-gradient(45deg, #85359f, #cecaed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
    }
    .el-input {
      border-radius: 4px;
      overflow: hidden;
      :deep(.el-input-group__append) {
        padding: 0;
      }
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
