import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入elementPlus框架
import ElementPlus from 'element-plus'
// 导入elementPlus框架的样式文件
import 'element-plus/dist/index.css'
// 导入国际化中的中文配置
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
// 导入自定义全局注册组件的插件
import globalComponents from '@/components/globalComponents'
// 导入项目的样式文件
import '@/styles/index.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册使用框架,并配置框架默认语言为中文
app.use(ElementPlus, {
  locale: zhCn
})
// 安装自定义插件
app.use(globalComponents)
app.mount('#app')
