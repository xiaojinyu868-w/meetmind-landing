import { ArrowRight, BookOpen, FileText, MessageCircle, BarChart3, Shield, Lock, LockKeyhole, FileCheck, Lightbulb, Users, Trash2 } from 'lucide-react'

const steps = [
  {
    step: 1,
    title: '专属记忆库',
    subtitle: 'AI胶囊伴读模式',
    description: '它像一个安静的学霸同桌，帮孩子把课堂上的重点、难点、老师的强调点，存入专属的"私有记忆库"。',
    HighlightIcon: LockKeyhole,
    highlightText: '数据私有，只属于你的孩子',
    color: 'bg-sky',
    Icon: BookOpen,
  },
  {
    step: 2,
    title: '自动生成"学霸笔记"',
    subtitle: '不需要回听45分钟',
    description: 'AI自动提取出当天的3个考点和1个易错坑，比孩子自己记的笔记还清晰。',
    HighlightIcon: FileCheck,
    highlightText: '考点+易错坑，一目了然',
    color: 'bg-sunny',
    Icon: FileText,
  },
  {
    step: 3,
    title: '同桌悄悄话',
    subtitle: '靶向查漏补缺',
    description: '做作业卡住了？MeetMind调出白天老师讲这道题时的原话，给孩子一个"神提示"，而不是直接给答案。',
    HighlightIcon: Lightbulb,
    highlightText: '启发思考，不是抄答案',
    color: 'bg-mint',
    Icon: MessageCircle,
  },
  {
    step: 4,
    title: '家长看板',
    subtitle: '一页清晰报告',
    description: '每天一份学情报告：今天学了什么、哪里卡住了、建议怎么复习。再也不用问"今天老师讲了啥"。',
    HighlightIcon: BarChart3,
    highlightText: '知道该看什么，辅导有据可依',
    color: 'bg-orange',
    Icon: BarChart3,
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky/20 text-navy font-medium rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-sky rounded-full" />
            🎓 学霸同桌如何工作？
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            四步打造
            <span className="text-orange">私人学习管家</span>
          </h2>
          <p className="text-lg text-gray-600">
            帮孩子"记住"每一堂课的精华
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-[12%] right-[12%] h-1 bg-gradient-to-r from-sky via-sunny via-mint to-orange rounded-full" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-card transition-[box-shadow,transform] duration-300 motion-safe:hover:-translate-y-2 border border-gray-100 h-full">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                        {step.step}
                      </div>
                      <step.Icon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{step.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                    <p className="text-sm font-medium text-orange flex items-center gap-1.5">
                      <step.HighlightIcon className="w-4 h-4" aria-hidden="true" />
                      <span>{step.highlightText}</span>
                    </p>
                  </div>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 hidden xl:block">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps - Mobile */}
        <div className="lg:hidden space-y-4 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
                <h3 className="font-bold text-navy mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{step.subtitle}</p>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <p className="text-sm font-medium text-orange flex items-center gap-1.5">
                  <step.HighlightIcon className="w-4 h-4" aria-hidden="true" />
                  <span>{step.highlightText}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy & Security Highlight */}
        <div className="bg-gradient-to-r from-navy to-navy/90 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-sunny/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-sunny rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">隐私第一，家长放心</h4>
                <p className="text-white/70 text-sm">数据存在您的私有空间，不会被用于任何其他用途</p>
              </div>
            </div>
            
            <div className="flex gap-6 md:ml-auto">
              <div className="text-center">
                <Lock className="w-6 h-6 text-sunny mx-auto mb-1" aria-hidden="true" />
                <p className="text-xs text-white/70">端到端加密</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-sunny mx-auto mb-1" aria-hidden="true" />
                <p className="text-xs text-white/70">家长完全控制</p>
              </div>
              <div className="text-center">
                <Trash2 className="w-6 h-6 text-sunny mx-auto mb-1" aria-hidden="true" />
                <p className="text-xs text-white/70">随时可删除</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
