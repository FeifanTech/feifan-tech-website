import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingCart,
  Mic,
  FileText,
  Eye,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Zap,
  Shield,
  Network,
  Bot,
  PhoneCall
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Products = () => {
  const { t } = useTranslation('common')

  const products = [
    {
      icon: <PhoneCall className="w-7 h-7" />,
      title: t('products.items.outboundCall.title'),
      description: t('products.items.outboundCall.description'),
      features: t('products.items.outboundCall.features', { returnObjects: true }),
      status: 'live',
      flagship: true,
      users: '1,000+',
      rating: 4.9
    },
    {
      icon: <ShoppingCart className="w-7 h-7" />,
      title: t('products.items.ecommerce.title'),
      description: t('products.items.ecommerce.description'),
      features: t('products.items.ecommerce.features', { returnObjects: true }),
      status: 'comingSoonOpenSource',
      users: '10,000+',
      rating: 4.8
    },
    {
      icon: <Mic className="w-7 h-7" />,
      title: t('products.items.speech.title'),
      description: t('products.items.speech.description'),
      features: t('products.items.speech.features', { returnObjects: true }),
      status: 'live',
      users: '50,000+',
      rating: 4.9
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: t('products.items.ocr.title'),
      description: t('products.items.ocr.description'),
      features: t('products.items.ocr.features', { returnObjects: true }),
      status: 'live',
      users: '25,000+',
      rating: 4.7
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: t('products.items.vision.title'),
      description: t('products.items.vision.description'),
      features: t('products.items.vision.features', { returnObjects: true }),
      status: 'live',
      users: '15,000+',
      rating: 4.6
    },
    {
      icon: <Network className="w-7 h-7" />,
      title: t('products.items.aiPlatform.title'),
      description: t('products.items.aiPlatform.description'),
      features: t('products.items.aiPlatform.features', { returnObjects: true }),
      status: 'live',
      users: '8,000+',
      rating: 4.8
    },
    {
      icon: <Bot className="w-7 h-7" />,
      title: t('products.items.aiAgent.title'),
      description: t('products.items.aiAgent.description'),
      features: t('products.items.aiAgent.features', { returnObjects: true }),
      status: 'live',
      users: '12,000+',
      rating: 4.9
    }
  ]

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: t('products.whyChoose.performance.title'),
      description: t('products.whyChoose.performance.description')
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t('products.whyChoose.security.title'),
      description: t('products.whyChoose.security.description')
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t('products.whyChoose.integration.title'),
      description: t('products.whyChoose.integration.description')
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t('products.whyChoose.support.title'),
      description: t('products.whyChoose.support.description')
    }
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
              {t('products.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-claude-medium mb-4 leading-relaxed max-w-3xl mx-auto">
              {t('products.hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-claude-muted leading-relaxed">
              {t('products.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Banner */}
      <section className="py-16 bg-claude-footer relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(217,119,87,0.35) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-claude-accent/20 text-claude-accent border border-claude-accent/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-claude-accent animate-pulse-dot" />
                {t('products.flagship.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                {t('products.flagship.title')}
              </h2>
              <p className="text-white/60 text-lg mb-2 font-medium">{t('products.flagship.tagline')}</p>
              <p className="text-white/50 text-base leading-relaxed mb-8 max-w-xl">
                {t('products.flagship.description')}
              </p>
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center px-7 py-3.5 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {t('products.flagship.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="flex gap-6 lg:gap-8">
              {t('products.flagship.highlights', { returnObjects: true }).map((h, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-claude-accent mb-1 tracking-tight tabular-nums">{h.metric}</div>
                  <div className="text-white/50 text-sm">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
              {t('products.featured.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('products.featured.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden hover:shadow-warm-lg transition-all duration-300 group hover:-translate-y-1 ${product.flagship ? 'bg-claude-footer border-claude-accent/30' : 'bg-white border-claude-beige'}`}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full ${
                  product.flagship
                    ? 'bg-gradient-to-r from-claude-accent via-orange-400 to-amber-400'
                    : product.status === 'live'
                    ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500'
                    : 'bg-gradient-to-r from-claude-accent via-orange-400 to-amber-400'
                }`} />

                <div className="p-7">
                {/* Product Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${product.flagship ? 'bg-claude-accent/20 text-claude-accent group-hover:bg-claude-accent group-hover:text-white' : 'bg-claude-accent-light text-claude-accent group-hover:bg-claude-accent group-hover:text-white'}`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-0.5 tracking-tight ${product.flagship ? 'text-white' : 'text-claude-dark'}`}>{product.title}</h3>
                    </div>
                  </div>
                  {product.flagship ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-claude-accent/20 text-claude-accent border border-claude-accent/30">
                      <Star className="w-3 h-3 fill-current" />
                      {t('products.flagship.badge')}
                    </span>
                  ) : product.status === 'live' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      {t('common.live')}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-claude-accent-light text-claude-accent border border-claude-border">
                      {t('common.comingSoonOpenSource')}
                    </span>
                  )}
                </div>

                {/* Product Description */}
                <div className="mb-5">
                  <p className={`text-sm leading-relaxed ${product.flagship ? 'text-white/60' : 'text-claude-medium'}`}>{product.description}</p>
                </div>

                {/* Product Stats */}
                <div className={`flex items-center space-x-5 mb-5 pb-5 border-b ${product.flagship ? 'border-white/10' : 'border-claude-beige'}`}>
                  <div className="flex items-center space-x-1.5">
                    <Users className={`w-3.5 h-3.5 ${product.flagship ? 'text-white/30' : 'text-claude-muted'}`} />
                    <span className={`text-xs ${product.flagship ? 'text-white/40' : 'text-claude-muted'}`}>{product.users} {t('common.users')}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Star className="w-3.5 h-3.5 text-claude-accent fill-current" />
                    <span className={`text-xs ${product.flagship ? 'text-white/40' : 'text-claude-muted'}`}>{product.rating}/5.0</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-3 tracking-tight ${product.flagship ? 'text-white/70' : 'text-claude-dark'}`}>{t('common.keyFeatures')}:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-claude-accent mr-2.5 flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${product.flagship ? 'text-white/55' : 'text-claude-medium'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center">
                  <Link
                    to="/contact#contact-form"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-sm text-sm"
                  >
                    {t('common.contactUs')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                </div>{/* end inner padding div */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
              {t('products.whyChoose.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('products.whyChoose.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white border border-claude-beige rounded-2xl hover:shadow-warm transition-all"
              >
                <div className="w-11 h-11 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-claude-dark mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{feature.description}</p>
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
              {t('products.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/65 mb-10 leading-relaxed">
              {t('products.cta.description')}
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center px-8 py-4 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {t('common.contactUs')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products
