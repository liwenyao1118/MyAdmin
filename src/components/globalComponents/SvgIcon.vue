<!-- 
    说明：封装svg图标全局组件
    props参数：
    - prefix：symbolId的前缀，可以省略使用默认值
    - name：src/assets/icons/ 目录下需要使用的文件名称
    - width: css宽度字符串，单位px
    - height：css高度字符串，单位px
    - color： 填充颜色
 -->
<template>
  <svg :style="{ width, height }" :fill="color">
    <use :xlink:href="prefix + name"></use>
  </svg>
</template>
<script setup>
defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '16px'
  },
  height: {
    type: String,
    default: '16px'
  },
  color: String
})
</script>
<style></style>
