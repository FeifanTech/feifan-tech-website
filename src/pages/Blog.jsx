import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Clock, Calendar, Tag, ArrowRight, BookOpen } from 'lucide-react'
import { POSTS } from '../data/blogPosts'

const ALL_CATEGORIES = ['All', 'AI', 'Technology', 'Engineering', 'Industry']

export default function Blog() {
  const { t, i18n } = useTranslation('common')
  const isZh = i18n.language.startsWith('zh')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = (activeCategory === 'All'
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory)
  ).filter(Boolean).sort((a, b) => new Date(b.date) - new Date(a.date))

  const categoryLabelZh = { All: '全部', AI: 'AI', Technology: '技术', Engineering: '工程', Industry: '行业' }
  const categoryLabelEn = { All: 'All', AI: 'AI', Technology: 'Technology', Engineering: 'Engineering', Industry: 'Industry' }

  return (
    <div className="min-h-screen bg-claude-cream">
      {/* Hero */}
      <section className="bg-claude-footer text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-claude-accent font-semibold text-sm uppercase tracking-widest mb-4">
              {t('blog.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {t('blog.title')}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-claude-accent text-white border-claude-accent'
                    : 'bg-white text-claude-medium border-claude-beige hover:border-claude-accent/50'
                }`}
              >
                {isZh ? categoryLabelZh[cat] : categoryLabelEn[cat]}
              </button>
            ))}
          </motion.div>

          {/* Featured (first post) */}
          {activeCategory === 'All' && filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                to={`/blog/${filtered[0].slug}`}
                className="block bg-white border border-claude-beige rounded-2xl overflow-hidden hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-0.5 rounded-full text-white text-xs font-semibold"
                      style={{ backgroundColor: filtered[0].categoryColor }}
                    >
                      {isZh ? categoryLabelZh[filtered[0].category] : filtered[0].category}
                    </span>
                    <span className="text-xs font-medium text-claude-accent bg-claude-accent-light px-2.5 py-0.5 rounded-full">
                      {t('blog.featured')}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-claude-dark mb-3 group-hover:text-claude-accent transition-colors leading-snug">
                    {isZh ? filtered[0].titleZh : filtered[0].titleEn}
                  </h2>
                  <p className="text-claude-medium text-base leading-relaxed mb-6">
                    {isZh ? filtered[0].excerptZh : filtered[0].excerptEn}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-claude-medium">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: filtered[0].authorColor }}
                        >
                          {filtered[0].authorAvatar}
                        </div>
                        <span>{isZh ? filtered[0].authorZh : filtered[0].authorEn}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {filtered[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {isZh ? filtered[0].readTimeZh : filtered[0].readTimeEn}
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-claude-accent">
                      {t('blog.readMore')}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Post list */}
          <div className="space-y-4">
            {(activeCategory === 'All' ? filtered.slice(1) : filtered).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-white border border-claude-beige rounded-2xl p-6 hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-white text-xs font-semibold"
                          style={{ backgroundColor: post.categoryColor }}
                        >
                          {isZh ? categoryLabelZh[post.category] : post.category}
                        </span>
                        <span className="text-xs text-claude-muted flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="text-xs text-claude-muted flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {isZh ? post.readTimeZh : post.readTimeEn}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-claude-dark mb-1.5 group-hover:text-claude-accent transition-colors leading-snug">
                        {isZh ? post.titleZh : post.titleEn}
                      </h3>
                      <p className="text-sm text-claude-medium leading-relaxed line-clamp-2">
                        {isZh ? post.excerptZh : post.excerptEn}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {(isZh ? post.tagsZh : post.tagsEn).map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-claude-warm text-xs text-claude-medium"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-2 text-center w-16">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: post.authorColor }}
                      >
                        {post.authorAvatar}
                      </div>
                      <p className="text-xs text-claude-muted leading-tight">
                        {isZh ? post.authorZh : post.authorEn}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 bg-claude-footer rounded-2xl p-8 text-center text-white"
          >
            <BookOpen className="w-10 h-10 text-claude-accent mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">{t('blog.cta.title')}</h3>
            <p className="text-white/60 text-sm mb-5">{t('blog.cta.subtitle')}</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-claude-accent text-white rounded-xl text-sm font-semibold hover:bg-claude-accent-dark transition-all hover:scale-[1.02]"
            >
              {t('blog.cta.button')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
