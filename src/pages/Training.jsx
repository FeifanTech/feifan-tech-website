import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BookOpen, Users, ArrowRight, ChevronRight,
  Lightbulb, Zap, Star, Award, Building2, Bot
} from 'lucide-react'

/* ─── Course Card ─────────────────────────────────────────── */
function CourseCard({ num, badge, badgeColor, title, desc, tags, href, linkText, linkColor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-white border border-claude-beige rounded-2xl p-6 flex flex-col"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold mb-4 flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${badgeColor[0]}, ${badgeColor[1]})` }}
      >
        {num}
      </div>
      <div className="mb-3">
        <span
          className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
          style={{ background: badgeColor[0] + '18', color: badgeColor[0] }}
        >
          {badge}
        </span>
        <h3 className="text-base font-bold text-claude-dark leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-claude-medium leading-relaxed flex-1 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map(t => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-claude-warm border border-claude-beige text-claude-medium">{t}</span>
        ))}
      </div>
      <a
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
        style={{ color: linkColor }}
      >
        {linkText} <ChevronRight className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  )
}

/* ─── Section Header ──────────────────────────────────────── */
function SectionHeader({ icon: Icon, iconBg, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
        style={{ background: iconBg }}
      >
        <Icon className="w-4.5 h-4.5" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-claude-dark">{title}</h2>
        {subtitle && <p className="text-sm text-claude-muted mt-0.5">{subtitle}</p>}
      </div>
    </div>
  )
}

