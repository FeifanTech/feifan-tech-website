import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock, Users, Target, ChevronDown, ChevronRight,
  Lightbulb, FileText, Presentation, ShieldCheck, Gift,
  Zap, BookOpen, ArrowRight, Copy, Check, Star
} from 'lucide-react'

/* ─── Prompt copy helper ─────────────────────────────────── */
function PromptCard({ title, prompt }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {
      setCopied(false)
    })
  }
  return (
    <div className="bg-claude-dark rounded-xl overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs font-semibold text-claude-accent uppercase tracking-wider">{title}</span>
        <button
          onClick={handleCopy}
          aria-label={copied ? '已复制' : '复制提示词'}
          className="flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors bg-transparent border-0 shadow-none p-0"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? '已复制' : '复制'}
        </button>
      </div>
      <pre className="p-4 text-sm text-green-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">{prompt}</pre>
    </div>
  )
}

/* ─── Accordion module ───────────────────────────────────── */
function Module({ icon: Icon, index, title, duration, tagline, color, children }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-white border border-claude-beige rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 p-6 text-left bg-transparent border-0 shadow-none hover:bg-claude-warm/40 transition-colors"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color + '22', border: `1.5px solid ${color}44` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-semibold text-claude-muted uppercase tracking-wider">
              模块 {index + 1}
            </span>
            <span className="text-xs text-claude-muted flex items-center gap-1">
              <Clock className="w-3 h-3" />{duration}
            </span>
          </div>
          <h3 className="text-base font-bold text-claude-dark">{title}</h3>
          <p className="text-sm text-claude-medium mt-0.5">{tagline}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-claude-muted flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-claude-beige/60 pt-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── Tool badge ─────────────────────────────────────────── */
function ToolBadge({ name, desc }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-claude-accent-light border border-claude-accent/20 text-xs font-medium text-claude-accent-dark">
      <Zap className="w-3 h-3" />
      {name}
      {desc && <span className="text-claude-medium ml-1 font-normal">{desc}</span>}
    </span>
  )
}

/* ─── Step item ──────────────────────────────────────────── */
function Step({ num, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="w-7 h-7 rounded-lg bg-claude-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
        {num}
      </div>
      <div>
        <p className="font-semibold text-claude-dark text-sm">{title}</p>
        <p className="text-sm text-claude-medium leading-relaxed mt-0.5">{body}</p>
      </div>
    </div>
  )
}

