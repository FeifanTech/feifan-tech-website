// Static blog data shared between Blog.jsx and BlogPost.jsx
export const POSTS = [
  {
    slug: 'claude-cowork-enterprise-observations-2026',
    category: 'Industry',
    categoryColor: '#7B6FA0',
    date: '2026-04-18',
    readTimeZh: '7 分钟',
    readTimeEn: '7 min read',
    authorZh: '王森贤',
    authorEn: 'Wang Shenxian',
    authorTitleZh: '资深项目管理专家',
    authorTitleEn: 'Senior Project Management Expert',
    authorAvatar: '王',
    authorColor: '#7B6FA0',
    titleZh: 'Claude Cowork：知识工作者开始拥有“可交付”的 AI 同事',
    titleEn: 'Claude Cowork: Knowledge Workers Are Finally Getting an AI Teammate That Delivers',
    excerptZh: 'Claude Cowork 不是把聊天框做大，而是把“交付结果”做成默认目标。对于企业来说，这意味着 AI 正从回答问题，走向真正接手文档、文件和桌面流程。',
    excerptEn: 'Claude Cowork is not a bigger chat window. It is a shift toward outcome-first AI. For enterprises, that means AI is moving from answering questions to actually handling documents, files, and desktop workflows.',
    tagsZh: ['Claude Cowork', '知识工作', '桌面代理', '企业协作'],
    tagsEn: ['Claude Cowork', 'Knowledge Work', 'Desktop Agent', 'Enterprise Collaboration'],
    contentZh: `## 从“问答助手”到“任务代理”

Anthropic 最近推动 Claude Cowork 的核心变化，不在于它回答得更像人，而在于它开始**围绕结果组织工作**。

公开信息显示，Claude Cowork 已通过 Claude Desktop 面向 macOS 和 Windows 提供更完整的研究预览/正式可用体验，能够在本地文件、文件夹和常用应用之间切换，把多步任务拼成一条可执行链路。

这件事对企业客户尤其重要，因为大量真实知识工作并不是“问一句、答一句”，而是：
- 找资料
- 清洗文档
- 汇总结论
- 生成交付件
- 再把结果放回原来的协作环境

过去的 AI 只覆盖了中间的某一小段。Cowork 想覆盖的是整条链路。

---

## 它补上的，不是模型能力，而是工作形态

我们观察企业内部的 AI 使用时，经常会遇到一个误区：团队以为只要模型更强，生产率自然就会提高。

但真正拖慢知识工作的，往往不是推理本身，而是这些琐碎步骤：
- 文件分散在本地与云端
- 输入材料格式混乱
- 人要频繁在多个应用之间跳转
- 输出物还需要重新排版、归档、命名

Claude Cowork 的价值，是把这些“原本懒得做、但必须做”的工作交给代理系统去完成。这样，人类才能把时间花在判断、取舍和最终决策上。

---

## 企业为什么现在会认真看 Cowork

这轮产品更新里，一个很关键的信号是：Anthropic 不只强调“会做事”，也开始强调**可治理**。

从公开更新来看，Cowork 相关能力已经开始覆盖：
- 角色与权限控制
- 分组启用与限制
- 使用分析
- OpenTelemetry 监控支持

这意味着 Cowork 不再只是一个“个人效率工具”，而是在往**企业级工作编排层**靠近。

对管理者而言，真正的问题不再是“员工会不会偷偷用 AI”，而是：
1. 哪些团队适合先开放
2. 哪些任务允许 AI 自动完成
3. 哪些流程必须保留人工确认
4. 如何监控成本、质量和使用边界

如果这些治理问题不解决，AI 再强也只能停留在试验阶段。

---

## 我们的判断：2026 年桌面代理会先在中后台爆发

Cowork 的第一波高价值场景，不太可能是创意行业最耀眼的工作，而更可能是这些中后台流程：
- 运营整理与汇报
- 法务材料归档与提取
- 财务附件梳理与汇总
- 研究资料阅读与初稿生成
- 交付过程中的多文件整理

这些场景有三个共同特点：
- 规则相对明确
- 输入材料很多
- 人工时间主要消耗在搬运和组织上

一旦代理能稳定处理这些工作，组织会非常快地看到 ROI。

---

## 结语

Claude Cowork 代表的，不只是 Anthropic 又做了一个新入口，而是一个更值得企业重视的趋势：**AI 正在从“能力展示”走向“工作承接”**。

接下来真正拉开差距的，不是谁先买了工具，而是谁先把流程、权限和验收机制设计好。`,

    contentEn: `## From Assistant to Task Agent

The important shift in Claude Cowork is not that it sounds more human. It is that it is increasingly organized around **finished outcomes**.

Public product information shows Cowork running through the Claude Desktop app on macOS and Windows, moving across local files, folders, and common applications to complete multi-step knowledge-work tasks.

That matters because real enterprise work is rarely just “ask and answer.” It is usually:
- finding source material
- cleaning and structuring documents
- synthesizing conclusions
- producing a deliverable
- returning the result to the original workflow

Earlier AI tools covered fragments of that chain. Cowork is trying to cover the chain itself.

---

## The Gap It Fills Is Workflow, Not Just Intelligence

Inside enterprises, one recurring mistake is to assume that a stronger model automatically creates productivity.

In practice, knowledge work is slowed down by operational friction:
- files scattered across local and cloud systems
- messy source formats
- constant context switching between apps
- reformatting, renaming, and archiving outputs

Cowork’s value is that it targets exactly this category of work: the repetitive but necessary assembly layer that people often delay, avoid, or rush through.

---

## Why Enterprises Are Paying Attention Now

The more meaningful signal in recent updates is not only that Cowork can act, but that Anthropic is increasingly emphasizing **governance**.

Public updates point to enterprise controls such as:
- role-based access control
- group-level enablement and restriction
- usage analytics
- OpenTelemetry support

That moves Cowork closer to an enterprise work orchestration layer rather than a personal productivity toy.

For leaders, the real questions become:
1. Which teams get access first?
2. Which tasks can be automated end to end?
3. Which workflows require mandatory human checkpoints?
4. How do we monitor cost, quality, and boundaries?

Without those answers, even a strong agent remains stuck in pilot mode.

---

## Our View: Desktop Agents Will Land First in Operational Work

The first major Cowork wins in 2026 are unlikely to be in the most glamorous creative tasks. They are more likely in operational workflows such as:
- operations reporting
- legal file extraction and organization
- finance attachment review
- research synthesis and first-draft generation
- delivery documentation and file cleanup

These workflows share three properties:
- relatively clear rules
- lots of source material
- heavy human time spent on movement and organization

When an agent can handle those reliably, ROI becomes visible very quickly.

---

## Closing Thought

Claude Cowork is not just another product surface. It signals a broader transition: **AI is moving from capability demonstration to work acceptance**.

The organizations that benefit most will not be the ones that merely adopt the tool first, but the ones that redesign process, permissions, and review around it first.`,
  },
  {
    slug: 'claude-opus-4-7-product-analysis-2026',
    category: 'AI',
    categoryColor: '#D97757',
    date: '2026-04-17',
    readTimeZh: '8 分钟',
    readTimeEn: '8 min read',
    authorZh: '谢记年',
    authorEn: 'Xie Jinian',
    authorTitleZh: '联合创始人 & 首席技术官',
    authorTitleEn: 'Co-Founder & CTO',
    authorAvatar: 'XJ',
    authorColor: '#5B8DB8',
    titleZh: 'Claude Opus 4.7：更强的不是“聪明”，而是长任务的稳定性',
    titleEn: 'Claude Opus 4.7: The Real Upgrade Is Not Raw Intelligence, but Reliability on Long Tasks',
    excerptZh: 'Anthropic 将 Claude Opus 4.7 定位为更擅长软件工程、复杂多步任务和高分辨率视觉工作的通用模型。对企业团队来说，最值得关注的是它在长任务中的一致性与自校验倾向。',
    excerptEn: 'Anthropic positions Claude Opus 4.7 as a stronger model for software engineering, complex multi-step work, and higher-resolution vision tasks. For enterprise teams, the most important change is its consistency and tendency to self-check over long-running work.',
    tagsZh: ['Claude Opus 4.7', '模型评测', '软件工程', '视觉能力'],
    tagsEn: ['Claude Opus 4.7', 'Model Evaluation', 'Software Engineering', 'Vision'],
    contentZh: `## Opus 4.7 为什么值得看

Anthropic 在 2026 年 4 月 16 日发布 Claude Opus 4.7 时，最打动我们的不是“又刷新了一个榜单”，而是它对外强调的几个关键词：
- 高难度软件工程
- 长时间多步骤任务
- 更高分辨率视觉
- 更好的界面、文档和幻灯片产出质量

这说明模型竞争正在从“会不会做”转向“能不能稳定做完”。

---

## 企业真正需要的是可托付，而不是偶尔惊艳

很多团队评估模型时，容易被 Demo 级别的高光时刻吸引。但落到生产环境，真正决定价值的不是峰值表现，而是：
1. 是否能持续遵循指令
2. 是否能在长链路任务里保持上下文一致
3. 是否会主动验证自己的输出
4. 是否在失败时表现得可预期

Anthropic 对 Opus 4.7 的描述，核心就在这里。它强调自己更擅长处理原本需要密切监督的复杂编码工作，并在完成前更愿意自查结果。

对工程团队来说，这类改进往往比单次 benchmark 提升更有意义。

---

## 视觉能力升级，影响的不只是“看图”

Opus 4.7 另一个值得重视的变化，是更高分辨率的视觉处理能力。

很多人会把“视觉能力增强”理解成 OCR 更强，或者看图问答更准。但在企业场景里，它真正改变的是这些任务：
- 理解复杂后台页面和控制台界面
- 读取密集图表、表单、流程图
- 生成更完整的界面草图和文档版式建议
- 支撑代理系统在 GUI 环境中执行更长任务

当模型能够更稳定地读懂屏幕，它就更有机会成为真正的工作代理，而不仅是文本助手。

---

## 从模型能力到产品能力：4.7 的外溢效应

我们更关注的一点是：Opus 4.7 不是单独存在的模型升级，它会直接外溢到产品层。

如果一个模型同时在编码、多步推理、视觉理解和专业产出质量上提升，那么它可以支撑的产品形态会明显扩大：
- 更可靠的编码代理
- 更可控的桌面执行代理
- 更像成品的界面和演示文稿生成
- 更少人工返工的知识工作流

这也是为什么我们认为，2026 年的大模型竞争会越来越像“模型 + 产品工作流”的竞争，而不是单纯模型分数竞争。

---

## 怎么判断 4.7 是否适合你的团队

建议不要只问“它是不是最强”，而要问三个更实际的问题：

### 1. 你的任务是不是长链路任务
如果你的场景需要 10 步以上的连续执行，稳定性比单点聪明更重要。

### 2. 你的任务是否包含屏幕、文档、图表
如果包含，视觉质量提升会直接影响成功率。

### 3. 你的团队是否已经有验证机制
更强的模型不是替代验证，而是让验证更高效。没有回归集、审计点和失败兜底，再强的模型也难以大规模上线。

---

## 结语

Claude Opus 4.7 的意义，不只是更聪明，而是越来越接近企业真正愿意托付复杂工作的那个门槛。

模型能力继续进步是确定的，但真正会产生业务差异的，是谁能把这种能力接进一个有验证、有治理、能复盘的交付系统里。`,

    contentEn: `## Why Opus 4.7 Matters

When Anthropic introduced Claude Opus 4.7 on April 16, 2026, the most important signal was not simply “another benchmark improvement.” It was the set of capabilities Anthropic chose to highlight:
- difficult software engineering
- long-running multi-step tasks
- higher-resolution vision
- better quality on interfaces, slides, and docs

That points to a shift in model competition: from “can it do this at all?” to “can it do this reliably to completion?”

---

## Enterprises Need Delegatability, Not Occasional Brilliance

Teams often over-index on demo moments when evaluating models. In production, what actually matters is:
1. whether the model follows instructions consistently
2. whether it stays coherent across long task chains
3. whether it checks its own work before returning it
4. whether failures are predictable and manageable

Anthropic’s framing of Opus 4.7 is notable precisely because it emphasizes these traits. The promise is not just stronger reasoning, but greater confidence on work that previously required close supervision.

For engineering organizations, that is often more valuable than a narrow benchmark jump.

---

## Better Vision Changes More Than Image Q&A

The higher-resolution vision upgrade is also easy to underestimate.

In enterprise settings, better vision affects tasks like:
- understanding dense admin consoles and dashboards
- reading charts, forms, and process diagrams
- generating more usable UI drafts and document structures
- supporting longer GUI-based agent workflows

Once a model can read screens more reliably, it becomes far more useful as an execution layer rather than only a text assistant.

---

## From Model Capability to Product Capability

What matters even more is that Opus 4.7 will not live as an isolated model improvement. It will spill upward into product behavior.

If one model improves across coding, multi-step reasoning, visual understanding, and professional output quality, it can support:
- more dependable coding agents
- more controllable desktop agents
- more production-ready design and presentation generation
- less human rework in knowledge workflows

This is why we expect 2026 model competition to look increasingly like “model plus workflow product” competition, not just leaderboard competition.

---

## How to Evaluate Whether 4.7 Fits Your Team

Do not ask only whether it is the smartest model. Ask three more practical questions:

### 1. Are your tasks long-horizon?
If your workflow requires 10+ continuous steps, reliability matters more than flashiness.

### 2. Do your tasks include screens, documents, or charts?
If so, vision quality improvements can directly affect success rates.

### 3. Do you already have validation in place?
A stronger model does not remove the need for verification. It only makes verification more efficient. Without regression tests, audit points, and fallbacks, even a strong model is hard to scale.

---

## Closing Thought

The real significance of Claude Opus 4.7 is not that it is merely smarter. It is that it is moving closer to the threshold where enterprises are willing to trust it with harder work.

Model progress is inevitable. Business impact will come from who can connect that progress to a delivery system with verification, governance, and review.`,
  },
  {
    slug: 'claude-design-workflow-commentary-2026',
    category: 'Technology',
    categoryColor: '#5B8DB8',
    date: '2026-04-16',
    readTimeZh: '6 分钟',
    readTimeEn: '6 min read',
    authorZh: '包季真',
    authorEn: 'Bao Jizhen',
    authorTitleZh: '体验技术负责人',
    authorTitleEn: 'Head of Experience Technology',
    authorAvatar: '包',
    authorColor: '#4A9E7A',
    titleZh: 'Claude Design：AI 终于开始直接交付“能用的视觉稿”',
    titleEn: 'Claude Design: AI Is Finally Starting to Deliver Visual Work People Can Actually Use',
    excerptZh: '据 2026 年 4 月 17 日公开报道，Anthropic Labs 推出 Claude Design 研究预览，支持通过对话生成原型、幻灯片、单页材料等视觉成果。真正的变量不只是“会画图”，而是能否进入团队的正式设计流程。',
    excerptEn: 'According to public reports on April 17, 2026, Anthropic Labs launched Claude Design in research preview, enabling conversational generation of prototypes, slides, and one-pagers. The real question is not whether it can create visuals, but whether it can fit into a formal team design workflow.',
    tagsZh: ['Claude Design', '设计工作流', '原型设计', 'AI创作'],
    tagsEn: ['Claude Design', 'Design Workflow', 'Prototyping', 'AI Creation'],
    contentZh: `## 先说结论：设计 AI 的战场变了

过去两年，很多所谓“设计 AI”做的事情，本质上还是图片生成。它们能做海报、插图、风格图，但离真正的产品设计和企业传播物料，始终差一层。

Claude Design 引人关注的地方，在于据公开报道，它的目标不是生成一张好看的图，而是直接产出：
- 原型
- 幻灯片
- one-pager
- 营销物料初稿

这意味着 AI 正在试图越过“灵感辅助”阶段，进入“交付物生产”阶段。

---

## 为什么这件事会对产品和设计团队有冲击

设计工作里最耗时间的部分，往往不是最后的精修，而是前面的这些步骤：
- 把模糊需求转成结构化页面
- 先做一版能讨论的草稿
- 按品牌规范统一版式
- 导出给不同角色评审

如果 Claude Design 真能把“描述想法 → 生成可讨论版本”这个过程压缩到分钟级，那么它改变的不是设计师的审美能力，而是整个团队的沟通速度。

产品经理、运营、市场、售前，都会更早拿到一个可视化的中间成果。

---

## 它最值得看的，不是生成，而是约束

据公开报道，Claude Design 支持结合团队设计系统，并可输出 PDF、URL、PPTX，甚至衔接到 Canva 继续编辑。

这背后的关键意义是：它不是孤立的创作玩具，而是在尝试接入一个更真实的企业设计链路。

设计类 AI 要想真正进入团队协作，至少要解决四件事：
1. 输出不能只好看，还要结构稳定
2. 要能贴近品牌系统，而不是每次从零开始
3. 要能导出到现有工具链，而不是锁死在自己内部
4. 要让非设计岗位也能产出“足够像样”的第一稿

如果这些约束成立，AI 生成的内容才会真正被团队吸收。

---

## 设计师不会消失，但工作重心会改变

我们并不认为 Claude Design 这类产品会直接替代专业设计师。

更可能发生的变化是：
- 非设计岗位负责更早期的草图和结构表达
- 设计师减少大量重复搭版工作
- 设计负责人把更多精力放在系统、质量和品牌把控上

换句话说，设计师的价值会更集中在**标准制定、审美判断、复杂交互和最终把关**，而不是一次次从空白画布开始。

---

## 我们的判断：2026 年最先被重构的是“轻设计”场景

真正最先被改写的，不一定是最复杂的 APP 产品设计，而更可能是：
- 销售演示文稿
- 活动 landing page 初稿
- 产品方案单页
- 内部汇报材料
- 市场活动视觉草案

这些工作对质量有要求，但对极致原创性的要求并没有那么高，非常适合 AI 先切入。

---

## 结语

Claude Design 是否会成为长期产品，现在还需要观察；而且目前更多信息仍来自公开报道而非完整官方技术说明。

但它至少已经说明一件事：**AI 设计工具下一阶段的竞争，不是谁生成得更炫，而是谁能更快进入真实团队流程并输出可复用成果。**`,

    contentEn: `## The Battlefield for Design AI Has Changed

For the past two years, many so-called design AI tools were still fundamentally image generators. They could create posters, illustrations, and moodboards, but they often stopped short of real product design or enterprise-ready communication materials.

Claude Design is interesting because, according to public reporting, its ambition is not simply to generate pretty images. It is to produce:
- prototypes
- slide decks
- one-pagers
- first drafts of marketing materials

That is a different category of product. It pushes AI from inspiration support into deliverable production.

---

## Why This Matters for Product and Design Teams

In design work, the most time-consuming part is often not final polish. It is the early translation layer:
- turning vague requirements into page structure
- creating a first draft that can be discussed
- aligning to brand rules
- exporting materials for cross-functional review

If Claude Design can compress “describe the idea” into “generate a discussable version” within minutes, the biggest effect is not on taste itself. It is on team communication speed.

Product managers, marketers, operators, and presales teams can all get to a visual intermediate artifact much earlier.

---

## The Most Important Part Is Not Generation, but Constraint

Public reports suggest Claude Design can apply team design systems and export to PDF, URL, PPTX, and even Canva for continued editing.

That matters because it suggests an attempt to plug into real design workflows rather than exist as an isolated creation toy.

To become useful in teams, design AI must solve at least four things:
1. output must be structurally stable, not just attractive
2. it must respect design systems instead of starting from zero each time
3. it must connect to existing toolchains rather than trap work internally
4. it must let non-design roles produce a decent first draft

Only then does generated content become operationally useful.

---

## Designers Will Not Disappear, but Their Work Will Shift

We do not believe tools like Claude Design will simply replace professional designers.

A more realistic shift is:
- non-design roles create earlier drafts and structural proposals
- designers spend less time on repetitive layout work
- design leads spend more time on systems, quality, and brand control

In other words, designer value concentrates further around **standards, taste, complex interaction, and final judgment** rather than starting from a blank canvas every time.

---

## Our View: “Light Design” Workflows Will Be Reshaped First

The earliest workflow changes are unlikely to happen in the most complex product design environments. They are more likely in:
- sales decks
- landing page first drafts
- product one-pagers
- internal reporting materials
- campaign visual drafts

These tasks require quality, but not always maximum originality. That makes them ideal for AI-first acceleration.

---

## Closing Thought

It remains too early to declare Claude Design a long-term platform, especially since much of the available detail still comes from public reporting rather than a full official technical release.

But it already makes one thing clear: **the next phase of competition in AI design will not be about who generates the flashiest assets. It will be about who enters real team workflows fastest and produces reusable outputs.**`,
  },
  {
    slug: 'openai-computer-use-enterprise-practice-2026',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2026-04-15',
    readTimeZh: '9 分钟',
    readTimeEn: '9 min read',
    authorZh: '王玉岗',
    authorEn: 'Wang Yugang',
    authorTitleZh: '首席技术专家',
    authorTitleEn: 'Chief Technology Expert',
    authorAvatar: '王',
    authorColor: '#5B8DB8',
    titleZh: 'OpenAI Computer Use：从“会看界面”到“会操作电脑”，企业该怎么落地',
    titleEn: 'OpenAI Computer Use: From Understanding Interfaces to Operating Computers',
    excerptZh: 'OpenAI 正把 Computer-Using Agent 能力沉淀为 API 与 Codex 工作流的一部分。对企业团队来说，机会与风险同时放大：自动化边界更大了，安全约束也必须同步升级。',
    excerptEn: 'OpenAI is turning Computer-Using Agent capability into part of its API and Codex workflow. For enterprises, that expands both opportunity and risk: automation boundaries get larger, and safety constraints must mature at the same time.',
    tagsZh: ['Computer Use', 'OpenAI', 'Codex', '代理执行', '自动化'],
    tagsEn: ['Computer Use', 'OpenAI', 'Codex', 'Agent Execution', 'Automation'],
    contentZh: `## 为什么 Computer Use 是一个分水岭

当模型能读文档、写代码、调用 API 时，它已经很有用；但当模型开始能够**点击、输入、滚动并观察屏幕反馈**时，系统能力就发生了质变。

OpenAI 最近围绕 computer use 给出的公开资料，已经把这条路线说得很清楚：
- 在 API 层，computer use 通过 Responses API 提供
- 当前仍是 preview/beta 能力
- 模型会输出具体动作，由外部环境执行，再回传截图形成闭环
- OpenAI 明确强调要在沙箱环境和严格安全控制下使用

这不是一个“小功能”，而是一种新的执行接口。

---

## 它解决了什么旧问题

传统自动化经常依赖两类方式：
1. 调 API
2. 写 RPA 脚本

问题在于，很多企业系统并没有良好的 API；而 RPA 又高度脆弱，页面一改就容易失效。

Computer Use 的意义，在于让模型直接通过通用 GUI 完成任务。它不用事先知道系统内部接口，而是像人一样操作：
- 看屏幕
- 找按钮
- 点击
- 输入
- 根据结果继续下一步

这让自动化第一次有机会覆盖那些“没有 API、但有人能做”的工作。

---

## 为什么 Codex 的意义比单独 API 更大

如果只是 API 层支持 computer use，它更多还是一项开发能力；但当 Codex 也把“操作电脑”纳入工作流后，事情就变了。

这意味着开发者与高级知识工作者会更自然地使用它来处理：
- 本地环境中的多步操作
- 跨工具调试与验证
- 需要屏幕观察的任务执行
- 重复性的日常电脑工作

它不再只是“让代理能点浏览器”，而是在把“电脑本身”变成模型的一个通用工具。

---

## 企业落地时最容易忽略的四个风险

OpenAI 官方文档已经明确提醒：computer use 仍在 beta/preview 阶段，不适合高风险、完全信任、强认证环境下直接放权。

我们认为企业落地时，至少要把这四个风险单独拆出来：

### 1. 界面误判
模型看错按钮、弹窗或状态，可能在错误流程中继续执行。

### 2. 提示注入与恶意页面
屏幕内容本身可能诱导代理执行未授权动作。

### 3. 身份与权限外溢
一旦代理运行在已登录环境中，错误操作的真实代价会急剧放大。

### 4. 审计不足
如果没有完整截图、动作日志、回放链路，问题发生后几乎无法复盘。

---

## 一个可行的企业落地策略

我们建议把 computer use 看成一种“受限代理执行层”，而不是默认自动驾驶。

更稳妥的做法是分三层推进：

### 第一层：只读观察
先让模型只做页面理解、元素定位、步骤建议，不直接执行写操作。

### 第二层：低风险执行
放开搜索、筛选、下载、整理等低风险动作，要求全程截图和日志。

### 第三层：人工确认闭环
涉及外发、提交、支付、删除、审批等高风险动作，必须有人类确认。

如果没有这一层层的权限设计，computer use 很容易在 PoC 演示后卡在上线前。

---

## 结语

Computer Use 的真正价值，不在于“AI 会点鼠标了”，而在于它把几乎所有 GUI 系统都变成了潜在可操作对象。

但正因为边界被扩大，治理也必须同步扩大。谁能先把环境隔离、权限收敛、日志审计和人工确认机制搭好，谁才可能把这类能力真正用进生产。`,

    contentEn: `## Why Computer Use Is a Real Inflection Point

When models can read documents, write code, and call APIs, they are already useful. But once a model can **click, type, scroll, and observe screenshots**, the execution model changes.

OpenAI’s recent public documentation makes the direction clear:
- computer use is exposed through the Responses API
- it remains a preview/beta capability
- the model proposes actions, the environment executes them, and screenshots are returned to close the loop
- OpenAI explicitly recommends sandboxed environments and strong safety controls

This is not a small feature. It is a new execution interface.

---

## What Old Problem It Solves

Traditional automation usually relies on two routes:
1. APIs
2. RPA scripts

The problem is that many enterprise systems have weak APIs, while RPA is fragile and breaks easily when UIs change.

Computer use matters because it lets the model operate through the GUI itself. It does not need internal system interfaces in advance. It acts like a person:
- look at the screen
- find the button
- click
- type
- continue based on the result

For the first time, automation can credibly cover work that has no API but is still doable by a human at a keyboard.

---

## Why Codex Matters More Than the API Alone

If computer use existed only as an API feature, it would remain mostly a developer capability. Once Codex also incorporates operating the computer as part of its workflow, the significance expands.

That makes it much easier to apply the capability to:
- multi-step work in local environments
- cross-tool debugging and validation
- tasks that require visual observation
- repetitive day-to-day computer work

It is no longer just about “letting an agent click a browser.” It is about turning the computer itself into a general-purpose tool for the model.

---

## Four Risks Enterprises Should Isolate Explicitly

OpenAI’s documentation is clear that computer use is still in beta/preview and should not be trusted by default in high-risk, highly authenticated environments.

In our view, enterprises should isolate at least four risks:

### 1. UI misread
The model may misinterpret a button, modal, or state and continue down the wrong path.

### 2. Prompt injection through pages
Screen content itself can attempt to steer the agent toward unauthorized actions.

### 3. Identity and permission spillover
If the agent runs inside a logged-in environment, the cost of mistakes rises sharply.

### 4. Weak auditability
Without screenshots, action logs, and replayable traces, incidents are extremely hard to investigate.

---

## A Practical Enterprise Rollout Strategy

The right framing is not “full autonomy.” It is a constrained execution layer.

A practical rollout can be staged in three layers:

### Layer 1: Read-only observation
Let the model understand pages, locate elements, and suggest steps without writing anything.

### Layer 2: Low-risk execution
Allow search, filtering, downloads, and structured organization, with screenshots and logs captured throughout.

### Layer 3: Human-confirmed completion
For sending, submitting, paying, deleting, or approving, require explicit human confirmation.

Without this staged permission model, computer use will often succeed in demos and stall before production.

---

## Closing Thought

The real importance of computer use is not that “AI can click now.” It is that almost any GUI system becomes a potentially operable surface.

And because the execution boundary expands, governance must expand with it. The teams that win will be the ones that build isolation, permission control, audit logs, and human checkpoints before they scale the capability.`,
  },
  {
    slug: 'llm-enterprise-practice-2026',
    category: 'AI',
    categoryColor: '#D97757',
    date: '2026-11-15',
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
    slug: 'ocr-evolution-2026',
    category: 'Technology',
    categoryColor: '#5B8DB8',
    date: '2026-08-20',
    readTimeZh: '6 分钟',
    readTimeEn: '6 min read',
    authorZh: '王玉岗',
    authorEn: 'Wang Yugang',
    authorTitleZh: '首席技术专家',
    authorTitleEn: 'Chief Technology Expert',
    authorAvatar: '王',
    authorColor: '#5B8DB8',
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
    slug: 'ai-middleware-architecture-2026',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2026-05-10',
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
    slug: 'asr-customer-service-2026',
    category: 'Industry',
    categoryColor: '#7B6FA0',
    date: '2026-02-28',
    readTimeZh: '7 分钟',
    readTimeEn: '7 min read',
    authorZh: '六合',
    authorEn: 'Liu He',
    authorTitleZh: '资深交付总监',
    authorTitleEn: 'Senior Delivery Director',
    authorAvatar: '六',
    authorColor: '#B85C35',
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
  {
    slug: 'openclaw-ai-reasoning-2026',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2026-01-20',
    readTimeZh: '9 分钟',
    readTimeEn: '9 min read',
    authorZh: '王玉岗',
    authorEn: 'Wang Yugang',
    authorTitleZh: '首席技术专家',
    authorTitleEn: 'Chief Technology Expert',
    authorAvatar: '王',
    authorColor: '#5B8DB8',
    titleZh: 'OpenClaw：下一代 AI 推理增强框架的工程实践',
    titleEn: 'OpenClaw: Engineering Practices for Next-Gen AI Reasoning Augmentation',
    excerptZh: 'OpenClaw 将检索增强、工具调用与多步推理融为一体，让大模型真正具备"会思考、能行动"的工程能力。本文拆解其核心架构，分享飞凡在实际项目中的落地经验与踩坑记录。',
    excerptEn: 'OpenClaw fuses retrieval augmentation, tool invocation, and multi-step reasoning into a unified framework, giving LLMs the engineering capability to truly "think and act." We break down its core architecture and share Feifan\'s real-world deployment experience.',
    tagsZh: ['OpenClaw', 'AI推理', '检索增强', '工具调用', 'Agent框架'],
    tagsEn: ['OpenClaw', 'AI Reasoning', 'RAG', 'Tool Use', 'Agent Framework'],
    contentZh: `## 为什么需要推理增强框架？

大语言模型（LLM）在单轮问答上表现出色，但在**需要多步推理、外部知识检索、以及调用真实工具**的复杂任务中往往力不从心。OpenClaw 正是为填补这一鸿沟而生。

OpenClaw 的设计哲学是：**不替换模型，而是为模型构建思考脚手架**。

---

## 核心架构

OpenClaw 的架构分为三个层次：

### 1. 感知层（Perception Layer）
负责接收原始输入（文本、图像、结构化数据），进行意图解析和上下文构建。关键组件：
- **意图分类器**：区分"直接回答型"与"需要推理型"请求
- **上下文压缩器**：将超长对话历史压缩为语义稠密的摘要，防止 Context Window 溢出

### 2. 推理层（Reasoning Layer）
这是 OpenClaw 的核心，实现了基于图结构的多步推理：

\`\`\`
Input Query
    ↓
[Decomposer] 将复杂问题拆解为子任务 DAG
    ↓
[Planner] 为每个节点分配工具或知识库
    ↓
[Executor] 并行/串行执行，中间结果互相传递
    ↓
[Synthesizer] 整合所有子结果，生成最终回答
\`\`\`

相比传统的 ReAct 框架（线性的 Think→Act→Observe 循环），图结构推理允许**并行执行独立子任务**，将复杂查询的延迟降低约 55%。

### 3. 记忆层（Memory Layer）
支持三类记忆：
- **工作记忆**：当前会话的短期上下文（in-context）
- **情景记忆**：跨会话的用户偏好与历史摘要（vector DB）
- **知识记忆**：企业领域知识图谱（graph DB）

---

## 飞凡的落地实践

我们在一个大型政务智能客服项目中首次规模化部署 OpenClaw，处理的查询类型包括：政策咨询、办事流程引导、跨部门数据联查。

**主要挑战：**
1. 政策文件更新频繁（每周约 200 份），向量库需实时同步
2. 用户提问往往模糊，需要多轮澄清方可定位正确答案
3. 某些查询需要跨越 5–8 个知识库节点才能组合出完整答案

**解决方案：**
- 增量索引流水线：文件变更触发 webhook → 自动切分 → 差量更新向量库，P99 延迟 < 30 秒
- 引入"澄清代理"（Clarification Agent）：当意图置信度 < 0.7 时，主动向用户追问关键参数
- 推理图最大深度限制为 8 层，超过则退化为 Top-3 检索直接回答，保证 SLA

**结果：** 复杂问题首轮解决率从 61% 提升至 **87%**，平均响应时长从 4.2 秒降至 **1.8 秒**。

---

## 工程注意事项

1. **推理图的幻觉传播**：子节点的错误会被放大并传入下游节点，必须在每个中间步骤加入置信度校验。
2. **成本控制**：复杂推理图每次调用可能触发 8–15 次 LLM 调用，务必在 Planner 阶段做成本估算，超阈值则降级。
3. **可观测性**：每个推理节点的输入、输出、工具调用参数都需要完整日志，否则线上问题几乎无法排查。

OpenClaw 的正式开源版本正在整理中，敬请关注我们的 GitHub。`,

    contentEn: `## Why Reasoning Augmentation Frameworks?

LLMs excel at single-turn Q&A but struggle with complex tasks requiring **multi-step reasoning, external knowledge retrieval, and real tool invocation**. OpenClaw was built to bridge this gap.

OpenClaw's design philosophy: **don't replace the model — build a thinking scaffold around it**.

---

## Core Architecture

OpenClaw operates across three layers:

### 1. Perception Layer
Handles raw input (text, images, structured data), intent parsing, and context construction. Key components:
- **Intent Classifier**: Distinguishes "direct-answer" from "requires-reasoning" requests
- **Context Compressor**: Compresses long conversation histories into semantically dense summaries to prevent context window overflow

### 2. Reasoning Layer
This is OpenClaw's core, implementing DAG-based multi-step reasoning:

\`\`\`
Input Query
    ↓
[Decomposer] Breaks complex queries into sub-task DAG
    ↓
[Planner] Assigns tools or knowledge bases to each node
    ↓
[Executor] Parallel/serial execution with intermediate result passing
    ↓
[Synthesizer] Integrates all sub-results into final answer
\`\`\`

Compared to traditional ReAct frameworks (linear Think→Act→Observe loops), graph-based reasoning allows **parallel execution of independent sub-tasks**, reducing complex query latency by ~55%.

### 3. Memory Layer
Three memory types:
- **Working Memory**: Short-term context for the current session (in-context)
- **Episodic Memory**: Cross-session user preferences and history summaries (vector DB)
- **Knowledge Memory**: Enterprise domain knowledge graph (graph DB)

---

## Feifan's Deployment Experience

We first scaled OpenClaw in a large government smart customer service project handling: policy inquiries, procedural guidance, and cross-department data lookups.

**Key Challenges:**
1. Policy documents updated frequently (~200/week); vector store required real-time sync
2. User queries often vague, requiring multiple clarification rounds
3. Some queries needed to traverse 5–8 knowledge base nodes to construct complete answers

**Solutions:**
- Incremental indexing pipeline: file change → webhook → auto-chunking → delta vector store update, P99 latency < 30s
- "Clarification Agent": when intent confidence < 0.7, actively asks for key parameters
- Reasoning graph max depth capped at 8 levels; beyond that, degrades to Top-3 retrieval to guarantee SLA

**Results:** First-contact resolution for complex queries improved from 61% to **87%**; average response time dropped from 4.2s to **1.8s**.

---

## Engineering Caveats

1. **Hallucination propagation**: Sub-node errors amplify downstream. Confidence checks at every intermediate step are mandatory.
2. **Cost control**: Complex reasoning graphs may trigger 8–15 LLM calls per request. Always estimate cost at the Planner stage and degrade gracefully when thresholds are exceeded.
3. **Observability**: Full logs of inputs, outputs, and tool call parameters at each reasoning node are essential — production issues are nearly impossible to debug without them.

The official open-source release of OpenClaw is being prepared. Stay tuned on our GitHub.`,
  },
  {
    slug: 'hermes-agent-enterprise-2026',
    category: 'AI',
    categoryColor: '#D97757',
    date: '2026-12-18',
    readTimeZh: '11 分钟',
    readTimeEn: '11 min read',
    authorZh: '谢记年',
    authorEn: 'Xie Jinian',
    authorTitleZh: '联合创始人 & 首席技术官',
    authorTitleEn: 'Co-Founder & CTO',
    authorAvatar: 'XJ',
    authorColor: '#5B8DB8',
    titleZh: 'Hermes Agent：构建可信赖的企业级自主 AI 智能体',
    titleEn: 'Hermes Agent: Building Trustworthy Autonomous AI Agents for the Enterprise',
    excerptZh: 'AI 智能体（Agent）正从实验室走向企业核心流程。但"自主"意味着不可控的风险。Hermes Agent 框架通过可审计的行动链、人机协同检查点和权限沙箱，让企业在拥抱自主 AI 的同时守住安全底线。',
    excerptEn: 'AI agents are moving from labs into core enterprise workflows. But "autonomous" implies uncontrolled risk. The Hermes Agent framework combines auditable action chains, human-in-the-loop checkpoints, and permission sandboxing to let enterprises embrace autonomous AI without sacrificing control.',
    tagsZh: ['Hermes Agent', 'AI智能体', '企业自动化', '可信AI', '人机协同'],
    tagsEn: ['Hermes Agent', 'AI Agent', 'Enterprise Automation', 'Trustworthy AI', 'Human-in-the-loop'],
    contentZh: `## 智能体的承诺与陷阱

过去 18 个月，AI 智能体（Agent）成为最热门的技术话题。它的承诺诱人：**一个 Agent 可以自主完成采购询价、合同审核、数据分析、邮件跟进——以前需要 3 个人花 2 天的事情**。

但这里面藏着一个企业绝对不能忽视的陷阱：**自主即风险**。

一个没有护栏的 Agent 可能在没有人察觉的情况下：向错误的供应商发出了采购意向、删除了关键数据库记录、向外部合作方发送了未经审批的商业条款。

我们在设计 Hermes Agent 框架时，核心命题只有一个：**如何让 Agent 足够自主，同时让企业足够放心**？

---

## Hermes Agent 的五大设计原则

### 1. 最小权限原则（Least Privilege）
每个 Agent 实例只拥有完成当前任务所需的最小权限集。权限分为四个等级：
- **只读（Read）**：查询数据库、检索文档
- **建议（Suggest）**：生成草稿，等待人工确认后执行
- **执行（Execute）**：直接写入系统，有操作日志
- **高危（Critical）**：涉及资金、外发通信，强制要求双人审批

### 2. 可审计行动链（Auditable Action Chain）
每一次 Agent 行动都生成结构化事件日志：
\`\`\`json
{
  "agent_id": "procurement-agent-007",
  "action": "send_rfq",
  "timestamp": "2026-12-10T14:23:01Z",
  "reasoning": "供应商A报价高于市价15%，触发询比价规则",
  "inputs": { "vendor_id": "V-1024", "items": [...] },
  "approval_required": false,
  "outcome": "success"
}
\`\`\`
任何时间节点均可"回放"完整的 Agent 决策链，满足合规审计需求。

### 3. 人机协同检查点（Human-in-the-Loop Checkpoints）
高风险操作自动暂停，通过企业微信/钉钉/邮件推送给审批人，审批人确认后恢复执行。检查点触发条件可配置，例如：
- 涉及金额 > 5 万元
- 操作对象为外部合作方
- 置信度评分 < 0.85

### 4. 权限沙箱（Permission Sandbox）
Agent 运行在隔离的沙箱容器中，与生产系统通过 API 网关交互，禁止直接访问数据库或文件系统。所有工具调用经过网关的速率限制和内容安全过滤。

### 5. 回滚能力（Rollback Capability）
对可逆操作（数据库写入、文件修改），Agent 自动创建操作前快照。一旦检测到异常，可一键回滚到最近检查点。

---

## 实际案例：采购助理 Agent

某制造业客户将 Hermes Agent 部署为采购助理，覆盖询价 → 比价 → 生成采购建议书的完整流程。

**部署配置：**
- 询价、比价：Execute 级别权限（自动执行）
- 生成采购建议书：Suggest 级别（生成草稿，采购经理审批）
- 最终下单：Critical 级别（财务总监 + 采购总监双人审批）

**运行结果（3个月数据）：**
- 采购周期从 5.2 天 → 1.8 天（↓65%）
- 人工比价工时节省 78%
- 零安全事故（无未授权操作）
- Agent 建议被采购经理接受率：91%

---

## 从 PoC 到生产的关键跨越

很多团队的 Agent PoC 跑得很漂亮，但到生产就翻车，根源通常是这几点：

1. **工具描述不精确**：Agent 调用工具依赖对工具语义的理解，描述模糊会导致工具选择错误
2. **错误处理缺失**：外部 API 超时、返回异常时，没有重试和降级逻辑
3. **长任务状态丢失**：Agent 运行中容器重启，任务状态未持久化导致重复执行

Hermes Agent 对这三点都有内置解决方案，欢迎探讨企业级部署实践。`,

    contentEn: `## The Promise and Pitfall of AI Agents

Over the past 18 months, AI agents have become the hottest technology topic. The promise is compelling: **a single agent can autonomously handle supplier inquiries, contract review, data analysis, and email follow-ups — tasks that used to require 3 people over 2 days**.

But this hides a trap enterprises cannot afford to ignore: **autonomy equals risk**.

An unguarded agent might, unbeknownst to anyone: send purchase intentions to the wrong supplier, delete critical database records, or dispatch unapproved commercial terms to external partners.

When designing the Hermes Agent framework, we focused on one central question: **how do we make agents autonomous enough to be useful, yet controlled enough to be trustworthy?**

---

## Five Design Principles of Hermes Agent

### 1. Least Privilege
Each agent instance holds only the minimum permissions needed for its current task. Four permission levels:
- **Read**: Query databases, retrieve documents
- **Suggest**: Generate drafts, await human confirmation before execution
- **Execute**: Write to systems directly, with operation logs
- **Critical**: Involves funds or external communication — mandatory dual-approval

### 2. Auditable Action Chain
Every agent action generates a structured event log:
\`\`\`json
{
  "agent_id": "procurement-agent-007",
  "action": "send_rfq",
  "timestamp": "2026-12-10T14:23:01Z",
  "reasoning": "Vendor A quote 15% above market, triggering competitive bid rule",
  "inputs": { "vendor_id": "V-1024", "items": [...] },
  "approval_required": false,
  "outcome": "success"
}
\`\`\`
The complete agent decision chain can be "replayed" at any point in time, satisfying compliance audit requirements.

### 3. Human-in-the-Loop Checkpoints
High-risk operations pause automatically and push notifications to approvers via enterprise messaging (DingTalk, WeCom, email). Checkpoint trigger conditions are configurable, for example:
- Transaction amount > ¥50,000
- Operation targets external parties
- Confidence score < 0.85

### 4. Permission Sandbox
Agents run in isolated sandbox containers, interacting with production systems through an API gateway — no direct database or filesystem access. All tool calls pass through gateway rate limiting and content safety filtering.

### 5. Rollback Capability
For reversible operations (DB writes, file modifications), agents automatically create pre-operation snapshots. Upon anomaly detection, one-click rollback to the nearest checkpoint is available.

---

## Real Case: Procurement Assistant Agent

A manufacturing client deployed Hermes Agent as a procurement assistant, covering the full workflow from RFQ → comparison → purchase recommendation generation.

**Configuration:**
- RFQ and comparison: Execute-level (automatic execution)
- Purchase recommendation: Suggest-level (draft generated, procurement manager approves)
- Final order placement: Critical-level (CFO + Procurement Director dual-approval)

**Results (3-month data):**
- Procurement cycle: 5.2 days → 1.8 days (↓65%)
- Manual comparison labor saved: 78%
- Zero security incidents (no unauthorized operations)
- Agent recommendation acceptance rate by procurement managers: 91%

---

## The Critical Jump from PoC to Production

Many teams' Agent PoCs look great but fail in production. The root causes are usually:

1. **Imprecise tool descriptions**: Agents rely on semantic understanding of tools; vague descriptions lead to wrong tool selection
2. **Missing error handling**: No retry or fallback logic when external APIs time out or return errors
3. **Lost long-task state**: Container restarts during agent execution, task state not persisted, leading to duplicate execution

Hermes Agent has built-in solutions for all three. We'd love to discuss enterprise deployment practices with you.`,
  },
  {
    slug: 'harness-ai-engineering-quality-2026',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2026-11-05',
    readTimeZh: '8 分钟',
    readTimeEn: '8 min read',
    authorZh: '苏光荣',
    authorEn: 'Su Guangrong',
    authorTitleZh: '资深测试总监',
    authorTitleEn: 'Senior QA Director',
    authorAvatar: '苏',
    authorColor: '#5B8DB8',
    titleZh: 'AI 工程 Harness：用测试工程思维保障大模型交付质量',
    titleEn: 'AI Engineering Harness: Applying Test Engineering Discipline to LLM Delivery Quality',
    excerptZh: '传统软件有单测、集成测试、E2E 测试——但 AI 系统的测试体系长期处于"蛮荒"状态。本文介绍飞凡如何构建 AI 工程 Harness，将模型评测、Prompt 回归、幻觉检测和安全扫描纳入同一条 CI/CD 流水线。',
    excerptEn: 'Traditional software has unit tests, integration tests, and E2E tests — but AI system testing has long been in a "wild west" state. This article explains how Feifan built an AI Engineering Harness, integrating model evaluation, prompt regression, hallucination detection, and security scanning into a single CI/CD pipeline.',
    tagsZh: ['AI测试', 'Harness工程', 'CI/CD', '大模型质量', 'Prompt回归'],
    tagsEn: ['AI Testing', 'Harness Engineering', 'CI/CD', 'LLM Quality', 'Prompt Regression'],
    contentZh: `## AI 系统的质量困境

如果你做过传统软件测试，你会发现 AI 系统质量保障是一个完全不同的战场。

传统软件：给定输入 A，输出必然是 B——可以写精确断言。

AI 系统：给定输入 A，输出可能是 B1、B2、B3……哪个"更好"需要语义判断，而不是字符串比对。

更麻烦的是：**Prompt 改一个字，模型行为可能天翻地覆**；**底层模型升级，原本通过的用例可能全部失效**。

这就是为什么我们需要一套专门的 AI 工程 Harness。

---

## Harness 架构：四条测试轨道

我们设计的 AI 工程 Harness 包含四条并行测试轨道，每次代码或模型变更都会触发全套流水线：

### 轨道一：功能回归（Functional Regression）
维护一个"黄金测试集"（Golden Test Set），覆盖 500+ 典型用户查询，每个查询附带：
- 预期输出的语义描述（不是精确字符串）
- 必须包含的关键词/实体
- 必须不包含的词（例如竞争对手名称、敏感词）

评判方式：LLM-as-Judge（用另一个模型评分）+ 规则校验双重机制，降低评判本身的偏差。

### 轨道二：幻觉检测（Hallucination Detection）
针对 RAG 系统，验证模型回答是否有知识库来源支撑：
\`\`\`
对每条输出，提取声明性事实 → 
在知识库中查找支撑依据 → 
计算"有据可查率"（Groundedness Score）
\`\`\`
当 Groundedness Score < 0.85 时，Pipeline 失败，阻断上线。

### 轨道三：安全扫描（Safety Scan）
自动向系统注入 100 条对抗性 Prompt（越狱尝试、敏感信息诱导、角色扮演攻击），验证系统防御是否有效。安全评分低于阈值即阻断发布。

### 轨道四：性能基准（Performance Benchmark）
在标准负载下（50 QPS 持续 5 分钟）测量：
- P50/P95/P99 延迟
- Token 吞吐量
- 错误率

与 Baseline 对比，性能回退超过 10% 则触发告警，超过 20% 则阻断。

---

## 实践中的关键发现

在过去一年跑了 2000+ 次 CI 流水线后，我们总结了几个反直觉的发现：

**发现1：Prompt 的微小改动是最危险的变更**。改一个词造成的功能回归比底层模型版本升级更频繁。现在 Prompt 变更和代码变更被同等对待，必须走完整测试流水线。

**发现2：LLM-as-Judge 自身也有偏差**。我们发现 GPT-4o 倾向于高分评价长回答，Claude 倾向于高分评价有条理的结构。解决方案：混合使用两个评判模型，取平均分。

**发现3：测试集腐化比代码腐化更快**。半年前设计的测试用例，有约 30% 已不再反映真实用户行为。现在我们每月从生产日志中抽样更新测试集的 5%。

---

## 工具链

我们的 Harness 基于以下工具链构建：
- **流水线引擎**：GitHub Actions + 自研 AI 任务调度器
- **评测框架**：Ragas（RAG 评测）+ DeepEval（通用 LLM 评测）
- **安全扫描**：Garak（开源 LLM 安全测试框架）
- **监控告警**：Grafana + 自定义 LLM 指标 Dashboard

完整 Harness 模板正在整理，计划开源，欢迎关注。`,

    contentEn: `## The Quality Problem with AI Systems

If you've done traditional software testing, you'll find AI system quality assurance is a completely different battleground.

Traditional software: given input A, output is always B — you can write precise assertions.

AI system: given input A, output might be B1, B2, B3… judging which is "better" requires semantic judgment, not string comparison.

Even more challenging: **changing a single word in a prompt can completely flip model behavior**; **upgrading the underlying model can invalidate all previously passing test cases**.

This is why we need a dedicated AI Engineering Harness.

---

## Harness Architecture: Four Test Tracks

Our AI Engineering Harness runs four parallel test tracks triggered by every code or model change:

### Track 1: Functional Regression
Maintain a "Golden Test Set" covering 500+ typical user queries, each with:
- Semantic description of expected output (not exact string)
- Required keywords/entities
- Prohibited words (e.g., competitor names, sensitive terms)

Evaluation: LLM-as-Judge (another model scores) + rule-based validation dual mechanism, reducing evaluation bias.

### Track 2: Hallucination Detection
For RAG systems, verify that model answers are grounded in knowledge base sources:
\`\`\`
For each output, extract factual claims → 
Find supporting evidence in knowledge base → 
Calculate "Groundedness Score"
\`\`\`
When Groundedness Score < 0.85, the pipeline fails and blocks deployment.

### Track 3: Safety Scan
Automatically inject 100 adversarial prompts (jailbreak attempts, sensitive info elicitation, role-play attacks) to verify system defenses. Release is blocked if safety score falls below threshold.

### Track 4: Performance Benchmark
Measure at standard load (50 QPS sustained for 5 minutes):
- P50/P95/P99 latency
- Token throughput
- Error rate

Compared to baseline — alert if performance regresses > 10%, block if > 20%.

---

## Key Counter-intuitive Findings

After running 2000+ CI pipelines over the past year, we identified several counter-intuitive findings:

**Finding 1: Minor prompt changes are the most dangerous.** Single-word prompt changes cause functional regressions more frequently than underlying model version upgrades. Prompt changes now receive the same treatment as code changes — full test pipeline required.

**Finding 2: LLM-as-Judge has its own biases.** We found GPT-4o tends to score longer answers higher, and Claude tends to score well-structured answers higher. Solution: mix two judge models, take the average.

**Finding 3: Test set decay is faster than code decay.** About 30% of test cases designed six months ago no longer reflect real user behavior. We now monthly sample 5% of production logs to refresh the test set.

---

## Toolchain

Our Harness is built on:
- **Pipeline Engine**: GitHub Actions + in-house AI task scheduler
- **Evaluation Framework**: Ragas (RAG evaluation) + DeepEval (general LLM evaluation)
- **Safety Scanner**: Garak (open-source LLM security testing framework)
- **Monitoring**: Grafana + custom LLM metrics dashboard

The complete Harness template is being compiled for open source release. Stay tuned.`,
  },
  {
    slug: 'ai-skills-reusable-capabilities-2026',
    category: 'Technology',
    categoryColor: '#5B8DB8',
    date: '2026-10-28',
    readTimeZh: '7 分钟',
    readTimeEn: '7 min read',
    authorZh: '包季真',
    authorEn: 'Bao Jizhen',
    authorTitleZh: '体验技术负责人',
    authorTitleEn: 'Head of Experience Technology',
    authorAvatar: '包',
    authorColor: '#4A9E7A',
    titleZh: 'AI Skills 工程：构建可复用的智能能力组件',
    titleEn: 'AI Skills Engineering: Building Reusable Intelligent Capability Components',
    excerptZh: 'AI Skills 是 AI 工程从"功能堆砌"走向"体验驱动"的关键一步。本文探讨如何将大模型能力封装为标准化、可组合、可测试的 Skill 组件，让产品团队像搭积木一样构建 AI 功能。',
    excerptEn: 'AI Skills represent a key step from "feature stacking" to "experience-driven" AI engineering. This article explores how to encapsulate LLM capabilities into standardized, composable, and testable Skill components that let product teams build AI features like building blocks.',
    tagsZh: ['AI Skills', '能力组件', '产品工程', '可复用性', 'AI体验'],
    tagsEn: ['AI Skills', 'Capability Components', 'Product Engineering', 'Reusability', 'AI Experience'],
    contentZh: `## 从"模型调用"到"技能封装"

大多数团队在引入 AI 的初期，做法是直接在业务代码里调用 LLM API：

\`\`\`python
response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": user_input}]
)
\`\`\`

这没什么问题——直到你有了第 5 个、第 10 个、第 20 个这样的调用点。这时候你会发现：
- 同样的"摘要生成"能力，写了 7 个不同的版本，质量参差不齐
- Prompt 工程师改了一个通用 Prompt，需要逐个排查影响了哪些业务
- 某个核心能力的 Token 消耗异常，无法定位是哪个调用点造成的

**AI Skills 工程**的核心思想是：把离散的 LLM 调用升级为**有接口契约、有版本管理、有可观测性的能力组件**。

---

## Skill 的标准结构

一个标准的 AI Skill 包含以下要素：

\`\`\`
Skill: DocumentSummarizer
├── metadata.json        # 版本、作者、依赖模型、预期延迟
├── schema.json          # 输入/输出的 JSON Schema 契约
├── prompt.yaml          # Prompt 模板（支持变量注入）
├── config.yaml          # 模型参数（temperature、max_tokens等）
├── validator.py         # 输出验证逻辑
├── tests/               # 回归测试用例
│   ├── test_normal.json
│   └── test_edge.json
└── README.md            # 使用说明、示例、限制
\`\`\`

调用方式从裸调用变为：
\`\`\`python
from skills import DocumentSummarizer

result = DocumentSummarizer.run(
    document=content,
    max_length=200,
    language="zh"
)
# result.text, result.confidence, result.tokens_used
\`\`\`

---

## Skill 注册表：让能力可发现

单个 Skill 做好了还不够，企业需要一个 **Skill Registry**——一个让全公司产品团队都能搜索、发现、订阅 AI 能力的"内部 npm"。

Skill Registry 的核心功能：
1. **搜索与发现**：按能力类型、适用场景、支持语言过滤
2. **版本管理**：语义化版本（SemVer），支持灰度发布
3. **使用统计**：谁在用、调用量、平均延迟、错误率
4. **订阅通知**：当依赖的 Skill 发布新版本或废弃旧版本时，自动通知使用方

我们在飞凡内部维护了一个包含 **47 个核心 Skill** 的注册表，涵盖：文档处理、对话理解、内容生成、数据分析、代码辅助五大类。

---

## Skill 组合：复杂能力的积木式构建

Skills 的真正威力在于**组合**。复杂的 AI 功能可以通过编排多个基础 Skill 实现，无需每次从头构建：

**示例：合同智能审核流水线**
\`\`\`
DocumentParser (Skill)
    ↓
ContractStructureExtractor (Skill)
    ↓
ClauseClassifier (Skill)    → RiskFlagDetector (Skill)
                                        ↓
                            ComplianceChecker (Skill)
                                        ↓
                              SummaryGenerator (Skill)
\`\`\`

每个 Skill 独立开发、独立测试、独立版本管理，但可以像函数一样组合使用。当某个 Skill 需要升级时，只需替换对应节点，不影响整体流水线。

---

## 给产品经理的 AI Skills 思维框架

如果你是产品经理，在设计 AI 功能时，可以用这个思维框架：

1. **识别原子能力**：这个功能的核心 AI 能力是什么？（分类/提取/生成/推理）
2. **检查现有 Skill**：Registry 中是否已有可复用的组件？
3. **定义 Skill 边界**：若需新建，边界是否清晰？输入/输出契约是否明确？
4. **规划组合方式**：多个 Skill 如何串联/并联？
5. **设计降级策略**：当核心 Skill 失败时，产品体验的兜底方案是什么？

AI 产品的质量，很大程度上取决于 Skill 层的工程质量。`,

    contentEn: `## From "Model Calls" to "Skill Encapsulation"

Most teams, when first introducing AI, directly call LLM APIs in business code:

\`\`\`python
response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": user_input}]
)
\`\`\`

This works fine — until you have the 5th, 10th, 20th such call site. Then you discover:
- The same "summary generation" capability has 7 different versions with inconsistent quality
- A prompt engineer changed a shared prompt and needs to hunt down every affected business flow
- Token usage for a core capability spikes abnormally, with no way to pinpoint which call site caused it

The core idea of **AI Skills engineering** is: upgrade discrete LLM calls into **capability components with interface contracts, version management, and observability**.

---

## Standard Skill Structure

A standard AI Skill contains:

\`\`\`
Skill: DocumentSummarizer
├── metadata.json        # Version, author, model dependency, expected latency
├── schema.json          # Input/output JSON Schema contract
├── prompt.yaml          # Prompt template (supports variable injection)
├── config.yaml          # Model parameters (temperature, max_tokens, etc.)
├── validator.py         # Output validation logic
├── tests/               # Regression test cases
│   ├── test_normal.json
│   └── test_edge.json
└── README.md            # Usage instructions, examples, limitations
\`\`\`

Invocation changes from raw calls to:
\`\`\`python
from skills import DocumentSummarizer

result = DocumentSummarizer.run(
    document=content,
    max_length=200,
    language="en"
)
# result.text, result.confidence, result.tokens_used
\`\`\`

---

## Skill Registry: Making Capabilities Discoverable

A great individual Skill isn't enough — enterprises need a **Skill Registry**: an "internal npm" where all product teams can search, discover, and subscribe to AI capabilities.

Core Skill Registry features:
1. **Search & Discovery**: Filter by capability type, use case, supported languages
2. **Version Management**: Semantic versioning (SemVer), supports canary releases
3. **Usage Analytics**: Who's using it, call volume, average latency, error rate
4. **Subscription Notifications**: Auto-notify consumers when dependent Skills release new versions or deprecate old ones

Feifan maintains an internal registry of **47 core Skills** across five categories: document processing, dialogue understanding, content generation, data analysis, and code assistance.

---

## Skill Composition: Building Complex Capabilities Like Lego

The real power of Skills lies in **composition**. Complex AI features can be built by orchestrating multiple base Skills, without building from scratch each time:

**Example: Contract Intelligent Review Pipeline**
\`\`\`
DocumentParser (Skill)
    ↓
ContractStructureExtractor (Skill)
    ↓
ClauseClassifier (Skill)    → RiskFlagDetector (Skill)
                                        ↓
                            ComplianceChecker (Skill)
                                        ↓
                              SummaryGenerator (Skill)
\`\`\`

Each Skill is independently developed, tested, and version-managed, but can be composed like functions. When a Skill needs upgrading, only that node needs replacement — the overall pipeline remains intact.

---

## AI Skills Mental Framework for Product Managers

If you're a product manager designing AI features, use this framework:

1. **Identify atomic capabilities**: What is the core AI capability? (classification / extraction / generation / reasoning)
2. **Check existing Skills**: Are there reusable components in the Registry?
3. **Define Skill boundaries**: If building new, are the boundaries clear? Is the input/output contract explicit?
4. **Plan composition**: How will multiple Skills be chained/parallelized?
5. **Design fallback strategies**: What is the product experience fallback when a core Skill fails?

The quality of AI products largely depends on the engineering quality of the Skill layer.`,
  },
  {
    slug: 'ai-engineering-delivery-2026',
    category: 'Industry',
    categoryColor: '#7B6FA0',
    date: '2026-09-08',
    readTimeZh: '10 分钟',
    readTimeEn: '10 min read',
    authorZh: '王森贤',
    authorEn: 'Wang Shenxian',
    authorTitleZh: '资深项目管理专家',
    authorTitleEn: 'Senior Project Management Expert',
    authorAvatar: '王',
    authorColor: '#7B6FA0',
    titleZh: 'AI 工程交付体系：从需求到上线的全链路管控',
    titleEn: 'AI Engineering Delivery System: End-to-End Governance from Requirements to Launch',
    excerptZh: 'AI 项目交付与传统软件项目有根本性差异——需求模糊、验收标准不清、模型行为不确定。本文分享飞凡历经 30+ AI 项目沉淀的交付体系，覆盖立项、研发、测试、上线、运营的全生命周期管控方法。',
    excerptEn: 'AI project delivery differs fundamentally from traditional software: requirements are ambiguous, acceptance criteria are unclear, and model behavior is non-deterministic. This article shares Feifan\'s delivery system refined across 30+ AI projects, covering the full lifecycle from initiation to operations.',
    tagsZh: ['AI工程交付', '项目管理', '全生命周期', '敏捷', 'AI治理'],
    tagsEn: ['AI Delivery', 'Project Management', 'Full Lifecycle', 'Agile', 'AI Governance'],
    contentZh: `## AI 项目失败的真实原因

在我主导或参与的 AI 交付项目中，失败案例有一个惊人的共同点——**不是模型不够好，而是交付体系不完善**。

具体表现为：
- 立项阶段需求模糊，"做一个智能客服"——没有量化指标
- 研发阶段模型评测凭感觉，没有标准化 Benchmark
- 验收阶段客户说"感觉不对"，研发说"指标都达标了"——双方语境不同
- 上线后没有监控，系统悄悄劣化两个月才被发现

这不是技术问题，是**工程管理问题**。

---

## AI 项目的五阶段交付框架

### 阶段一：业务洞察（Business Discovery）— 2 周

这是最容易被跳过、也是最关键的阶段。

**核心产出：**
1. **AI 价值画布**：明确 AI 解决哪个具体业务痛点、预期带来什么可量化的业务价值
2. **成功指标定义**：至少 3 个可量化 KPI（例如：人工处理时长降低 30%、首答准确率 > 85%、月均成本节省 > 50 万）
3. **数据摸底报告**：现有数据的质量、规模、可获取性评估

**常见陷阱：** 客户说"我们想要 AI 转化率提升"，但说不清楚当前转化率是多少、转化链路在哪里。这时候宁可多花一周调研，也不要带着模糊需求开工。

---

### 阶段二：原型验证（Prototype Validation）— 3 周

**目标：** 用最小成本验证核心技术假设。

**关键规则：**
- 只验证**最高风险的技术假设**，不做完整功能
- 测试数据必须来自真实生产样本，不用构造数据
- 原型验证结果必须量化，给出数字，不给主观评价

**验证矩阵示例：**
| 技术假设 | 验证方法 | 通过门槛 | 结果 |
|---------|---------|---------|------|
| 领域 ASR 准确率可达 95% | 200条真实录音测试 | WER < 5% | 通过 ✓ |
| RAG 首答准确率 > 80% | 100条典型问题测评 | Accuracy > 80% | 未通过 ✗ |
| 平均响应延迟 < 2s | 压测 50 QPS | P95 < 2s | 通过 ✓ |

当原型验证有关键项未通过时，重新评估技术路线，而不是硬推进入正式研发。

---

### 阶段三：工程化研发（Engineering Development）— 迭代进行

采用两周 Sprint 节奏，但与传统软件迭代有几个关键差异：

**AI 专属 Sprint 仪式：**
- **模型评测会（每 Sprint 一次）**：Review Benchmark 趋势，决定是否触发 Prompt 调整或微调
- **数据治理周报**：监控训练/测试数据质量，及时发现数据污染
- **幻觉分析例会（每两周）**：汇总线上错误案例，分类归因，指导下一步优化

**Definition of Done（AI 专属）：**
- [ ] 功能代码 Code Review 通过
- [ ] Benchmark 达到预设阈值
- [ ] Prompt 回归测试全部通过
- [ ] 安全扫描无高危项
- [ ] 可观测性埋点完成（延迟、Token 消耗、错误率）

---

### 阶段四：验收交付（Acceptance & Delivery）

**解决"感觉不对" vs "指标达标"的核心矛盾：**

在立项阶段定义指标后，还需要在阶段一结束时与客户联合标注 50–100 个"验收样本"——这些样本代表客户心目中"好"的回答是什么样的。

验收时对照这批样本评分，而不是用研发团队自己标注的测试集。

**验收流程：**
1. 研发侧提供量化报告（所有 KPI vs 目标值）
2. 客户侧在验收样本集上盲评（不看模型输出，只看业务结果）
3. 双方对照验收样本集联合 Review 分歧点
4. 形成书面验收意见，明确遗留问题和优化计划

---

### 阶段五：持续运营（Continuous Operations）

AI 系统不同于传统软件——**上线只是开始，不是结束**。

**运营监控体系（七项指标）：**

| 指标 | 监控频率 | 告警阈值 |
|------|---------|---------|
| 用户满意度（CSAT） | 每日 | 周均下降 > 5% |
| 首答解决率 | 每日 | 低于基线 > 3pp |
| 平均响应延迟 | 实时 | P95 > 3s |
| 幻觉率（抽样） | 每周 | > 8% |
| Token 成本 | 每日 | 超预算 20% |
| 知识库覆盖率 | 每周 | 低于 80% |
| 模型漂移指数 | 每月 | 显著偏移触发重评 |

当任一指标触发告警，立即启动根因分析，而不是等到用户投诉。

---

## 最后：AI 交付需要"翻译官"

在我看来，AI 项目交付中最被低估的角色是**AI 产品经理**——他们需要同时说业务语言和技术语言，在客户的模糊需求和工程团队的量化指标之间充当翻译官。

没有这个角色，AI 项目的交付成功率会大幅降低。这是我在 30+ 个项目中观察到的最一致的规律。`,

    contentEn: `## The Real Reasons AI Projects Fail

Across the AI delivery projects I've led or participated in, failed cases share a striking common thread — **it's not that the model isn't good enough; it's that the delivery system is incomplete**.

Specific manifestations:
- Vague requirements at project inception: "build an intelligent customer service" — no quantified metrics
- Model evaluation during development goes by gut feeling, no standardized benchmarks
- At acceptance: client says "something feels off," engineers say "all metrics are met" — they're speaking different languages
- Post-launch, no monitoring — system quietly degrades for two months before anyone notices

This isn't a technical problem. It's an **engineering management problem**.

---

## Five-Phase AI Project Delivery Framework

### Phase 1: Business Discovery — 2 weeks

The most easily skipped and most critical phase.

**Core outputs:**
1. **AI Value Canvas**: Clearly define which specific business pain point AI solves and what quantifiable business value is expected
2. **Success Metric Definition**: At least 3 quantifiable KPIs (e.g., manual processing time reduced 30%, first-answer accuracy > 85%, monthly cost savings > ¥500K)
3. **Data Audit Report**: Assessment of existing data quality, scale, and accessibility

**Common pitfall:** The client says "we want AI to improve conversion rate" but can't tell you the current conversion rate or where the conversion funnel is. Better to spend an extra week on research than start with ambiguous requirements.

---

### Phase 2: Prototype Validation — 3 weeks

**Goal:** Validate core technical assumptions at minimum cost.

**Key rules:**
- Only validate **the highest-risk technical assumptions**, not full functionality
- Test data must come from real production samples, not synthetic data
- Prototype results must be quantified — give numbers, not subjective assessments

**Validation Matrix Example:**
| Technical Assumption | Validation Method | Pass Threshold | Result |
|---------------------|------------------|----------------|--------|
| Domain ASR accuracy ≥ 95% | 200 real recordings | WER < 5% | Pass ✓ |
| RAG first-answer accuracy > 80% | 100 typical questions | Accuracy > 80% | Fail ✗ |
| Avg response latency < 2s | Load test 50 QPS | P95 < 2s | Pass ✓ |

When critical prototype items fail, re-evaluate the technical approach rather than forcing progression to full development.

---

### Phase 3: Engineering Development — Iterative

Use two-week Sprint cadence, with key differences from traditional software iteration:

**AI-Specific Sprint Ceremonies:**
- **Model Evaluation Meeting (once per Sprint)**: Review Benchmark trends, decide whether to trigger prompt adjustments or fine-tuning
- **Data Governance Weekly**: Monitor training/test data quality, detect data contamination early
- **Hallucination Analysis Bi-weekly**: Aggregate production error cases, classify root causes, guide next optimization

**Definition of Done (AI-Specific):**
- [ ] Feature code passes Code Review
- [ ] Benchmark meets preset thresholds
- [ ] All prompt regression tests pass
- [ ] Security scan shows no high-severity items
- [ ] Observability instrumentation complete (latency, token usage, error rate)

---

### Phase 4: Acceptance & Delivery

**Resolving the "feels wrong" vs. "metrics met" conflict:**

After defining metrics at project inception, also jointly annotate 50–100 "acceptance samples" with the client at the end of Phase 1 — representing what the client considers a "good" answer.

At acceptance, score against these samples rather than the engineering team's own test set.

**Acceptance Process:**
1. Engineering team provides quantitative report (all KPIs vs. targets)
2. Client team blind-scores on acceptance sample set (evaluating business outcomes, not model outputs)
3. Both sides jointly review discrepancy points against acceptance samples
4. Formalize written acceptance opinion with explicit remaining issues and optimization plan

---

### Phase 5: Continuous Operations

AI systems differ from traditional software — **launch is the beginning, not the end**.

**Operations Monitoring System (Seven Metrics):**

| Metric | Monitoring Frequency | Alert Threshold |
|--------|---------------------|-----------------|
| User Satisfaction (CSAT) | Daily | Weekly avg decline > 5% |
| First-Contact Resolution Rate | Daily | Below baseline > 3pp |
| Average Response Latency | Real-time | P95 > 3s |
| Hallucination Rate (sampled) | Weekly | > 8% |
| Token Cost | Daily | Over budget 20% |
| Knowledge Base Coverage Rate | Weekly | Below 80% |
| Model Drift Index | Monthly | Significant deviation triggers re-evaluation |

When any metric triggers an alert, immediately initiate root cause analysis — don't wait for user complaints.

---

## Finally: AI Delivery Needs a "Translator"

In my experience, the most undervalued role in AI project delivery is the **AI Product Manager** — someone who can speak both business and technical language, acting as a translator between client ambiguity and engineering team quantification.

Without this role, the success rate of AI project delivery drops significantly. This is the most consistent pattern I've observed across 30+ projects.`,
  },
]
