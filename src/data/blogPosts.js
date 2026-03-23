// Static blog data shared between Blog.jsx and BlogPost.jsx
export const POSTS = [
  {
    slug: 'llm-enterprise-practice-2024',
    category: 'AI',
    categoryColor: '#D97757',
    date: '2024-11-15',
    readTimeZh: '8 分钟',
    readTimeEn: '8 min read',
    authorZh: '李玉锋',
    authorEn: 'Li Yufeng',
    authorTitleZh: '联合创始人 & 首席执行官',
    authorTitleEn: 'Co-Founder & CEO',
    authorAvatar: 'LY',
    authorColor: '#D97757',
    titleZh: '大型语言模型在企业场景的落地实践',
    titleEn: 'LLMs in the Enterprise: From Pilot to Production',
    excerptZh: '企业AI落地难，不是技术难——是工程难。本文分享飞凡团队在服务50+企业客户过程中总结的LLM落地方法论，从数据飞轮到幻觉治理，系统性解决真实场景下的核心挑战。',
    excerptEn: 'Enterprise AI adoption is hard — not because of technology, but because of engineering. We share Feifan\'s methodology built across 50+ enterprise deployments, from data flywheels to hallucination governance.',
    tagsZh: ['大语言模型', '企业AI', '落地实践', 'RAG'],
    tagsEn: ['LLM', 'Enterprise AI', 'Production', 'RAG'],
    contentZh: `## 一、从 PoC 到生产：最难的不是模型

过去两年，我们服务了超过 50 家企业客户完成 AI 落地，深刻体会到一个规律：**大多数 AI 项目死在从 PoC 到生产的这段距离**。

投入不小，GPT-4 跑了个 Demo，准确率 90%，老板点头，预算批了。半年后，系统上线，准确率跌到 72%，用户投诉，项目告急。

这不是极端案例——在我们接触的项目里，这是**超过 60% 企业的真实遭遇**。

---

## 二、核心挑战拆解

### 1. 数据漂移（Data Drift）

生产环境的数据与开发阶段的测试集永远不同。企业文档会更新，行业术语在演变，用户的提问方式也在变化。如果没有持续的数据监控和再训练机制，模型表现会随时间单调下降。

**我们的解法：** 在系统上线第一天就建立数据飞轮——通过用户反馈（显式）和行为日志（隐式）持续收集"难案例"，每双周触发一次增量微调流程。

### 2. 幻觉治理（Hallucination Governance）

LLM 的幻觉问题在企业场景尤其致命。金融报告生成错误数字、法律合同出现不存在条款——这些不仅是体验问题，是合规风险。

**我们的解法：** 三层防御架构：
- **事前**：RAG 检索增强，限制模型在受控知识库范围内回答
- **事中**：置信度打分 + 关键字段强校验（数字、日期、实体）
- **事后**：人工审核队列 + 自动化回归测试集

### 3. 延迟与成本控制

GPT-4 调用一次 $0.03，听起来不贵。当日调用量到 50 万次时，一天成本 $15,000，一年 $500 万——超过大多数企业的 IT 预算。

**我们的解法：** 分级路由策略——
- 简单意图（FAQ、分类）：本地小模型（< 0.001s, $0）
- 中等复杂度：飞凡自研模型（< 0.3s, $0.0008/次）
- 高复杂度 + 高价值场景：GPT-4/Claude（< 2s, $0.03/次）

客户平均节省 **73% 的推理成本**。

---

## 三、方法论：PDCA 落地框架

经过大量实战，我们沉淀出一套可复用的企业 AI 落地框架：

\`\`\`
P (Plan)  →  明确业务目标，定义可量化的成功指标
D (Do)    →  最小可行版本，2 周内上线真实用户
C (Check) →  数据监控、AB 测试、错误分析
A (Act)   →  快速迭代，每周一次模型/策略更新
\`\`\`

关键原则：**不要追求完美的第一版，要追求快速可迭代的第一版**。

---

## 四、结语

AI 落地是一个持续工程问题，不是一次性交付问题。企业需要的不只是一个好模型，而是一套能持续进化的 AI 系统。

如果你也在探索企业 AI 落地，欢迎与我们交流：[tech@feifan.ai](mailto:tech@feifan.ai)`,

    contentEn: `## 1. The Last Mile Problem

Over the past two years, we've helped 50+ enterprise clients deploy AI in production. One pattern stands out: **most AI projects die between PoC and production**.

The story is familiar: GPT-4 demo hits 90% accuracy, budget is approved, six months later the live system drops to 72%, users complain, project is at risk.

This isn't an edge case — it describes **more than 60% of enterprise AI deployments** we've encountered.

---

## 2. The Core Challenges

### 1. Data Drift

Production data always diverges from development test sets. Enterprise documents get updated, industry terminology evolves, and user query patterns shift. Without continuous data monitoring and retraining, model performance degrades monotonically over time.

**Our approach:** Build the data flywheel on day one — continuously collect "hard cases" via explicit user feedback and implicit behavioral signals, triggering incremental fine-tuning every two weeks.

### 2. Hallucination Governance

LLM hallucinations are especially dangerous in enterprise contexts. Incorrect numbers in financial reports, non-existent clauses in legal contracts — these aren't just UX issues, they're compliance risks.

**Our approach:** Three-layer defense architecture:
- **Prevention**: RAG with controlled knowledge bases constrains model answers
- **Detection**: Confidence scoring + hard validation for critical fields (numbers, dates, entities)
- **Recovery**: Human review queue + automated regression test suites

### 3. Latency & Cost Control

GPT-4 at $0.03/call seems cheap — until you hit 500K daily calls, which costs $15,000/day or $5M/year, exceeding most enterprise IT budgets.

**Our approach:** Tiered routing strategy:
- Simple intent (FAQ, classification): Local small model (< 0.001s, $0)
- Medium complexity: Feifan in-house model (< 0.3s, $0.0008/call)
- High complexity + high value: GPT-4/Claude (< 2s, $0.03/call)

Clients average **73% reduction in inference costs**.

---

## 3. The PDCA Framework

From extensive field work, we've distilled a reusable enterprise AI deployment framework:

\`\`\`
P (Plan)  →  Define business objectives, quantifiable success metrics
D (Do)    →  Minimum viable version, live users within 2 weeks
C (Check) →  Data monitoring, A/B testing, error analysis
A (Act)   →  Rapid iteration, weekly model/strategy updates
\`\`\`

The key principle: **don't aim for a perfect first version, aim for a rapidly-iterable first version**.

---

## 4. Closing Thoughts

Enterprise AI deployment is a continuous engineering problem, not a one-time delivery problem. What enterprises need isn't just a good model — it's an AI system that can continuously evolve.

If you're navigating enterprise AI deployment, let's talk: [tech@feifan.ai](mailto:tech@feifan.ai)`,
  },
  {
    slug: 'ocr-evolution-2024',
    category: 'Technology',
    categoryColor: '#5B8DB8',
    date: '2024-08-20',
    readTimeZh: '6 分钟',
    readTimeEn: '6 min read',
    authorZh: '温德良',
    authorEn: 'Wen Deliang',
    authorTitleZh: '人工智能首席科学家',
    authorTitleEn: 'Chief AI Scientist',
    authorAvatar: '温',
    authorColor: '#4A9E7A',
    titleZh: 'OCR 技术演进：从规则引擎到端到端文档理解',
    titleEn: 'OCR Evolution: From Rule Engines to End-to-End Document Understanding',
    excerptZh: '传统 OCR 已死，文档理解刚刚开始。本文梳理 OCR 技术 30 年演进史，解析为何深度学习重新定义了这个领域，以及"文档大模型"时代的核心技术路径。',
    excerptEn: 'Traditional OCR is dead. Document understanding is just beginning. We trace 30 years of OCR evolution, explain why deep learning redefined the field, and chart the technical roadmap of the Document Foundation Model era.',
    tagsZh: ['OCR', '文档理解', '计算机视觉', '深度学习'],
    tagsEn: ['OCR', 'Document Understanding', 'Computer Vision', 'Deep Learning'],
    contentZh: `## OCR 的三个时代

**第一代（1970s-2000s）：规则时代**
手工特征 + 统计模型。能识别标准印刷体，遇到手写体、复杂版式即宣告失败。准确率天花板约 85%。

**第二代（2010s）：深度学习时代**
CNN 提取特征，LSTM 建模序列，CTC 对齐。场景文字识别准确率突破 95%，但仍是"看字"而非"理解文档"。

**第三代（2020s→）：文档理解时代**
Transformer 架构 + 多模态预训练。模型不再只是提取文字，而是理解文档的**结构、语义和跨页关系**。

---

## 飞凡的技术路径

我们的核心创新在于**端到端文档理解**——不是先 OCR 再 NLP 两步走，而是在同一模型中同时完成版面分析、文字识别和信息抽取。

实验表明，端到端架构比 pipeline 方案在复杂版式文档上提升 **8-12 个百分点**的 F1 分数，推理延迟降低 40%。

---

## 行业展望

文档 AI 的下一个里程碑是**零样本文档理解**——给模型一份从未见过的新文档类型，无需标注、无需微调，直接完成信息抽取。我们内部的实验数据已经令人鼓舞，敬请期待。`,

    contentEn: `## Three Eras of OCR

**Era 1 (1970s-2000s): Rule-Based**
Handcrafted features + statistical models. Could handle standard print, but failed on handwriting and complex layouts. Accuracy ceiling: ~85%.

**Era 2 (2010s): Deep Learning**
CNN for features, LSTM for sequence modeling, CTC alignment. Scene text recognition broke 95%, but models were still "reading characters" rather than "understanding documents."

**Era 3 (2020s→): Document Understanding**
Transformer architecture + multimodal pre-training. Models don't just extract text — they understand document **structure, semantics, and cross-page relationships**.

---

## Feifan's Technical Approach

Our core innovation is **end-to-end document understanding** — instead of OCR-then-NLP in two steps, a single model simultaneously handles layout analysis, text recognition, and information extraction.

Experiments show end-to-end architecture outperforms pipeline approaches by **8-12 F1 points** on complex-layout documents, with 40% lower inference latency.

---

## Industry Outlook

The next milestone in document AI is **zero-shot document understanding** — give the model an unseen document type, no annotation, no fine-tuning, extract information directly. Our internal experiments are already encouraging. Stay tuned.`,
  },
  {
    slug: 'ai-middleware-architecture-2024',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2024-05-10',
    readTimeZh: '10 分钟',
    readTimeEn: '10 min read',
    authorZh: '谢记年',
    authorEn: 'Xie Jinian',
    authorTitleZh: '联合创始人 & 首席技术官',
    authorTitleEn: 'Co-Founder & CTO',
    authorAvatar: 'XJ',
    authorColor: '#5B8DB8',
    titleZh: '企业 AI 中台建设方法论：从烟囱到平台',
    titleEn: 'Enterprise AI Platform Architecture: From Silos to a Unified Platform',
    excerptZh: '大多数企业 AI 都是"烟囱式"——每个业务线各搞一套，重复建设、数据孤岛、无法复用。本文分享飞凡 AI 中间件平台的架构设计思路，以及如何在不推倒重来的前提下实现平台化转型。',
    excerptEn: 'Most enterprise AI is "silo-style" — each business unit builds their own, causing duplication, data islands, and inability to reuse. We share Feifan\'s AI middleware platform architecture and how to achieve platform transformation without a full rewrite.',
    tagsZh: ['AI中台', '平台化', '架构设计', '微服务'],
    tagsEn: ['AI Platform', 'Architecture', 'Microservices', 'MLOps'],
    contentZh: `## 烟囱问题的本质

企业 AI 烟囱化的根本原因不是技术选型错误，而是**组织激励错误**——各 BU 只对自己的 KPI 负责，没有人为跨 BU 的能力复用买单。

解决烟囱问题，技术是 20%，组织是 80%。

## 中台分层架构

飞凡 AI 中间件采用四层架构：

**基础层**：GPU 资源调度、模型仓库、特征存储
**能力层**：OCR、ASR、NLP、推荐等通用 AI 能力
**编排层**：AI 工作流编排、A/B 实验框架、监控告警
**接入层**：统一 API 网关、SDK、低代码配置界面

关键设计原则：**每一层对上层透明，对下层解耦**。

## 渐进式迁移策略

我们不建议推倒重来。实践中采用"绞杀者模式"（Strangler Fig Pattern）：

1. 新功能优先走中台能力
2. 旧系统在稳定后逐步迁移
3. 双写验证阶段确保数据一致性
4. 灰度切流，监控指标达标后完全切换

一个有 200 个 AI 服务的大型企业，完整迁移约需 12-18 个月。`,

    contentEn: `## The Root Cause of Silos

The root cause of enterprise AI silos isn't wrong technology choices — it's **wrong organizational incentives**. Each BU is only accountable to its own KPIs, with no one paying for cross-BU capability reuse.

Solving silo problems: 20% technology, 80% organization.

## Four-Layer Platform Architecture

Feifan's AI middleware uses a four-layer architecture:

**Infrastructure Layer**: GPU scheduling, model registry, feature store
**Capability Layer**: General AI capabilities — OCR, ASR, NLP, recommendation
**Orchestration Layer**: AI workflow orchestration, A/B framework, monitoring
**Access Layer**: Unified API gateway, SDKs, low-code configuration UI

Key design principle: **each layer is transparent to the layer above, decoupled from the layer below**.

## Incremental Migration Strategy

We don't recommend full rewrites. In practice, use the Strangler Fig Pattern:

1. Route new features through the platform first
2. Migrate stable legacy services gradually
3. Dual-write validation phase ensures data consistency
4. Canary traffic shifting, full cutover once metrics are healthy

For a large enterprise with 200 AI services, a full migration typically takes 12-18 months.`,
  },
  {
    slug: 'asr-customer-service-2024',
    category: 'Industry',
    categoryColor: '#7B6FA0',
    date: '2024-02-28',
    readTimeZh: '7 分钟',
    readTimeEn: '7 min read',
    authorZh: '程小军',
    authorEn: 'Cheng Xiaojun',
    authorTitleZh: '保险技术负责人',
    authorTitleEn: 'Head of Insurance Technology',
    authorAvatar: '程',
    authorColor: '#7B6FA0',
    titleZh: '语音 AI 重塑客服中心：一个真实案例拆解',
    titleEn: 'How Speech AI Transforms Contact Centers: A Real-World Case Study',
    excerptZh: '某头部保险公司 10,000 坐席规模的客服中心，通过飞凡语音 AI 实现了 AHT（平均处理时长）降低 35%、客户满意度提升 18 分的显著改善。本文完整还原这一落地过程。',
    excerptEn: 'A leading insurance company with 10,000 agents achieved 35% reduction in AHT and 18-point CSAT improvement with Feifan Speech AI. This article reconstructs the full deployment journey.',
    tagsZh: ['语音识别', '客服AI', '行业案例', 'NLP'],
    tagsEn: ['ASR', 'Contact Center AI', 'Case Study', 'NLP'],
    contentZh: `## 客户背景

某头部寿险公司，10,000+ 在线客服坐席，日均通话量 80 万次。核心痛点：坐席需要一边通话一边手动填写业务系统，导致 AHT 高、错填率高、服务质量不稳定。

## 解决方案

**实时语音转写**：通话实时转为文字，准确率 97.3%（含保险专业术语定制词库）

**意图识别 & 自动填表**：NLP 模型实时识别客户意图，关键信息（险种、金额、日期）自动填入业务系统

**坐席辅助提示**：根据对话上下文实时推荐话术、合规提示

**通话质检**：100% 通话自动质检，替代原来 3% 抽检

## 结果

- AHT 从 8.2 分钟 → 5.3 分钟（↓35%）
- 人工质检成本节省 420 万/年
- 客户 CSAT 评分 +18 分
- 坐席人员满意度显著提升（无需手动填写）

## 关键成功因素

1. **领域自适应**：保险领域专业词汇量大，通用 ASR 准确率只有 89%。定制词库+领域微调后达到 97.3%。
2. **低延迟优先**：实时辅助场景要求端到端延迟 < 200ms，我们的流式推理方案实现了 140ms。
3. **渐进上线**：先在 200 坐席试点 2 周，收集反馈，再全量铺开——避免了大规模上线风险。`,

    contentEn: `## Client Background

A leading life insurance company with 10,000+ online agents and 800,000 daily calls. Core pain point: agents had to manually fill business systems while talking, leading to high AHT, high error rates, and inconsistent service quality.

## Solution

**Real-time Speech Transcription**: Live call transcription at 97.3% accuracy (with custom insurance terminology lexicon)

**Intent Recognition & Auto-fill**: NLP model identifies customer intent in real time, auto-populates key fields (policy type, amount, date) in business systems

**Agent Assist Prompts**: Real-time script recommendations and compliance reminders based on conversation context

**Automated QA**: 100% call quality inspection, replacing the previous 3% random sampling

## Results

- AHT: 8.2 min → 5.3 min (↓35%)
- Manual QA cost savings: ¥4.2M/year
- Customer CSAT score: +18 points
- Agent satisfaction significantly improved (no manual data entry)

## Key Success Factors

1. **Domain Adaptation**: Insurance domain vocabulary is large; generic ASR only achieved 89%. Custom lexicon + domain fine-tuning reached 97.3%.
2. **Low Latency First**: Real-time assist requires end-to-end latency < 200ms; our streaming inference achieved 140ms.
3. **Gradual Rollout**: 2-week pilot with 200 agents first, collect feedback, then full deployment — avoiding large-scale rollout risk.`,
  },
]
