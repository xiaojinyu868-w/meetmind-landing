import { ArrowRight, Sparkles, Gift, Lightbulb } from 'lucide-react'

type PrimaryIdentity = 'parent' | 'student' | 'educator' | 'partner' | null
type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null

interface HeroProps {
  primaryIdentity?: PrimaryIdentity
  secondaryIdentity?: SecondaryIdentity
}

const heroContent: Record<string, {
  badge: string
  title: [string, string]
  subtitle: string
  description: string
  cta: string
}> = {
  // 家长细分 - 核心：信息断层 + 亲子关系/省心（小初）或 学习效率/高考（高中）
  'parent-primary': {
    badge: '小学家长专属',
    title: ['给孩子找个', '"清华学霸"做同桌'],
    subtitle: '告别辅导作业的鸡飞狗跳',
    description: '孩子回家说"听懂了"，一做题却不会——这种信息断层让无数家长崩溃。MeetMind 完整记录课堂内容，让你第一次真正知道"孩子今天学了什么"。用老师原话辅导，亲子关系更和谐，辅导终于有据可依。',
    cta: '免费试用 MeetMind',
  },
  'parent-middle': {
    badge: '初中家长专属',
    title: ['给孩子找个', '"清华学霸"做同桌'],
    subtitle: '省心辅导，告别亲子冲突',
    description: '初中知识点环环相扣，辅导时却发现自己的解法和孩子老师教的不一样。MeetMind 用老师白天的原话帮孩子复盘，你不再需要充当"临时老师"，省心省力，亲子关系更融洽。',
    cta: '免费试用 MeetMind',
  },
  'parent-high': {
    badge: '高中家长专属',
    title: ['给孩子找个', '"清华学霸"做同桌'],
    subtitle: '高考冲刺，精准提分',
    description: '高三时间宝贵，盲目刷题效率低。MeetMind 分析孩子课堂中的薄弱环节，用老师原话精准补漏，把时间花在刀刃上。家长实时了解学习进展，给孩子最有力的支持。',
    cta: '免费试用 MeetMind',
  },
  // 学生细分 - 核心：高效学习 + 学霸同桌 + 少花时间多提分
  'student-middle': {
    badge: '初中生专属',
    title: ['给自己找个', '"清华学霸"做同桌'],
    subtitle: '打好基础，养成高效学习习惯',
    description: '初中知识点开始变难，上课走神容易跟不上？MeetMind 记得老师讲的每一句话。课后 AI 同桌用老师原话帮你复盘，不懂就问直到搞懂。从现在开始养成高效学习习惯，为高中打好基础。',
    cta: '立即体验',
  },
  'student-high': {
    badge: '高中生专属',
    title: ['给自己找个', '"清华学霸"做同桌'],
    subtitle: '用更少的时间，获得更高的学习效果',
    description: '上课走神漏听了关键知识点？MeetMind 记得老师讲的每一句话。课后 AI 同桌用老师原话帮你复盘，不懂就问直到搞懂。不用熬夜刷题，用更高效的方式提升成绩。',
    cta: '立即体验',
  },
  'student-uni': {
    badge: '大学生专属',
    title: ['给自己找个', '"清华学霸"做同桌'],
    subtitle: '高效学习，轻松掌握专业课',
    description: '大学课程节奏快、内容深，一节课下来笔记记不全。MeetMind 帮你完整记录课堂，生成知识图谱和复习要点。用更少的时间获得更好的学习效果，期末复习不再无从下手。',
    cta: '立即体验',
  },
  'student-grad': {
    badge: '研究生专属',
    title: ['给自己找个', '"清华学霸"做同桌'],
    subtitle: '专注研究，提升学术效率',
    description: '组会、讲座、文献讨论内容太多记不住？MeetMind 帮你记录学术活动的精华，自动生成知识卡片和思维导图。把更多时间花在研究创新上，而不是整理笔记。',
    cta: '立即体验',
  },
  // 教育工作者细分 - 核心：助教减负 + 备课提效 + 教学反馈（面试官/公开课点评体验）
  'educator-teacher': {
    badge: '教师专属工具',
    title: ['AI 助教', '让教学更轻松'],
    subtitle: '减负、提效、获得专业反馈',
    description: 'MeetMind 充当你的 AI 助教，自动记录课堂并生成学情分析，减轻课后答疑负担。备课时快速回顾往期课堂内容，提升备课效率。更能获得如面试官、公开课点评专家般的教学反馈，持续精进教学水平。',
    cta: '申请教师试用',
  },
  'educator-admin': {
    badge: '教育管理者专属',
    title: ['AI 助教', '让教学更轻松'],
    subtitle: '数据驱动，精准管理',
    description: 'MeetMind 为学校提供全方位的教学数据支持。各班级学情对比、教师教学效果分析、学生学习趋势追踪...用数据支撑管理决策，帮助教师减负提效，提升整体教学质量。',
    cta: '了解校园方案',
  },
  // 合作伙伴细分 - 投资人版本：强调三个角色和愿景
  'partner-investor': {
    badge: '投资人专属',
    title: ['AI 助教 · AI 同桌', '增长引擎'],
    subtitle: '重新定义个性化学习的三个角色',
    description: 'MeetMind 不是工具，是三个角色：老师的 AI 助教（学情分析、教学反馈）、学生的 AI 同桌（课堂对齐、精准辅导）、机构的增长引擎（效果可视化、口碑裂变）。我们正在构建个性化学习的双引擎架构：学习者画像引擎 + 上下文理解引擎。',
    cta: '了解投资机会',
  },
  'partner-channel': {
    badge: '渠道商专属',
    title: ['AI 助教 · AI 同桌', '增长引擎'],
    subtitle: '共享 AI 教育新蓝海',
    description: 'MeetMind 正在构建个性化学习的双引擎架构：学习者画像引擎 + 上下文理解引擎。通过老师 AI 助教、学生 AI 同桌、机构增长引擎三个角色，切入教育市场。寻找志同道合的区域合作伙伴。',
    cta: '了解代理政策',
  },
  // 默认
  default: {
    badge: '新用户限时免费体验中',
    title: ['给孩子找个', '"清华学霸"做同桌'],
    subtitle: '真正听过这堂课的专属家教',
    description: 'MeetMind 为每个孩子配备一位永远记得老师每句话、每笔板书的AI同桌。白天，它安静坐在教室里忠实记录，晚上，它用老师当天的原话，帮助孩子精准复习，补齐漏洞。家长第一次真正知道"孩子今天学了什么"，辅导终于有据可依。',
    cta: '免费试用 MeetMind',
  },
}

