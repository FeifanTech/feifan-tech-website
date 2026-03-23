import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X, Linkedin, Github, Mail, ExternalLink, Award, BookOpen, Briefcase } from 'lucide-react'

// Simulated team data — replace with real data when available
const TEAM = [
  {
    id: 'zhangwei',
    avatar: 'Z',
    color: '#D97757',
    nameZh: '张伟',
    nameEn: 'Zhang Wei',
    titleZh: '联合创始人 & CEO',
    titleEn: 'Co-Founder & CEO',
    bioZh: '张伟拥有超过12年的AI产品与商业化经验，曾主导百度AI实验室多个亿级用户规模的产品落地，后加入字节跳动担任AI战略负责人。2020年创立飞凡科技，致力于将企业级AI能力普惠化。',
    bioEn: 'Zhang Wei brings 12+ years of AI product and commercialization experience. Previously led multiple 100M+ user AI products at Baidu AI Lab, then served as AI Strategy Lead at ByteDance. Founded Feifan Tech in 2020 to democratize enterprise AI.',
    educationZh: '清华大学 计算机科学学士 / 北京大学 MBA',
    educationEn: 'B.Sc. Computer Science, Tsinghua University / MBA, Peking University',
    expertiseZh: ['AI产品战略', '商业化落地', '团队领导', '投融资'],
    expertiseEn: ['AI Product Strategy', 'Commercialization', 'Team Leadership', 'Fundraising'],
    prevZh: '百度AI实验室 → 字节跳动 AI战略',
    prevEn: 'Baidu AI Lab → ByteDance AI Strategy',
    linkedin: '#',
    email: 'zhangwei@feifan.ai',
  },
  {
    id: 'liming',
    avatar: 'L',
    color: '#5B8DB8',
    nameZh: '李明',
    nameEn: 'Li Ming',
    titleZh: '联合创始人 & CTO',
    titleEn: 'Co-Founder & CTO',
    bioZh: '李明是国内顶尖NLP和计算机视觉专家，清华大学人工智能博士，曾在阿里巴巴DAMO院主导多模态大模型研究，拥有28项AI领域授权专利。主导了飞凡OCR引擎从0到1的全部技术架构设计。',
    bioEn: 'Li Ming is a leading NLP and computer vision expert with a PhD in AI from Tsinghua University. Led multimodal large model research at Alibaba DAMO Academy, holds 28 AI patents. Architected Feifan\'s OCR engine from scratch.',
    educationZh: '清华大学 人工智能博士 (NLP方向)',
    educationEn: 'PhD in Artificial Intelligence (NLP), Tsinghua University',
    expertiseZh: ['大语言模型', 'OCR/文档理解', '计算机视觉', '多模态AI'],
    expertiseEn: ['Large Language Models', 'OCR / Doc Understanding', 'Computer Vision', 'Multimodal AI'],
    prevZh: '阿里巴巴 DAMO院 → 飞凡科技',
    prevEn: 'Alibaba DAMO Academy → Feifan Tech',
    github: '#',
    email: 'liming@feifan.ai',
  },
  {
    id: 'wangfang',
    avatar: 'W',
    color: '#7B6FA0',
    nameZh: '王芳',
    nameEn: 'Wang Fang',
    titleZh: '产品总监',
    titleEn: 'Director of Product',
    bioZh: '王芳拥有8年AI产品设计经验，曾任腾讯智慧零售AI产品负责人，主导过多个千万级DAU智能产品的从0到1落地。擅长将复杂技术能力转化为直观好用的产品体验，在智能文档、语音交互领域有深厚积累。',
    bioEn: 'Wang Fang brings 8 years of AI product design experience. Former AI Product Lead for Tencent Smart Retail, shipped multiple 10M+ DAU intelligent products. Specializes in translating complex AI capabilities into intuitive user experiences.',
    educationZh: '上海交通大学 人机交互硕士',
    educationEn: 'M.Sc. Human-Computer Interaction, Shanghai Jiao Tong University',
    expertiseZh: ['AI产品设计', '用户体验', '智能文档处理', '语音交互'],
    expertiseEn: ['AI Product Design', 'UX', 'Intelligent Document Processing', 'Voice Interaction'],
    prevZh: '腾讯智慧零售 → 美团AI → 飞凡科技',
    prevEn: 'Tencent Smart Retail → Meituan AI → Feifan Tech',
    linkedin: '#',
    email: 'wangfang@feifan.ai',
  },
  {
    id: 'chenhao',
    avatar: 'C',
    color: '#4A9E7A',
    nameZh: '陈浩',
    nameEn: 'Chen Hao',
    titleZh: '首席算法工程师',
    titleEn: 'Principal Algorithm Engineer',
    bioZh: '陈浩专注文档智能与OCR领域研究，中科院自动化所计算机视觉博士，曾在旷视科技主导工业OCR解决方案，在ICDAR等顶级会议发表论文7篇。主持开发飞凡端到端文档理解模型，识别准确率行业领先。',
    bioEn: 'Chen Hao specializes in document intelligence and OCR. PhD in Computer Vision from CASIA, former lead of industrial OCR at Megvii (Face++). Published 7 papers at top venues including ICDAR. Leads development of Feifan\'s end-to-end document understanding model.',
    educationZh: '中科院自动化研究所 计算机视觉博士',
    educationEn: 'PhD in Computer Vision, CASIA (Institute of Automation, CAS)',
    expertiseZh: ['OCR/文档理解', '目标检测', '场景文字识别', '版面分析'],
    expertiseEn: ['OCR / Document Understanding', 'Object Detection', 'Scene Text Recognition', 'Layout Analysis'],
    prevZh: '旷视科技 Face++ → 飞凡科技',
    prevEn: 'Megvii (Face++) → Feifan Tech',
    github: '#',
    email: 'chenhao@feifan.ai',
  },
  {
    id: 'liuyang',
    avatar: 'U',
    color: '#C47F3A',
    nameZh: '刘洋',
    nameEn: 'Liu Yang',
    titleZh: '语音技术负责人',
    titleEn: 'Head of Speech Technology',
    bioZh: '刘洋在语音识别与合成领域深耕11年，中国科技大学语音信号处理博士，前科大讯飞高级研究员，参与攻关普通话/方言识别核心算法。负责飞凡语音引擎技术架构，在低资源语言和噪声环境识别方面有突破性成果。',
    bioEn: 'Liu Yang has 11 years of deep expertise in speech recognition and synthesis. PhD in Speech Signal Processing from USTC, former Senior Researcher at iFlytek. Led Mandarin/dialect recognition algorithms. Leads Feifan\'s speech engine with breakthroughs in low-resource and noisy-environment ASR.',
    educationZh: '中国科学技术大学 语音信号处理博士',
    educationEn: 'PhD in Speech Signal Processing, University of Science and Technology of China (USTC)',
    expertiseZh: ['语音识别 (ASR)', '语音合成 (TTS)', '方言处理', '声纹识别'],
    expertiseEn: ['ASR (Speech Recognition)', 'TTS (Speech Synthesis)', 'Dialect Processing', 'Speaker Verification'],
    prevZh: '科大讯飞 研究院 → 滴滴出行 AI → 飞凡科技',
    prevEn: 'iFlytek Research → Didi AI Lab → Feifan Tech',
    linkedin: '#',
    email: 'liuyang@feifan.ai',
  },
  {
    id: 'zhaoxin',
    avatar: 'X',
    color: '#B85C35',
    nameZh: '赵鑫',
    nameEn: 'Zhao Xin',
    titleZh: '工程架构总监',
    titleEn: 'Director of Engineering',
    bioZh: '赵鑫拥有15年大规模分布式系统工程经验，前蚂蚁集团高级技术专家，负责金融级AI中台架构设计，系统支撑每天数十亿次推理请求。在飞凡主导AI中间件平台的全面架构升级，实现99.99%高可用。',
    bioEn: 'Zhao Xin brings 15 years of large-scale distributed systems expertise. Former Senior Technical Expert at Ant Group, designed financial-grade AI platform architecture supporting billions of daily inference requests. Leads Feifan\'s AI middleware platform with 99.99% availability.',
    educationZh: '浙江大学 计算机系统结构硕士',
    educationEn: 'M.Sc. Computer Architecture, Zhejiang University',
    expertiseZh: ['分布式系统', 'AI推理优化', '高可用架构', '云原生'],
    expertiseEn: ['Distributed Systems', 'AI Inference Optimization', 'High-Availability Architecture', 'Cloud Native'],
    prevZh: '蚂蚁集团 技术专家 → 华为云 → 飞凡科技',
    prevEn: 'Ant Group Tech Expert → Huawei Cloud → Feifan Tech',
    github: '#',
    email: 'zhaoxin@feifan.ai',
  },
]

