import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Upload, FileImage, Copy, Check, Sparkles, ChevronRight, RefreshCw, AlertCircle } from 'lucide-react'
import { createWorker } from 'tesseract.js'

// --- Sample images generated via canvas at runtime ---
function makeSampleCanvas(lines, fontSize = 18, padding = 24, bg = '#fff', fg = '#1a1a1a') {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx.font = `${fontSize}px monospace`
  const maxW = Math.max(...lines.map(l => ctx.measureText(l).width))
  canvas.width = Math.max(480, maxW + padding * 2)
  canvas.height = lines.length * (fontSize + 10) + padding * 2
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = fg
  ctx.font = `${fontSize}px monospace`
  lines.forEach((line, i) => {
    ctx.fillText(line, padding, padding + i * (fontSize + 10) + fontSize)
  })
  return canvas.toDataURL('image/png')
}

const SAMPLES = [
  {
    key: 'invoice',
    labelZh: '英文发票',
    labelEn: 'Invoice',
    lang: 'eng',
    lines: [
      'INVOICE  #INV-2024-0892',
      '',
      'From: Feifan Technology Co., Ltd.',
      'To:   Shenzhen Logistics Group',
      '',
      'Item                  Qty    Unit Price    Total',
      '---------------------------------------------',
      'AI OCR Module v3       1     ¥12,800.00   ¥12,800',
      'Speech API (annual)    1     ¥36,000.00   ¥36,000',
      'Integration support   20h    ¥   800.00   ¥16,000',
      '---------------------------------------------',
      'Subtotal:                               ¥64,800',
      'Tax (6%):                                ¥3,888',
      'TOTAL DUE:                             ¥68,688',
      '',
      'Payment due: 2024-12-31',
    ],
  },
  {
    key: 'chinese',
    labelZh: '中文通知',
    labelEn: 'Chinese Notice',
    lang: 'chi_sim',
    lines: [
      '关于升级AI平台的通知',
      '',
      '各部门负责人：',
      '',
      '经公司研究决定，将于2024年12月20日',
      '对现有AI中台平台进行全面升级。',
      '',
      '升级内容包括：',
      '1. 大语言模型接入层优化',
      '2. OCR识别准确率提升至98.5%',
      '3. 语音识别支持方言扩展',
      '4. 新增多模态分析功能',
      '',
      '如有疑问请联系技术部：tech@feifan.ai',
    ],
  },
  {
    key: 'mixed',
    labelZh: '混合文本',
    labelEn: 'Mixed Text',
    lang: 'eng+chi_sim',
    lines: [
      'Meeting Notes - 会议纪要',
      'Date: 2024-11-15  |  Time: 14:00',
      '',
      'Attendees / 参会人员:',
      '  - Zhang Wei (CEO)  张伟',
      '  - Li Ming  (CTO)   李明',
      '  - Wang Fang (PM)   王芳',
      '',
      'Agenda / 议题:',
      '1. Q4 roadmap review - Q4路线图回顾',
      '2. OCR accuracy target: >= 98%',
      '   OCR准确率目标：≥ 98%',
      '3. Launch date: 2025-01-08 上线时间',
      '',
      'Action items / 待办事项:',
      '  [ ] Complete API docs by Dec 20',
      '  [ ] 完成测试用例覆盖 by Dec 25',
    ],
  },
]

