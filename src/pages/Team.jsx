import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X, Mail, ExternalLink, Award, Briefcase } from 'lucide-react'

// Real team data from company materials
const EXECUTIVES = [
  {
    id: 'liyufeng',
    avatar: 'LY',
    color: '#D97757',
    nameZh: '李玉锋',
    nameEn: 'Li Yufeng',
    titleZh: '联合创始人 & 首席执行官',
    titleEn: 'Co-Founder & CEO',
    bioZh: '在创立飞凡科技之前，李先生在阿里巴巴/蘑菇街和有赞等大型互联网公司领导技术团队担任关键职务，推动了业务增长和技术创新。他的经验包括管理大型电子商务技术项目和领导跨职能团队为客户提供卓越的交付成果。李先生因其对公司的贡献获得了多个奖项，包括"年度最佳员工"等，领导力和远见卓识得到业内同行和客户的广泛认可。',
    bioEn: 'Prior to co-founding Feifan Tech, Mr. Li led technology teams at major internet companies including Alibaba/Mogujie and Youzan, driving business growth and technological innovation. His experience spans managing large-scale e-commerce technology projects and leading cross-functional teams to deliver outstanding results. Mr. Li has received multiple awards including "Best Employee of the Year," with his leadership and vision widely recognized by industry peers and clients.',
    expertiseZh: ['电子商务技术', '低代码平台', '交易系统', '团队领导', '商业战略'],
    expertiseEn: ['E-commerce Technology', 'Low-code Platforms', 'Transaction Systems', 'Team Leadership', 'Business Strategy'],
    prevZh: '淘宝高级工程师 → 蘑菇街平台负责人 → 有赞交易平台负责人',
    prevEn: 'Senior Engineer at Taobao → Platform Lead at Mogujie → Transaction Platform Lead at Youzan',
    careerZh: [
      { period: '2007–2015', company: '阿里巴巴集团 · 淘宝', desc: '作为阿里巴巴集团子公司淘宝的高级工程师，李先生担任多个核心项目的技术负责人，成功开发了阿里巴巴的第一个低代码平台和淘宝全新交易平台。拥有多项国家技术专利。' },
      { period: '2015–2019', company: '蘑菇街（美股上市）', desc: '在美国上市公司蘑菇街领导用户平台和营销平台开发团队，成功完成多个重要项目，为蘑菇街电子商务中台的建设奠定了坚实基础。' },
      { period: '2019–2022', company: '有赞（港股上市）', desc: '在香港上市公司有赞领导交易平台开发团队，成功应对新冠肺炎疫情带来的挑战，为有赞的快速增长做出了重大贡献。' },
    ],
    careerEn: [
      { period: '2007–2015', company: 'Alibaba Group · Taobao', desc: 'As Senior Engineer at Taobao, Mr. Li served as technical lead for multiple core projects, successfully developing Alibaba\'s first low-code platform and Taobao\'s new transaction platform. He holds multiple national technology patents.' },
      { period: '2015–2019', company: 'Mogujie (US-listed)', desc: 'Led user platform and marketing platform development teams at US-listed Mogujie. Successfully completed multiple major projects, laying a solid foundation for Mogujie\'s e-commerce middleware infrastructure.' },
      { period: '2019–2022', company: 'Youzan (HK-listed)', desc: 'Led the transaction platform development team at Hong Kong-listed Youzan, successfully navigating challenges posed by COVID-19 and making significant contributions to Youzan\'s rapid growth.' },
    ],
    email: 'feifan.hangzhou@gmail.com',
  },
  {
    id: 'xiejinian',
    avatar: 'XJ',
    color: '#5B8DB8',
    nameZh: '谢记年',
    nameEn: 'Xie Jinian',
    titleZh: '联合创始人 & 首席技术官',
    titleEn: 'Co-Founder & CTO',
    bioZh: '作为首席技术官，谢先生拥有深厚的工程技术背景，专注于软件开发和系统架构。他在阿里巴巴、蘑菇街、钉钉和淘宝等多家公司担任过重要领导职务，在构建商业中台方面积累了丰富经验。他是公司技术委员会负责人，始终工作在研发最前沿，曾为阿里巴巴交易技术委员会、钉钉技术委员会做出贡献，并领导蘑菇街技术委员会推动多家公司的技术发展。',
    bioEn: 'As CTO, Mr. Xie brings deep engineering expertise in software development and system architecture. He has held key leadership roles at Alibaba, Mogujie, DingTalk, and Taobao, accumulating rich experience in building business middleware platforms. He heads the company\'s Technology Committee, having contributed to Alibaba\'s Transaction Tech Committee, DingTalk\'s Tech Committee, and led Mogujie\'s Tech Committee.',
    expertiseZh: ['系统架构', '商业中台', '敏捷研发', '技术委员会', 'AI工程'],
    expertiseEn: ['System Architecture', 'Business Middleware', 'Agile R&D', 'Tech Committee', 'AI Engineering'],
    prevZh: '华为高级工程师 → 阿里巴巴/蚂蚁集团研发主管 → 蘑菇街中台负责人',
    prevEn: 'Senior Engineer at Huawei → R&D Director at Alibaba/Ant Group → Middleware Lead at Mogujie',
    careerZh: [
      { period: '2003–2006', company: '华为技术', desc: '作为华为业务与软件产品线的高级工程师，参与了多个电信运营支持系统的开发。对产品线的重大贡献和卓越技术才能使其入选业务与软件产品线专家库。' },
      { period: '2007–2015 / 2018–2023', company: '阿里巴巴集团 & 蚂蚁集团', desc: '担任阿里巴巴多个产品线的研发主管，在电子商务、企业数字化和敏捷方法领域取得重大成果。是阿里巴巴为数不多的资深专家之一，曾与阿里巴巴前CTO行癫和现任CTO范禹有多年深入合作。' },
      { period: '2015–2018', company: '蘑菇街（美股上市）', desc: '作为蘑菇街电子商务中台的负责人，通过技术创新和团队合作成功支持多家子公司的快速增长，为蘑菇街在美国上市奠定了基础。' },
    ],
    careerEn: [
      { period: '2003–2006', company: 'Huawei Technologies', desc: 'As Senior Engineer in Huawei\'s business and software product line, participated in developing multiple telecom operation support systems. Significant contributions and outstanding technical skills earned him a spot in the product line expert database.' },
      { period: '2007–2015 / 2018–2023', company: 'Alibaba Group & Ant Group', desc: 'Served as R&D Director for multiple product lines at Alibaba, achieving significant results in e-commerce, enterprise digitalization, and agile methodologies. One of Alibaba\'s few senior experts, he worked closely for many years with former CTO Xingdi and current CTO Fan Yu.' },
      { period: '2015–2018', company: 'Mogujie (US-listed)', desc: 'As Head of E-commerce Middleware at Mogujie, successfully supported rapid growth of multiple subsidiaries through technological innovation and team collaboration, laying the foundation for Mogujie\'s US listing.' },
    ],
    website: 'https://yunyi-csl.pages.dev/',
    email: 'feifan.hangzhou@gmail.com',
  },
]

