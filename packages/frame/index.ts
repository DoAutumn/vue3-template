export * from './store'
export * from './store/modules/app'
export * from './store/modules/user'
export * from './i18n'
export * from './axios'
export * from './elementPlus'
export * from './directives'



import DarkSwitch from './components/DarkSwitch'
import RootLayout from './components/RootLayout'

// 支持按需导入
export { DarkSwitch, RootLayout }


const components = [DarkSwitch, RootLayout]

const install = (App: any) => {
  components.forEach(item => {
    App.component(item.__name, item)
  })
}

// 支持完整导入
export default {
  install
}