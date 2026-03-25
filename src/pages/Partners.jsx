import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Handshake,
  Code2,
  Wrench,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Gift
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Partners = () => {
  const { t } = useTranslation('common')

  const typeIcons = {
    reseller: <Handshake className="w-6 h-6" />,
    isv: <Code2 className="w-6 h-6" />,
    integrator: <Wrench className="w-6 h-6" />,
  }

  const whyIcons = [
    <Gift className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
  ]

  const partnerTypes = ['reseller', 'isv', 'integrator']
  const whyItems = t('partners.why.items', { returnObjects: true })
  const processSteps = t('partners.process.steps', { returnObjects: true })

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
              {t('partners.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed max-w-3xl mx-auto">
              {t('partners.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
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
              {t('partners.types.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {partnerTypes.map((key, index) => {
              const type = t(`partners.types.${key}`, { returnObjects: true })
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-claude-beige rounded-2xl p-7 hover:shadow-warm-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mb-5 group-hover:bg-claude-accent group-hover:text-white transition-colors">
                    {typeIcons[key]}
                  </div>
                  <h3 className="text-xl font-bold text-claude-dark mb-3 tracking-tight">{type.name}</h3>
                  <p className="text-claude-medium text-sm leading-relaxed mb-5">{type.desc}</p>
                  <ul className="space-y-2.5">
                    {Array.isArray(type.benefits) && type.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-claude-medium">
                        <CheckCircle className="w-4 h-4 text-claude-accent flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-claude-warm border-y border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">
              {t('partners.why.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {Array.isArray(whyItems) && whyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white border border-claude-beige rounded-2xl hover:shadow-warm transition-all"
              >
                <div className="w-11 h-11 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mx-auto mb-4">
                  {whyIcons[index]}
                </div>
                <h3 className="text-base font-bold text-claude-dark mb-2 tracking-tight">{item.title}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Process */}
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
              {t('partners.process.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {Array.isArray(processSteps) && processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-14 left-full w-full h-px bg-claude-border z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-28 h-28 bg-white border-2 border-claude-beige rounded-2xl flex flex-col items-center justify-center mx-auto mb-5 shadow-warm">
                    <span className="text-xl font-bold text-claude-accent mb-1 tracking-tight">{step.step}</span>
                    <Shield className="w-5 h-5 text-claude-accent" />
                  </div>
                  <h3 className="text-base font-bold text-claude-dark mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-claude-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
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
              {t('partners.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/55 mb-10 leading-relaxed">
              {t('partners.cta.subtitle')}
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center px-8 py-4 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg"
            >
              {t('partners.cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners
