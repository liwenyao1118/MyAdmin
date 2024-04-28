import { fileURLToPath, URL } from 'node:url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// 引入mock-dev-server插件
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
// 引入组件name属性名插件
import vueSetupExtend from 'vite-plugin-vue-setup-path-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      /* 
        src/icons目录格式下，不同文件的symbolId写法举例：
        - icon1.svg # icon-icon1
        - icon2.svg # icon-icon2
        - icon3.svg # icon-icon3
        - dir/icon1.svg # icon-dir-icon1
        - dir/dir2/icon1.svg # icon-dir-dir2-icon1
      */
      symbolId: 'icon-[dir]-[name]'
    }),
    // 使用mock-dev-server插件
    mockDevServerPlugin({
      // mock文件位置(相对于根目录)
      include: 'mock/**/*.mock.{ts,js,cjs,mjs,json,json5}',
      // 表单相关配置
      formidableOptions: {
        // 配置上传资源存放目录
        uploadDir: path.join(process.cwd(), '/uploads'),
        // 可修改上传资源名称
        filename: (name: any, ext: any, part: any) => {
          return part.originalFilename!
        }
      }
    }),
    vueSetupExtend({
      name: true//启用名称扩展
    })
  ],
  // 配置vite集成服务器
  server: {
    // 配置跨域代理
    proxy: {
      // 请求地址重写
      // mock地址
      '^/api': ''
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //scss全局变量一个配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  }
})