function MemberCard({ member, isZh, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-claude-beige rounded-2xl p-6 hover:shadow-warm-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
      onClick={() => onClick(member)}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
          style={{ backgroundColor: member.color }}
        >
          {member.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-claude-dark text-lg">
            {isZh ? member.nameZh : member.nameEn}
          </h3>
          <p className="text-claude-accent text-sm font-medium mt-0.5">
            {isZh ? member.titleZh : member.titleEn}
          </p>
          <p className="text-claude-medium text-xs mt-2 leading-relaxed line-clamp-2">
            {isZh ? member.prevZh : member.prevEn}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {(isZh ? member.expertiseZh : member.expertiseEn).slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full bg-claude-warm border border-claude-beige text-xs text-claude-medium font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-claude-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        {isZh ? '点击查看详情 →' : 'Click to view profile →'}
      </p>
    </motion.div>
  )
}

function MemberModal({ member, isZh, onClose }) {
  if (!member) return null
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
              style={{ backgroundColor: member.color }}
            >
              {member.avatar}
            </div>
            <div>
              <h2 className="text-xl font-bold text-claude-dark">
                {isZh ? member.nameZh : member.nameEn}
              </h2>
              <p className="text-claude-accent font-medium text-sm">
                {isZh ? member.titleZh : member.titleEn}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-claude-medium hover:text-claude-dark hover:bg-claude-warm transition-colors bg-transparent border-0 shadow-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Bio */}
          <p className="text-claude-medium text-sm leading-relaxed">
            {isZh ? member.bioZh : member.bioEn}
          </p>

          {/* Education */}
          <div className="flex items-start gap-3">
            <BookOpen className="w-4 h-4 text-claude-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-claude-dark uppercase tracking-wider mb-0.5">
                {isZh ? '教育背景' : 'Education'}
              </p>
              <p className="text-sm text-claude-medium">
                {isZh ? member.educationZh : member.educationEn}
              </p>
            </div>
          </div>

          {/* Previous */}
          <div className="flex items-start gap-3">
            <Briefcase className="w-4 h-4 text-claude-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-claude-dark uppercase tracking-wider mb-0.5">
                {isZh ? '从业经历' : 'Career Path'}
              </p>
              <p className="text-sm text-claude-medium">
                {isZh ? member.prevZh : member.prevEn}
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div className="flex items-start gap-3">
            <Award className="w-4 h-4 text-claude-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-claude-dark uppercase tracking-wider mb-2">
                {isZh ? '专业领域' : 'Expertise'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(isZh ? member.expertiseZh : member.expertiseEn).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-claude-accent-light text-claude-accent text-xs font-medium border border-claude-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1 border-t border-claude-beige">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-1.5 text-xs text-claude-medium hover:text-claude-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {member.email}
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} className="flex items-center gap-1 text-xs text-claude-medium hover:text-claude-accent transition-colors ml-auto">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            )}
            {member.github && (
              <a href={member.github} className="flex items-center gap-1 text-xs text-claude-medium hover:text-claude-accent transition-colors ml-auto">
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Team() {
  const { t, i18n } = useTranslation('common')
  const isZh = i18n.language.startsWith('zh')
  const [selected, setSelected] = useState(null)

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
              {t('team.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {t('team.title')}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-claude-beige">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '6+', labelZh: '核心成员', labelEn: 'Core Members' },
            { num: '80+', labelZh: '平均行业年限', labelEn: 'Combined Years Exp.' },
            { num: '35+', labelZh: 'AI发明专利', labelEn: 'AI Patents' },
            { num: '5', labelZh: '顶尖大学背景', labelEn: 'Top Universities' },
          ].map((s) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-claude-accent">{s.num}</div>
              <div className="text-sm text-claude-medium mt-1">{isZh ? s.labelZh : s.labelEn}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                isZh={isZh}
                onClick={setSelected}
              />
            ))}
          </div>

          {/* Hiring CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 bg-white border border-claude-beige rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-claude-dark mb-1">{t('team.hiring.title')}</h3>
              <p className="text-claude-medium text-sm">{t('team.hiring.subtitle')}</p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-claude-accent text-white rounded-xl text-sm font-semibold hover:bg-claude-accent-dark transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              {t('team.hiring.button')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Member modal */}
      <AnimatePresence>
        {selected && (
          <MemberModal
            member={selected}
            isZh={isZh}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
