import { Zap, Trophy, Clock, Smile, TrendingUp, BookOpen, Heart, Award, Users, Brain, Target, Shield, Sparkles, Lightbulb, BarChart3 } from 'lucide-react'

type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null

interface ValuesProps {
  secondaryIdentity?: SecondaryIdentity
}

// 小学/初中家长价值：省心、亲子关系、信息透明
const parentYoungBenefits = [
  {
    Icon: Heart,
    title: '亲子关系',
    description: '用老师原话辅导，不再和孩子"打架"，家庭氛围更和谐',
    highlight: '告别辅导作业的鸡飞狗跳',
    color: 'bg-sunny',
    iconColor: 'text-sunny',
  },
  {
    Icon: Brain,
    title: '省心省力',
    description: 'AI同桌7×24小时在线答疑，再也不用绞尽脑汁想怎么讲',
    highlight: '家长终于不用当"临时老师"',
    color: 'bg-sky',
    iconColor: 'text-sky',
  },
  {
    Icon: Target,
    title: '信息透明',
    description: '第一次真正知道"孩子今天学了什么"，辅导有据可依',
    highlight: '告别盲目焦虑',
    color: 'bg-mint',
    iconColor: 'text-mint',
  },
]

// 高中家长价值：提分效率、时间精准、高考冲刺
const parentHighBenefits = [
  {
    Icon: TrendingUp,
    title: '精准提分',
    description: 'AI分析薄弱环节，针对性复习，把时间花在刀刃上',
    highlight: '不再盲目刷题',
    color: 'bg-sunny',
    iconColor: 'text-sunny',
  },
  {
    Icon: Clock,
    title: '效率翻倍',
    description: '会的题快速过，不会的题重点突破，学习效率大幅提升',
    highlight: '高考时间宝贵',
    color: 'bg-sky',
    iconColor: 'text-sky',
  },
  {
    Icon: Shield,
    title: '全程陪伴',
    description: 'AI同桌24小时在线，随时解答孩子疑惑，家长更安心',
    highlight: '高考冲刺有保障',
    color: 'bg-mint',
    iconColor: 'text-mint',
  },
]

// 学生价值（高中/大学/研究生）：高效学习、学霸同桌、少花时间多提分
const studentBenefits = [
  {
    Icon: Brain,
    title: '高效学习',
    description: 'AI用老师原话帮你复盘，不懂就问直到搞懂，学习效率翻倍',
    highlight: '用更少时间学更多',
    color: 'bg-sunny',
    iconColor: 'text-sunny',
  },
  {
    Icon: Users,
    title: '学霸同桌',
    description: '永远记得老师每句话、每笔板书，比你更懂这堂课',
    highlight: '24小时在线答疑',
    color: 'bg-sky',
    iconColor: 'text-sky',
  },
  {
    Icon: TrendingUp,
    title: '成绩提升',
    description: '精准定位薄弱环节，针对性突破，成绩稳步提升',
    highlight: '靠自己真学会',
    color: 'bg-mint',
    iconColor: 'text-mint',
  },
]

// 教师价值：减负、提效、专业成长
const teacherBenefits = [
  {
    Icon: Users,
    title: '助教减负',
    description: 'AI助教7×24小时答疑，大幅减少课后答疑负担',
    highlight: '把精力还给教学',
    color: 'bg-sunny',
    iconColor: 'text-sunny',
  },
  {
    Icon: Clock,
    title: '备课提效',
    description: '快速回顾往期课堂内容，备课效率大幅提升',
    highlight: '历史课程一键回顾',
    color: 'bg-sky',
    iconColor: 'text-sky',
  },
  {
    Icon: Lightbulb,
    title: '专业反馈',
    description: '如面试官、公开课点评专家般的教学反馈，持续精进',
    highlight: '教学水平不断提升',
    color: 'bg-mint',
    iconColor: 'text-mint',
  },
]

// 教育管理者价值：数据管理、教师减负、决策支持
const adminBenefits = [
  {
    Icon: BarChart3,
    title: '数据管理',
    description: '全校学情一屏掌握，各班级、各学科数据一目了然',
    highlight: '告别经验管理',
    color: 'bg-sunny',
    iconColor: 'text-sunny',
  },
  {
    Icon: Users,
    title: '教师减负',
    description: 'AI助教为教师减负，提升职业幸福感，降低流失率',
    highlight: '留住优秀教师',
    color: 'bg-sky',
    iconColor: 'text-sky',
  },
  {
    Icon: Target,
    title: '科学决策',
    description: '全方位教学数据分析，为教学改革提供数据支撑',
    highlight: '决策有据可依',
    color: 'bg-mint',
    iconColor: 'text-mint',
  },
]