export default function Demo() {
  const { t, i18n } = useTranslation('common')
  const isZh = i18n.language.startsWith('zh')

  const [activeTab, setActiveTab] = useState('upload') // 'upload' | sample key
  const [imageUrl, setImageUrl] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [status, setStatus] = useState('idle') // idle | processing | done | error
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const fileInputRef = useRef(null)

  // Generate sample images on first use
  const sampleImages = useRef({})
  const getSampleImage = (sample) => {
    if (!sampleImages.current[sample.key]) {
      sampleImages.current[sample.key] = makeSampleCanvas(sample.lines)
    }
    return sampleImages.current[sample.key]
  }

  const runOCR = useCallback(async (imgSrc, lang = 'eng+chi_sim') => {
    setStatus('processing')
    setProgress(0)
    setResult(null)
    setErrorMsg('')
    try {
      const worker = await createWorker(lang, 1, {
        logger: (m) => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100))
          }
        },
      })
      const { data } = await worker.recognize(imgSrc)
      await worker.terminate()
      setResult(data)
      setStatus('done')
    } catch (e) {
      setErrorMsg(e.message || 'OCR failed')
      setStatus('error')
    }
  }, [])

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setActiveTab('upload')
    setStatus('idle')
    setResult(null)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  const handleSelectSample = (sample) => {
    const img = getSampleImage(sample)
    setImageUrl(img)
    setActiveTab(sample.key)
    setStatus('idle')
    setResult(null)
    runOCR(img, sample.lang)
  }

  const handleRunOCR = () => {
    if (!imageUrl) return
    const sample = SAMPLES.find(s => s.key === activeTab)
    runOCR(imageUrl, sample ? sample.lang : 'eng+chi_sim')
  }

  const handleCopy = () => {
    if (!result?.text) return
    navigator.clipboard.writeText(result.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setImageUrl(null)
    setActiveTab('upload')
    setStatus('idle')
    setProgress(0)
    setResult(null)
    setErrorMsg('')
  }

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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-claude-accent/20 text-claude-accent text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {t('demo.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {t('demo.title')}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('demo.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main demo area */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Sample quick-start */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <p className="text-claude-medium text-sm mb-3 font-medium">{t('demo.trySample')}</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => handleSelectSample(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    activeTab === s.key
                      ? 'bg-claude-accent text-white border-claude-accent'
                      : 'bg-white text-claude-medium border-claude-beige hover:border-claude-accent hover:text-claude-accent'
                  }`}
                >
                  {isZh ? s.labelZh : s.labelEn}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: upload / preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-claude-dark">{t('demo.inputLabel')}</h2>
                {imageUrl && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-xs text-claude-medium hover:text-claude-dark transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    {t('demo.reset')}
                  </button>
                )}
              </div>

              {/* Drop zone */}
              <div
                className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 overflow-hidden ${
                  isDragging
                    ? 'border-claude-accent bg-claude-accent-light'
                    : imageUrl
                    ? 'border-claude-beige'
                    : 'border-claude-beige hover:border-claude-accent/50 bg-white cursor-pointer'
                }`}
                style={{ minHeight: '300px' }}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => !imageUrl && fileInputRef.current?.click()}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Input"
                    className="w-full h-auto max-h-[480px] object-contain p-3"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-claude-accent-light flex items-center justify-center">
                      <FileImage className="w-7 h-7 text-claude-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-claude-dark mb-1">{t('demo.dropZone.title')}</p>
                      <p className="text-sm text-claude-medium">{t('demo.dropZone.subtitle')}</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click() }}
                      className="flex items-center gap-2 px-4 py-2 bg-claude-accent text-white rounded-lg text-sm font-medium hover:bg-claude-accent-dark transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      {t('demo.dropZone.button')}
                    </button>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />

              {/* Run button */}
              {imageUrl && status === 'idle' && (
                <button
                  onClick={handleRunOCR}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all hover:scale-[1.01] shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  {t('demo.runOCR')}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>

            {/* Right: results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-claude-dark">{t('demo.outputLabel')}</h2>
                {result?.text && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs font-medium text-claude-medium hover:text-claude-accent transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? t('demo.copied') : t('demo.copy')}
                  </button>
                )}
              </div>

              <div
                className="rounded-2xl border border-claude-beige bg-white overflow-hidden"
                style={{ minHeight: '300px' }}
              >
                <AnimatePresence mode="wait">
                  {/* Idle */}
                  {status === 'idle' && !result && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center p-8 text-center"
                      style={{ minHeight: '300px' }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-claude-warm flex items-center justify-center mb-3">
                        <Sparkles className="w-6 h-6 text-claude-muted" />
                      </div>
                      <p className="text-claude-medium text-sm">{t('demo.idleHint')}</p>
                    </motion.div>
                  )}

                  {/* Processing */}
                  {status === 'processing' && (
                    <motion.div
                      key="processing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center p-8 gap-5"
                      style={{ minHeight: '300px' }}
                    >
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                          <circle cx="32" cy="32" r="28" fill="none" stroke="#EDE8E1" strokeWidth="4" />
                          <motion.circle
                            cx="32" cy="32" r="28"
                            fill="none"
                            stroke="#D97757"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={2 * Math.PI * 28}
                            strokeDashoffset={2 * Math.PI * 28 * (1 - progress / 100)}
                            transition={{ duration: 0.3 }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-claude-accent">
                          {progress}%
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-claude-dark mb-1">{t('demo.processing')}</p>
                        <p className="text-sm text-claude-medium">{t('demo.processingHint')}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Error */}
                  {status === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center p-8 gap-3 text-center"
                      style={{ minHeight: '300px' }}
                    >
                      <AlertCircle className="w-10 h-10 text-red-400" />
                      <p className="font-medium text-claude-dark">{t('demo.errorTitle')}</p>
                      <p className="text-sm text-claude-medium">{errorMsg}</p>
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 text-sm bg-claude-warm rounded-lg text-claude-dark hover:bg-claude-beige transition-colors"
                      >
                        {t('demo.reset')}
                      </button>
                    </motion.div>
                  )}

                  {/* Done */}
                  {status === 'done' && result && (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col h-full"
                    >
                      {/* Stats bar */}
                      <div className="flex items-center gap-4 px-5 py-3 border-b border-claude-beige bg-claude-warm/50">
                        <div className="text-xs text-claude-medium">
                          {t('demo.confidence')}:
                          <span className={`ml-1 font-bold ${result.confidence > 80 ? 'text-green-600' : result.confidence > 60 ? 'text-yellow-600' : 'text-red-500'}`}>
                            {result.confidence?.toFixed(1)}%
                          </span>
                        </div>
                        <div className="text-xs text-claude-medium">
                          {t('demo.charCount')}: <span className="font-bold text-claude-dark">{result.text?.trim().length}</span>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-xs text-green-600 font-medium">
                          <Check className="w-3.5 h-3.5" />
                          {t('demo.done')}
                        </div>
                      </div>
                      {/* Text result */}
                      <pre className="flex-1 p-5 text-sm font-mono text-claude-dark leading-relaxed whitespace-pre-wrap overflow-auto max-h-[400px]">
                        {result.text}
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { stat: '98.5%', label: t('demo.stats.accuracy') },
              { stat: '< 2s', label: t('demo.stats.speed') },
              { stat: '50+', label: t('demo.stats.languages') },
            ].map((item) => (
              <div key={item.stat} className="bg-white border border-claude-beige rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-claude-accent mb-2">{item.stat}</div>
                <div className="text-sm text-claude-medium">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 bg-claude-footer rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-2">{t('demo.cta.title')}</h3>
            <p className="text-white/60 mb-6">{t('demo.cta.subtitle')}</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-claude-accent text-white rounded-xl font-semibold hover:bg-claude-accent-dark transition-all hover:scale-[1.02]"
            >
              {t('demo.cta.button')}
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
