import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Cpu,
  Globe,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Sparkles,
  HardDrive,
  GraduationCap
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation('common')
  const [activeTab, setActiveTab] = useState('ai')

  const allServices = {
    ai: [
      {
        icon: <Cpu className="w-7 h-7" />,
        title: t('services.items.ai.title'),
        description: t('services.items.ai.description'),
        features: t('services.items.ai.features', { returnObjects: true }),
      },
      {
        icon: <Database className="w-7 h-7" />,
        title: t('services.items.analytics.title'),
        description: t('services.items.analytics.description'),
        features: t('services.items.analytics.features', { returnObjects: true }),
      },
    ],
    platform: [
      {
        icon: <Code className="w-7 h-7" />,
        title: t('services.items.webdev.title'),
        description: t('services.items.webdev.description'),
        features: t('services.items.webdev.features', { returnObjects: true }),
      },
      {
        icon: <Smartphone className="w-7 h-7" />,
        title: t('services.items.mobile.title'),
        description: t('services.items.mobile.description'),
        features: t('services.items.mobile.features', { returnObjects: true }),
      },
      {
        icon: <Cloud className="w-7 h-7" />,
        title: t('services.items.cloud.title'),
        description: t('services.items.cloud.description'),
        features: t('services.items.cloud.features', { returnObjects: true }),
      },
    ],
    industry: [
      {
        icon: <Sparkles className="w-7 h-7" />,
        title: t('services.items.industryCustomization.title'),
        description: t('services.items.industryCustomization.description'),
        features: t('services.items.industryCustomization.features', { returnObjects: true }),
      },
      {
        icon: <Shield className="w-7 h-7" />,
        title: t('services.items.security.title'),
        description: t('services.items.security.description'),
        features: t('services.items.security.features', { returnObjects: true }),
      },
    ],
    deployment: [
      {
        icon: <HardDrive className="w-7 h-7" />,
        title: t('services.items.privateDeployment.title'),
        description: t('services.items.privateDeployment.description'),
        features: t('services.items.privateDeployment.features', { returnObjects: true }),
      },
    ],
    training: [
      {
        icon: <GraduationCap className="w-7 h-7" />,
        title: t('services.items.aiTraining.title'),
        description: t('services.items.aiTraining.description'),
        features: t('services.items.aiTraining.features', { returnObjects: true }),
      },
    ],
  }

  const tabs = [
    { key: 'ai', label: t('services.tabs.ai') },
    { key: 'platform', label: t('services.tabs.platform') },
    { key: 'industry', label: t('services.tabs.industry') },
    { key: 'deployment', label: t('services.tabs.deployment') },
    { key: 'training', label: t('services.tabs.training') },
  ]

  const process = [
    {
      step: '01',
      title: t('services.process.steps.discovery.title'),
      description: t('services.process.steps.discovery.description'),
      icon: <Globe className="w-5 h-5" />
    },
    {
      step: '02',
      title: t('services.process.steps.planning.title'),
      description: t('services.process.steps.planning.description'),
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      step: '03',
      title: t('services.process.steps.development.title'),
      description: t('services.process.steps.development.description'),
      icon: <Code className="w-5 h-5" />
    },
    {
      step: '04',
      title: t('services.process.steps.deployment.title'),
      description: t('services.process.steps.deployment.description'),
      icon: <CheckCircle className="w-5 h-5" />
    }
  ]

  const industries = [
    { name: t('services.industries.items.healthcare.name'), description: t('services.industries.items.healthcare.description') },
    { name: t('services.industries.items.finance.name'), description: t('services.industries.items.finance.description') },
    { name: t('services.industries.items.ecommerce.name'), description: t('services.industries.items.ecommerce.description') },
    { name: t('services.industries.items.education.name'), description: t('services.industries.items.education.description') },
    { name: t('services.industries.items.manufacturing.name'), description: t('services.industries.items.manufacturing.description') },
    { name: t('services.industries.items.logistics.name'), description: t('services.industries.items.logistics.description') }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-claude-warm border-b border-claude-beige overflow-hidden">
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-claude-dark">
              {t('services.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-claude-medium leading-relaxed max-w-3xl mx-auto">
              {t('services.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services with Tabs */}
      <section className="py-20 bg-claude-cream">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">
              {t('services.offerings.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('services.offerings.subtitle')}
            </p>
          </motion.div>

          {/* Tab Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-claude-accent text-white shadow-sm'
                    : 'bg-white border border-claude-beige text-claude-medium hover:text-claude-dark hover:border-claude-accent hover:bg-claude-accent-light'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6"
            >
              {allServices[activeTab].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-claude-beige rounded-2xl p-7 hover:shadow-warm-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mb-5 group-hover:bg-claude-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-claude-dark mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-claude-medium mb-5 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-claude-medium text-sm">
                        <CheckCircle className="w-4 h-4 text-claude-accent mr-2.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-claude-warm border-y border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">
              {t('services.process.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('services.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-full w-full h-px bg-claude-border z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-28 h-28 bg-white border-2 border-claude-beige rounded-2xl flex flex-col items-center justify-center mx-auto mb-5 shadow-warm">
                    <span className="text-xl font-bold text-claude-accent mb-1 tracking-tight">{step.step}</span>
                    <div className="text-claude-accent">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-claude-dark mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-claude-medium text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-claude-cream">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">
              {t('services.industries.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('services.industries.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-claude-beige rounded-2xl hover:shadow-warm transition-all hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold text-claude-dark mb-2 tracking-tight">{industry.name}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-claude-footer">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              {t('services.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/65 mb-10 leading-relaxed">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center px-8 py-4 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {t('common.contactUs')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border border-white/25 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/45 transition-all"
              >
                {t('common.learnMore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
