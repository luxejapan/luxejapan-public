import { createI18n } from 'vue-i18n'
import en from './en.json'
import zhTW from './zh-tw.json'
import vi from './vi.json'
import es from './es.json'
import ko from './ko.json'

const messages = {
  en,
  'zh-tw': zhTW,
  vi,
  es,
  ko
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
}) 