/* ─── Main page ──────────────────────────────────────────── */
export default function Training() {
  const highlights = [
    { icon: Clock, label: '课程时长', value: '3.5 小时', sub: '含互动练习与 Q&A' },
    { icon: Users, label: '适合人群', value: 'PCO / EMC', sub: '策划师、AM、PM 及主创' },
    { icon: Target, label: '学习目标', value: '全流程 AI 提效', sub: '从 Brief 到客户交付' },
    { icon: Star, label: '实操比例', value: '60%', sub: '现场演示 + 即练即用' },
  ]

  return (
    <div className="min-h-screen bg-claude-cream">

      {/* ── Hero ── */}
      <section className="bg-claude-footer text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-claude-accent font-semibold text-sm uppercase tracking-widest mb-4">
              飞凡科技 · AI 能力培训
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
              会展 × AI<br />
              <span className="text-claude-accent">实战提效工作坊</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              专为会议公司（PCO）与活动公司（EMC）打造的 AI 赋能实操课——从客户 Brief 到方案交付，
              全流程拆解如何用 AI 实现 <strong className="text-white">3 倍提速、降本增效</strong>。
              不讲空洞理论，只给你拿来就用的工具和提示词。
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="bg-white/8 border border-white/12 rounded-xl p-4">
                  <h.icon className="w-5 h-5 text-claude-accent mb-2" />
                  <p className="text-xs text-white/50 mb-0.5">{h.label}</p>
                  <p className="text-base font-bold text-white">{h.value}</p>
                  <p className="text-xs text-white/40 mt-0.5">{h.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">

          {/* ── 课程亮点 ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-claude-dark mb-6">课程亮点</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '🔬',
                  title: '全流程拆解',
                  desc: '覆盖筹备→创意→内容→交付四大阶段，每个环节都有对应 AI 工具与提示词。',
                },
                {
                  icon: '⚡',
                  title: '即学即用',
                  desc: '核心提示词（Prompt）现场演示，课后提供《会展专属提示词百宝箱》可直接复制使用。',
                },
                {
                  icon: '🇨🇳',
                  title: '本土化适配',
                  desc: '优先推荐国内可用工具，兼顾数据安全合规，远离"幻觉"与版权踩坑。',
                },
              ].map((c) => (
                <div key={c.title} className="bg-white border border-claude-beige rounded-2xl p-6">
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <h3 className="font-bold text-claude-dark mb-2">{c.title}</h3>
                  <p className="text-sm text-claude-medium leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 课程日程概览 ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-claude-dark mb-6">课程日程概览</h2>
            <div className="bg-white border border-claude-beige rounded-2xl overflow-hidden">
              {[
                { time: '09:00 – 09:20', phase: '破冰导入', desc: '行业现状痛点调研 + AI 效率公式揭秘', tag: '互动' },
                { time: '09:20 – 10:00', phase: '模块一：筹备阶段', desc: '用 AI 解读 Brief、行业洞察、用户画像', tag: '演示+练习' },
                { time: '10:00 – 10:10', phase: '茶歇', desc: '', tag: '' },
                { time: '10:10 – 10:50', phase: '模块二：创意阶段', desc: 'AI 批量生成主题方案 + 视觉方向 Moodboard', tag: '演示+练习' },
                { time: '10:50 – 11:30', phase: '模块三：内容阶段', desc: 'AI 智能排盘议程 + 主持词 + 宣发文案', tag: '演示+练习' },
                { time: '11:30 – 12:00', phase: '模块四：交付阶段', desc: 'AI 辅助提案 PPT + 预算审查隐形漏项', tag: '演示+练习' },
                { time: '12:00 – 12:20', phase: '避坑与提升', desc: '数据安全、幻觉识别、提示词进阶技巧', tag: '讲解' },
                { time: '12:20 – 12:30', phase: '资源包发放 & Q&A', desc: '《会展专属提示词百宝箱》 + 答疑', tag: '互动' },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-6 py-4 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-claude-cream/60'
                  } ${row.phase === '茶歇' ? 'opacity-50' : ''} border-b border-claude-beige last:border-0`}
                >
                  <span className="text-sm font-mono text-claude-muted w-32 flex-shrink-0 pt-0.5">{row.time}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-claude-dark text-sm">{row.phase}</p>
                    {row.desc && <p className="text-sm text-claude-medium mt-0.5">{row.desc}</p>}
                  </div>
                  {row.tag && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-claude-accent-light text-claude-accent font-medium flex-shrink-0">
                      {row.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 详细模块 ── */}
          <h2 className="text-2xl font-bold text-claude-dark mb-6">详细模块内容</h2>
          <div className="space-y-4 mb-14">

            {/* Module 0: 破冰导入 */}
            <Module
              index={0}
              icon={Zap}
              title="破冰导入：传统策划的「时间黑洞」与 AI 赋能公式"
              duration="20 分钟"
              tagline="让学员意识到效率痛点，建立 AI 赋能的心智模型"
              color="#D97757"
            >
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🎯 目标</h4>
                  <p className="text-sm text-claude-medium leading-relaxed">
                    通过互动提问，让学员梳理自己工作中最耗时的环节；揭示 AI 赋能的核心逻辑：
                    <strong className="text-claude-dark"> AI 搞定框架与初稿，人专注审美与客户洞察</strong>。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-claude-dark mb-3">📋 主要内容</h4>
                  <div className="space-y-3">
                    <Step num="1" title="现场调研（5 min）"
                      body="举手投票：你的工作中，哪个环节最耗时？资料搜集 / 主题头脑风暴 / 文案撰写 / PPT 制作 / 预算核对？" />
                    <Step num="2" title="痛点共鸣（5 min）"
                      body="展示真实数据：传统会展策划一份完整提案平均耗时 12-20 小时；引入「时间黑洞」概念。" />
                    <Step num="3" title="AI 赋能公式揭秘（10 min）"
                      body="讲解「提示词工程」基础：角色设定 + 上下文 + 任务指令 + 输出格式 = 高质量 AI 输出。现场演示一个最简单的 Prompt 如何将效率提升 10 倍。" />
                  </div>
                </div>
                <PromptCard
                  title="破冰演示 Prompt · 快速自我介绍生成"
                  prompt={`你是一位资深会展策划顾问，请用100字为我撰写一段专业自我介绍，适合在行业交流活动开场使用。

我的背景：
- 从业年限：[X]年
- 擅长领域：[企业年会/峰会/产品发布/展览]
- 服务过的代表性客户：[填写1-2家]
- 个人特色：[填写你的差异化优势]

要求：语气专业但不失亲切，突出实战经验，结尾留有互动空间。`}
                />
              </div>
            </Module>

            {/* Module 1: 筹备阶段 */}
            <Module
              index={1}
              icon={FileText}
              title="模块一：筹备阶段 — AI 快速解读 Brief 与行业洞察"
              duration="40 分钟"
              tagline="5 分钟读懂陌生行业 Brief，精准画像目标受众"
              color="#4A9E7A"
            >
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🎯 目标</h4>
                  <p className="text-sm text-claude-medium leading-relaxed">
                    接到新客户的 Brief 时，无论是医药、金融还是新能源行业，学员能在 5 分钟内
                    用 AI 完成行业快速入门、竞品分析、目标受众画像，不再从零摸索。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🛠 推荐工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <ToolBadge name="Kimi" desc="超长上下文，粘贴整份 Brief 直接分析" />
                    <ToolBadge name="通义千问" desc="阿里出品，行业知识库丰富" />
                    <ToolBadge name="文心一言" desc="百度生态，中文理解能力强" />
                    <ToolBadge name="Claude" desc="逻辑推理强，适合复杂行业洞察" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-claude-dark mb-3">📋 操作步骤</h4>
                  <div className="space-y-3">
                    <Step num="1" title="喂入 Brief（2 min）"
                      body="将客户原始 Brief 全文粘贴给 AI，附上行业背景说明。Kimi 支持直接上传 PDF。" />
                    <Step num="2" title="行业快速解码（5 min）"
                      body="让 AI 提炼：客户核心诉求、行业现状趋势、目标受众特征、竞品活动案例。" />
                    <Step num="3" title="受众画像生成（8 min）"
                      body="基于解码结果，让 AI 生成 2-3 个参会者人物画像（Persona），含职位、痛点、期望收获。" />
                    <Step num="4" title="学员练习（25 min）"
                      body="每位学员选择一个真实或模拟的 Brief 案例，独立完成上述步骤，讲师点评 2-3 个案例。" />
                  </div>
                </div>

                <PromptCard
                  title="Prompt · 快速解读行业 Brief"
                  prompt={`# 角色
你是一位资深会展策划顾问，同时具备[行业名称]行业的深度认知。

# 任务
请帮我分析以下客户 Brief，并输出结构化的洞察报告。

# 客户 Brief（原文）
[将客户 Brief 全文粘贴在此]

# 请按以下结构输出：

## 1. 客户核心诉求（3条，每条不超过30字）

## 2. 行业背景速览
- 当前行业趋势（2-3点）
- 竞品/同类活动参考（1-2个案例）

## 3. 目标受众分析
- 核心参会群体画像（职位、年龄、关注点）
- 他们期望从本次活动获得什么

## 4. 活动策划风险预警
- 客户 Brief 中可能被忽视的隐性需求
- 建议提前确认的3个关键问题

## 5. 执行建议摘要（一段话，100字以内）`}
                />

                <PromptCard
                  title="Prompt · 生成参会者人物画像"
                  prompt={`基于上述行业洞察，请为本次活动生成3个典型参会者人物画像（Persona）。

每个画像包含：
- 姓名（虚构）、职位、所在城市
- 年龄段与职业背景
- 参加本次活动的核心动机
- 最关心的3个议题关键词
- 最让他/她感到失望的活动体验类型
- 一句话：他/她希望从本次活动带走什么

请用第一人称写出每个画像的内心独白（50字），让策划团队能产生共情。`}
                />
              </div>
            </Module>

            {/* Module 2: 创意阶段 */}
            <Module
              index={2}
              icon={Lightbulb}
              title="模块二：创意阶段 — AI 批量产出主题方案与视觉方向"
              duration="40 分钟"
              tagline="10 分钟生成 10 个主题候选，附完整视觉氛围参考"
              color="#8B5CF6"
            >
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🎯 目标</h4>
                  <p className="text-sm text-claude-medium leading-relaxed">
                    告别「开会头脑风暴三小时，最后用老板第一个想法」的困境。学会用 AI 批量生成
                    差异化主题方案，并用 AI 图像工具快速产出视觉氛围参考（Moodboard）。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🛠 推荐工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <ToolBadge name="Kimi / 通义" desc="主题文案生成" />
                    <ToolBadge name="即梦 AI" desc="字节旗下，国内图像生成首选" />
                    <ToolBadge name="LiblibAI" desc="Stable Diffusion 国内平台" />
                    <ToolBadge name="美图设计室" desc="AI 修图+素材，适合快速出稿" />
                    <ToolBadge name="Canva AI" desc="版式自动生成，Moodboard 友好" />
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                  <strong>⚠️ 注意：</strong>Midjourney 需要科学上网 + 海外信用卡，国内用户推荐优先使用
                  <strong>即梦 AI</strong>（字节跳动出品，中文 Prompt 友好，免费额度充足）。
                </div>
                <div>
                  <h4 className="font-semibold text-claude-dark mb-3">📋 操作步骤</h4>
                  <div className="space-y-3">
                    <Step num="1" title="活动背景输入（3 min）"
                      body="将活动类型、客户行业、受众、预算规模、期望调性（正式/活泼/科技感等）输入 AI。" />
                    <Step num="2" title="批量主题生成（8 min）"
                      body="要求 AI 生成 10 个主题方案，每个包含：主题名称、英文副标题、核心理念（30字）、适合的视觉风格关键词。" />
                    <Step num="3" title="主题深化（8 min）"
                      body="从候选中选 2-3 个，让 AI 深化每个主题：延伸口号、议程框架思路、互动环节创意、现场装置概念。" />
                    <Step num="4" title="Moodboard 生成（6 min）"
                      body="用即梦 AI 输入视觉风格 Prompt，生成 4-6 张氛围参考图，快速组成 Moodboard 页。" />
                    <Step num="5" title="学员练习（15 min）"
                      body="基于模块一的 Brief 案例，独立完成主题生成 → 选优 → Moodboard 全流程。" />
                  </div>
                </div>

                <PromptCard
                  title="Prompt · 批量生成活动主题方案"
                  prompt={`# 活动背景
- 活动类型：[企业年会 / 行业峰会 / 产品发布会 / 展览]
- 客户行业：[行业名称]
- 预计规模：[人数] 人
- 举办城市：[城市]
- 活动调性：[正式专业 / 活泼创意 / 科技感 / 温暖人文]
- 核心诉求：[一句话描述客户最想传达的信息]

# 任务
请为本次活动生成 10 个差异化主题方案，要求：
1. 主题名称（中文4-8字，有记忆点）
2. 英文副标题（便于国际化展示）
3. 核心理念（30字，说明主题背后的逻辑）
4. 视觉风格关键词（3-5个，用于指导设计）
5. 一句话亮点：为什么这个主题能打动参会者？

注意：
- 10个方案要有明显差异，覆盖不同风格方向
- 避免空洞、过时的主题（如「共创未来」「赋能同行」等泛化表达）
- 考虑当下行业热点和参会者真实痛点`}
                />

                <PromptCard
                  title="即梦 AI · 会议空间氛围图 Prompt"
                  prompt={`科技感企业峰会主会场，蓝紫色渐变灯光，极简主义舞台设计，
LED 背景屏显示抽象数字纹理，前排圆形沙发区，
高端商务氛围，俯视视角，超宽画幅，真实摄影质感

（提示：在即梦AI中选择「真实感」或「摄影」风格，
宽高比选 16:9 或 21:9 适合幻灯片展示）`}
                />
              </div>
            </Module>

            {/* Module 3: 内容阶段 */}
            <Module
              index={3}
              icon={BookOpen}
              title="模块三：内容阶段 — AI 智能排盘议程与文案创作"
              duration="40 分钟"
              tagline="告别熬夜排议程，一键生成主持词与全套宣发内容"
              color="#0EA5E9"
            >
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🎯 目标</h4>
                  <p className="text-sm text-claude-medium leading-relaxed">
                    掌握用 AI 完成多天议程智能排盘、生成主持词逐字稿、批量产出
                    社交媒体宣发文案（朋友圈 / 微博 / 微信公众号）的完整工作流。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🛠 推荐工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <ToolBadge name="Kimi" desc="长文本处理，议程排盘首选" />
                    <ToolBadge name="通义千问" desc="文案写作质量高" />
                    <ToolBadge name="讯飞星火" desc="语音转写+文案，配合演讲稿使用" />
                    <ToolBadge name="WPS AI" desc="直接在 Office 环境中生成" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-claude-dark mb-3">📋 操作步骤</h4>
                  <div className="space-y-3">
                    <Step num="1" title="议程框架输入（5 min）"
                      body="提供：活动天数、每天总时长、嘉宾数量与职级、必选环节（开幕式/颁奖/晚宴等）、期望节奏（紧凑/舒缓）。" />
                    <Step num="2" title="AI 智能排盘（10 min）"
                      body="让 AI 输出分时议程表，自动考虑：茶歇分布、嘉宾演讲时长梯度、互动环节节奏、用餐过渡。" />
                    <Step num="3" title="主持词生成（10 min）"
                      body="选取议程中 2 个关键环节，让 AI 生成带时间提示的主持词逐字稿，包含开场白、嘉宾介绍、互动串词。" />
                    <Step num="4" title="宣发文案矩阵（10 min）"
                      body="一次输入活动信息，批量生成：倒计时朋友圈文案 × 3、微信公众号预热文章摘要、嘉宾预告海报文案。" />
                    <Step num="5" title="学员练习（5 min）"
                      body="快速实操：为自己的案例生成一段主持词开场白。" />
                  </div>
                </div>

                <PromptCard
                  title="Prompt · 多天峰会议程智能排盘"
                  prompt={`# 活动信息
- 活动名称：[活动名称]
- 举办时间：[X]天，每天 [开始时间] - [结束时间]
- 场地：[城市，酒店/展馆]
- 预计参会人数：[人数]

# 议程要素
必选环节：
- 开幕式（含领导致辞）
- 主旨演讲嘉宾：[数量]位，每位约[分钟]
- 圆桌对话/Panel：[数量]场
- 展览/Demo 区参观
- 颁奖典礼（如有）
- 午餐/晚宴

# 请输出：

## 完整议程表（按天分拆，精确到分钟）
格式：| 时间 | 环节名称 | 形式 | 备注 |

## 节奏优化说明
- 为什么这样安排茶歇时间
- 高能环节与放松环节如何交替
- 哪些环节建议做视频直播

## 主持人换场口播（每个环节衔接处，2-3句引导词）`}
                />

                <PromptCard
                  title="Prompt · 批量生成宣发文案矩阵"
                  prompt={`# 活动基本信息
活动名称：[名称]
时间：[日期]
地点：[城市·场地]
主题：[主题]
亮点嘉宾：[2-3位关键嘉宾姓名+职位]
参会对象：[目标群体描述]
报名方式：[链接或联系方式]

# 请生成以下宣发内容：

## 1. 朋友圈倒计时文案 × 3条
- 30天倒计时（神秘感，引发期待）
- 7天倒计时（嘉宾阵容预告）
- 1天倒计时（最后冲刺，营造紧迫感）
每条：50-80字，含1-2个emoji，结尾加上报名入口提示

## 2. 微信公众号预热标题 × 5个
（吸引点击，带数字或悬念）

## 3. 嘉宾预告海报文案
格式：嘉宾姓名 | 职位 | 一句话演讲预告（20字以内，高度概括演讲价值）
（为每位主要嘉宾生成）`}
                />
              </div>
            </Module>

            {/* Module 4: 交付阶段 */}
            <Module
              index={4}
              icon={Presentation}
              title="模块四：交付阶段 — AI 辅助提案 PPT 与预算审查"
              duration="30 分钟"
              tagline="3 分钟生成 PPT 初稿，AI 排查预算隐形漏项"
              color="#F59E0B"
            >
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🎯 目标</h4>
                  <p className="text-sm text-claude-medium leading-relaxed">
                    学会用 AI 快速搭建提案 PPT 结构框架，并利用 AI 对预算表进行智能审核，
                    主动发现遗漏项和报价风险，避免事后追加预算损伤客户关系。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-claude-dark mb-2">🛠 推荐工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <ToolBadge name="讯飞智文" desc="国内 AI PPT，中文效果最佳" />
                    <ToolBadge name="WPS AI" desc="一键生成 PPT，无需安装" />
                    <ToolBadge name="Kimi" desc="粘贴大纲直接输出 PPT Markdown" />
                    <ToolBadge name="Gamma" desc="海外工具，需 VPN，设计感强" />
                    <ToolBadge name="ChatExcel" desc="AI 智能表格分析，预算审查" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-claude-dark mb-3">📋 操作步骤</h4>
                  <div className="space-y-3">
                    <Step num="1" title="提案大纲输入讯飞智文（5 min）"
                      body="输入：活动主题、核心方案要点、执行亮点、预算概览。AI 自动生成带版式的 PPT 初稿（通常 15-20 页）。" />
                    <Step num="2" title="PPT 结构优化（8 min）"
                      body="AI 生成的初稿用于框架参考，重点检查逻辑顺序：客户痛点→我们的解决方案→执行亮点→团队实力→报价。" />
                    <Step num="3" title="预算 AI 审查（12 min）"
                      body="将预算表上传 Kimi 或 ChatExcel，让 AI 逐项审查：是否遗漏常见费用项、报价是否在市场合理区间、风险备用金是否充足。" />
                    <Step num="4" title="最终提案润色（5 min）"
                      body="用 AI 生成「执行摘要」（Executive Summary）和「为什么选我们」核心卖点段落。" />
                  </div>
                </div>

                <PromptCard
                  title="Prompt · 会展提案 PPT 大纲生成"
                  prompt={`请为以下活动项目生成一份完整的提案 PPT 大纲。

# 项目信息
- 活动名称：[名称]
- 客户公司：[公司名]
- 活动类型：[类型]
- 活动规模：[人数、天数]
- 我们的核心方案亮点：[3点核心优势]

# PPT 结构要求（15-18页）

请按以下顺序生成每页的：
① 页面标题
② 核心内容要点（3-5条，每条15字以内）
③ 建议使用的图表/视觉元素类型

必须包含的章节：
1. 封面（含主题与执行团队）
2. 理解客户（活动背景与核心诉求）
3. 我们的洞察（行业趋势+受众分析）
4. 主题方案（含主视觉方向）
5. 执行亮点（3大差异化亮点）
6. 完整执行流程
7. 团队实力与过往案例
8. 项目时间线
9. 预算概览
10. 结语与下一步行动`}
                />

                <PromptCard
                  title="Prompt · AI 预算审查与漏项排查"
                  prompt={`# 角色
你是一位有10年经验的会展项目经理，熟悉各类活动的成本结构。

# 任务
请审查以下活动预算表，找出潜在问题和遗漏项。

# 活动基本信息
- 活动类型：[类型]
- 规模：[人数]人，[天数]天
- 举办城市：[城市]
- 总预算：[金额]万元

# 我的预算清单
[将你的预算表内容粘贴在此，或列出各费用项]

# 请输出：

## 1. 预算健康评估（整体评价，100字以内）

## 2. 疑似遗漏项（按重要程度排列）
| 费用项 | 预估金额 | 遗漏风险等级 | 备注 |

## 3. 报价风险提示
- 哪些项目报价可能偏低？
- 哪些项目建议增加备用金（%）？

## 4. 行业经验提醒
- 该类活动常见的「隐性费用」清单（如overtime、物料损耗、应急备用等）

## 5. 优化建议（3条）`}
                />
              </div>
            </Module>

            {/* Module 5: 避坑与提升 */}
            <Module
              index={5}
              icon={ShieldCheck}
              title="避坑与提升 — 数据安全、AI 幻觉与提示词进阶"
              duration="20 分钟"
              tagline="用好 AI 的前提：知道它的边界在哪里"
              color="#EF4444"
            >
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-claude-dark mb-3">⚠️ 三大必须注意的风险</h4>
                  <div className="space-y-4">
                    <div className="border border-red-200 bg-red-50 rounded-xl p-4">
                      <h5 className="font-semibold text-red-800 mb-1">🔒 数据安全与保密</h5>
                      <ul className="text-sm text-red-700 space-y-1.5 list-disc list-inside">
                        <li>客户未公开信息（预算金额、嘉宾名单、商业计划）<strong>禁止</strong>直接输入公共 AI 平台</li>
                        <li>敏感内容脱敏处理后再输入：将公司名替换为「A公司」，将真实金额替换为「X万元」</li>
                        <li>如需处理大量机密数据，考虑使用企业版 AI（如企业微信 AI、钉钉 AI 助手）或本地部署方案</li>
                        <li>输出内容需经人工审核后才能发送给客户</li>
                      </ul>
                    </div>
                    <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
                      <h5 className="font-semibold text-amber-800 mb-1">🌀 AI 幻觉（Hallucination）识别</h5>
                      <ul className="text-sm text-amber-700 space-y-1.5 list-disc list-inside">
                        <li>AI 可能「自信地编造」不存在的嘉宾履历、虚假案例数据、错误行业统计数字</li>
                        <li>黄金法则：<strong>所有涉及具体数字、人名、公司名的内容必须人工核实</strong></li>
                        <li>提示词技巧：在 Prompt 末尾加上「如有不确定，请注明『需核实』」</li>
                        <li>让 AI 生成「框架和逻辑」，具体事实由人来填充</li>
                      </ul>
                    </div>
                    <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">
                      <h5 className="font-semibold text-blue-800 mb-1">©️ 版权与原创性风险</h5>
                      <ul className="text-sm text-blue-700 space-y-1.5 list-disc list-inside">
                        <li>AI 生成的图片、文案在部分场景下存在版权争议，商业使用前需了解平台规则</li>
                        <li>AI 文案可能与其他项目高度相似，提交前建议做查重检测（如内容识别工具）</li>
                        <li>用 AI 做「创作助手」而非「复制机器」：在 AI 输出基础上加入自己的专业判断和客户个性化内容</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-claude-dark mb-3">🚀 提示词进阶技巧</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { tip: '角色赋予', desc: '让 AI 扮演特定专家角色，输出质量显著提升。如「你是资深 PCO」比「帮我写」效果好 3-5 倍。' },
                      { tip: '示例教学', desc: '在 Prompt 中加入 1-2 个好的输出示例（Few-shot），AI 会学习你的风格和格式。' },
                      { tip: '分步拆解', desc: '复杂任务不要一次要求，而是分「步骤一、步骤二」逐步完成，质量更高。' },
                      { tip: '迭代优化', desc: '第一次输出不满意？直接回复「继续优化第X点，加入Y元素」，比重新开始更高效。' },
                      { tip: '格式锁定', desc: '明确要求输出格式（表格/列表/段落/JSON），减少 AI 自由发挥导致的格式混乱。' },
                      { tip: '中文 Prompt', desc: '对于中文场景，直接用中文写 Prompt 效果比英文翻译好，更贴近本土化表达。' },
                    ].map((item) => (
                      <div key={item.tip} className="bg-white border border-claude-beige rounded-xl p-4">
                        <p className="font-semibold text-claude-dark text-sm mb-1">💡 {item.tip}</p>
                        <p className="text-sm text-claude-medium leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Module>

          </div>

          {/* ── 提示词百宝箱 ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-6 h-6 text-claude-accent" />
              <h2 className="text-2xl font-bold text-claude-dark">会展专属提示词百宝箱</h2>
            </div>
            <p className="text-claude-medium mb-6 text-sm leading-relaxed">
              以下是课程配套的快速参考提示词，覆盖日常高频场景。复制后根据实际项目填入方括号内容即可使用。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '📧',
                  scene: '客户邮件润色',
                  prompt: '请将以下邮件润色为专业、简洁的商务风格，保留原有信息，删除废话，语气礼貌但有执行力。\n\n[粘贴原始邮件]',
                },
                {
                  icon: '📝',
                  scene: '活动执行方案摘要',
                  prompt: '请将以下执行方案提炼为300字以内的执行摘要，适合发给客户高层审阅，突出3个核心执行亮点。\n\n[粘贴方案内容]',
                },
                {
                  icon: '🎤',
                  scene: '嘉宾介绍词',
                  prompt: '为以下嘉宾撰写60秒主持人介绍词，语气热情专业，避免照本宣科。\n\n嘉宾姓名：[]\n职位：[]\n核心成就：[]\n本次演讲主题：[]',
                },
                {
                  icon: '📱',
                  scene: '朋友圈文案',
                  prompt: '为以下活动撰写朋友圈宣发文案，要求：80字以内，有情绪感染力，含2个相关emoji，结尾引导扫码/点击。\n\n活动信息：[简述]',
                },
                {
                  icon: '🔍',
                  scene: '竞品活动分析',
                  prompt: '请分析[竞品公司名]近期举办的[活动名称]，从：活动定位、亮点环节、视觉风格、受众群体、可借鉴之处 5个维度进行结构化点评。',
                },
                {
                  icon: '💰',
                  scene: '价格谈判话术',
                  prompt: '客户要求我们降价[X]%，但我方利润空间有限。请帮我生成一段专业的价格谈判话术，既维护客户关系，又守住底线，并给出2个替代降价的让步方案。',
                },
              ].map((item) => (
                <div key={item.scene} className="bg-white border border-claude-beige rounded-xl overflow-hidden">
                  <div className="px-5 py-4 border-b border-claude-beige flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-semibold text-claude-dark text-sm">{item.scene}</span>
                  </div>
                  <div className="bg-claude-dark p-4">
                    <pre className="text-xs text-green-300 font-mono whitespace-pre-wrap leading-relaxed">{item.prompt}</pre>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 推荐 AI 工具矩阵 ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-2xl font-bold text-claude-dark mb-6">推荐 AI 工具矩阵（国内可用）</h2>
            <div className="bg-white border border-claude-beige rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-claude-warm border-b border-claude-beige">
                    <th className="text-left px-5 py-3 font-semibold text-claude-dark">使用场景</th>
                    <th className="text-left px-5 py-3 font-semibold text-claude-dark">首选工具</th>
                    <th className="text-left px-5 py-3 font-semibold text-claude-dark">备选工具</th>
                    <th className="text-left px-5 py-3 font-semibold text-claude-dark">免费额度</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scene: '长文档分析 / Brief 解读', first: 'Kimi', alt: '通义千问', free: '✅ 充足' },
                    { scene: '创意文案 / 主题生成', first: '通义千问', alt: '文心一言', free: '✅ 充足' },
                    { scene: '议程排盘 / 结构规划', first: 'Kimi', alt: 'Claude（需 VPN）', free: '✅ / 有限' },
                    { scene: 'AI 图像 / Moodboard', first: '即梦 AI', alt: 'LiblibAI', free: '✅ 每日免费' },
                    { scene: 'PPT 生成', first: '讯飞智文', alt: 'WPS AI', free: '✅ / 有限' },
                    { scene: '预算表智能分析', first: 'ChatExcel', alt: 'Kimi 上传 Excel', free: '✅ 有限' },
                    { scene: '主持词 / 演讲稿', first: '讯飞星火', alt: '通义千问', free: '✅ 充足' },
                    { scene: '社交媒体文案', first: '文心一言', alt: 'Kimi', free: '✅ 充足' },
                    { scene: '实时语音转写', first: '讯飞听见', alt: '腾讯会议 AI 转写', free: '⚡ 有限' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-claude-beige last:border-0 ${i % 2 === 0 ? '' : 'bg-claude-cream/50'}`}>
                      <td className="px-5 py-3 text-claude-dark font-medium">{row.scene}</td>
                      <td className="px-5 py-3">
                        <span className="font-semibold text-claude-accent">{row.first}</span>
                      </td>
                      <td className="px-5 py-3 text-claude-medium">{row.alt}</td>
                      <td className="px-5 py-3 text-claude-medium">{row.free}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-claude-footer rounded-2xl p-10 text-center text-white"
          >
            <Gift className="w-12 h-12 text-claude-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">想把这套 AI 工作流用到你的项目中？</h3>
            <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
              飞凡科技提供面向会展机构的 AI 定制化培训与落地咨询服务，
              帮助团队从「知道 AI」到「用好 AI」，打造可复制的高效工作流。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-claude-accent text-white rounded-xl text-sm font-semibold hover:bg-claude-accent-dark transition-all hover:scale-[1.02]"
              >
                预约定制培训
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                了解 AI 咨询服务
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
