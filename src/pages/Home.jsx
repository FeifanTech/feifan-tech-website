import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, Shield, Users, ChevronRight, Brain, Layers, TrendingUp, Tag } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/* ─── Counter hook: counts up when scrolled into view ─── */
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  // Parse: prefix (non-digit), number, suffix (rest) — e.g. "24/7" → ["", 24, "/7"]
  const match = target.match(/^(\D*)(\d[\d,]*)(.*)$/) || ['', '', '', target]
  const prefix = match[1]
  const numericStr = match[2].replace(/,/g, '')
  const suffix = match[3]
  const numericTarget = parseInt(numericStr, 10) || 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started || !numericTarget) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericTarget))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, numericTarget, duration])

  return { ref, display: started ? `${prefix}${count}${suffix}` : '0' }
}

/* ─── Single stat item with counter ─── */
const StatItem = ({ number, label }) => {
  const { ref, display } = useCounter(number)
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-claude-accent mb-2 tracking-tight tabular-nums">
        {display}
      </div>
      <div className="text-claude-medium text-sm">{label}</div>
    </div>
  )
}

/* ─── Typewriter component ─── */
const Typewriter = ({ phrases }) => {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!phrases || phrases.length === 0) return
    const current = phrases[phraseIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 45)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 22)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex, phrases])

  return (
    <span className="inline-flex items-baseline">
      <span className="gradient-text font-semibold">{text}</span>
      <span className="ml-0.5 inline-block w-0.5 h-[1.1em] bg-claude-accent align-middle animate-cursor-blink" />
    </span>
  )
}

