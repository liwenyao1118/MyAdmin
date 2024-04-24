import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  // 路由模式
  history: createWebHistory(),
  routes: routes,
  // 页面滚动行为
  scrollBehavior() {
    // 始终滚动到顶部和左侧
    return { top: 0, left: 0 }
  }
})

export default router
