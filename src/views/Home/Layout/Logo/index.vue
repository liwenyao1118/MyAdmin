<template>
  <div class="logo" v-if="Setting.logo_show">
    <img :src="Setting.logo" />
    <el-text :size="Setting.title_size">{{ Setting.title }}</el-text>
  </div>
</template>
<script setup name="logo">
import Setting from '@/setting'
</script>
<style scoped lang="scss">
.logo {
  height: $logo_height;
  // background-color: lightseagreen;
  display: flex;
  align-items: center;
  padding-left: 15px;
  overflow: hidden;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    font-weight: bold;
    margin-left: 10px;
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
