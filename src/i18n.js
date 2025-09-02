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
    fallbackLng: {
      'zh-cn': ['zh', 'en'],
      'zh-tw': ['zh', 'en'], 
      'zh-hk': ['zh', 'en'],
      'ja-jp': ['ja', 'en'],
      'ko-kr': ['ko', 'en'],
      'default': ['en']
    },
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      // Detection order: localStorage -> navigator language -> cookie -> querystring -> htmlTag -> path -> subdomain
      order: ['localStorage', 'navigator', 'cookie', 'querystring', 'htmlTag', 'path', 'subdomain'],
      
      // Cache user language preference
      caches: ['localStorage', 'cookie'],
      
      // Options for language detection from navigator
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      
      // Convert language codes
      convertDetectedLanguage: (lng) => {
        // Map browser language codes to our supported languages
        const languageMap = {
          'zh': 'zh',
          'zh-cn': 'zh',
          'zh-tw': 'zh', 
          'zh-hk': 'zh',
          'zh-sg': 'zh',
          'ja': 'ja',
          'ja-jp': 'ja',
          'ko': 'ko',
          'ko-kr': 'ko',
          'en': 'en',
          'en-us': 'en',
          'en-gb': 'en',
          'en-ca': 'en',
          'en-au': 'en'
        }
        
        const lowerLng = lng.toLowerCase()
        return languageMap[lowerLng] || languageMap[lowerLng.split('-')[0]] || 'en'
      }
    }
  })

export default i18n