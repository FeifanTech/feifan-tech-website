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
  Shield
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Products = () => {
  const { t } = useTranslation('common')
  
  const products = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t('products.items.ecommerce.title'),
      description: t('products.items.ecommerce.description'),
      features: t('products.items.ecommerce.features', { returnObjects: true }),
      bgColor: 'bg-blue-600',
      status: 'comingSoonOpenSource',
      users: '10,000+',
      rating: 4.8
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: t('products.items.speech.title'),
      description: t('products.items.speech.description'),
      features: t('products.items.speech.features', { returnObjects: true }),
      bgColor: 'bg-indigo-600',
      status: 'live',
      users: '50,000+',
      rating: 4.9
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: t('products.items.ocr.title'),
      description: t('products.items.ocr.description'),
      features: t('products.items.ocr.features', { returnObjects: true }),
      bgColor: 'bg-blue-700',
      status: 'live',
      users: '25,000+',
      rating: 4.7
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('products.items.vision.title'),
      description: t('products.items.vision.description'),
      features: t('products.items.vision.features', { returnObjects: true }),
      bgColor: 'bg-slate-600',
      status: 'live',
      users: '15,000+',
      rating: 4.6
    }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('products.whyChoose.performance.title'),
      description: t('products.whyChoose.performance.description')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('products.whyChoose.security.title'),
      description: t('products.whyChoose.security.description')
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('products.whyChoose.integration.title'),
      description: t('products.whyChoose.integration.description')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('products.whyChoose.support.title'),
      description: t('products.whyChoose.support.description')
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t('products.hero.title')}</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 leading-relaxed">
              {t('products.hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('products.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('products.featured.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t('products.featured.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${product.bgColor} rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.title}</h3>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {t(`common.${product.status}`)}
                    </span>
                  </div>

                  {/* Product Description */}
                  <div className="mb-6">
                    <p className="text-gray-700">{product.description}</p>
                  </div>

                  {/* Product Stats */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.users} {t('common.users')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}/5.0</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('common.keyFeatures')}:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <Link 
                      to="/contact#contact-form"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-sm"
                    >
                      {t('common.contactUs')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('products.whyChoose.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t('products.whyChoose.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('products.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('products.cta.description')}
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact#contact-form"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
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