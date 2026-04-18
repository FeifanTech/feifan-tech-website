// Static blog data shared between Blog.jsx and BlogPost.jsx
export const POSTS = [
  {
    slug: 'open-source-dify-virtual-try-on-workflow-2026',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2026-04-18',
    readTimeZh: '9 分钟',
    readTimeEn: '9 min read',
    authorZh: '六合',
    authorEn: 'Liu He',
    authorTitleZh: '资深交付总监',
    authorTitleEn: 'Senior Delivery Director',
    authorAvatar: '六',
    authorColor: '#B85C35',
    titleZh: '开源模型 + Dify 实现 AI 试衣换装：一条更适合业务落地的工作流',
    titleEn: 'Open-Source Models + Dify for AI Virtual Try-On: A Workflow Better Suited to Production',
    excerptZh: '如果说试衣换装的核心难点在于视觉生成，那么真正让它走向业务的关键，则在于如何把开源模型、任务编排、审核兜底和交付流程连成一条稳定工作流。本文分享我们更偏工程化的一种实现路径。',
    excerptEn: 'If visual generation is the core challenge of virtual try-on, the real step toward production is building a stable workflow across open-source models, task orchestration, review gates, and delivery logic. This article shares a more engineering-oriented implementation path.',
    tagsZh: ['Dify', '开源模型', 'AI试衣', '工作流编排', '低代码AI'],
    tagsEn: ['Dify', 'Open-Source Models', 'Virtual Try-On', 'Workflow Orchestration', 'Low-Code AI'],
    contentZh: `## 为什么我们会考虑“开源模型 + 工作流平台”的组合

做 AI 试衣换装时，团队通常会先盯着最显眼的那一层：生成效果。

但如果目标从 Demo 变成业务可用，真正的问题会很快转向另外几类：
- 用户输入怎么收集
- 多个模型怎么串起来
- 哪些步骤可以自动化，哪些需要人工审核
- 失败任务怎么回退、重试和通知
- 最终结果怎么回写到业务系统

也正因为如此，我们越来越倾向于把“开源视觉模型”与“低代码 AI 工作流平台”分开看待：  
前者负责能力，后者负责流程。

在这个组合里，Dify 这类工作流平台的价值，不是替代底层模型，而是把原本散落的多个步骤，组织成一条可配置、可观察、可扩展的执行链。

---

## 一条典型的试衣换装工作流如何拆分

如果从业务实现角度拆，我们会把整条链路分成五段：

### 1. 输入接入
用户上传人物图和服装图，选择换装类别、风格或输出比例。  
这一步看起来简单，但实际要同时做：
- 文件合法性校验
- 尺寸与分辨率限制
- 人像与服装图的基础质量判断

### 2. 视觉预处理
这里通常由开源模型完成，包括：
- 人体检测 / 分割
- 姿态估计
- 服装区域解析
- 遮挡判断

这一步输出的不是最终图片，而是一组中间条件，用来喂给后续的 try-on 模型。

### 3. 试衣生成
核心生成阶段通常会依赖开源虚拟试衣或图像编辑模型。  
实践里我们更关心的不是“某个模型是否最火”，而是：
- 是否支持稳定的条件输入
- 对服装纹理是否保真
- 推理显存和时间是否可接受
- 能否做局部重绘或多轮 refinement

### 4. 质量判断与审核分流
不是每次生成都应直接返回给用户。  
对于明显异常的结果，可以自动拦截，或进入人工审核队列。

### 5. 结果交付
最终结果还要考虑：
- 存储地址
- 任务状态回写
- 成功/失败通知
- 历史记录与再次编辑入口

这五段拼起来，才是一条业务链路；只做中间生成，仍然只是一个视觉 Demo。

---

## 开源模型在这条链路里适合承担什么

我们更倾向于把开源模型分成三层来使用：

### 第一层：感知模型
负责看懂输入，包括人体解析、关键点检测、服装掩码生成。  
这类模型决定的是“后面有没有正确条件可用”。

### 第二层：生成模型
负责真正的换装输出。  
这里可能是专门的虚拟试衣模型，也可能是经过条件控制和 LoRA 微调后的图像生成模型。

### 第三层：辅助判断模型
负责质量打分、异常分类、描述生成，或者给审核员提供解释信息。

把这三层拆开有一个好处：可以按需替换，而不是把所有问题都压在一个大模型上。

---

## Dify 在这里最有价值的，不是“低代码”，而是编排

很多人一听到 Dify，会先想到“给业务同学用的低代码平台”。  
但在这类多步骤视觉任务里，它真正值得用的地方其实是工作流编排：

### 1. 统一入口
把表单输入、文件参数、业务上下文整理成结构化变量。

### 2. 节点化组织
预处理、生成、审核、通知这些阶段可以拆成不同节点，便于独立调试。

### 3. 条件路由
例如：
- 分辨率过低 → 直接拒绝
- 置信度不足 → 进入人工审核
- 生成成功 → 自动回写并通知

### 4. 审计与排错
当任务失败时，至少可以快速知道卡在：
- 输入校验
- 模型调用
- 中间结果解析
- 结果交付

这类透明度，对交付团队非常重要。

---

## 一个更现实的落地架构

如果要用开源模型 + Dify 做一版能跑且能运维的系统，我们更推荐这样的职责划分：

### Dify 负责：
- 表单与任务入口
- 工作流编排
- 条件分流
- 任务状态管理
- 基础日志与回调

### 独立推理服务负责：
- GPU 推理
- 模型版本管理
- 图像预处理与后处理
- 批量任务队列
- 失败重试策略

### 业务系统负责：
- 用户身份与权限
- 订单、商品或素材记录
- 结果展示与历史查询
- 审核员后台

这样分层的好处是，Dify 用来组织流程，而不是硬扛所有高负载视觉推理逻辑。

---

## 最容易踩的几个坑

### 1. 以为 Dify 能替代推理系统
它适合编排，不适合直接承担复杂 GPU 服务本身。

### 2. 只测效果，不测吞吐
试衣任务在线上往往是排队型负载，峰值时延会迅速放大。

### 3. 没有异常兜底
人物遮挡严重、服装图不规范、模型超时，这些情况必须进入降级流程。

### 4. 审核流程缺失
只要结果会进入商品详情、广告素材或客户可见页面，就不能假设每张图都适合自动放行。

---

## 为什么这条路线值得做

开源模型 + Dify 的组合，最大的优势不一定是“最强效果”，而是：
- 成本结构更可控
- 可替换性更强
- 工作流更容易按业务需求调整
- 更适合从 PoC 慢慢走向系统化交付

对很多企业来说，真正重要的不是一次性做出最惊艳的效果，而是能不能在预算、效率和治理之间取得平衡。

---

## 结语

AI 试衣换装要想真正进入业务，不能只看模型，还必须看流程。

开源模型提供核心视觉能力，Dify 负责把输入、编排、审核、通知和交付组织起来。只有当这两层配合好，虚拟试衣才更可能从一个技术点子，变成一个能持续运行的业务能力。`,

    contentEn: `## Why We Consider the Combination of Open-Source Models and a Workflow Platform

When teams build AI virtual try-on, they usually focus first on the most visible layer: generation quality.

But once the goal moves from demo to production, the critical questions shift quickly:
- how user inputs are collected
- how multiple models are chained together
- which steps can be automated and which require review
- how failed tasks are retried, downgraded, or escalated
- how results are written back into the business system

That is why we increasingly treat open-source visual models and low-code AI workflow platforms as two different layers:  
the former provides capability, the latter provides process.

In that setup, Dify’s value is not to replace the underlying models. It is to organize scattered steps into a configurable, observable, and extensible execution chain.

---

## How a Typical Try-On Workflow Breaks Down

From a delivery perspective, we usually split the pipeline into five stages:

### 1. Input intake
Users upload a person image and a garment image, then choose category, style, or aspect ratio.  
Even this first step requires:
- file validation
- size and resolution constraints
- basic quality checks on the person and garment images

### 2. Visual preprocessing
This is usually handled by open-source models, including:
- human detection and segmentation
- pose estimation
- garment parsing
- occlusion judgment

The output here is not the final image. It is a set of intermediate conditions for the try-on stage.

### 3. Try-on generation
The core generation stage typically depends on open-source virtual try-on or image-editing models.  
In practice, we care less about whether a model is trendy and more about:
- stable conditioning support
- garment texture fidelity
- acceptable inference time and GPU memory usage
- support for local refinement or multi-pass generation

### 4. Quality judgment and review routing
Not every generated result should go directly to the user.  
Obvious failures can be intercepted automatically or sent into a human review queue.

### 5. Result delivery
The final stage must still handle:
- storage location
- task state updates
- success and failure notification
- history and re-edit entry points

Only when these five parts connect do you have a business workflow. Generation alone is still a visual demo.

---

## What Open-Source Models Should Handle in This Stack

We prefer to use open-source models in three layers:

### Layer 1: Perception models
These understand the inputs, including human parsing, keypoint detection, and garment mask generation.  
They determine whether the system has usable conditions for downstream generation.

### Layer 2: Generation models
These produce the actual try-on output.  
That may be a specialized virtual try-on model, or an image generation model adapted through conditional control and fine-tuning.

### Layer 3: Auxiliary judgment models
These help score quality, classify failures, generate descriptions, or support reviewers with explanation.

Separating the layers makes replacement much easier instead of forcing one large model to do everything.

---

## Dify’s Real Value Here Is Orchestration, Not Just “Low Code”

When people hear Dify, they often think first of a low-code platform for business users.  
In multi-step visual workloads, however, the most valuable part is workflow orchestration:

### 1. Unified entry
Form inputs, file parameters, and business context can be normalized into structured variables.

### 2. Node-based composition
Preprocessing, generation, review, and notification can be split into nodes and debugged independently.

### 3. Conditional routing
For example:
- low resolution → reject directly
- low confidence → route to human review
- generation success → write back automatically and notify

### 4. Auditability and debugging
When a task fails, teams can quickly see whether the issue happened in:
- input validation
- model invocation
- intermediate result parsing
- result delivery

That level of transparency is very important for delivery teams.

---

## A More Practical Delivery Architecture

If you want a system based on open-source models plus Dify that can actually run and be operated, we recommend a division like this:

### Dify handles:
- form and task entry
- workflow orchestration
- conditional routing
- task state management
- basic logging and callbacks

### Dedicated inference services handle:
- GPU inference
- model version management
- image pre- and post-processing
- queued batch tasks
- retry strategies

### The business system handles:
- user identity and access control
- order, product, or asset records
- result presentation and history
- reviewer back office

This separation lets Dify organize workflows without forcing it to carry heavy visual inference responsibilities.

---

## Common Pitfalls

### 1. Assuming Dify can replace the inference system
It is good at orchestration, not at being the GPU serving layer itself.

### 2. Testing image quality without testing throughput
Try-on workloads often become queue-heavy online, and peak latency grows fast.

### 3. Missing fallback logic
Severe occlusion, bad garment images, or model timeouts must flow into downgrade paths.

### 4. Skipping review
If results appear in product pages, campaign assets, or any customer-facing surface, you should not assume every image deserves automatic release.

---

## Why This Route Is Worth Building

The main advantage of open-source models plus Dify is not necessarily “the best possible visual quality.” It is:
- more controllable cost structure
- stronger replaceability
- easier workflow adaptation to business needs
- a better path from PoC to operational delivery

For many teams, the real goal is not one spectacular output. It is a sustainable balance across cost, speed, and governance.

---

## Closing Thought

To bring AI virtual try-on into real business, you cannot look only at models. You must look at workflow.

Open-source models provide the core visual capability. Dify organizes intake, orchestration, review, notification, and delivery. Only when those two layers fit together does virtual try-on begin to look like a real operating capability rather than a technical curiosity.`,
  },
  {
    slug: 'ai-virtual-try-on-technical-sharing-2026',
    category: 'Technology',
    categoryColor: '#5B8DB8',
    date: '2026-04-19',
    readTimeZh: '8 分钟',
    readTimeEn: '8 min read',
    authorZh: '六合',
    authorEn: 'Liu He',
    authorTitleZh: '资深交付总监',
    authorTitleEn: 'Senior Delivery Director',
    authorAvatar: '六',
    authorColor: '#B85C35',
    titleZh: 'AI 试衣换装技术分享：从“生成一张图”到“交付可上线能力”',
    titleEn: 'AI Virtual Try-On: From Generating an Image to Shipping a Production Capability',
    excerptZh: 'AI 试衣换装看起来像一个“图像生成”问题，但真正做进业务后才会发现，它同时是一个人体建模、服装理解、条件生成和性能优化问题。本文分享我们对这条技术链路的拆解。',
    excerptEn: 'AI virtual try-on looks like an image generation problem, but once you move it into production it becomes a combined problem of human parsing, garment understanding, conditioned generation, and performance engineering. This article breaks down that full stack.',
    tagsZh: ['AI试衣', '虚拟换装', '计算机视觉', '图像生成', '电商AI'],
    tagsEn: ['Virtual Try-On', 'Fashion AI', 'Computer Vision', 'Image Generation', 'E-commerce AI'],
    contentZh: `## 试衣换装为什么比想象中难

很多人第一次看到 AI 试衣换装，会觉得它本质上就是“把一件衣服 P 到人身上”。但只要真正做过项目，就会很快发现这不是简单的图像叠加，而是一条很长的技术链路。

一个看起来自然的换装结果，至少要同时满足四件事：
- 人体姿态不能崩
- 服装结构不能错
- 面料纹理要尽量保真
- 最终结果还要像真实照片，而不是 AI 痕迹很重的合成图

这意味着虚拟试衣不是一个单点模型问题，而是多个子系统共同工作的结果。

---

## 一条完整的技术链路通常包含什么

从工程视角看，虚拟换装一般会拆成以下几个阶段：

### 1. 人体检测与人体解析
先识别人物区域，再把头发、上衣、裤子、手臂、腿等部位分开。  
如果这一步不准，后面的换装几乎一定会穿帮，例如袖口压到手臂、衣摆遮挡关系错误。

### 2. 姿态估计与关键点对齐
模型需要知道肩、肘、腰、膝等关键位置，才能判断目标服装在当前姿态下应该如何形变。  
同一件衣服在站立、转身、抬手时的受力和褶皱完全不同。

### 3. 服装图像理解
不仅要识别这是一件“上衣”或“连衣裙”，还要理解：
- 版型
- 长短
- 领口形态
- 纹理和图案
- 遮挡区域

对电商场景来说，这一步尤其重要，因为用户最敏感的往往就是“花纹变了”“版型不像”“logo 不对”。

### 4. 条件生成与细节修复
生成模型会在人体、姿态和服装条件约束下产出试穿图，再通过局部修复或超分增强细节。  
如果只追求整体自然，很容易牺牲服装细节；如果只追求服装保真，人物脸部和肢体又容易失真。

---

## 真正难的地方，是一致性

AI 试衣最常见的失败，并不是“完全生成错”，而是局部不一致：
- 左右袖长不一致
- 扣子数量变化
- 领口边缘糊掉
- 图案被拉伸变形
- 衣服下摆和人体遮挡关系错误

这些问题之所以难，是因为它们不一定会在低分辨率预览里暴露出来，但一旦放到商品详情页或营销素材里，就非常明显。

所以试衣换装项目真正要关注的，不只是“能不能生成”，而是这三个一致性：
1. **结构一致性**：衣服轮廓、版型、关键部件稳定
2. **纹理一致性**：图案、材质、颜色不过度漂移
3. **身份一致性**：人物脸部、发型、体态不要被模型偷偷改掉

---

## 从模型 Demo 到业务上线，中间还差哪些工程工作

很多团队会在 Demo 阶段得到一批效果不错的样例图，然后误以为已经“快能上线了”。实际上，上线前往往还有四道坎：

### 1. 数据集建设
需要覆盖不同体型、姿态、服装类别、拍摄角度和光照环境。  
如果训练/测试样本过于单一，模型在线上会迅速失真。

### 2. 评测体系
不能只靠人工主观打分。通常需要同时看：
- 人体区域保真度
- 服装纹理相似度
- 关键点误差
- 用户点击/停留/转化表现

### 3. 推理性能
试衣换装是强视觉任务，推理成本通常不低。  
如果单次生成需要 8~15 秒，用户大概率不会等；如果压缩得太狠，效果又会明显下降。

### 4. 异常兜底
并不是每张图都适合自动换装。  
对于遮挡过重、姿态过极端、图像分辨率过低的输入，系统应该主动拒绝、提示重拍，而不是硬生成一张错误结果。

---

## 适合优先落地的业务场景

我们更看好这几类先落地：
- 电商商品详情页的试穿预览
- 营销投放素材快速生成
- 门店导购场景的虚拟试衣体验
- 设计打样阶段的款式预览

这些场景有一个共同点：都希望降低拍摄和制作成本，同时缩短内容生产周期。

但如果要直接用于高价值、高精度的正式商业主图，仍然需要更严格的质检与人工审核。

---

## 我们的判断：这会是“CV + 生成式 AI”结合最实用的方向之一

AI 试衣换装之所以值得关注，不只是因为它好看，而是因为它非常贴近实际业务：
- 对电商有直接转化价值
- 对服饰品牌有内容生产价值
- 对门店有体验升级价值

它不是一个只适合展示的炫技功能，而是一个很可能进入真实业务链条的 AI 能力。

---

## 结语

做虚拟试衣，真正的挑战从来不是“生成一张漂亮图片”，而是如何在真实业务里长期稳定地产出可信结果。

从人体解析、姿态建模，到服装保真、推理性能和异常兜底，这条链路一环都不能少。只有把这些工程问题都补齐，AI 换装才可能从 Demo 走向产品。`,

    contentEn: `## Why Virtual Try-On Is Harder Than It Looks

The first impression many people have of AI virtual try-on is that it is basically “put one garment onto one person.” In practice, anyone who has worked on a real project quickly discovers that it is not a simple overlay problem at all.

For a try-on result to feel believable, at least four things must hold at the same time:
- the human pose cannot break
- the garment structure cannot drift
- the fabric texture should stay as faithful as possible
- the final image must still look like a photo rather than an obvious synthetic composition

That means virtual try-on is not a single-model problem. It is the result of several subsystems working together.

---

## What a Full Technical Pipeline Usually Includes

From an engineering perspective, virtual try-on is usually broken into several stages:

### 1. Human detection and human parsing
First detect the person, then separate hair, top, pants, arms, legs, and other body regions.  
If this step is weak, the final try-on almost always fails through wrong occlusion or broken sleeve placement.

### 2. Pose estimation and keypoint alignment
The system needs shoulders, elbows, waist, knees, and other keypoints to understand how a garment should deform under the current pose.  
The same garment behaves very differently in standing, turning, or raised-arm postures.

### 3. Garment understanding
It is not enough to know that something is a shirt or a dress. The model must also understand:
- silhouette
- length
- neckline shape
- texture and pattern
- occluded regions

In e-commerce scenarios this matters a lot, because users notice immediately when the pattern changes, the cut looks wrong, or the logo moves.

### 4. Conditioned generation and detail refinement
The generative model produces the try-on image under human, pose, and garment constraints, then often uses local refinement or super-resolution to recover detail.  
If you optimize only for realism, garment fidelity drops. If you optimize only for garment fidelity, the person often becomes distorted.

---

## The Real Difficulty Is Consistency

The most common virtual try-on failures are not complete collapse. They are local inconsistencies:
- sleeve lengths mismatch
- button counts change
- neckline edges blur
- patterns stretch unnaturally
- lower hem and body occlusion look wrong

These are difficult because they may not be obvious in low-resolution previews, but become very visible in product pages and marketing assets.

That is why production try-on systems must care about three kinds of consistency:
1. **structural consistency**: silhouette, garment parts, and key shapes remain stable
2. **texture consistency**: pattern, material, and color do not drift too far
3. **identity consistency**: the person’s face, hair, and body should not be unintentionally altered

---

## What Still Separates a Demo from Production

Many teams generate a few strong samples in a demo and assume they are close to launch. In practice, production still requires at least four additional layers of work:

### 1. Dataset construction
You need coverage across body types, poses, garment categories, camera angles, and lighting conditions.  
If the training and test sets are narrow, online quality falls apart quickly.

### 2. Evaluation
Subjective scoring is not enough. Teams usually need to track:
- human-region fidelity
- garment texture similarity
- keypoint error
- user behavior metrics such as click-through, dwell, or conversion

### 3. Inference performance
Virtual try-on is a heavy visual workload, so inference is often expensive.  
If one generation takes 8 to 15 seconds, most users will not wait. If the model is compressed too aggressively, quality drops visibly.

### 4. Failure fallback
Not every image is a good candidate for automatic try-on.  
For severe occlusion, extreme pose, or very low resolution, the system should reject gracefully and ask for a better image instead of forcing a bad result.

---

## Business Scenarios That Make Sense First

We see the strongest near-term fit in:
- e-commerce try-on previews on product pages
- fast generation of campaign assets
- in-store guided virtual fitting experiences
- early-stage style preview during design sampling

These scenarios all share the same goal: reduce content-production cost while shortening visual production cycles.

For high-value official hero assets, however, stricter review and human quality control are still necessary.

---

## Our View: This Will Be One of the Most Practical Intersections of CV and Generative AI

Virtual try-on matters not only because it looks impressive, but because it maps directly to business value:
- direct impact on e-commerce conversion
- lower content production cost for fashion brands
- stronger in-store digital experience

It is not just a showcase feature. It is a capability that can plausibly enter real business workflows.

---

## Closing Thought

The real challenge in virtual try-on has never been generating a pretty image once. It is producing trustworthy results consistently in a live business environment.

From human parsing and pose modeling to garment fidelity, inference speed, and fallback handling, every part of the chain matters. Only when those engineering problems are solved does AI wardrobe change move from demo to product.`,
  },
  {
    slug: 'ai-engineering-training-series-overview-2026',
    category: 'Industry',
    categoryColor: '#7B6FA0',
    date: '2026-04-18',
    readTimeZh: '7 分钟',
    readTimeEn: '7 min read',
    authorZh: '阿苏',
    authorEn: 'A Su',
    authorTitleZh: '数字化产品负责人',
    authorTitleEn: 'Head of Digital Products',
    authorAvatar: '阿',
    authorColor: '#D97757',
    titleZh: 'AI 工程进阶培训系列：我们为什么把“AI 培训”做成一门工程课',
    titleEn: 'Advanced AI Engineering Training Series: Why We Turned AI Training into an Engineering Discipline',
    excerptZh: '我们回看这套内部 AI 工程进阶课程后，一个判断更加明确：企业真正需要的不是一堂“AI 工具课”，而是一套能把模型能力接进研发、交付和治理体系的工程训练。',
    excerptEn: 'After reviewing our internal advanced AI engineering curriculum, one conclusion became clearer: enterprises do not just need an “AI tools class.” They need engineering training that connects model capability to delivery, operations, and governance.',
    tagsZh: ['AI培训', '课程体系', 'AI工程', '组织升级'],
    tagsEn: ['AI Training', 'Curriculum', 'AI Engineering', 'Capability Building'],
    contentZh: `## 我们重新看了这套课程，结论很直接

过去一年，市场上很多“AI 培训”都停留在工具演示层：教大家怎么写 Prompt、怎么用几个热门产品、怎么把效率提一点。

但当我们重新审阅飞凡已经沉淀下来的这套《AI 工程进阶培训》材料时，一个判断更加明确：**真正能进入企业组织能力的培训，必须是工程训练，而不是工具体验。**

这套材料不是围绕单一模型，也不是围绕单一平台，而是围绕完整的 AI 工程体系展开，覆盖：
- AI 原生架构设计
- Prompt 工程规范
- RAG 深度实战
- Agent 与工具链编排
- Java / Python / Go 后端集成
- React / Vue / Node 前端集成
- 可观测性与评估体系
- 安全合规与生产加固

这已经不是“会不会用 AI”的问题，而是“能不能把 AI 做进产品和系统”的问题。

---

## 企业培训为什么必须从“会用”升级到“会交付”

真正困扰企业的，并不是员工不知道 ChatGPT 或 Claude，而是团队即使知道，也很难把这些能力转化成稳定的业务产出。

常见断层通常出现在这些地方：
- 会写 Prompt，但不会做结构化输出校验
- 会做 Demo，但不会做 RAG 质量评估
- 会接 API，但不会设计多模型路由和降级
- 会写前端页面，但不会处理流式响应和中断控制
- 会上线功能，但没有成本、质量和安全监控

这也是为什么我们认为，企业 AI 培训必须从“功能试用课”升级为“交付能力课”。

---

## 这套课程最重要的地方，不是知识点多，而是结构完整

很多课程的问题不是内容不对，而是内容碎。

飞凡这套进阶课程比较难得的一点，是它本身已经具备完整的工程链路视角：

### 第一层：架构认知
先解决“AI 在系统里到底放哪一层”的问题，而不是一上来就写代码。

### 第二层：核心能力建设
把 Prompt、RAG、Agent 这三个最关键的能力模块拆开讲清楚。

### 第三层：前后端落地
直接落到 Java / Python / Go 与 React / Vue / Node 的实现实践。

### 第四层：生产级治理
最后再回到可观测性、安全、评估和上线清单。

这套结构最大的价值，是让学员知道：**AI 项目不是从调用模型开始，而是从工程体系开始。**

---

## 谁最适合这套课程

从材料本身的适用对象来看，这不是面向泛员工的通识课，而更适合这三类角色：
- 系统架构师
- 前后端工程师
- 需要主导 AI 项目落地的技术负责人

如果你的目标只是“让团队知道 AI 很厉害”，这套课会显得太硬核；但如果你的目标是“让团队半年内能稳定交付 AI 功能”，这套课反而是更现实的起点。

---

## 我们接下来为什么会把它写成博客系列

原因很简单：这套课程里很多内容，本来就值得单独拿出来展开。

例如：
- 为什么 AI 原生架构和传统三层架构完全不是一回事
- 为什么 RAG 评估不能只看“感觉回答得不错”
- 为什么前端 AI 体验的关键其实是流式渲染和状态控制
- 为什么没有可观测性与安全治理，AI 功能注定难以上线

把课程做成博客系列，能让更多团队先从理解方法论开始，再决定是否进入系统训练。

---

## 结语

我们一直认为，企业 AI 能力建设里最稀缺的不是模型账号，而是把模型能力工程化的人。

这套 AI 工程进阶培训真正想解决的，正是这个问题：**帮助团队把“会调用模型”，升级成“会设计、会接入、会评估、会上线”。**`,

    contentEn: `## We Reviewed the Curriculum Again, and the Conclusion Was Straightforward

Over the past year, many so-called AI training programs have stayed at the tool-demo layer: how to write prompts, how to use a few popular products, how to gain a bit of efficiency.

But after re-reading Feifan’s internal **Advanced AI Engineering Training** materials, one conclusion became clearer: **the training that truly enters enterprise capability is engineering training, not tool familiarization.**

This curriculum is not organized around a single model or a single platform. It is organized around the full AI engineering stack:
- AI-native architecture
- prompt engineering standards
- deep RAG practice
- agent and tool orchestration
- backend integration in Java / Python / Go
- frontend integration in React / Vue / Node
- observability and evaluation
- security, compliance, and production hardening

At that point, the question is no longer “can we use AI?” It becomes “can we build AI into real products and systems?”

---

## Why Enterprise Training Must Evolve from “Use” to “Deliver”

The real problem inside enterprises is rarely that teams have never heard of ChatGPT or Claude. The problem is that even when they know the tools, they cannot translate that awareness into stable business output.

The capability gap usually shows up here:
- people can write prompts, but not validate structured outputs
- they can build demos, but not evaluate RAG quality
- they can call APIs, but not design routing and fallback across models
- they can build UIs, but not handle streaming responses and interruption control
- they can launch features, but not monitor cost, quality, and safety

That is why enterprise AI training must evolve from a tools course into a delivery course.

---

## The Strength of This Curriculum Is Not Breadth Alone, but Structural Completeness

Many courses are not wrong. They are fragmented.

What stands out in this curriculum is that it already reflects a full engineering chain:

### Layer 1: Architectural understanding
It starts with where AI belongs in the system, not with code.

### Layer 2: Core capability building
It treats Prompt, RAG, and Agent systems as distinct engineering competencies.

### Layer 3: Frontend and backend implementation
It then moves directly into implementation patterns across mainstream stacks.

### Layer 4: Production governance
Finally, it closes on observability, safety, evaluation, and deployment checklists.

That structure teaches the right lesson: **AI projects do not begin with model calls. They begin with engineering systems.**

---

## Who This Training Fits Best

From the materials themselves, this is not a lightweight awareness course for all employees. It is best suited to:
- system architects
- frontend and backend engineers
- technical leads responsible for AI delivery

If your goal is merely to show that AI is impressive, this course will feel too deep. If your goal is to get a team reliably shipping AI features within months, it is a far better starting point.

---

## Why We Are Turning It into a Blog Series

Because many parts of the curriculum are strong enough to stand alone.

For example:
- why AI-native architecture is fundamentally different from traditional layered architecture
- why RAG cannot be evaluated by “the answer feels good”
- why frontend AI experience depends heavily on streaming and state control
- why AI features without observability and security governance rarely make it to production

Publishing a blog series lets more teams understand the method before deciding whether to invest in formal training.

---

## Closing Thought

In enterprise AI capability building, the scarce resource is not access to a model account. It is people who can operationalize model capability.

That is exactly what this advanced training tries to solve: **help teams move from “calling a model” to “designing, integrating, evaluating, and shipping AI systems.”**`,
  },
  {
    slug: 'ai-architecture-rag-agent-training-intro-2026',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2026-04-17',
    readTimeZh: '8 分钟',
    readTimeEn: '8 min read',
    authorZh: '赵懿',
    authorEn: 'Zhao Yi',
    authorTitleZh: '电商产品负责人',
    authorTitleEn: 'Head of E-commerce Product',
    authorAvatar: '赵',
    authorColor: '#7B6FA0',
    titleZh: '课程介绍：为什么 AI 原生架构、RAG 和 Agent 要一起学',
    titleEn: 'Course Intro: Why AI-Native Architecture, RAG, and Agents Must Be Learned Together',
    excerptZh: '在这套 AI 工程进阶培训里，架构设计、RAG 和 Agent 并不是三个孤立主题，而是一条从系统设计到执行闭环的主线。把它们拆开学，往往就会在交付时重新踩坑。',
    excerptEn: 'In this advanced AI engineering training, architecture, RAG, and agents are not three isolated topics. They form one continuous line from system design to execution. Learn them separately, and teams usually rediscover the same failures in delivery.',
    tagsZh: ['AI原生架构', 'RAG', 'Agent', '课程介绍'],
    tagsEn: ['AI-Native Architecture', 'RAG', 'Agent', 'Course Intro'],
    contentZh: `## 三个模块，实际上是一条主线

复盘这套课程材料时，我们特别注意到一个设计：模块 01、03、04 不是被随意拼在一起的，而是完整对应了企业 AI 系统的核心骨架：
- 模块 01：AI 原生架构设计范式
- 模块 03：RAG 系统深度实战
- 模块 04：Agent 与工具链编排

这三块内容如果单独看，都很常见；但真正有价值的，是它们被放进了一个统一的系统视角里。

---

## 先学架构，是为了避免把 AI 做成“外挂功能”

很多团队做 AI 的第一步，是先找个模型接上去，看看能不能跑起来。

这会带来一个常见后果：AI 被塞进原有系统边角，变成一个难以治理的外挂模块。后面再补上下文管理、知识检索、工具编排、监控告警时，系统会越来越乱。

课程在开头就先讲 AI 原生架构，其实是在解决一个前置问题：
**AI 在系统中到底应该处于什么位置？**

材料里把入口层、意图层、编排层、知识层、模型层、观测层拆得很清楚，这种分层的价值在于：
- 各层职责明确
- 模型可以替换
- 路由和降级可以独立设计
- 后续观测和治理更容易补齐

对企业来说，这一步往往决定了项目后面是可持续迭代，还是越做越不可控。

---

## 只学 RAG，不学架构与 Agent，效果通常会打折

RAG 是很多企业客户最先落地的 AI 能力，因为它天然对应知识库问答、文档检索和私域数据增强。

但很多团队踩过同样的坑：
- 只做了 embedding 和向量检索
- 没有考虑分块策略
- 没有做混合检索和重排序
- 没有定义 Context Recall / Faithfulness 等评估指标

结果就是系统看起来上线了，回答却时好时坏。

这套课程里，RAG 不是“告诉你怎么接一个向量库”，而是从离线索引流水线、在线检索流水线、分块策略、混合检索、HyDE、质量评估一整套讲下来。这样的训练，才接近真实交付。

---

## Agent 不是“比聊天框高级一点”，而是执行层

模块 04 讲 Agent 时，最有价值的不是概念介绍，而是把 Agent 当成一套有边界的执行系统来讲：
- ReAct 循环
- 工具函数设计规范
- 工具安全设计
- 多 Agent 编排模式
- 超时、重试、最大步数、检查点与 HITL

这一点非常关键，因为很多团队一提 Agent，就只想到“让模型自己多做几步”。但如果没有工具接口、安全约束和状态控制，Agent 只会把错误扩大。

真正稳定的 Agent，必须建立在前面的架构设计和知识系统之上。

---

## 为什么这三块必须一起学

因为它们分别回答的是三个不同层面的问题：

### 架构模块回答：系统怎么搭
谁负责路由，谁负责检索，谁负责编排，谁负责观测。

### RAG 模块回答：知识怎么进系统
文档怎么切、怎么索引、怎么检索、怎么评估。

### Agent 模块回答：系统怎么行动
多步任务怎么执行，工具怎么调用，风险怎么收敛。

把这三块打通，团队才真正具备建设企业级 AI 系统的骨架能力。

---

## 结语

我们很认同这套课程在这三个模块上的组合方式，因为它没有把 AI 工程讲成零散技巧，而是讲成一套能落地的系统方法。

如果你的团队正在从“做一个 AI 功能”走向“做一个 AI 系统”，那么这三块内容应该被一起学、一起练、一起验收。`,

    contentEn: `## Three Modules, One Backbone

When we reviewed the curriculum, one design choice stood out: Modules 01, 03, and 04 are not grouped together by accident. They map directly to the structural backbone of an enterprise AI system:
- Module 01: AI-native architecture
- Module 03: deep RAG practice
- Module 04: agent and tool orchestration

Each topic is common on its own. The real value is that this training treats them as one connected system.

---

## Architecture Comes First So AI Does Not Become a Plug-in Attachment

Many teams begin AI work by simply connecting a model and seeing what happens.

The result is familiar: AI gets bolted onto the edge of the existing system as an unmanaged feature. Context handling, retrieval, orchestration, and monitoring are all patched in later, and the system becomes harder to reason about over time.

This curriculum starts with AI-native architecture to answer a prerequisite question:
**where does AI belong inside the system at all?**

The material separates the entry layer, intent layer, orchestration layer, knowledge layer, model layer, and observability layer. That matters because:
- responsibilities stay clear
- models remain replaceable
- routing and fallback can evolve independently
- monitoring and governance can be added coherently

For enterprises, this early decision often determines whether the system stays maintainable.

---

## RAG Alone Usually Underperforms Without Architecture and Agents

RAG is often the first AI capability enterprises deploy because it maps cleanly to knowledge assistants, document retrieval, and private-data grounding.

But many teams fall into the same traps:
- embedding plus vector search only
- weak chunking strategy
- no hybrid retrieval or reranking
- no metrics such as Context Recall or Faithfulness

The result is a system that looks deployed but behaves inconsistently.

In this course, RAG is not framed as “here is how to connect a vector store.” It is taught as a full system covering offline indexing, online retrieval, chunking strategy, hybrid retrieval, HyDE, and evaluation. That is much closer to real delivery work.

---

## Agents Are Not Just Smarter Chat, They Are the Execution Layer

The strongest part of Module 04 is not the concept overview. It is the treatment of agents as bounded execution systems:
- the ReAct loop
- tool interface design
- tool safety controls
- multi-agent orchestration patterns
- timeout, retry, max-step, checkpoint, and human-in-the-loop controls

That is important because many teams still reduce agents to “letting the model take more steps.” Without interfaces, controls, and state discipline, agents mostly amplify failure.

Stable agents must sit on top of the architecture and knowledge layers that come before them.

---

## Why These Three Must Be Learned Together

Because they answer three different questions:

### Architecture answers: how is the system structured?
Who routes, who retrieves, who orchestrates, who observes?

### RAG answers: how does knowledge enter the system?
How are documents chunked, indexed, retrieved, and evaluated?

### Agents answer: how does the system act?
How are multi-step tasks executed, tools invoked, and risk contained?

Once those three connect, a team gains the real skeleton of enterprise AI delivery.

---

## Closing Thought

We strongly agree with the way this curriculum combines these modules. It does not teach AI engineering as scattered tricks. It teaches it as a system method that can actually be delivered.

If your team is moving from “build an AI feature” toward “build an AI system,” these are topics that should be learned, practiced, and reviewed together.`,
  },
  {
    slug: 'frontend-ai-training-react-vue-node-2026',
    category: 'Technology',
    categoryColor: '#5B8DB8',
    date: '2026-04-16',
    readTimeZh: '7 分钟',
    readTimeEn: '7 min read',
    authorZh: '龙刚',
    authorEn: 'Long Gang',
    authorTitleZh: '资深前端技术专家',
    authorTitleEn: 'Senior Frontend Technology Expert',
    authorAvatar: '龙',
    authorColor: '#C47F3A',
    titleZh: '课程介绍：前端工程师为什么要系统学习 AI 交互与流式架构',
    titleEn: 'Course Intro: Why Frontend Engineers Need Systematic Training in AI Interaction and Streaming Architecture',
    excerptZh: '这套课程的前端模块没有停留在“做个聊天框”，而是直接覆盖 React Hook、Vue Composable、打字机效果、Node.js BFF 与会话治理。它对应的其实是一整套 AI 前端工程能力。',
    excerptEn: 'The frontend module in this curriculum goes far beyond “build a chat box.” It covers React hooks, Vue composables, typewriter rendering, Node.js BFF design, and session governance. In practice, that is a full AI frontend engineering skill set.',
    tagsZh: ['前端AI', 'React', 'Vue', 'Node BFF', '流式交互'],
    tagsEn: ['Frontend AI', 'React', 'Vue', 'Node BFF', 'Streaming UX'],
    contentZh: `## AI 前端最容易被低估

很多团队讨论 AI 落地时，注意力都集中在模型、Prompt、RAG 和 Agent 上，而前端常常被默认成“最后接个聊天框就行”。

但实际项目里，用户对 AI 功能的第一感受，恰恰来自前端：
- 回答是不是流畅出现
- 状态是不是稳定
- 错误是不是可理解
- 中断和重试是不是顺手
- 历史会话是不是一致

如果这些体验做不好，再强的模型也会显得“不好用”。

---

## 这套课程的前端模块，讲的不是组件，而是工程问题

在我们 review 这套培训材料时，模块 06 给我们的一个直观感受是：它把 AI 前端看成一个工程系统，而不是 UI 小技巧集合。

课程里覆盖的内容包括：
- React 流式输出 Hook
- Vue 3 Composable
- 打字机渐显组件
- Node.js BFF 层设计

表面看像是几个代码示例，实际背后对应的是四个关键问题：
1. 流式响应如何消费
2. 增量内容如何渲染
3. 会话状态如何管理
4. API Key、鉴权、限流如何隔离在服务端

这才是 AI 前端真正难的地方。

---

## 流式体验不是“锦上添花”，而是基本可用性

传统页面交互里，用户点击按钮后等待几秒是可以接受的；但在 AI 产品里，如果几秒内页面没有任何反馈，用户会立刻怀疑：
- 是不是没发出去
- 是不是系统卡住了
- 是不是模型崩了

课程里用 React Hook 和 Vue Composable 去讲流式消费，本质上是在训练前端工程师处理两类核心能力：
- **乐观更新**：用户消息先出现，降低等待焦虑
- **增量渲染**：输出边生成边展示，提高感知速度

这已经不是“动效设计”，而是交互可信度设计。

---

## Node.js BFF 是 AI 前端体系里很关键的一层

很多团队在做 AI 页面时，最大的问题不是 UI，而是边界混乱：
- 前端直接碰供应商 API
- API Key 暴露风险
- 会话上下文散落在浏览器端
- 用户权限和速率限制难以统一

课程里专门把 Node.js BFF 拿出来讲，非常有必要。

因为 AI 前端在生产环境里，通常需要一层专门的代理来处理：
- 鉴权
- 速率限制
- Session 管理
- SSE 转发
- 审计与日志

没有这层，前端只能做一个能跑的 Demo；有了这层，前端才可能参与生产级交付。

---

## 为什么前端工程师现在必须补这门课

因为 AI 产品的前端，不再只是负责“展示结果”，而是开始承担：
- 人机交互节奏控制
- 多状态切换
- 长任务反馈设计
- 流式中断与恢复
- 错误兜底与可解释性

这意味着 AI 前端已经越来越像一个独立专业方向，而不是通用前端顺手兼顾的附属能力。

---

## 结语

我们很赞同这套课程把前端模块单独做实，因为企业 AI 项目最终能不能被用户接受，很多时候不是输在模型上，而是输在交互上。

对前端工程师来说，系统学习 AI 交互、流式架构和 BFF 设计，不是加分项，而会越来越像基础项。`,

    contentEn: `## AI Frontend Is Still Undervalued

When teams talk about AI delivery, most attention goes to models, prompts, RAG, and agents. Frontend is often reduced to “we’ll add a chat box at the end.”

But in real products, the user’s first judgment of AI quality comes from the frontend:
- does the answer appear smoothly?
- does the state stay coherent?
- are errors understandable?
- do interrupt and retry flows make sense?
- is session history consistent?

If those experience layers fail, even a strong model feels weak.

---

## This Frontend Module Teaches Engineering Problems, Not UI Tricks

When reviewing the curriculum, Module 06 stood out because it treats AI frontend as an engineering system rather than a set of component tricks.

The module covers:
- React streaming hooks
- Vue 3 composables
- typewriter-style rendering
- Node.js BFF design

On the surface these are examples. Underneath, they map to four real engineering questions:
1. how to consume streaming responses
2. how to render incremental output
3. how to manage session state
4. how to isolate API keys, auth, and rate limits on the server

That is where AI frontend becomes difficult.

---

## Streaming Is Not a Nice-to-Have. It Is Basic Usability

In traditional applications, waiting a few seconds after a button click is tolerable. In AI products, a few silent seconds immediately create doubt:
- did the request fail?
- is the system frozen?
- did the model crash?

By teaching streaming through React hooks and Vue composables, the course is really training two core capabilities:
- **optimistic updates** so user intent is acknowledged immediately
- **incremental rendering** so perceived speed improves

This is not decorative motion work. It is trust design.

---

## Node.js BFF Is a Core Part of the AI Frontend Stack

In many teams, the biggest frontend problem is not UI. It is weak boundaries:
- frontend calling vendor APIs directly
- API key exposure risk
- session context fragmented across the browser
- no unified control over auth or rate limits

That is why the curriculum’s focus on Node.js BFF is so important.

In production AI systems, a dedicated proxy layer usually handles:
- authentication
- rate limiting
- session management
- SSE forwarding
- auditing and logging

Without that layer, frontend can only ship demos. With it, frontend becomes part of production delivery.

---

## Why Frontend Engineers Need This Training Now

AI frontend is no longer only about rendering results. It increasingly owns:
- human-AI interaction pacing
- multi-state transitions
- long-task feedback design
- interruption and resume flows
- fallback messaging and explainability

That means AI frontend is becoming a specialized engineering capability rather than a side task for general web work.

---

## Closing Thought

We strongly agree with making the frontend module substantial and explicit. Many enterprise AI projects fail user adoption not because the model is weak, but because the interaction model is weak.

For frontend engineers, systematic learning around AI interaction, streaming architecture, and BFF design is quickly moving from optional to foundational.`,
  },
  {
    slug: 'ai-observability-security-training-intro-2026',
    category: 'Engineering',
    categoryColor: '#4A9E7A',
    date: '2026-04-15',
    readTimeZh: '8 分钟',
    readTimeEn: '8 min read',
    authorZh: '孙鹏',
    authorEn: 'Sun Peng',
    authorTitleZh: '资深测试专家',
    authorTitleEn: 'Senior QA Expert',
    authorAvatar: '孙',
    authorColor: '#4A9E7A',
    titleZh: '课程介绍：没有评估、观测与安全，AI 项目很难真正上线',
    titleEn: 'Course Intro: Without Evaluation, Observability, and Security, AI Projects Rarely Reach Real Production',
    excerptZh: '这套培训后半部分把可观测性、评估体系和安全合规单独拉出来讲，这一点非常对。AI 项目真正的难点往往不在“做出来”，而在“上线后还能稳定负责”。',
    excerptEn: 'The later half of this curriculum explicitly separates observability, evaluation, and security into their own modules. That is exactly right. The hardest part of AI projects is often not building them, but operating them responsibly after launch.',
    tagsZh: ['AI评估', '可观测性', '安全合规', '生产上线'],
    tagsEn: ['AI Evaluation', 'Observability', 'Security', 'Production Readiness'],
    contentZh: `## 为什么很多 AI 项目止步于 Demo

AI 项目最容易出现一种错觉：前面 80% 的时间大家都在做“能力建设”，最后 20% 似乎只剩部署。

但真正做过交付的人都知道，事情往往相反。模型跑通、接口接通、页面出来，这些都只是开始。真正困难的是：
- 如何知道系统回答质量是不是在下降
- 如何知道成本是不是失控
- 如何知道是不是遭遇了注入或越权
- 如何在异常发生后快速定位问题

这也是为什么我们在 review 这套培训材料时，非常认可模块 07 和模块 08 被放到了核心位置。

---

## 可观测性，不是“出了问题再查日志”

课程里把 AI 可观测性拆成四类指标：
- 技术指标
- 成本指标
- 质量指标
- 安全指标

这个拆法很务实，因为 AI 系统跟传统系统最大的不同就在于：它不只是“服务可不可用”，还要问“回答好不好、花费值不值、风险大不大”。

如果一个团队只能看到接口延迟和报错率，却看不到：
- Token 消耗
- 每请求成本
- 用户满意度
- 幻觉率
- Prompt 注入尝试

那这个系统在管理上就是半盲的。

---

## 评估体系决定了你能不能持续优化

课程材料里对 RAG 评估给出了比较明确的指标框架，例如：
- Context Recall
- Context Precision
- Answer Faithfulness
- Answer Relevance

这很关键，因为很多团队在 AI 项目里最大的风险，不是没有优化动作，而是优化方向完全凭感觉。

如果没有评估指标，你很难回答这些问题：
- 改了 chunking 策略是不是更好了
- 换了 reranker 到底有没有收益
- Prompt 更新后质量是提升还是回退
- 用户投诉是模型问题、检索问题，还是前端呈现问题

从测试和质量保障角度看，这些指标不是锦上添花，而是 AI 项目最基础的质量基线。

---

## 安全合规不是最后补一页 PPT

模块 08 对 Prompt 注入、越狱、数据泄露、PII 脱敏、生产部署 Checklist 的强调，我们认为非常必要。

原因很简单：AI 系统和传统系统相比，攻击面被大幅放大了。

传统业务系统更多担心接口越权、SQL 注入、权限配置错误；AI 系统则额外要面对：
- 用户输入试图改写系统行为
- 模型在上下文中泄露敏感信息
- 长 Prompt 消耗资源形成 DoS
- 工具调用路径带来更复杂的越权风险

如果这些东西不进入培训主线，团队上线时一定会补课，而且往往是在事故之后补。

---

## 这类课程最适合哪些团队

如果你的团队已经做过一两个 AI 功能，但开始遇到以下问题：
- 线上效果不稳定
- 成本解释不清
- 没法复盘用户投诉
- 安全和法务不敢放行

那说明团队真正缺的，往往不是“再换一个更强模型”，而是生产治理能力。

这部分课程，正是补这个短板。

---

## 结语

我们做质量和交付时，一直很强调一句话：**没有被观测、被评估、被审计的 AI，不能算真正上线。**

这套课程把可观测性、评估体系和安全合规单独做实，是它非常有价值的地方。因为这三件事，决定的不是 AI 能不能演示，而是 AI 能不能长期负责。`,

    contentEn: `## Why So Many AI Projects Stop at the Demo Stage

AI projects often create a false impression: teams spend 80% of their time building capability, and it seems like the last 20% is just deployment.

In practice, experienced delivery teams know the opposite is often true. Getting the model running, wiring the API, and rendering the UI is only the beginning. The harder questions are:
- how do we know answer quality is degrading?
- how do we know cost is drifting out of control?
- how do we know prompt injection or privilege abuse is happening?
- how do we locate failures quickly when incidents occur?

That is why, when we reviewed this curriculum, we strongly agreed with the decision to make Modules 07 and 08 central.

---

## Observability Is Not “Check Logs After Failure”

The course breaks AI observability into four categories:
- technical metrics
- cost metrics
- quality metrics
- security metrics

That is a practical framework because AI systems differ from traditional systems in one critical way: availability alone is not enough. You also need to know whether the answer is good, whether the spend is justified, and whether the behavior remains safe.

If a team can only see latency and error rate, but cannot see:
- token consumption
- per-request cost
- user satisfaction
- hallucination rate
- prompt injection attempts

then it is operating the system half-blind.

---

## Evaluation Determines Whether You Can Improve Systematically

The curriculum defines concrete RAG evaluation dimensions such as:
- Context Recall
- Context Precision
- Answer Faithfulness
- Answer Relevance

That matters because many AI teams do not lack optimization effort. They lack optimization direction.

Without an evaluation system, it is very hard to answer:
- did the new chunking strategy help?
- did the reranker actually improve results?
- did the prompt update improve quality or regress it?
- is the complaint caused by the model, retrieval, or the presentation layer?

From a QA perspective, these metrics are not optional polish. They are the minimum quality baseline for AI systems.

---

## Security and Compliance Are Not a Final Slide Deck

We also strongly agree with the emphasis on prompt injection, jailbreaks, data leakage, PII redaction, and production deployment checklists.

The reason is simple: AI systems enlarge the attack surface significantly.

Traditional systems worry about API abuse, SQL injection, or permissions misconfiguration. AI systems must additionally handle:
- user input attempting to rewrite system behavior
- models leaking sensitive content from context
- long-prompt resource exhaustion
- more complex privilege issues through tool invocation paths

If these topics are excluded from training, teams will still learn them later, usually after an incident.

---

## Which Teams Need This Most

If your team has already shipped one or two AI features and is now facing problems such as:
- unstable online quality
- unclear cost explanation
- inability to replay user issues
- security or legal hesitation before release

then the missing capability is often not “a stronger model.” It is production governance.

That is exactly the gap this part of the curriculum addresses.

---

## Closing Thought

In quality and delivery work, we often repeat one principle: **if an AI system cannot be observed, evaluated, and audited, it is not truly in production.**

That is why this curriculum’s strong treatment of observability, evaluation, and security is so valuable. Those three areas determine not whether AI can be demoed, but whether it can be operated responsibly over time.`,
  },
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
    date: '2026-04-14',
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
    date: '2026-04-13',
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
    date: '2026-04-12',
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
    date: '2026-04-11',
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
    date: '2026-04-10',
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
    date: '2026-04-09',
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
    date: '2026-04-08',
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
