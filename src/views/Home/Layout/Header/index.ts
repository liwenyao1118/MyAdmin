import { ref } from 'vue'
// 拿到mitter的触发器对象
import emitter from '@/utils/bus'
export const usehandler = function () {
  // 记录折叠的状态
  const foldMenuState = ref(false)
  // 记录刷新状态
  const refreshState = ref(false)
  // 折叠按钮触发事件
  function foldMenu() {
    foldMenuState.value = !foldMenuState.value
    // 触发事件传递数据
    emitter.emit('foldChange', foldMenuState.value)
  }
  //   刷新按钮效果
  function refresh() {
    // 改变刷新状态
    refreshState.value = true
    // 触发事件传递数据
    emitter.emit('refresh', refreshState.value)
    setTimeout(() => {
      refreshState.value = false
      // 触发事件传递数据
      emitter.emit('refresh', refreshState.value)
    }, 0)
  }
  //   全屏处理函数
  function requestFullScreen() {
    // 判断当前是否为全屏
    if (!document.fullscreenElement) {
      // 如果当前没有全屏，则实现全屏功能
      document.documentElement.requestFullscreen()
    } else {
      // 如果当前已经全屏，则点击变为退出全屏
      document.exitFullscreen()
    }
  }
  return { foldMenu, foldMenuState, refresh, requestFullScreen }
}
