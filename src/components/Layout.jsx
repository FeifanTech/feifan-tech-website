import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  const location = useLocation()
  const { t } = useTranslation('common')

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.team'), path: '/team' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.solutions'), path: '/solutions' },
    { name: t('nav.partners'), path: '/partners' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.training'), path: '/training-center' },
    { name: t('nav.contact'), path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-claude-cream overflow-x-hidden">
      {/* Announcement Bar */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-claude-footer text-white text-sm py-2 px-4 flex items-center justify-center gap-3 relative">
              <span className="text-white/80">{t('announcement.text')}</span>
              <Link
                to={t('announcement.link')}
                className="inline-flex items-center text-claude-accent font-semibold hover:text-orange-300 transition-colors"
              >
                {t('announcement.cta')}
              </Link>
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors p-0.5 bg-transparent border-0 shadow-none"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-claude-cream border-b border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-claude-accent rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-semibold text-claude-dark tracking-tight">
                Feifan Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-claude-accent bg-claude-accent-light'
                        : 'text-claude-medium hover:text-claude-dark hover:bg-claude-warm'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-claude-accent rounded-full"
                        initial={false}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Live Demo CTA */}
              <Link
                to="/demo"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-claude-accent text-white text-sm font-semibold rounded-lg hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
                {t('nav.demo')}
                <ArrowRight className="ml-0.5 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-claude-medium hover:text-claude-dark hover:bg-claude-warm bg-transparent shadow-none border-0"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-claude-beige bg-claude-cream/98 backdrop-blur-sm"
              >
                <div className="py-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-colors ${
                        isActive(item.path)
                          ? 'text-claude-accent bg-claude-accent-light'
                          : 'text-claude-medium hover:text-claude-dark hover:bg-claude-warm'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight size={14} className="text-claude-muted" />
                    </Link>
                  ))}

                  {/* Mobile Demo Button */}
                  <div className="px-4 pt-2">
                    <Link
                      to="/demo"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-claude-accent text-white text-sm font-semibold rounded-lg hover:bg-claude-accent-dark transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
                      {t('nav.demo')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="px-4 py-3 border-t border-claude-beige mt-2">
                    <LanguageSwitcher />
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-claude-footer text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-claude-accent rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">Feifan Tech</span>
              </div>
              <p className="text-white/60 mb-4 max-w-md text-sm leading-relaxed">
                {t('footer.description')}
              </p>
              <p className="text-white/40 text-sm">
                {t('footer.copyright', { year: new Date().getFullYear() })}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white/90 text-sm uppercase tracking-wider">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-white/90 text-sm uppercase tracking-wider">{t('footer.contact')}</h3>
              <ul className="space-y-2 text-white/55 text-sm">
                <li>{t('footer.address')}</li>
                <li>{t('footer.email')}</li>
                <li>WeChat: {t('contact.info.wechat.content')}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ICP 备案 */}
        <div className="border-t border-white/10 py-3 text-center text-white/40 text-xs">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            浙ICP备2023018136号-3
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
