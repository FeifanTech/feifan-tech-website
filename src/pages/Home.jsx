import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, Shield, Users, Star, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import homeBgImage from '../assets/homg_bg.gif'

const Home = () => {
  const { t } = useTranslation('common')

  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      title: t('home.features.items.innovation.title'),
      description: t('home.features.items.innovation.description')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t('home.features.items.speed.title'),
      description: t('home.features.items.speed.description')
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t('home.features.items.security.title'),
      description: t('home.features.items.security.description')
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t('home.features.items.team.title'),
      description: t('home.features.items.team.description')
    }
  ]

  const stats = [
    { number: '50+', label: t('home.stats.projects') },
    { number: '100%', label: t('home.stats.satisfaction') },
    { number: '5+', label: t('home.stats.experience') },
    { number: '24/7', label: t('home.stats.support') }
  ]

  const testimonials = [
    {
      name: t('home.testimonials.customer1.name'),
      position: t('home.testimonials.customer1.position'),
      content: t('home.testimonials.customer1.content'),
      rating: 5
    },
    {
      name: t('home.testimonials.customer2.name'),
      position: t('home.testimonials.customer2.position'),
      content: t('home.testimonials.customer2.content'),
      rating: 5
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeBgImage})` }}
        >
          <div className="absolute inset-0 bg-claude-dark/50"></div>
        </div>

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-white/85 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-white/65 leading-relaxed">
              {t('home.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-claude-accent rounded-xl font-semibold text-white hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {t('common.viewProducts')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-white/25 rounded-xl font-semibold hover:bg-white/10 hover:border-white/45 transition-all backdrop-blur-sm"
              >
                {t('common.exploreServices')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <ChevronRight className="w-6 h-6 transform rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
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
              {t('home.features.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('home.features.subtitle')}
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
                className="p-6 bg-white border border-claude-beige rounded-2xl hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-claude-dark mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-claude-warm border-y border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-claude-accent mb-2 tracking-tight">{stat.number}</div>
                <div className="text-claude-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              {t('home.testimonials.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-claude-beige rounded-2xl hover:shadow-warm transition-shadow"
              >
                <div className="flex mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-claude-accent fill-current" />
                  ))}
                </div>
                <p className="text-claude-dark mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-claude-beige pt-4">
                  <div className="font-semibold text-claude-dark text-sm">{testimonial.name}</div>
                  <div className="text-claude-muted text-sm mt-0.5">{testimonial.position}</div>
                </div>
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
              {t('home.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/65 mb-10 leading-relaxed">
              {t('home.cta.description')}
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center px-8 py-4 bg-claude-accent rounded-xl font-semibold text-white hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              {t('common.contactUs')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
