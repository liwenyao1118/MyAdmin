<template>
  <div class="login-container">
    <el-row justify="center">
      <el-col :span="7" :offset="12" :xs="18" class="box">
        <div class="login">
          <h2>CMS-Admin</h2>
          <el-form size="large" :model="userInfo">
            <el-form-item>
              <el-input clearable :prefix-icon="User" v-model="userInfo.name" />
            </el-form-item>
            <el-form-item>
              <el-input
                clearable
                type="password"
                show-password
                :prefix-icon="Lock"
                v-model="userInfo.password"
              />
            </el-form-item>
            <el-form-item>
              <el-input :prefix-icon="Warning" v-model="userInfo.code" />
              <template #default>
                <el-button>ok</el-button>
              </template>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { User, Lock, Warning } from '@element-plus/icons-vue'
import { ref } from 'vue'
let userInfo = ref({
  name: 'Admin',
  password: '111111',
  code: ''
})
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
    margin-top: 200px;
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
    .el-button {
      width: 100%;
    }
  }
}
</style>
