import { useDark, useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'
import { WritableComputedRef } from 'vue'
import { store } from '..'

export interface AppState {
  theme: string,
  greyMode: boolean
}

/**
 * 是否为暗黑模式，使用 @vueuse 能够监听系统外观切换（测试了mac系统）
 */
const isDark = useDark()

/**
 * 是否为灰度模式，默认在七七、九一八、12月13日开启灰度模式
 */
const isGrey = () => {
  const now = new Date(), M = now.getMonth() + 1, d = now.getDate()
  if (
    (M === 7 && d === 7) ||
    (M === 9 && d === 18) ||
    (M === 12 && d === 13)
  ) {
    document.documentElement.classList.add('global-grey-mode')
    return true
  }
  document.documentElement.classList.remove('global-grey-mode')
  return false
}

/**
 * 获取当前主题
 */
const currentTheme = () => {
  const theme = localStorage.getItem('s-theme') || 'default'
  document.documentElement.classList.add(theme)
  return theme
}


export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    theme: currentTheme(),
    greyMode: isGrey()
  }),
  getters: {
    getIsDark(): WritableComputedRef<boolean> {
      return isDark
    },
    getTheme(): string {
      return this.theme
    },
    getGreyMode(): boolean {
      return this.greyMode
    }
  },
  actions: {
    setIsDark(value: boolean) {
      isDark.value = value;
      useToggle(isDark)
    },
    setTheme(value: string) {
      document.documentElement.classList.remove(this.theme)
      this.theme = value
      document.documentElement.classList.add(this.theme)
      localStorage.setItem('s-theme', this.theme)
    },
    setGreyMode(value: boolean) {
      this.greyMode = value
    }
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}

export const themeMap = [
  {
    name: '默认',
    theme: 'default'
  },
  {
    name: '中国红',
    theme: 'zh-red'
  }
]