export default function Hero({ primaryIdentity = null, secondaryIdentity = null }: HeroProps) {
  const content = secondaryIdentity ? heroContent[secondaryIdentity] : heroContent.default

  return (
    <section id="home" className="relative min-h-screen bg-cream overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-sunny/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-sky/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-mint/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧内容 */}
          <div className="relative z-10 text-center lg:text-left">
            {/* 徽章标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunny/20 border border-sunny/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-orange" aria-hidden="true" />
              <span className="text-sm font-medium text-navy">{content.badge}</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              {content.title[0]}
              <br />
              <span className="text-orange">{content.title[1]}</span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl sm:text-2xl text-navy/80 mb-4 leading-relaxed font-medium">
              {content.subtitle}
            </p>

            {/* 描述 */}
            <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">
              {content.description}
            </p>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://meetmind.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange hover:bg-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-[transform,shadow,background-color] duration-300 motion-safe:hover:-translate-y-1 cursor-pointer"
              >
                <span>{content.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform motion-safe:duration-200" aria-hidden="true" />
              </a>
            </div>

            {/* 小提示 */}
            <p className="mt-4 text-sm text-gray-500 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-orange" aria-hidden="true" />
              <span>新用户免费体验全部功能 · 30秒即可开始</span>
            </p>
            <p className="mt-2 text-xs text-gray-400">
              访问受阻？
              <a 
                href="https://hk.meetmind.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange hover:text-orange/80 underline underline-offset-2 ml-1"
              >
                尝试香港节点 →
              </a>
            </p>
          </div>

          {/* 右侧 - 产品截图 */}
          <div className="relative">
            {/* 主图片容器 */}
            <div className="relative">
              {/* 装饰背景 */}
              <div className="absolute -inset-6 bg-gradient-to-br from-sunny/30 to-orange/20 rounded-3xl -rotate-2" />
              
              {/* 设备框架 - AI复习界面 */}
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 rounded-t-lg">
                  <div className="w-3 h-3 rounded-full bg-coral" />
                  <div className="w-3 h-3 rounded-full bg-sunny" />
                  <div className="w-3 h-3 rounded-full bg-mint" />
                </div>
                <div className="rounded-b-lg overflow-hidden">
                  <img 
                    src="/product-review.png"
                    alt="MeetMind AI智能复习界面"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* 手机截图悬浮 - 家长端 */}
              <div className="absolute -bottom-8 -right-4 w-32 sm:w-40">
                <div className="bg-white rounded-2xl p-1.5 shadow-xl border-4 border-white">
                  <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-1" />
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/product-parent.png"
                      alt="MeetMind 家长端界面"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* AI对话气泡 */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 bg-sunny rounded-2xl rounded-bl-sm p-4 shadow-lg max-w-[180px] sm:max-w-[220px]">
                <p className="text-sm text-navy font-medium flex items-start gap-1.5">
                  <Lightbulb className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>"这道题老师白天讲过，我帮你回忆一下..."</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部波浪 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}
