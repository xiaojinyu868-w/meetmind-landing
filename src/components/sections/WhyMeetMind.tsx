import { GraduationCap, Lightbulb, Clock, BarChart3, MessageCircle, Brain, AlertCircle, BookOpen, Frown, Smile } from 'lucide-react'

// 学生痛点与解决方案
const studentProblems = [
  {
    problem: '上课听不懂，不敢问',
    solution: '一键标记困惑点，课后AI帮你搞懂',
    icon: AlertCircle,
    solutionIcon: Lightbulb,
  },
  {
    problem: '回家忘了老师讲什么',
    solution: 'AI记住每一句课堂内容，随时回放',
    icon: Frown,
    solutionIcon: Brain,
  },
  {
    problem: '复习不知道从哪开始',
    solution: 'AI精准定位薄弱点，针对性辅导',
    icon: BookOpen,
    solutionIcon: MessageCircle,
  },
]

// 教师价值
const teacherBenefits = [
  {
    title: '减负',
    description: '无需额外备课，学生自主复习',
    stat: '50%',
    statLabel: '课后答疑减少',
    icon: Clock,
    color: 'bg-sky',
  },
  {
    title: '提效',
    description: '一键生成课后反思报告',
    stat: '3x',
    statLabel: '反馈效率提升',
    icon: BarChart3,
    color: 'bg-mint',
  },
  {
    title: '获得反馈',
    description: '实时了解学生困惑热点TOP3',
    stat: '100%',
    statLabel: '学情可视化',
    icon: Lightbulb,
    color: 'bg-sunny',
  },
]

export default function WhyMeetMind() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 学生痛点板块 */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky/20 text-navy font-medium rounded-full text-sm mb-6">
              <span className="w-1.5 h-1.5 bg-sky rounded-full" />
              学生的烦恼
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              MeetMind 帮孩子
              <span className="text-orange">解决什么问题？</span>
            </h2>
            <p className="text-lg text-gray-600">
              每个孩子都有听不懂、不敢问的时刻，MeetMind 让这些困惑不再被遗忘
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {studentProblems.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                {/* 痛点 */}
                <div className="flex items-start gap-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-10 h-10 bg-coral/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-xs text-coral font-medium mb-1">😥 孩子的困扰</p>
                    <p className="text-gray-700 font-medium">{item.problem}</p>
                  </div>
                </div>
                
                {/* 解决方案 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-mint/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.solutionIcon className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <p className="text-xs text-mint font-medium mb-1">✨ MeetMind 解决</p>
                    <p className="text-navy font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 效果对比 */}
          <div className="mt-10 bg-gradient-to-r from-coral/10 via-white to-mint/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Frown className="w-8 h-8 text-coral" />
              </div>
              <p className="text-gray-500 text-sm">使用前</p>
              <p className="text-navy font-bold">课后一脸懵</p>
            </div>
            
            <div className="text-4xl text-gray-300">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smile className="w-8 h-8 text-mint" />
              </div>
              <p className="text-gray-500 text-sm">使用后</p>
              <p className="text-navy font-bold">哪里不会点哪里</p>
            </div>
          </div>
        </div>

        {/* 教师价值板块 */}
        <div>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint/20 text-navy font-medium rounded-full text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              教师的选择
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              为什么老师选择
              <span className="text-orange"> MeetMind？</span>
            </h2>
            <p className="text-lg text-gray-600">
              不增加工作量，却能获得更好的教学效果
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teacherBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-navy mb-3">{benefit.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">{benefit.description}</p>

                {/* Stat */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${benefit.color}/10 rounded-full`}>
                  <span className={`text-2xl font-bold ${benefit.color === 'bg-sky' ? 'text-sky' : benefit.color === 'bg-mint' ? 'text-mint' : 'text-sunny'}`}>
                    {benefit.stat}
                  </span>
                  <span className="text-gray-500 text-sm">{benefit.statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 教师推荐语 */}
          <div className="mt-10 bg-navy rounded-3xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sunny/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-mint/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-sunny rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-7 h-7 text-navy" />
              </div>
              <p className="text-xl font-medium mb-2">
                "终于知道学生哪里没听懂了，
                <span className="text-sunny">备课更有针对性</span>"
              </p>
              <p className="text-white/60 text-sm">—— 某重点中学英语教师</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
