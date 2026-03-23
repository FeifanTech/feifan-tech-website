import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Calendar, Clock, ArrowLeft, Tag, ChevronRight } from 'lucide-react'
import { POSTS } from '../data/blogPosts'

// Very lightweight markdown renderer — only handles the subset we actually use
function renderMarkdown(md) {
  const lines = md.split('\n')
  const elements = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.startsWith('```')) {
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} className="bg-claude-dark rounded-xl p-4 overflow-x-auto text-sm text-green-300 font-mono my-4">
          <code>{codeLines.join('\n')}</code>
        </pre>
      )
      i++
      continue
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-claude-dark mt-8 mb-3">
          {line.slice(3)}
        </h2>
      )
      i++
      continue
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-claude-dark mt-6 mb-2">
          {line.slice(4)}
        </h3>
      )
      i++
      continue
    }

    // HR
    if (line.trim() === '---') {
      elements.push(<hr key={i} className="border-claude-beige my-6" />)
      i++
      continue
    }

    // Empty line
    if (line.trim() === '') {
      i++
      continue
    }

    // Collect paragraph / list lines
    const paraLines = []
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('#') && !lines[i].startsWith('```') && lines[i].trim() !== '---') {
      paraLines.push(lines[i])
      i++
    }
    if (paraLines.length === 0) { i++; continue }

    // Check if it's a list
    if (paraLines.every(l => /^[-\d]/.test(l.trim()))) {
      elements.push(
        <ul key={i} className="space-y-1.5 my-3 pl-4">
          {paraLines.map((l, li) => (
            <li key={li} className="text-claude-medium text-sm leading-relaxed flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-claude-accent flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(l.replace(/^[-*\d.]+\s*/, '')) }} />
            </li>
          ))}
        </ul>
      )
    } else {
      // Paragraph
      const joined = paraLines.join(' ')
      elements.push(
        <p
          key={i}
          className="text-claude-medium text-sm leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: inlineFormat(joined) }}
        />
      )
    }
  }
  return elements
}

function inlineFormat(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-claude-dark font-semibold">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-claude-warm font-mono text-claude-accent text-xs">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-claude-accent underline hover:text-claude-accent-dark">$1</a>')
}

export default function BlogPost() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation('common')
  const isZh = i18n.language.startsWith('zh')

  const post = POSTS.find(p => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const relatedPosts = POSTS.filter(p => p.slug !== slug).slice(0, 2)

  const categoryLabelZh = { AI: 'AI', Technology: '技术', Engineering: '工程', Industry: '行业' }

  return (
    <div className="min-h-screen bg-claude-cream">
      {/* Hero */}
      <section className="bg-claude-footer text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('blog.backToList')}
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="px-3 py-0.5 rounded-full text-white text-xs font-semibold"
                style={{ backgroundColor: post.categoryColor }}
              >
                {isZh ? (categoryLabelZh[post.category] || post.category) : post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-5">
              {isZh ? post.titleZh : post.titleEn}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: post.authorColor }}
                >
                  {post.authorAvatar}
                </div>
                <span className="text-white/80 font-medium">
                  {isZh ? post.authorZh : post.authorEn}
                </span>
                <span>·</span>
                <span>{isZh ? post.authorTitleZh : post.authorTitleEn}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {isZh ? post.readTimeZh : post.readTimeEn}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-claude-beige rounded-2xl p-8 md:p-10"
          >
            {/* Excerpt lead */}
            <p className="text-base text-claude-dark leading-relaxed font-medium border-l-4 border-claude-accent pl-4 mb-6 bg-claude-accent-light/40 py-3 pr-4 rounded-r-lg">
              {isZh ? post.excerptZh : post.excerptEn}
            </p>

            {/* Content */}
            <div>
              {renderMarkdown(isZh ? post.contentZh : post.contentEn)}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-claude-beige flex flex-wrap gap-2">
              {(isZh ? post.tagsZh : post.tagsEn).map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-claude-warm border border-claude-beige text-xs text-claude-medium"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 bg-white border border-claude-beige rounded-2xl p-6 flex items-center gap-4"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
              style={{ backgroundColor: post.authorColor }}
            >
              {post.authorAvatar}
            </div>
            <div>
              <p className="font-bold text-claude-dark">
                {isZh ? post.authorZh : post.authorEn}
              </p>
              <p className="text-sm text-claude-medium">
                {isZh ? post.authorTitleZh : post.authorTitleEn} · Feifan Tech
              </p>
            </div>
            <Link
              to="/team"
              className="ml-auto flex-shrink-0 text-sm text-claude-accent font-medium hover:text-claude-accent-dark transition-colors flex items-center gap-1"
            >
              {t('blog.viewProfile')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h3 className="font-semibold text-claude-dark mb-4">{t('blog.related')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map(rp => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="bg-white border border-claude-beige rounded-xl p-5 hover:shadow-warm hover:-translate-y-0.5 transition-all group"
                  >
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-white text-xs font-semibold mb-2"
                      style={{ backgroundColor: rp.categoryColor }}
                    >
                      {isZh ? (categoryLabelZh[rp.category] || rp.category) : rp.category}
                    </span>
                    <p className="font-semibold text-claude-dark text-sm leading-snug group-hover:text-claude-accent transition-colors">
                      {isZh ? rp.titleZh : rp.titleEn}
                    </p>
                    <p className="mt-1 text-xs text-claude-muted">{rp.date}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