const CORE_TEAM = [
  {
    id: 'baojizhen',
    avatar: '包',
    color: '#4A9E7A',
    nameZh: '包季真',
    nameEn: 'Bao Jizhen',
    titleZh: '体验技术负责人',
    titleEn: 'Head of Experience Technology',
    bioZh: '包先生拥有20年的互联网产品管理经验，曾在阿里巴巴、大搜车和大众点评等公司担任高级职位。他擅长产品设计和团队管理，成功领导了多个创新项目。',
    bioEn: 'Mr. Bao has 20 years of internet product management experience, having held senior positions at Alibaba, Daosouche, and Dianping. He excels in product design and team management, successfully leading multiple innovative projects.',
    expertiseZh: ['产品设计', '团队管理', '用户体验', '互联网产品'],
    expertiseEn: ['Product Design', 'Team Management', 'UX', 'Internet Products'],
    prevZh: '阿里巴巴 / 大搜车 / 大众点评 高级职位',
    prevEn: 'Senior roles at Alibaba / Daosouche / Dianping',
  },
  {
    id: 'zhaoyi',
    avatar: '赵',
    color: '#7B6FA0',
    nameZh: '赵懿',
    nameEn: 'Zhao Yi',
    titleZh: '电商产品负责人',
    titleEn: 'Head of E-commerce Product',
    bioZh: '赵先生是互联网行业的产品创新者，开创了支付宝和视频电子商务的免密支付。他以用户为中心的方法彻底改变了数百万人的网上购物体验。',
    bioEn: 'Mr. Zhao is a product innovator who pioneered password-free payments for Alipay and video e-commerce. His user-centric approach has transformed the online shopping experience for millions of people.',
    expertiseZh: ['电商产品', '支付创新', '用户增长', '产品创新'],
    expertiseEn: ['E-commerce Product', 'Payment Innovation', 'User Growth', 'Product Innovation'],
    prevZh: '支付宝 / 视频电商 产品创新',
    prevEn: 'Product Innovation at Alipay / Video E-commerce',
  },
  {
    id: 'konghan',
    avatar: '孔',
    color: '#C47F3A',
    nameZh: '孔晗',
    nameEn: 'Kong Han',
    titleZh: '智能硬件首席科学家',
    titleEn: 'Chief Scientist of Intelligent Hardware',
    bioZh: '孔先生是一位创新技术领导者，在华为、大华和海康威视成功领导软件和硬件产品开发团队，目前担任八识科技首席科学家。他曾经在市场上推出多个成功的智能硬件产品。',
    bioEn: 'Mr. Kong is an innovative technology leader who successfully led software and hardware product development at Huawei, Dahua, and Hikvision. Currently Chief Scientist at Bazhi Technology, he has launched numerous successful intelligent hardware products.',
    expertiseZh: ['智能硬件', '嵌入式系统', '软硬件协同', '产品开发'],
    expertiseEn: ['Intelligent Hardware', 'Embedded Systems', 'HW/SW Co-design', 'Product Development'],
    prevZh: '华为 / 大华 / 海康威视 → 八识科技首席科学家',
    prevEn: 'Huawei / Dahua / Hikvision → Chief Scientist, Bazhi Technology',
  },
  {
    id: 'tanjianxiang',
    avatar: '覃',
    color: '#B85C35',
    nameZh: '覃健翔',
    nameEn: 'Tan Jianxiang',
    titleZh: '生产力技术首席科学家',
    titleEn: 'Chief Scientist of Productivity Technology',
    bioZh: '覃先生目前担任代码狗的首席技术官。在此之前，他在阿里巴巴和雅虎中国担任高级领导职务。他拥有在生产力产品开发和技术创新方面的丰富经验，拥有多项国家科技专利。',
    bioEn: 'Mr. Tan currently serves as CTO of Codedoge. Previously held senior leadership positions at Alibaba and Yahoo China. He has extensive experience in productivity product development and technology innovation, holding multiple national technology patents.',
    expertiseZh: ['生产力工具', '技术创新', '国家科技专利', '产品研发'],
    expertiseEn: ['Productivity Tools', 'Technology Innovation', 'National Tech Patents', 'Product R&D'],
    prevZh: '阿里巴巴 / 雅虎中国 高级领导 → 代码狗 CTO',
    prevEn: 'Senior Leader at Alibaba / Yahoo China → CTO, Codedoge',
  },
  {
    id: 'asu',
    avatar: '阿',
    color: '#D97757',
    nameZh: '阿苏',
    nameEn: 'A Su',
    titleZh: '数字化产品负责人',
    titleEn: 'Head of Digital Products',
    bioZh: '苏女士曾经在阿里巴巴和蘑菇街担任过核心产品经理角色。现在，她负责我们的数字化产品设计，帮助我们的客户取得成功。',
    bioEn: 'Ms. Su previously served as a core product manager at Alibaba and Mogujie. She now leads digital product design at Feifan Tech, helping our clients achieve success.',
    expertiseZh: ['数字化产品', '产品经理', '用户体验', '电商设计'],
    expertiseEn: ['Digital Products', 'Product Management', 'UX Design', 'E-commerce'],
    prevZh: '阿里巴巴 / 蘑菇街 核心产品经理',
    prevEn: 'Core Product Manager at Alibaba / Mogujie',
  },
  {
    id: 'wangyumin',
    avatar: '王',
    color: '#5B8DB8',
    nameZh: '王玉岗',
    nameEn: 'Wang Yugang',
    titleZh: '电商技术负责人',
    titleEn: 'Head of E-commerce Technology',
    bioZh: '王先生是阿里巴巴的电子商务和电子政务技术专家。他在电子商务产品设计和开发方面有着丰富的经验。',
    bioEn: 'Mr. Wang is an expert in e-commerce and e-government technology at Alibaba. He has extensive experience in e-commerce product design and development.',
    expertiseZh: ['电商技术', '电子政务', '产品设计', '系统开发'],
    expertiseEn: ['E-commerce Technology', 'E-government', 'Product Design', 'System Development'],
    prevZh: '阿里巴巴 电商与电子政务技术专家',
    prevEn: 'E-commerce & E-government Tech Expert at Alibaba',
  },
  {
    id: 'wendeliang',
    avatar: '温',
    color: '#4A9E7A',
    nameZh: '温德亮',
    nameEn: 'Wen Deliang',
    titleZh: '人工智能首席科学家',
    titleEn: 'Chief AI Scientist',
    bioZh: '温先生目前担任红熊人工智能的联合创始人、首席技术官和首席科学家。在此之前，他在阿里巴巴、复星集团和磐石担任高级领导职务，包括副总裁、首席信息官和首席技术官等。温先生在多个行业的产品开发、项目管理和技术创新方面拥有丰富的经验。',
    bioEn: 'Mr. Wen currently serves as Co-founder, CTO, and Chief Scientist at Red Bear AI. Previously held senior leadership positions at Alibaba, Fosun Group, and Panshi, including VP, CIO, and CTO roles. He has extensive experience in product development, project management, and technology innovation across multiple industries.',
    expertiseZh: ['人工智能', '产品开发', '技术战略', '企业管理'],
    expertiseEn: ['Artificial Intelligence', 'Product Development', 'Technology Strategy', 'Enterprise Management'],
    prevZh: '阿里巴巴 / 复星集团 / 磐石 副总裁/CIO/CTO → 红熊AI 联创&CTO',
    prevEn: 'VP/CIO/CTO at Alibaba / Fosun / Panshi → Co-founder & CTO, Red Bear AI',
  },
  {
    id: 'chengxiaojun',
    avatar: '程',
    color: '#7B6FA0',
    nameZh: '程小军',
    nameEn: 'Cheng Xiaojun',
    titleZh: '保险技术负责人',
    titleEn: 'Head of Insurance Technology',
    bioZh: '程先生在保险产品开发方面拥有丰富的经验，曾在蚂蚁集团的保险产品线中担任重要职务，曾在微店和有赞担任核心技术专家。这些经历加深了他在金融科技领域的专业积累。',
    bioEn: 'Mr. Cheng has extensive experience in insurance product development, having held key positions in Ant Group\'s insurance product line and served as a core technology expert at Weidian and Youzan. These experiences have deepened his expertise in fintech.',
    expertiseZh: ['保险科技', '金融产品', '核心技术', '风控系统'],
    expertiseEn: ['Insurance Tech', 'Financial Products', 'Core Technology', 'Risk Control'],
    prevZh: '蚂蚁集团 保险产品线 → 微店 / 有赞 核心技术专家',
    prevEn: 'Insurance Product Line at Ant Group → Core Tech Expert at Weidian / Youzan',
  },
  {
    id: 'xufu',
    avatar: '徐',
    color: '#C47F3A',
    nameZh: '徐福',
    nameEn: 'Xu Fu',
    titleZh: '支付技术负责人',
    titleEn: 'Head of Payment Technology',
    bioZh: '徐先生曾在阿里巴巴和杭州银行等行业巨头担任过技术专家。他在电子商务和支付领域的经验是无与伦比的。',
    bioEn: 'Mr. Xu has served as a technology expert at industry leaders including Alibaba and Hangzhou Bank. His experience in e-commerce and payment technology is unmatched.',
    expertiseZh: ['支付技术', '电商系统', '金融科技', '银行技术'],
    expertiseEn: ['Payment Technology', 'E-commerce Systems', 'Fintech', 'Banking Technology'],
    prevZh: '阿里巴巴 / 杭州银行 技术专家',
    prevEn: 'Technology Expert at Alibaba / Hangzhou Bank',
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
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
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

          {/* Career Timeline (for executives with detailed history) */}
          {(isZh ? member.careerZh : member.careerEn) ? (
            <div className="flex items-start gap-3">
              <Briefcase className="w-4 h-4 text-claude-accent mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-claude-dark uppercase tracking-wider mb-3">
                  {isZh ? '从业经历' : 'Career History'}
                </p>
                <div className="space-y-3">
                  {(isZh ? member.careerZh : member.careerEn).map((item, i) => (
                    <div key={i} className="pl-3 border-l-2 border-claude-accent/30">
                      <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                        <span className="text-xs font-semibold text-claude-accent">{item.period}</span>
                        <span className="text-xs font-medium text-claude-dark">{item.company}</span>
                      </div>
                      <p className="text-xs text-claude-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
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
          )}

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
          <div className="flex items-center gap-3 pt-1 border-t border-claude-beige flex-wrap">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-1.5 text-xs text-claude-medium hover:text-claude-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {member.email}
              </a>
            )}
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-claude-medium hover:text-claude-accent transition-colors ml-auto"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {isZh ? '个人网站' : 'Website'}
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
            { num: '11+', labelZh: '核心成员', labelEn: 'Core Members' },
            { num: '100+', labelZh: '合计行业年限', labelEn: 'Combined Years Exp.' },
            { num: '5+', labelZh: '顶级科技企业背景', labelEn: 'Top Tech Companies' },
            { num: '20+', labelZh: '国家科技专利', labelEn: 'National Tech Patents' },
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

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Leadership */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-claude-dark">
                {isZh ? '联合创始人' : 'Co-Founders'}
              </h2>
              <p className="text-sm text-claude-medium mt-1">
                {isZh ? '与关于我们页面的领导力模块保持一致' : 'Consistent with the leadership section on our About page'}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {EXECUTIVES.map((member) => (
                <MemberCard key={member.id} member={member} isZh={isZh} onClick={setSelected} />
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-claude-dark">
                {isZh ? '核心团队' : 'Core Team'}
              </h2>
              <p className="text-sm text-claude-medium mt-1">
                {isZh ? '来自阿里巴巴、华为、蚂蚁集团等头部企业的行业专家' : 'Industry experts from Alibaba, Huawei, Ant Group, and other leading companies'}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CORE_TEAM.map((member) => (
                <MemberCard key={member.id} member={member} isZh={isZh} onClick={setSelected} />
              ))}
            </div>
          </div>

          {/* Hiring CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-claude-beige rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
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
          <MemberModal member={selected} isZh={isZh} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
