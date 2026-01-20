import { User, Heart, BookOpen, Target } from 'lucide-react'

const values = [
  {
    title: '给孩子',
    subtitle: '学习伙伴',
    color: 'bg-sky',
    borderColor: 'border-sky',
    highlights: [
      '永远记得课堂细节的靠谱同桌',
      '复习高效不孤单',
      '成绩稳步提升',
    ],
    Icon: User,
  },
  {
    title: '给家长',
    subtitle: '省心助手',
    color: 'bg-sunny',
    borderColor: 'border-sunny',
    highlights: [
      '一页清晰报告，知道"今天该看什么"',
      '辅导有据可依',
      '焦虑大幅降低',
    ],
    Icon: Heart,
  },
  {
    title: '给老师',
    subtitle: '可选To B',
    color: 'bg-mint',
    borderColor: 'border-mint',
    highlights: [
      '了解班级共性弱点',
      '教学调整更精准',
      '减负增效',
    ],
    Icon: BookOpen,
  },
]

export default function Values() {
  return (
    <section id="values" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint/20 text-navy font-medium rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-mint rounded-full" />
            三方共赢闭环
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            整个家庭的
            <span className="text-orange">教育基础设施</span>
          </h2>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-t-4 ${value.borderColor}`}
            >
              {/* Icon Badge */}
              <div className="absolute -top-6 left-8">
                <div className={`w-14 h-14 ${value.color} rounded-2xl shadow-md flex items-center justify-center`}>
                  <value.Icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Header */}
              <div className="mt-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-navy">{value.title}</h3>
                  <span className={`text-xs px-3 py-1 ${value.color}/20 text-navy rounded-full font-medium`}>
                    {value.subtitle}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {value.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 ${value.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* North Star Metric */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
          {/* 装饰 */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-sunny/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky/20 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-sunny rounded-2xl flex items-center justify-center flex-shrink-0 shadow-bubble">
              <Target className="w-10 h-10 text-navy" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-3">北极星指标</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                我们以<span className="text-sunny font-semibold">"学生短期成绩提升"</span>为最终目标。
                试点显示：使用MeetMind的学生，知识点掌握率显著提高。
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-shrink-0">
              <div className="text-center">
                <p className="text-4xl font-bold text-sunny">85%</p>
                <p className="text-sm text-white/60">知识点掌握率</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-sunny">2x</p>
                <p className="text-sm text-white/60">复习效率提升</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
