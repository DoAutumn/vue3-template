import { App, Directive } from 'vue'

const iconFont: Directive = {
  mounted(el, binding) {
    el.classList.add('iconfont')
    el.classList.add(`ic-${binding.value}`)
  }
}

export const setupDirectives = (app: App<Element>) => {
  app.directive('ic', iconFont)
}