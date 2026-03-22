import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, Lightbulb, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation('common')

  const values = [
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: t('about.timeline.milestones.2020.title'),
      description: t('about.timeline.milestones.2020.description')
    },
    {
      year: '2021',
      title: t('about.timeline.milestones.2021.title'),
      description: t('about.timeline.milestones.2021.description')
    },
    {
      year: '2022',
      title: t('about.timeline.milestones.2022.title'),
      description: t('about.timeline.milestones.2022.description')
    },
    {
      year: '2023',
      title: t('about.timeline.milestones.2023.title'),
      description: t('about.timeline.milestones.2023.description')
    },
    {
      year: '2024',
      title: t('about.timeline.milestones.2024.title'),
      description: t('about.timeline.milestones.2024.description')
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
              {t('about.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-claude-medium leading-relaxed max-w-3xl mx-auto">
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-claude-cream">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-9 h-9 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mr-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-claude-dark tracking-tight">{t('about.mission.title')}</h2>
                </div>
                <p className="text-claude-medium leading-relaxed text-lg">
                  {t('about.mission.description')}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-9 h-9 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mr-3">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-claude-dark tracking-tight">{t('about.vision.title')}</h2>
                </div>
                <p className="text-claude-medium leading-relaxed text-lg">
                  {t('about.vision.description')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-claude-footer rounded-2xl p-8 text-white shadow-warm-lg">
                <h3 className="text-xl font-bold mb-6 tracking-tight">{t('about.leadership.title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-sm font-bold text-white">LY</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Li Yufeng (李玉锋)</h4>
                      <p className="text-white/60 text-xs mt-0.5">{t('about.leadership.ceo')}</p>
                      <p className="text-white/50 text-xs mt-2 leading-relaxed">
                        {t('about.leadership.ceoDescription')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start border-t border-white/10 pt-5">
                    <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-sm font-bold text-white">XJ</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-white text-sm">Xie Jinian (谢记年)</h4>
                        <a
                          href="https://yunyi-csl.pages.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-white transition-colors"
                          title="Visit personal website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-white/60 text-xs mt-0.5">{t('about.leadership.cto')}</p>
                      <p className="text-white/50 text-xs mt-2 leading-relaxed">
                        {t('about.leadership.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start border-t border-white/10 pt-5">
                    <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-sm font-bold text-white">WY</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Wang Yugang (王玉岗)</h4>
                      <p className="text-white/60 text-xs mt-0.5">{t('about.leadership.cpe')}</p>
                      <p className="text-white/50 text-xs mt-2 leading-relaxed">
                        {t('about.leadership.cpeDescription')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-claude-warm border-y border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">{t('about.values.title')}</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white border border-claude-beige rounded-2xl hover:shadow-warm transition-all"
              >
                <div className="w-14 h-14 bg-claude-accent-light rounded-2xl flex items-center justify-center text-claude-accent mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-claude-dark mb-2 tracking-tight">{value.title}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-claude-cream">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claude-dark mb-4 tracking-tight">{t('about.timeline.title')}</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('about.timeline.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-claude-border h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 px-8">
                    <div className="p-6 bg-white border border-claude-beige rounded-2xl shadow-warm hover:shadow-warm-lg transition-shadow">
                      <div className="text-xl font-bold text-claude-accent mb-2 tracking-tight">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-claude-dark mb-2 tracking-tight">{milestone.title}</h3>
                      <p className="text-claude-medium text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-3.5 h-3.5 bg-claude-accent rounded-full border-4 border-claude-cream shadow-sm z-10 flex-shrink-0"></div>

                  <div className="flex-1 px-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-claude-warm border-t border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-claude-dark tracking-tight">
              {t('about.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium mb-10 leading-relaxed">
              {t('about.cta.description')}
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center px-8 py-4 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              {t('common.contactUs')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
