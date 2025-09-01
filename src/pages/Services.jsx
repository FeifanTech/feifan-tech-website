import React from 'react'
import { motion } from 'framer-motion'
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
  Monitor,
  Server,
  Lock,
  Brain,
  TrendingUp,
  Settings
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation('common')
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t('services.items.webdev.title'),
      description: t('services.items.webdev.description'),
      features: t('services.items.webdev.features', { returnObjects: true }),
      bgColor: 'bg-blue-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.description'),
      features: t('services.items.mobile.features', { returnObjects: true }),
      bgColor: 'bg-blue-500'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: t('services.items.cloud.title'),
      description: t('services.items.cloud.description'),
      features: t('services.items.cloud.features', { returnObjects: true }),
      bgColor: 'bg-blue-700'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('services.items.analytics.title'),
      description: t('services.items.analytics.description'),
      features: t('services.items.analytics.features', { returnObjects: true }),
      bgColor: 'bg-indigo-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('services.items.security.title'),
      description: t('services.items.security.description'),
      features: t('services.items.security.features', { returnObjects: true }),
      bgColor: 'bg-slate-600'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
      features: t('services.items.ai.features', { returnObjects: true }),
      bgColor: 'bg-indigo-700'
    }
  ]

  const process = [
    {
      step: '01',
      title: t('services.process.steps.discovery.title'),
      description: t('services.process.steps.discovery.description'),
      icon: <Globe className="w-6 h-6" />
    },
    {
      step: '02',
      title: t('services.process.steps.planning.title'),
      description: t('services.process.steps.planning.description'),
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: '03',
      title: t('services.process.steps.development.title'),
      description: t('services.process.steps.development.description'),
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: t('services.process.steps.deployment.title'),
      description: t('services.process.steps.deployment.description'),
      icon: <CheckCircle className="w-6 h-6" />
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
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.hero.title')}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              {t('services.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.offerings.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.offerings.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-blue-300 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex flex-col items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                    <span className="text-2xl font-bold text-blue-600 mb-1">{step.step}</span>
                    <div className="text-blue-600">{step.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.industries.title')}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('services.industries.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-blue-100">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                {t('common.startProject')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {t('common.learnMore')} About Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services