/* ─── Main Hub Page ───────────────────────────────────────── */
export default function Training() {
  const coreCourses = [
    {
      num: '01',
      badge: '基础认知 · 2.5h',
      badgeColor: ['#3182CE', '#2563EB'],
      title: '重新认识 AI——从"试一试"到"真的能用"',
      desc: '打破心理障碍，建立正确的 AI 认知模型。理解大模型工作原理，掌握主流工具对比，完成第一个有价值的 AI 辅助任务。',
      tags: ['认知重构', '工具对比', 'ABC 框架', '有效对话'],
      href: '/training/',
      linkText: '进入第一期',
      linkColor: '#3182CE',
    },
    {
      num: '02',
      badge: '进阶实操 · 2.5h',
      badgeColor: ['#38A169', '#059669'],
      title: '提示词工程 + AI Coding 实战——让 AI 成为开发搭档',
      desc: '掌握系统化提示词设计方法，在代码开发全链路（生成/Review/测试/重构/运维）中大幅提升效率，实现开发提速 3x。',
      tags: ['6 种技法', 'AI Coding', 'Code Review', '测试生成'],
      href: '/training/session2.html',
      linkText: '进入第二期',
      linkColor: '#38A169',
    },
    {
      num: '03',
      badge: '系统化 · 2.5h',
      badgeColor: ['#805AD5', '#6D28D9'],
      title: 'RAG + AI 工作流 + Skills 机制——从单点到系统化',
      desc: '理解 RAG 核心价值，用 Dify 搭建知识库应用；掌握 Skills 机制；设计并实现完整 AI 自动化工作流。',
      tags: ['知识库 RAG', 'Skills 机制', '工作流设计', 'Dify 实操'],
      href: '/training/session3.html',
      linkText: '进入第三期',
      linkColor: '#805AD5',
    },
    {
      num: '04',
      badge: 'AI Native · 2.5h',
      badgeColor: ['#E53E3E', '#DC2626'],
      title: 'MCP + AI Native + 售前专题——AI 优先的最终形态',
      desc: '理解 MCP 协议让 AI「长出手脚」；建立 AI Native 工作理念；通过完整售前方案案例，掌握 AI 辅助复杂输出的全流程。',
      tags: ['MCP 协议', 'AI Native', '售前方案', '行动计划'],
      href: '/training/session4.html',
      linkText: '进入第四期',
      linkColor: '#E53E3E',
    },
  ]

  const industryCourses = [
    {
      num: '🏢',
      badge: '行业培训 · 3.5h',
      badgeColor: ['#D97757', '#C05621'],
      title: '会议 × AI 实战提效工作坊——PCO / EMC 专项',
      desc: '专为会议公司（PCO）与活动公司（EMC）打造的 AI 赋能实操课——从客户 Brief 到方案交付，全流程拆解如何用 AI 实现 3 倍提速、降本增效。',
      tags: ['Brief 解读', '创意主题', '议程排盘', '提案 PPT'],
      href: '/training/ai-for-mice/',
      linkText: '进入会议行业 AI 培训',
      linkColor: '#D97757',
    },
    {
      num: '🏫',
      badge: '行业培训 · 全天',
      badgeColor: ['#059669', '#047857'],
      title: 'AI 赋能中小学教师深度实践培训——备课 × 批改 × 班管 × 教研',
      desc: '面向中小学全科教师的 AI 实战培训，涵盖 AI 辅助备课、作业批改、学生评价、班级管理等六大核心教学场景，60+ 即学即用的 Prompt 模板。',
      tags: ['备课设计', '作业批改', '班级管理', '教研论文'],
      href: '/training/ai-for-teachers/',
      linkText: '进入中小学教师 AI 培训',
      linkColor: '#059669',
    },
    {
      num: '🎮',
      badge: '行业培训 · 全天',
      badgeColor: ['#7C3AED', '#5B21B6'],
      title: 'AI × 游戏开发实战培训——创意设计 × 智能NPC × 美术资产',
      desc: '面向游戏策划、开发工程师和美术设计师的 AI 实战培训，涵盖 AI 驱动的游戏创意、关卡策划、美术资产生产、智能NPC行为设计等六大核心模块。',
      tags: ['创意策划', '智能NPC', '美术生产', '自动化测试'],
      href: '/training/ai-for-games/',
      linkText: '进入 AI×游戏开发培训',
      linkColor: '#7C3AED',
    },
    {
      num: '🎬',
      badge: '行业培训 · 全天',
      badgeColor: ['#D97706', '#B45309'],
      title: 'AI 短剧制作实战培训——剧本 × 视觉 × 配音 × 后期',
      desc: '面向短视频内容创作者和影视从业者的 AI 实战课程，从 AI 剧本创作、分镜设计到视觉素材生成、配音配乐、后期合成，一站式掌握 AI 短剧制作流程。',
      tags: ['剧本创作', '视觉生成', 'AI 配音', '后期合成'],
      href: '/training/ai-short-drama/',
      linkText: '进入 AI 短剧制作培训',
      linkColor: '#D97706',
    },
  ]

  const agentCourses = [
    {
      num: '🧩',
      badge: 'Agent 开发 · Dify',
      badgeColor: ['#4F46E5', '#4338CA'],
      title: 'Dify 工作流平台实战培训——像搭积木一样构建 AI 应用',
      desc: '面向无编程基础的业务人员，通过乐高积木类比、可视化图解和实战案例，快速掌握 Dify 工作流平台，独立搭建知识库问答系统和文档分析自动化流程。',
      tags: ['工作流设计', '知识库 RAG', 'LLM 节点', '零代码'],
      href: '/training/agent-dev/dify/',
      linkText: '进入 Dify 工作流培训',
      linkColor: '#4F46E5',
    },
    {
      num: '🤖',
      badge: 'Agent 开发 · RPA',
      badgeColor: ['#D97706', '#B45309'],
      title: '影刀 RPA 自动化实战培训——让机器人替你干重复的活儿',
      desc: '零门槛 RPA 实战课，通过「数字机器人员工」类比和录制即用方法，快速掌握自动数据录入、定时报表生成、网页自动化等核心场景，时间节省 80% 以上。',
      tags: ['录制自动化', 'Excel 处理', '定时调度', '异常处理'],
      href: '/training/agent-dev/rpa/',
      linkText: '进入 RPA 自动化培训',
      linkColor: '#D97706',
    },
  ]

  const advancedCourses = [
    {
      num: 'PM',
      badge: '角色进阶',
      badgeColor: ['#E07A5F', '#C85A3E'],
      title: 'AI 办公进阶培训——产品经理 × 测试工程师',
      desc: '面向产品经理和测试工程师的专项进阶课程，深入学习 AI 在需求分析、产品设计、测试用例生成等场景中的高效应用。',
      tags: ['需求分析', '测试设计', '角色专项'],
      href: '/training-advanced/',
      linkText: '进入 PM×QA 进阶课程',
      linkColor: '#E07A5F',
    },
    {
      num: 'Dev',
      badge: '工程进阶',
      badgeColor: ['#6D28D9', '#4C1D95'],
      title: 'AI 工程进阶培训 v2.0——架构师 × 开发工程师',
      desc: '面向架构师和开发工程师的深度进阶课程，涵盖 AI 驱动的架构设计、高级 AI Coding 实战、系统级 AI 应用开发等核心能力。',
      tags: ['架构设计', '高级 Coding', '系统级应用'],
      href: '/training-advanced-for-dev/',
      linkText: '进入工程师进阶课程',
      linkColor: '#6D28D9',
    },
    {
      num: 'Algo',
      badge: '算法专项',
      badgeColor: ['#2C7A7B', '#1F5F60'],
      title: '算法与 AI 协同开发培训——业务场景 × 算法选型 × AI 加速',
      desc: '面向全体工程师的算法实战课程，覆盖销量预测、商品推荐、购买意愿分析等真实业务场景。',
      tags: ['算法选型', 'AI 协同', '业务案例'],
      href: '/training/algorithm-ai/',
      linkText: '进入算法培训课程',
      linkColor: '#2C7A7B',
    },
    {
      num: 'PM',
      badge: '交付专项',
      badgeColor: ['#38A169', '#276749'],
      title: 'AI 驱动的项目交付卓越培训——项目经理 × 交付专家',
      desc: '专为项目经理和交付专家设计，涵盖 AI 驱动的项目规划、产研协同、客户沟通、风险识别与消除六大模块，50+ Prompt 模板。',
      tags: ['项目规划', '风险管理', '客户沟通'],
      href: '/training-pm-delivery/',
      linkText: '进入项目交付培训',
      linkColor: '#38A169',
    },
    {
      num: 'AI',
      badge: '协作专项',
      badgeColor: ['#4F46E5', '#3730A3'],
      title: 'AI 协作技巧培训——提问 × 总结 × 引导 × 迭代',
      desc: '系统化提升 AI 协作能力的六模块课程，涵盖 RACE 提问框架、总结的艺术、CoT 引导、STAR 反馈迭代、场景化实战和持续精进方法论。',
      tags: ['RACE 框架', 'CoT 引导', 'STAR 迭代'],
      href: '/training/ai-collaboration/',
      linkText: '进入 AI 协作培训',
      linkColor: '#4F46E5',
    },
    {
      num: 'CXO',
      badge: '战略领导力',
      badgeColor: ['#1B365D', '#0F1B2D'],
      title: 'AI 战略落地领导力课程——战略规划 × 项目治理 × 场景落地',
      desc: '面向 CXO/总监级管理层的 AI 战略课程，涵盖 AI 落地优先级评估、ROI 测算、项目治理、风险管控与企业 AI 路线图设计。',
      tags: ['战略规划', '项目治理', '路线图'],
      href: '/training-ai-leadership/',
      linkText: '进入 AI 战略领导力课程',
      linkColor: '#1B365D',
    },
  ]

  return (
    <div className="min-h-screen bg-claude-cream">

      {/* ── Hero ── */}
      <section className="bg-claude-footer text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-claude-accent font-semibold text-sm uppercase tracking-widest mb-4">
              飞凡科技 · AI 培训体系
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
              从入门到精通<br />
              <span className="text-claude-accent">全场景 AI 培训课程</span>
            </h1>
            <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-10">
              覆盖软件工程师、产品经理、管理层、教师、会议行业等多种角色，
              提供从通识入门到行业深潜的完整 AI 培训体系。
              不讲空洞理论，每期都有可带走的真实产出物。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: BookOpen, label: '课程数量', value: '10+', sub: '覆盖多种角色' },
                { icon: Users, label: '适合人群', value: '全员', sub: '技术 / 业务 / 管理' },
                { icon: Zap, label: '实操比例', value: '60%', sub: '即学即用' },
                { icon: Star, label: '行业专项', value: '4 个', sub: '会议·教育·游戏·影视' },
              ].map((h) => (
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
        <div className="max-w-5xl mx-auto space-y-14">

          {/* ── 核心课程 ── */}
          <div>
            <SectionHeader
              icon={Zap}
              iconBg="#3182CE"
              title="AI 办公实战培训（核心四期）"
              subtitle="面向软件工程师和技术团队，四期递进式课程，总计 10 小时"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {coreCourses.map((c, i) => (
                <CourseCard key={c.num} {...c} index={i} />
              ))}
            </div>
            <div className="mt-4 p-4 bg-white border border-claude-beige rounded-xl flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-claude-accent flex-shrink-0" />
              <p className="text-sm text-claude-medium">
                查看完整课程总览（含产出物汇总、工具清单、进阶路径）：
                <a href="/training/" className="text-claude-accent font-semibold hover:text-claude-accent-dark ml-1">
                  AI 办公实战培训总览 →
                </a>
              </p>
            </div>
          </div>

          {/* ── 行业专项 ── */}
          <div>
            <SectionHeader
              icon={Building2}
              iconBg="#D97757"
              title="行业专项培训"
              subtitle="面向不同行业从业者的 AI 实战应用课程"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {industryCourses.map((c, i) => (
                <CourseCard key={c.href} {...c} index={i} />
              ))}
            </div>
          </div>

          {/* ── Agent 开发专项 ── */}
          <div>
            <SectionHeader
              icon={Bot}
              iconBg="#4F46E5"
              title="Agent 开发专项培训"
              subtitle="Dify 工作流 × RPA 自动化——零门槛快速掌握 Agent 项目开发"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {agentCourses.map((c, i) => (
                <CourseCard key={c.href} {...c} index={i} />
              ))}
            </div>
            <div className="mt-4 p-4 bg-white border border-claude-beige rounded-xl flex items-center gap-3">
              <Bot className="w-5 h-5 text-[#4F46E5] flex-shrink-0" />
              <p className="text-sm text-claude-medium">
                两个平台结合使用，可打造完整 Agent 解决方案。查看总览与平台对比：
                <a href="/training/agent-dev/" className="text-[#4F46E5] font-semibold hover:text-[#4338CA] ml-1">
                  Agent 开发培训总览 →
                </a>
              </p>
            </div>
          </div>

          {/* ── 进阶课程 ── */}
          <div>
            <SectionHeader
              icon={Award}
              iconBg="#6D28D9"
              title="进阶专项培训"
              subtitle="面向不同职能角色的深度进阶课程"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advancedCourses.map((c, i) => (
                <CourseCard key={c.href} {...c} index={i} />
              ))}
            </div>
          </div>

          {/* ── 参考资料 ── */}
          <div>
            <SectionHeader
              icon={Lightbulb}
              iconBg="#0891B2"
              title="参考资料"
              subtitle="辅助学习的配套资源"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.a
                href="/training/ai-glossary/"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-claude-beige rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0891B2, #0E7490)' }}>📖</div>
                <div>
                  <h3 className="font-bold text-claude-dark mb-1">AI 工程术语总表</h3>
                  <p className="text-sm text-claude-medium leading-relaxed">将 Tools Use、MCP、Skills 等 AI 新概念与软件工程经典概念做可视化映射，帮助学员快速建立直觉理解。</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0891B2] mt-2">查看术语总表 <ChevronRight className="w-3.5 h-3.5" /></span>
                </div>
              </motion.a>
              <motion.a
                href="/training/brainstorm-openclaw-cli/"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-claude-beige rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #E07A5F, #C85A3E)' }}>💡</div>
                <div>
                  <h3 className="font-bold text-claude-dark mb-1">OpenClaw × AI CLI 集成头脑风暴</h3>
                  <p className="text-sm text-claude-medium leading-relaxed">AI 工具链集成的可视化探索，展示如何将 AI 能力嵌入命令行开发工作流。</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#E07A5F] mt-2">查看头脑风暴图 <ChevronRight className="w-3.5 h-3.5" /></span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-claude-footer rounded-2xl p-10 text-center text-white"
          >
            <Award className="w-12 h-12 text-claude-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">为你的团队定制专属培训</h3>
            <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
              飞凡科技提供面向各类机构的 AI 定制化培训与落地咨询服务，
              帮助团队从「知道 AI」到「用好 AI」，打造可复制的高效工作流。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-claude-accent text-white rounded-xl text-sm font-semibold hover:bg-claude-accent-dark transition-all hover:scale-[1.02]"
              >
                预约定制培训
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                了解 AI 咨询服务
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
