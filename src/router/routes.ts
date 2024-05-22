export default [
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    name: 'Login',
    meta: {
      title: 'login',
      hidden: true
    }
  },
  {
    path: '/',
    component: () => import('@/views/Home/index.vue'),
    name: 'Home',
    meta: {
      title: '主页',
      hidden: false,
      icon: 'HomeFilled'
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Layout',
        component: () => import('@/views/Home/Layout/Main/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled'
        }
      }
    ]
  },
  {
    path: '/screen',
    component: () => import('@/views/Screen/index.vue'),
    name: 'Screen',
    meta: {
      title: 'Screen',
      hidden: false,
      icon: 'Platform'
    }
  },
  {
    path: '/acl',
    component: () => import('@/views/Home/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock'
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/Acl/User/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User'
        }
      },
      {
        path: '/acl/role',
        component: () => import('@/views/Acl/Role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'Avatar'
        }
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/Acl/Permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'List'
        }
      }
    ]
  },
  {
    path: '/product',
    component: () => import('@/views/Home/index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods'
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/Product/Trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'ShoppingCart',
          hidden: false
        }
      },
      {
        path: '/product/attr',
        component: () => import('@/views/Product/Attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'Management',
          hidden: false
        }
      },
      {
        path: '/product/spu',
        component: () => import('@/views/Product/Spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'Spu',
          icon: 'SetUp',
          hidden: false
        }
      },
      {
        path: '/product/sku',
        component: () => import('@/views/Product/Sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'Sku',
          icon: 'ScaleToOriginal',
          hidden: false
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/NotFound/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true
    }
  }
]
