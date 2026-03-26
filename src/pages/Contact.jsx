import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, AlertCircle, MessageSquare } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { submitContactForm } from '../services/contactService.js'

const Contact = () => {
  const { t } = useTranslation('common')
  const [networkError, setNetworkError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitMessage('')
    setNetworkError(false)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)

        setTimeout(() => {
          setIsSubmitted(false)
          setSubmitMessage('')
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            service: '',
            message: ''
          })
        }, 5000)
      } else {
        if (result.networkError) {
          setNetworkError(true)
        }
        setSubmitError(result.message)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      description: t('contact.info.email.description'),
      type: 'email'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: t('contact.info.wechat.title'),
      content: t('contact.info.wechat.content'),
      description: t('contact.info.wechat.description'),
      type: 'wechat'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t('contact.info.location.title'),
      content: t('contact.info.location.content'),
      description: t('contact.info.location.description'),
      type: 'location'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content'),
      description: t('contact.info.hours.description'),
      type: 'hours'
    }
  ]
  const processSteps = t('contact.process.steps', { returnObjects: true })

  const services = t('contact.form.services', { returnObjects: true })
  const faqItems = t('contact.faq.items', { returnObjects: true })

  const inputClass = "w-full px-4 py-3 border border-claude-border rounded-xl bg-claude-cream text-claude-dark placeholder:text-claude-muted focus:ring-2 focus:ring-claude-accent focus:border-transparent transition-colors text-sm"

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
              {t('contact.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-claude-medium leading-relaxed max-w-3xl mx-auto">
              {t('contact.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cooperation Process */}
      <section className="py-16 bg-claude-warm border-b border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-claude-dark mb-3 tracking-tight">
              {t('contact.process.title')}
            </h2>
            <p className="text-claude-medium text-base md:text-lg leading-relaxed">
              {t('contact.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {Array.isArray(processSteps) && processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-8 left-full w-full h-px bg-claude-border z-0 -translate-y-px" />
                )}
                <div className="relative z-10 bg-white border border-claude-beige rounded-2xl p-6 hover:shadow-warm transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-xl bg-claude-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-claude-dark tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-claude-medium text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-claude-cream">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-claude-beige rounded-2xl shadow-warm p-8">
                <div className="flex items-center mb-6">
                  <div className="w-9 h-9 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mr-3">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-claude-dark tracking-tight">{t('contact.form.title')}</h2>
                </div>

                {!isSubmitted ? (
                  <>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start"
                      >
                        <AlertCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium text-red-800 mb-0.5">{t('contact.form.error.title')}</h4>
                          {networkError ? (
                            <p className="text-sm text-red-700">
                              表单服务暂时不可用，请直接发送邮件至{' '}
                              <a
                                href="mailto:feifan.hangzhou@gmail.com"
                                className="font-semibold underline hover:text-red-900"
                              >
                                feifan.hangzhou@gmail.com
                              </a>
                              {' '}，我们会尽快回复。
                            </p>
                          ) : (
                            <p className="text-sm text-red-700">{submitError}</p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-claude-dark mb-1.5">
                            {t('contact.form.name')} *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={t('contact.form.placeholders.name')}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-claude-dark mb-1.5">
                            {t('contact.form.email')} *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={t('contact.form.placeholders.email')}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-claude-dark mb-1.5">
                            {t('contact.form.company')}
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={t('contact.form.placeholders.company')}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-claude-dark mb-1.5">
                            {t('contact.form.phone')}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={t('contact.form.placeholders.phone')}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-claude-dark mb-1.5">
                          {t('contact.form.service')}
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">{t('contact.form.placeholders.service')}</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-claude-dark mb-1.5">
                          {t('contact.form.message')} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={inputClass + ' resize-none'}
                          placeholder={t('contact.form.placeholders.message')}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold transition-all shadow-sm text-sm ${
                          isSubmitting
                            ? 'bg-claude-border text-claude-muted cursor-not-allowed'
                            : 'bg-claude-accent hover:bg-claude-accent-dark text-white hover:shadow-md'
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="spinner mr-3"></div>
                            {t('contact.form.sending')}
                          </div>
                        ) : (
                          <>
                            {t('contact.form.submit')}
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-claude-dark mb-2 tracking-tight">{t('contact.form.success.title')}</h3>
                    <p className="text-claude-medium text-sm">
                      {submitMessage || t('contact.form.success.message')}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-5">
                  <div className="w-9 h-9 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mr-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-claude-dark tracking-tight">{t('contact.info.title')}</h2>
                </div>
                <p className="text-claude-medium mb-7 leading-relaxed text-sm">
                  {t('contact.info.description')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => {
                    const cardClass = "flex items-start p-5 bg-white border border-claude-beige rounded-2xl hover:shadow-warm transition-all"
                    const iconBlock = (
                      <div className="w-10 h-10 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mr-4 flex-shrink-0">
                        {info.icon}
                      </div>
                    )
                    const content = (
                      <div>
                        <h3 className="text-sm font-semibold text-claude-dark mb-0.5">{info.title}</h3>
                        <p className="text-claude-dark text-sm font-medium mb-1">{info.content}</p>
                        <p className="text-claude-muted text-xs leading-relaxed">{info.description}</p>
                      </div>
                    )
                    const baiduUrl = 'https://ditu.baidu.com/search/银江软件园H座/@13367272.506314501,3522990.28875505,19z?querytype=s&da_src=shareurl&wd=银江软件园H座&c=179&src=0&wd2=杭州市西湖区西园八路2号&pn=0&sug=1&l=13&from=webmap&device_ratio=2'

                    if (info.type === 'email') {
                      return (
                        <motion.a key={index} href={`mailto:${info.content}`}
                          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                          className={cardClass + ' cursor-pointer hover:scale-[1.02]'}>
                          {iconBlock}{content}
                        </motion.a>
                      )
                    } else if (info.type === 'location') {
                      return (
                        <motion.a key={index} href={baiduUrl} target="_blank" rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                          className={cardClass + ' cursor-pointer hover:scale-[1.02]'}>
                          {iconBlock}{content}
                        </motion.a>
                      )
                    } else {
                      return (
                        <motion.div key={index}
                          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                          className={cardClass}>
                          {iconBlock}{content}
                        </motion.div>
                      )
                    }
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-claude-warm border-t border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">{t('contact.faq.title')}</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('contact.faq.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white border border-claude-beige rounded-2xl p-6 hover:shadow-warm transition-all"
              >
                <h3 className="text-sm font-semibold text-claude-dark mb-2 tracking-tight">{faq.question}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