// 默认使用学生版
const defaultBenefits = studentBenefits

const sectionContent: Record<string, { 
  badge: string
  badgeIcon: any
  title: string
  highlight: string
  subtitle: string
  promiseTitle: string
  promiseText: string
  stats: Array<{ icon: any; value: string; label: string; color: string }>
}> = {
  'parent-primary': {
    badge: '家长的真实收获',
    badgeIcon: Heart,
    title: '为什么家长会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是逼孩子学，而是让辅导更轻松',
    promiseTitle: '我们的承诺',
    promiseText: '不是让家长"更累"，而是让辅导更省心，亲子关系更和谐。',
    stats: [
      { icon: Heart, value: '90%', label: '亲子关系改善', color: 'sunny' },
      { icon: Clock, value: '-50%', label: '辅导时间', color: 'mint' },
    ],
  },
  'parent-middle': {
    badge: '家长的真实收获',
    badgeIcon: Heart,
    title: '为什么家长会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是逼孩子学，而是让辅导更轻松',
    promiseTitle: '我们的承诺',
    promiseText: '不是让家长"更累"，而是让辅导更省心，亲子关系更和谐。',
    stats: [
      { icon: Heart, value: '90%', label: '亲子关系改善', color: 'sunny' },
      { icon: Clock, value: '-50%', label: '辅导时间', color: 'mint' },
    ],
  },
  'parent-high': {
    badge: '高考家长的收获',
    badgeIcon: Trophy,
    title: '为什么高考家长会',
    highlight: '选择 MeetMind？',
    subtitle: '不是增加负担，而是精准助力',
    promiseTitle: '我们的承诺',
    promiseText: '不是让孩子"更卷"，而是用更少的时间，拿更好的分数。',
    stats: [
      { icon: TrendingUp, value: '+20', label: '平均提分', color: 'sunny' },
      { icon: Clock, value: '-30%', label: '无效刷题', color: 'mint' },
    ],
  },
  'student-middle': {
    badge: '初中生的真实感受',
    badgeIcon: Smile,
    title: '为什么初中生会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是逼你学，而是帮你"打好基础"',
    promiseTitle: '我们的承诺',
    promiseText: '不是让你"更累"，而是帮你养成高效学习习惯，为高中打好基础。',
    stats: [
      { icon: Clock, value: '-25%', label: '作业时间', color: 'sunny' },
      { icon: TrendingUp, value: '+15', label: '学习效率', color: 'mint' },
    ],
  },
  'student-high': {
    badge: '高中生的真实感受',
    badgeIcon: Smile,
    title: '为什么高中生会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是逼你学，而是帮你"学得轻松"',
    promiseTitle: '我们的承诺',
    promiseText: '不是让你"更卷"，而是让你用更少的时间，拿更好的分数。',
    stats: [
      { icon: Clock, value: '-30%', label: '作业时间', color: 'sunny' },
      { icon: TrendingUp, value: '+20', label: '学习进步', color: 'mint' },
    ],
  },
  'student-uni': {
    badge: '大学生的真实感受',
    badgeIcon: Smile,
    title: '为什么大学生会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是增加负担，而是让专业课更轻松',
    promiseTitle: '我们的承诺',
    promiseText: '不是让你"更忙"，而是让你用更高效的方式掌握专业知识。',
    stats: [
      { icon: Clock, value: '-40%', label: '复习时间', color: 'sunny' },
      { icon: TrendingUp, value: '+15', label: '考试分数', color: 'mint' },
    ],
  },
  'student-grad': {
    badge: '研究生的真实感受',
    badgeIcon: Smile,
    title: '为什么研究生会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是增加负担，而是让学术研究更高效',
    promiseTitle: '我们的承诺',
    promiseText: '不是让你"更累"，而是让你把更多时间花在创新上。',
    stats: [
      { icon: Clock, value: '-50%', label: '笔记整理', color: 'sunny' },
      { icon: TrendingUp, value: '+30%', label: '研究效率', color: 'mint' },
    ],
  },
  'educator-teacher': {
    badge: '教师的真实收获',
    badgeIcon: Lightbulb,
    title: '为什么教师会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是增加负担，而是让教学更轻松',
    promiseTitle: '我们的承诺',
    promiseText: '不是让教师"更忙"，而是让AI承担重复工作，教师专注教学创新。',
    stats: [
      { icon: Clock, value: '-60%', label: '答疑时间', color: 'sunny' },
      { icon: TrendingUp, value: '+25%', label: '教学效率', color: 'mint' },
    ],
  },
  'educator-admin': {
    badge: '管理者的真实收获',
    badgeIcon: BarChart3,
    title: '为什么管理者会',
    highlight: '选择 MeetMind？',
    subtitle: '不是增加负担，而是让管理更科学',
    promiseTitle: '我们的承诺',
    promiseText: '不是让管理"更复杂"，而是用数据驱动决策，提升整体教学质量。',
    stats: [
      { icon: Users, value: '-30%', label: '教师流失', color: 'sunny' },
      { icon: TrendingUp, value: '+20%', label: '教学效果', color: 'mint' },
    ],
  },
  default: {
    badge: '学生的真实感受',
    badgeIcon: Smile,
    title: '为什么学生会',
    highlight: '爱上 MeetMind？',
    subtitle: '不是逼你学，而是帮你"学得轻松"',
    promiseTitle: '我们的承诺',
    promiseText: '不是让你"更卷"，而是让你用更少的时间，拿更好的分数。',
    stats: [
      { icon: Clock, value: '-30%', label: '作业时间', color: 'sunny' },
      { icon: TrendingUp, value: '+20', label: '学习进步', color: 'mint' },
    ],
  },
}

