import { useState, useEffect } from 'react'
import { Shield, Lock, UserCheck, CheckCircle, Users, TrendingUp, DollarSign, ChevronLeft, ChevronRight, GraduationCap, User, Heart, Lightbulb, Clock, BarChart3, AlertCircle, BookOpen, Frown, Smile, Brain, MessageCircle, Sparkles, BarChart } from 'lucide-react'

type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null

interface TestimonialsProps {
  secondaryIdentity?: SecondaryIdentity
}

// 三个角色的数据
const roles = [
  {
    id: 'student',
    name: '学生',
    nameEn: 'Student',
    Icon: User,
    color: 'bg-sky',
    lightColor: 'bg-sky/10',
    textColor: 'text-sky',
    title: 'MeetMind 帮孩子解决什么问题？',
    subtitle: '每个孩子都有听不懂、不敢问的时刻',
    problems: [
      { problem: '上课听不懂，不敢问', solution: '一键标记困惑点，课后AI帮你搞懂', icon: AlertCircle, solutionIcon: Lightbulb },
      { problem: '回家忘了老师讲什么', solution: 'AI记住每一句课堂内容，随时回放', icon: Frown, solutionIcon: Brain },
      { problem: '复习不知道从哪开始', solution: 'AI精准定位薄弱点，针对性辅导', icon: BookOpen, solutionIcon: MessageCircle },
    ],
    testimonial: {
      content: '以前上课走神了就完了，现在有AI同桌帮我记着，回家还能问它不懂的地方！',
      author: '匿名学生',
      role: '初二学生',
    },
    stats: [
      { value: '85%', label: '知识点掌握提升' },
      { value: '2x', label: '复习效率翻倍' },
    ],
  },
  {
    id: 'parent',
    name: '家长',
    nameEn: 'Parent',
    Icon: Heart,
    color: 'bg-sunny',
    lightColor: 'bg-sunny/10',
    textColor: 'text-sunny',
    title: '为什么家长选择 MeetMind？',
    subtitle: '终于不用每天问"今天老师讲了什么"',
    problems: [
      { problem: '不知道孩子今天学了什么', solution: '每日学习报告，一目了然', icon: AlertCircle, solutionIcon: BarChart3 },
      { problem: '辅导作业容易起冲突', solution: 'AI用老师原话辅导，专业又耐心', icon: Frown, solutionIcon: MessageCircle },
      { problem: '不知道孩子哪里薄弱', solution: '困惑点清单，精准定位问题', icon: BookOpen, solutionIcon: Lightbulb },
    ],
    testimonial: {
      content: '终于有个真正听过课的"家教"了！现在AI同桌直接告诉我重点在哪里，辅导作业再也不用吼了。',
      author: '匿名用户',
      role: '小学家长',
    },
    stats: [
      { value: '91.2%', label: '家长曾陪孩子作业' },
      { value: '78%', label: '陪伴时易引发矛盾' },
    ],
  },
  {
    id: 'teacher',
    name: '教师',
    nameEn: 'Teacher',
    Icon: GraduationCap,
    color: 'bg-mint',
    lightColor: 'bg-mint/10',
    textColor: 'text-mint',
    title: '为什么老师选择 MeetMind？',
    subtitle: '不增加工作量，获得更好的教学效果',
    problems: [
      { problem: '不知道学生哪里没听懂', solution: '困惑热点TOP3，实时反馈', icon: AlertCircle, solutionIcon: BarChart3 },
      { problem: '课后答疑占用大量时间', solution: 'AI辅助学生自主复习，减负50%', icon: Clock, solutionIcon: Lightbulb },
      { problem: '教学反思缺少数据支撑', solution: '一键生成课后反思报告', icon: BookOpen, solutionIcon: Brain },
    ],
    testimonial: {
      content: '终于知道学生哪里没听懂了，备课更有针对性。学生自己能复习，我的答疑工作量少了一半。',
      author: '匿名教师',
      role: '重点中学英语教师',
    },
    stats: [
      { value: '50%', label: '课后答疑减少' },
      { value: '3x', label: '反馈效率提升' },
    ],
  },
]

