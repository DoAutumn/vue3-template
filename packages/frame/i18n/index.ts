import { App, ref } from 'vue'
import { createI18n, I18n } from 'vue-i18n'
import { request } from '../axios'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import enUS from 'element-plus/es/locale/lang/en'

let i18n: any

let currentLang = localStorage.getItem('s-lanauge') || 'zh-CN'

/**
 * 语言文件路径
 */
let langFileUrl: string

/**
 * element-plus 的语言文件
 */
const elementLangs: any = {
  'zh-CN': zhCN,
  'en-US': enUS
}

/**
 * element-plus 的当前语言文件
 */
const elementLang = ref(elementLangs[currentLang])

/**
 * 已加载的语言文件
 */
const loadedLangs = [currentLang]

/**
 * 支持的语言列表
 */
const supportedLangs = [
  {
    lang: 'zh-CN',
    name: '简体中文',
    abbr: '🇨🇳'
  },
  {
    lang: 'en-US',
    name: 'English',
    abbr: '🇬🇧'
  }
]


const createI18nOptions = async (): Promise<any> => {
  const message = await request({ url: `${langFileUrl}${currentLang}.json` })

  return {
    locale: currentLang,
    fallbackLocale: currentLang,
    messages: {
      [currentLang]: message
    }
  }
}

/**
 * 启动应用程序时，初始化 vue-i18n
 */
const setupI18n = async (app: App<Element>, url: string) => {
  langFileUrl = url
  const options = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}

const setLang = () => {
  i18n.global.locale = currentLang
  elementLang.value = elementLangs[currentLang]
  localStorage.setItem('s-lanauge', currentLang)
}

/**
 * 切换语言
 */
const toggleLang = async (lang: string) => {
  if (currentLang === lang) return
  if (loadedLangs.includes(lang)) {
    currentLang = lang
    setLang()
    return
  }
  const message = await request({ url: `${langFileUrl}${lang}.json` })
  i18n.global.setLocaleMessage(lang, message)
  loadedLangs.push(lang)
  currentLang = lang
  setLang()
}

export {
  elementLang,
  supportedLangs,
  setupI18n,
  toggleLang
}