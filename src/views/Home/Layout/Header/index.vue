<template>
  <div class="box">
    <!-- 左侧按钮组 -->
    <div class="left">
      <!-- 折叠按钮 -->
      <el-icon size="20" @click="foldMenu">
        <component :is="foldMenuState ? 'Expand' : 'Fold'"></component>
      </el-icon>
      <!-- 面包屑导航 -->
      <el-breadcrumb :separator-icon="CaretRight">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item> -->
        <el-breadcrumb-item
          v-for="(item, index) in $route.matched"
          :key="index"
          :to="{ name: item.name }"
        >
          <el-icon><component :is="item.meta.icon" /></el-icon>
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 右侧按钮组 -->
    <div class="right">
      <!-- 刷新按钮 -->
      <el-button :icon="Refresh" circle size="small" @click="refresh" />
      <!-- 全屏按钮 -->
      <el-button :icon="FullScreen" circle size="small" @click="requestFullScreen" />
      <!-- 设置按钮 -->
      <el-dropdown>
        <el-button :icon="Setting" circle size="small" @click="requestFullScreen" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>主题设置</el-dropdown-item>
            <el-dropdown-item>主题设置</el-dropdown-item>
            <el-dropdown-item>主题设置</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 用户头像 -->
      <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" />
      <!-- 用户名和下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          用户名
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup name="header">
import { CaretRight, Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
// 引入自定义hooks，并暴露数据
import { usehandler } from '.'
const { foldMenu, foldMenuState, refresh, requestFullScreen } = usehandler()
</script>
<style scoped lang="scss">
.box {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    & > .el-icon {
      margin-right: 10px;
    }
    .el-icon {
      vertical-align: bottom;
    }
  }
  .right {
    .el-button {
      margin-left: 10px;
      outline: none;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin: 0 10px;
      vertical-align: bottom;
    }
    .el-dropdown {
      vertical-align: middle;
      span {
        outline: none;
        cursor: pointer;
      }
    }
  }
}
</style>
