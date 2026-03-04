import { useState } from 'react'
import { Users, GraduationCap, BookOpen, Briefcase, ChevronRight, ChevronLeft, Sparkles, School, User, Building2 } from 'lucide-react'

type PrimaryIdentity = 'parent' | 'student' | 'educator' | 'partner' | null
type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null

interface IdentitySelectorProps {
  onSelectIdentity: (primary: PrimaryIdentity, secondary: SecondaryIdentity, goToQA?: boolean) => void
}

const primaryIdentities = [
  {
    id: 'parent' as const,
    title: '我是家长',
    description: '关心孩子学习，想省心辅导',
    Icon: Users,
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    id: 'student' as const,
    title: '我是学生',
    description: '想高效学习，提升成绩',
    Icon: GraduationCap,
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    id: 'educator' as const,
    title: '教育工作者',
    description: '提升教学效率，精准管理',
    Icon: School,
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  },
  {
    id: 'partner' as const,
    title: '合作伙伴',
    description: '投资或商业合作机会',
    Icon: Briefcase,
    color: 'bg-coral',
    iconBg: 'bg-coral/20',
  },
]

const secondaryOptions: Record<string, Array<{id: SecondaryIdentity; title: string; subtitle: string; Icon: any}>> = {
  parent: [
    { id: 'parent-primary', title: '小学家长', subtitle: '培养习惯，陪伴成长', Icon: User },
    { id: 'parent-middle', title: '初中家长', subtitle: '升学关键，打好基础', Icon: User },
    { id: 'parent-high', title: '高中家长', subtitle: '高考冲刺，精准提分', Icon: User },
  ],
  student: [
    { id: 'student-middle', title: '初中生', subtitle: '打好基础，养成习惯', Icon: GraduationCap },
    { id: 'student-high', title: '高中生', subtitle: '高考备战，自主学习', Icon: GraduationCap },
    { id: 'student-uni', title: '大学生', subtitle: '专业课业，效率提升', Icon: BookOpen },
    { id: 'student-grad', title: '研究生', subtitle: '深度研究，知识管理', Icon: Building2 },
  ],
  educator: [
    { id: 'educator-teacher', title: '任课教师', subtitle: '课堂教学，学情掌握', Icon: BookOpen },
    { id: 'educator-admin', title: '校长/教育主管', subtitle: '学校管理，数据决策', Icon: Building2 },
  ],
  partner: [
    { id: 'partner-investor', title: '投资人', subtitle: '了解商业模式与前景', Icon: Briefcase },
    { id: 'partner-channel', title: '渠道商', subtitle: '代理合作与市场拓展', Icon: Users },
  ],
}

export default function IdentitySelector({ onSelectIdentity }: IdentitySelectorProps) {
  const [primaryIdentity, setPrimaryIdentity] = useState<PrimaryIdentity>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const handlePrimarySelect = (id: PrimaryIdentity) => {
    setPrimaryIdentity(id)
  }

  const handleBack = () => {
    setPrimaryIdentity(null)
  }

  const handleSecondarySelect = (secondaryId: SecondaryIdentity) => {
    // 投资人和渠道商直接跳转到 Q&A
    if (secondaryId === 'partner-investor' || secondaryId === 'partner-channel') {
      onSelectIdentity(primaryIdentity, secondaryId, true) // true 表示跳转到 Q&A
    } else {
      onSelectIdentity(primaryIdentity, secondaryId, false)
    }
  }

  // 第二层选择界面
  if (primaryIdentity) {
    const options = secondaryOptions[primaryIdentity] || []
    const primaryInfo = primaryIdentities.find(p => p.id === primaryIdentity)

    return (
      <section className="min-h-screen bg-cream flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-500 hover:text-orange transition-colors mb-8"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>返回上一步</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${primaryInfo?.iconBg} border border-${primaryInfo?.color.replace('bg-', '')}/30 rounded-full mb-6`}>
              {primaryInfo && <primaryInfo.Icon className={`w-4 h-4 ${primaryInfo.color.replace('bg-', 'text-')}`} />}
              <span className="text-sm font-medium text-navy">{primaryInfo?.title}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              选择更具体的身份
            </h1>
            <p className="text-lg text-gray-600">
              让我们为你展示最精准的内容
            </p>
          </div>

          {/* Secondary Options */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {options.map((option) => {
              const Icon = option.Icon
              const isHovered = hoveredId === option.id

              return (
                <button
                  key={option.id}
                  onClick={() => handleSecondarySelect(option.id)}
                  onMouseEnter={() => setHoveredId(option.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative bg-white rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${
                    isHovered ? 'border-orange/50' : 'border-transparent'
                  }`}
                >
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {option.subtitle}
                  </p>

                  {/* Arrow */}
                  <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full ${primaryInfo?.color} flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // 第一层选择界面
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 border border-orange/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-orange" />
            <span className="text-sm font-medium text-navy">欢迎来到 MeetMind</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            选择你的身份
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们将为你展示最相关的内容，让你快速了解 MeetMind 如何帮到你
          </p>
        </div>

        {/* Primary Identity Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryIdentities.map((identity) => {
            const Icon = identity.Icon
            const isHovered = hoveredId === identity.id

            return (
              <button
                key={identity.id}
                onClick={() => handlePrimarySelect(identity.id)}
                onMouseEnter={() => setHoveredId(identity.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${
                  isHovered ? 'border-orange/50' : 'border-transparent'
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${identity.iconBg} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${identity.color.replace('bg-', 'text-')}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-2">
                  {identity.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {identity.description}
                </p>

                {/* Arrow */}
                <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full ${identity.color} flex items-center justify-center transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}>
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Skip Option */}
        <div className="text-center mt-12">
          <button
            onClick={() => onSelectIdentity(null, null, false)}
            className="text-gray-500 hover:text-orange transition-colors underline underline-offset-4"
          >
            跳过，浏览通用版本 →
          </button>
        </div>
      </div>
    </section>
  )
}
