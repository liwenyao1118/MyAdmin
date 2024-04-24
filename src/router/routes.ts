export default [
  {
    path: '/',
    name: 'HOME',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/home',
    redirect: { name: 'HOME' }
  },
  {
    path: '/login',
    name: 'LOGIN',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/404',
    name: 'NOTFOUND',
    component: () => import('@/views/NotFound/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NOTFOUND' }
  }
]
