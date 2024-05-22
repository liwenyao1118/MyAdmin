<template>
  <!-- 根据路由对象的数量进行遍历渲染 -->
  <template v-for="item in userRoutes" :key="item.path">
    <!-- 情况一：如果没有二级菜单 -->
    <template v-if="!item.children">
      <!-- 通过meta判断是否要显示 -->
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>

    <!-- 情况二：如果拥有二级菜单 -->
    <template v-else>
      <!-- 通过meta判断是否要显示 -->
      <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 调用自己，递归 -->
        <Menu :userRoutes="item.children"></Menu>
      </el-sub-menu>
    </template>
  </template>
</template>
<script setup lang="ts" name="Menu">
// 接受路由菜单对象
defineProps(['userRoutes'])
</script>
<style scoped></style>
