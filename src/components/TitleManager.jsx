import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const TitleManager = () => {
  const location = useLocation()
  const { t, i18n } = useTranslation('common')

  useEffect(() => {
    // Map routes to page titles
    const getPageTitle = (pathname) => {
      switch (pathname) {
        case '/':
          return t('nav.home')
        case '/about':
          return t('nav.about')
        case '/services':
          return t('nav.services')
        case '/products':
          return t('nav.products')
        case '/contact':
          return t('nav.contact')
        default:
          return null
      }
    }

    const pageTitle = getPageTitle(location.pathname)
    const siteTitle = t('site.title')
    
    // Set document title based on page
    if (pageTitle) {
      document.title = t('site.titleTemplate', { pageTitle })
    } else {
      document.title = siteTitle
    }

    // Update html lang attribute to match current language
    document.documentElement.lang = i18n.language
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('site.description'))
    } else {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = t('site.description')
      document.head.appendChild(meta)
    }
    
  }, [location.pathname, t, i18n.language])

  return null // This component doesn't render anything
}

export default TitleManager