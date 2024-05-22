// 导入全局组件
import SvgIcon from './SvgIcon.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入Vue类型
import type { App } from 'vue'
export default {
  install(app: App) {
    app.component('SvgIcon', SvgIcon)
    // 安装所有icon图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
