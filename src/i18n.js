import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import language files
import enTranslations from './locales/en/common.json'
import zhTranslations from './locales/zh/common.json'
import jaTranslations from './locales/ja/common.json'
import koTranslations from './locales/ko/common.json'

const resources = {
  en: {
    common: enTranslations
  },
  zh: {
    common: zhTranslations
  },
  ja: {
    common: jaTranslations
  },
  ko: {
    common: koTranslations
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n