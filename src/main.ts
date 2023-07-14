import { setupStore, setupI18n, setupElementPlus, setupDirectives } from '../packages/frame'

import { setupRouter } from './router'

import { createApp } from 'vue'

import App from './App.vue'

import '../packages/frame/index.less'

import './assets/iconfont.css'


const setupAll = async () => {
  const app = createApp(App)

  await setupI18n(app, './assets/i18n/')

  setupStore(app)

  setupElementPlus(app)

  setupDirectives(app)

  setupRouter(app)

  app.mount('#app')
}

setupAll()