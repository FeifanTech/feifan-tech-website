import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const INDUSTRY_KEYS = ['finance', 'insurance', 'retail', 'government', 'education', 'industry']
const INDUSTRY_PRIORITY = ['education', 'industry']

const INDUSTRY_STYLES = {
  finance: { bg: 'bg-blue-50', border: 'border-blue-200', accent: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  insurance: { bg: 'bg-emerald-50', border: 'border-emerald-200', accent: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700' },
  retail: { bg: 'bg-orange-50', border: 'border-orange-200', accent: 'text-orange-600', badge: 'bg-orange-100 text-orange-600' },
  government: { bg: 'bg-purple-50', border: 'border-purple-200', accent: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
  education: { bg: 'bg-rose-50', border: 'border-rose-200', accent: 'text-rose-600', badge: 'bg-rose-100 text-rose-600' },
  industry: { bg: 'bg-yellow-50', border: 'border-yellow-200', accent: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-700' },
}

const Solutions = () => {
  const { t } = useTranslation('common')
  const [expanded, setExpanded] = useState('industry')

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-claude-warm border-b border-claude-beige overflow-hidden">
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-claude-dark">
              {t('solutions.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed max-w-3xl mx-auto">
              {t('solutions.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-claude-cream">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">
              {t('solutions.overview.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('solutions.overview.subtitle')}
            </p>
          </motion.div>

          {/* Industry accordion */}
          <div className="space-y-3 max-w-4xl mx-auto">
            {INDUSTRY_KEYS.map((key, index) => {
              const ind = t(`solutions.industries.${key}`, { returnObjects: true })
              const style = INDUSTRY_STYLES[key]
              const isOpen = expanded === key

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${style.border} ${isOpen ? style.bg : 'bg-white hover:bg-claude-warm'}`}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : key)}
                    className="w-full flex items-center justify-between px-7 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.badge}`}>
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold tracking-tight ${isOpen ? style.accent : 'text-claude-dark'}`}>{ind.name}</h3>
                        {!isOpen && <p className="text-claude-muted text-sm">{ind.hero}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {INDUSTRY_PRIORITY.includes(key) && (
                        <span className="text-base leading-none" title="热门行业">🔥</span>
                      )}
                      {isOpen ? (
                        <ChevronUp className={`w-5 h-5 ${style.accent}`} />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-claude-muted" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-7 pb-7"
                    >
                      <p className="text-claude-medium text-sm leading-relaxed mb-5">{ind.desc}</p>

                      <div className="space-y-2.5 mb-6">
                        {Array.isArray(ind.usecases) && ind.usecases.map((uc, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${style.accent}`} />
                            <span className="text-claude-medium text-sm">{uc}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {Array.isArray(ind.products) && ind.products.map((p, i) => (
                          <span key={i} className={`text-xs px-3 py-1 rounded-full font-medium ${style.badge}`}>{p}</span>
                        ))}
                      </div>

                      <Link
                        to="/contact#contact-form"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-claude-accent hover:text-claude-accent-dark transition-colors"
                      >
                        {t('solutions.cta.button')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-claude-footer">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              {t('solutions.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/55 mb-10 leading-relaxed">
              {t('solutions.cta.subtitle')}
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center px-8 py-4 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg"
            >
              {t('solutions.cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
