// 导入全局组件
import SvgIcon from './SvgIcon.vue'
// 导入Vue类型
import type { App } from 'vue'
export default {
  install(app: App) {
    app.component('SvgIcon', SvgIcon)
  }
}
