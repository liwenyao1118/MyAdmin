<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <el-aside class="aside" :class="foldMenuState ? 'isCollapse' : ''">
      <!-- logo -->
      <logo></logo>
      <!-- 侧导航 -->
      <el-scrollbar>
        <el-menu
          active-text-color="#3e9ffe"
          :router="true"
          :default-active="$route.path"
          background-color="#00142c"
          text-color="#fff"
          :collapse="foldMenuState"
        >
          <!-- 传递路由对象 -->
          <Menu :userRoutes="user.userRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <header-com></header-com>
      </el-header>
      <!-- 主面板 -->
      <el-main class="main">
        <!-- 路由视图 -->
        <!-- 效果 -->
        <router-view v-if="!refreshState"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts" name="layout">
import Logo from './Layout/Logo/index.vue'
import Menu from './Layout/Menu/index.vue'
import HeaderCom from './Layout/Header/index.vue'
import { ref } from 'vue'
// 获取用户的路由菜单
import { useUserStore } from '@/stores/user'
let user = useUserStore()
// 记录折叠按钮的状态
let foldMenuState = ref(false)
// 记录刷新状态
let refreshState = ref(false)
// 拿到mitter对象，监听折叠按钮的状态
import emitter from '@/utils/bus'
emitter.on('foldChange', (data: any) => {
  foldMenuState.value = data
})
// 拿到mitter对象，监听刷新按钮的状态
emitter.on('refresh', (data: any) => {
  refreshState.value = data
})
</script>
<style scoped lang="scss">
.container {
  background-color: #fff;
  height: 100%;
  .aside {
    background-color: #00142c;
    width: $aside_width;
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
    .el-scrollbar {
      :deep(ul) {
        border-right: 0;
      }
    }
  }
  .isCollapse {
    width: 56px;
  }
  .header {
    position:relative;
    background-color: #fff;
    height: $headbar_height;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 3px 0px;
  }
  .main {
    background-color: skyblue;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