export default function Values({ secondaryIdentity = null }: ValuesProps) {
  // 根据身份选择对应的价值
  let benefits = defaultBenefits
  
  if (secondaryIdentity) {
    if (secondaryIdentity.startsWith('parent-primary') || secondaryIdentity.startsWith('parent-middle')) {
      benefits = parentYoungBenefits
    } else if (secondaryIdentity.startsWith('parent-high')) {
      benefits = parentHighBenefits
    } else if (secondaryIdentity.startsWith('student')) {
      benefits = studentBenefits
    } else if (secondaryIdentity.startsWith('educator-teacher')) {
      benefits = teacherBenefits
    } else if (secondaryIdentity.startsWith('educator-admin')) {
      benefits = adminBenefits
    }
  }

  const content = secondaryIdentity ? (sectionContent[secondaryIdentity] || sectionContent.default) : sectionContent.default

  return (
    <section id="values" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky/20 text-navy font-medium rounded-full text-sm mb-6">
            <content.badgeIcon className="w-4 h-4" aria-hidden="true" />
            {content.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            {content.title}
            <span className="text-orange">{content.highlight}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {content.subtitle}
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.Icon
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-soft hover:shadow-card transition-[box-shadow,transform] duration-300 motion-safe:hover:-translate-y-2 border border-gray-100 overflow-hidden`}
              >
                {/* 装饰背景 */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.color}/10 rounded-full -translate-y-1/2 translate-x-1/2`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 ${benefit.color}/20 rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-7 h-7 ${benefit.iconColor}`} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                
                {/* Highlight Tag */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${benefit.color}/20 rounded-full`}>
                  <Zap className={`w-4 h-4 ${benefit.iconColor}`} aria-hidden="true" />
                  <span className="text-sm font-semibold text-navy">{benefit.highlight}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Result Promise */}
        <div className="bg-gradient-to-r from-navy to-navy/90 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
          {/* 装饰 */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-sunny/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange/20 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-sunny rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Trophy className="w-10 h-10 text-navy" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-3">{content.promiseTitle}</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {content.promiseText.split('span').length > 1 ? (
                  <>
                    {content.promiseText.split('<span className="font-bold text-sunny">')[0]}
                    <span className="font-bold text-sunny">
                      {content.promiseText.match(/<span className="font-bold text-sunny">(.*?)<\/span>/)?.[1]}
                    </span>
                    {content.promiseText.split('</span>')[1]}
                  </>
                ) : (
                  content.promiseText
                )}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-shrink-0">
              {content.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className={`text-center bg-${stat.color}/20 rounded-2xl px-6 py-4 border border-${stat.color}/30`}>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Icon className={`w-5 h-5 text-${stat.color}`} />
                      <p className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
                    </div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