const Home = () => {
  const { t } = useTranslation('common')
  const typewriterPhrases = t('home.hero.typewriter', { returnObjects: true })
  const caseStudies = t('home.caseStudies.items', { returnObjects: true })

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: t('home.features.items.innovation.title'),
      description: t('home.features.items.innovation.description'),
      size: 'large',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('home.features.items.speed.title'),
      description: t('home.features.items.speed.description'),
      size: 'small',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('home.features.items.security.title'),
      description: t('home.features.items.security.description'),
      size: 'small',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('home.features.items.team.title'),
      description: t('home.features.items.team.description'),
      size: 'large',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t('home.features.items.innovation.title'),
      description: t('home.features.items.innovation.description'),
      size: 'wide',
      hidden: true,
    },
  ]

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Aurora background */}
        <div className="absolute inset-0" style={{ background: '#1A1712' }}>
          {/* Layer 1 — large terracotta aurora, top-right */}
          <div
            className="absolute rounded-full animate-aurora"
            style={{
              width: '900px', height: '700px',
              top: '-200px', right: '-200px',
              background: 'radial-gradient(ellipse, rgba(217,119,87,0.22) 0%, rgba(185,80,40,0.10) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          {/* Layer 2 — amber aurora, bottom-left */}
          <div
            className="absolute rounded-full animate-aurora-slow"
            style={{
              width: '700px', height: '600px',
              bottom: '-150px', left: '-150px',
              background: 'radial-gradient(ellipse, rgba(245,166,35,0.14) 0%, rgba(217,119,87,0.08) 40%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
          {/* Layer 3 — warm white center glow */}
          <div
            className="absolute"
            style={{
              width: '600px', height: '400px',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(ellipse, rgba(245,240,232,0.05) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          {/* Dot grid texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(245,240,232,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Noise overlay for depth */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(245,240,232,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.4) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-white/70 text-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              <Layers className="w-3.5 h-3.5" />
              <span>AI-Powered Technology Platform</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-tight tracking-tight">
              {t('home.hero.title')}
            </h1>

            {/* Typewriter line */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-relaxed min-h-[1.5em]">
              <Typewriter phrases={Array.isArray(typewriterPhrases) ? typewriterPhrases : []} />
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-white/50 leading-relaxed max-w-3xl mx-auto">
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
                to="/contact#contact-form"
                className="inline-flex items-center px-8 py-4 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/8 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                {t('common.scheduleDemo')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/30"
        >
          <ChevronRight className="w-6 h-6 transform rotate-90" />
        </motion.div>
      </section>

      {/* ── Features Bento Grid ── */}
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
              {t('home.features.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          {/* Bento grid: 4 equal columns on xl, 2 on md, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-fr">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-claude-footer rounded-2xl flex flex-col justify-between min-h-[220px] hover:shadow-warm-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(217,119,87,0.15) 0%, transparent 60%)' }}
              />
              <div className="relative z-10">
                <div className="w-11 h-11 bg-claude-accent/20 rounded-xl flex items-center justify-center text-claude-accent mb-5">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{t('home.features.items.innovation.title')}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{t('home.features.items.innovation.description')}</p>
              </div>
            </motion.div>

            {/* Card 2 — small */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-7 bg-white border border-claude-beige rounded-2xl hover:shadow-warm-lg transition-all duration-300 group hover:-translate-y-1 min-h-[200px] flex flex-col justify-between"
            >
              <div className="w-10 h-10 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mb-4 group-hover:bg-claude-accent group-hover:text-white transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-claude-dark mb-2 tracking-tight">{t('home.features.items.speed.title')}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{t('home.features.items.speed.description')}</p>
              </div>
            </motion.div>

            {/* Card 3 — small */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-7 bg-claude-accent-light border border-claude-border rounded-2xl hover:shadow-warm-lg transition-all duration-300 group hover:-translate-y-1 min-h-[200px] flex flex-col justify-between"
            >
              <div className="w-10 h-10 bg-claude-accent rounded-xl flex items-center justify-center text-white mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-claude-dark mb-2 tracking-tight">{t('home.features.items.security.title')}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{t('home.features.items.security.description')}</p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-claude-beige rounded-2xl hover:shadow-warm-lg transition-all duration-300 group hover:-translate-y-1 min-h-[220px] flex flex-col justify-between relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-64 h-full opacity-20"
                style={{ background: 'radial-gradient(ellipse at top right, #F2E5DC, transparent 70%)' }}
              />
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 bg-claude-accent-light rounded-xl flex items-center justify-center text-claude-accent mb-4 group-hover:bg-claude-accent group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-claude-dark mb-2 tracking-tight">{t('home.features.items.team.title')}</h3>
                <p className="text-claude-medium text-sm leading-relaxed">{t('home.features.items.team.description')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="py-10 bg-claude-warm border-y border-claude-beige">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: t('home.trust.years'), label: t('home.trust.yearsLabel') },
              { value: t('home.trust.projects'), label: t('home.trust.projectsLabel') },
              { value: t('home.trust.products'), label: t('home.trust.productsLabel') },
              { value: t('home.trust.support'), label: t('home.trust.supportLabel') },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-claude-accent mb-1 tracking-tight">{item.value}</div>
                <div className="text-claude-medium text-xs md:text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
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
              {t('home.caseStudies.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-claude-medium leading-relaxed">
              {t('home.caseStudies.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {Array.isArray(caseStudies) && caseStudies.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="bg-white border border-claude-beige rounded-2xl overflow-hidden hover:shadow-warm-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col"
              >
                {/* Card header */}
                <div className="px-7 pt-7 pb-5 border-b border-claude-beige">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-claude-accent bg-claude-accent-light px-3 py-1 rounded-full">
                      {c.industry}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-claude-warm flex items-center justify-center text-claude-accent">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-claude-dark tracking-tight">{c.title}</h3>
                </div>

                {/* Card body */}
                <div className="px-7 py-5 flex-1 flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-semibold text-claude-muted uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-claude-medium text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-claude-muted uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-claude-medium text-sm leading-relaxed">{c.solution}</p>
                  </div>

                  {/* Metric highlight */}
                  <div className="mt-auto pt-4 border-t border-claude-beige flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-claude-accent tracking-tight">{c.metric}</span>
                    <span className="text-sm text-claude-medium">{c.metricLabel}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(c.tags) && c.tags.map((tag, ti) => (
                      <span key={ti} className="inline-flex items-center gap-1 text-xs text-claude-muted bg-claude-warm border border-claude-beige px-2.5 py-1 rounded-full">
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA Section ── */}
      <section className="py-20 bg-claude-footer relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(ellipse at center, rgba(217,119,87,0.20) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/55 mb-10 leading-relaxed">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center px-8 py-4 bg-claude-accent rounded-xl font-semibold text-white hover:bg-claude-accent-dark transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {t('common.contactUs')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/8 hover:border-white/40 transition-all"
              >
                {t('common.viewProducts')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