export default function Testimonials({ secondaryIdentity = null }: TestimonialsProps) {
  // 根据身份设置默认角色索引
  const getDefaultRoleIndex = () => {
    if (!secondaryIdentity) return 1 // 默认家长
    if (secondaryIdentity.startsWith('parent')) return 1 // 家长
    if (secondaryIdentity.startsWith('student')) return 0 // 学生
    if (secondaryIdentity.startsWith('educator')) return 2 // 教师
    return 1
  }

  const [activeIndex, setActiveIndex] = useState(getDefaultRoleIndex())
  const activeRole = roles[activeIndex]

  // 当身份变化时更新默认角色
  useEffect(() => {
    setActiveIndex(getDefaultRoleIndex())
  }, [secondaryIdentity])

  const nextRole = () => setActiveIndex((prev) => (prev + 1) % roles.length)
  const prevRole = () => setActiveIndex((prev) => (prev - 1 + roles.length) % roles.length)

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunny/20 text-navy font-medium rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-sunny rounded-full" />
            {secondaryIdentity === 'student-middle' ? '初中生的真实反馈' :
             secondaryIdentity === 'student-high' ? '高中生的真实反馈' :
             secondaryIdentity?.startsWith('student-uni') ? '大学生的真实反馈' :
             secondaryIdentity?.startsWith('student-grad') ? '研究生的真实反馈' :
             secondaryIdentity?.startsWith('educator') ? '教师的真实反馈' : 
             secondaryIdentity?.startsWith('student') ? '学生的真实反馈' :
             secondaryIdentity?.startsWith('parent') ? '家长的真实反馈' :
             '为什么选择 MeetMind'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
            {secondaryIdentity?.startsWith('educator') ? '教师减负，教学提效' :
             secondaryIdentity?.startsWith('student') ? '高效学习，成绩提升' :
             secondaryIdentity?.startsWith('parent') ? '省心辅导，亲子关系' :
             '学生、家长、教师'}
            <span className="text-orange">
              {secondaryIdentity?.startsWith('educator') || secondaryIdentity?.startsWith('student') || secondaryIdentity?.startsWith('parent') ? ' 都认可' : ' 都受益'}
            </span>
          </h2>
        </div>

        {/* Role Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {roles.map((role, index) => {
            const Icon = role.Icon
            return (
              <button
                key={role.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === activeIndex
                    ? `${role.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-soft'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{role.name}</span>
              </button>
            )
          })}
        </div>

        {/* Content Area */}
        <div className={`rounded-3xl p-6 lg:p-10 ${activeRole.lightColor} border border-gray-100 transition-all duration-500`}>
          {/* Title */}
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-2">{activeRole.title}</h3>
            <p className="text-gray-600">{activeRole.subtitle}</p>
          </div>

          {/* Problems & Solutions */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {activeRole.problems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-soft">
                {/* 痛点 */}
                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-9 h-9 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-coral" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-coral font-medium mb-0.5 flex items-center gap-1">
                      <Frown className="w-3 h-3" aria-hidden="true" />
                      <span>痛点</span>
                    </p>
                    <p className="text-gray-700 text-sm font-medium">{item.problem}</p>
                  </div>
                </div>
                
                {/* 解决方案 */}
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 ${activeRole.lightColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.solutionIcon className={`w-4 h-4 ${activeRole.textColor}`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className={`text-xs ${activeRole.textColor} font-medium mb-0.5 flex items-center gap-1`}>
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      <span>解决</span>
                    </p>
                    <p className="text-navy text-sm font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats + Testimonial Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <p className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-1.5">
                <BarChart className="w-4 h-4" aria-hidden="true" />
                <span>数据说话</span>
              </p>
              <div className="flex gap-8">
                {activeRole.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className={`text-3xl font-bold ${activeRole.textColor}`}>{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className={`${activeRole.color}/20 rounded-2xl p-6`}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange text-sm">★</span>
                ))}
              </div>
              <p className="text-navy leading-relaxed mb-4 text-sm">
                "{activeRole.testimonial.content}"
              </p>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 ${activeRole.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                  匿
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{activeRole.testimonial.author}</p>
                  <p className="text-xs text-gray-500">{activeRole.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevRole}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 cursor-pointer"
              aria-label="上一个角色"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {roles.map((role, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? `w-6 ${role.color}` : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextRole}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 cursor-pointer"
              aria-label="下一个角色"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 overflow-hidden relative mt-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sunny/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-sunny rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {secondaryIdentity?.startsWith('student') ? '数据安全' : '隐私承诺'}
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                {secondaryIdentity === 'student-middle'
                  ? '数据最小化，只为学习服务；不采集影像；学习数据学生自主管理，家长仅了解学习情况。'
                  : secondaryIdentity?.startsWith('student-high') 
                  ? '数据最小化，只为学习服务；不采集影像；学生自主控制，家长仅查看学习报告。'
                  : secondaryIdentity?.startsWith('student-uni') || secondaryIdentity?.startsWith('student-grad')
                  ? '数据最小化，只为学习服务；不采集影像；用户完全自主控制，随时导出或删除。'
                  : secondaryIdentity?.startsWith('educator')
                  ? '数据最小化，只为教学服务；符合教育数据合规要求；学校/教师自主管理。'
                  : '数据最小化，只为学习服务；不采集学生影像；家长完全控制。'}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <Lock className="w-6 h-6 text-sunny mx-auto mb-2" />
                <p className="text-sunny font-bold">数据加密</p>
                <p className="text-white/60 text-sm">端到端保护</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <UserCheck className="w-6 h-6 text-sunny mx-auto mb-2" />
                <p className="text-sunny font-bold">
                  {secondaryIdentity?.startsWith('student-uni') || secondaryIdentity?.startsWith('student-grad')
                    ? '自主控制'
                    : secondaryIdentity === 'student-middle' || secondaryIdentity?.startsWith('student-high')
                    ? '学生自主'
                    : secondaryIdentity?.startsWith('educator')
                    ? '学校管理'
                    : '家长控制'}
                </p>
                <p className="text-white/60 text-sm">
                  {secondaryIdentity?.startsWith('student') 
                    ? '随时删除' 
                    : secondaryIdentity?.startsWith('educator')
                    ? '合规管理'
                    : '随时删除'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <CheckCircle className="w-6 h-6 text-sunny mx-auto mb-2" />
                <p className="text-sunny font-bold">合规认证</p>
                <p className="text-white/60 text-sm">安全可信</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
