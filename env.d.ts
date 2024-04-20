// 引用vite自带的文件类型，供ts识别
/// <reference types="vite/client" />
// 手动解决：ts识别引入的.vue文件
declare module "*.vue" {
    import type { DefineComponent } from "vue"
    const vueComponent: DefineComponent<{}, {}, any>
    export default vueComponent
  }