import { Zap, Heart, Trophy, Clock, Smile, TrendingUp } from 'lucide-react'

const childBenefits = [
  {
    icon: '📚',
    title: '少做题',
    description: '精准剔除你会的题，只做你不会的',
    highlight: '作业时间缩短 30%',
    color: 'bg-sky',
  },
  {
    icon: '😌',
    title: '不挨骂',
    description: '遇到不懂的先问 AI 同桌，不用去问暴躁的爸妈',
    highlight: '亲子关系更和谐',
    color: 'bg-sunny',
  },
  {
    icon: '🏆',
    title: '有面子',
    description: '成绩提上去了，还是自己"学"会的（不是抄答案）',
    highlight: '自信心显著提升',
    color: 'bg-mint',
  },
]

export default function Values() {
  return (
    <section id="values" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky/20 text-navy font-medium rounded-full text-sm mb-6">
            <Smile className="w-4 h-4" />
            孩子的真实感受
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            为什么孩子会
            <span className="text-orange">爱上 MeetMind？</span>
          </h2>
          <p className="text-lg text-gray-600">
            不是逼他学，而是帮他"学得轻松"
          </p>
        </div>

        {/* Child Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {childBenefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden`}
            >
              {/* 装饰背景 */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.color}/10 rounded-full -translate-y-1/2 translate-x-1/2`} />
              
              {/* Icon */}
              <div className="text-5xl mb-6">{benefit.icon}</div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-navy mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              
              {/* Highlight Tag */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${benefit.color}/20 rounded-full`}>
                <Zap className={`w-4 h-4 ${benefit.color === 'bg-sky' ? 'text-sky' : benefit.color === 'bg-sunny' ? 'text-sunny' : 'text-mint'}`} />
                <span className="text-sm font-semibold text-navy">{benefit.highlight}</span>
              </div>
            </div>
          ))}
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
              <h3 className="text-2xl font-bold mb-3">我们的承诺</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                不是让孩子"更卷"，而是让他<span className="font-bold text-sunny">用更少的时间，拿更好的分数</span>。
                <br />
                学习本该如此轻松。
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-shrink-0">
              <div className="text-center bg-sunny/20 rounded-2xl px-6 py-4 border border-sunny/30">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-5 h-5 text-sunny" />
                  <p className="text-3xl font-bold text-sunny">-30%</p>
                </div>
                <p className="text-sm text-white/80">作业时间</p>
              </div>
              <div className="text-center bg-mint/20 rounded-2xl px-6 py-4 border border-mint/30">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="w-5 h-5 text-mint" />
                  <p className="text-3xl font-bold text-mint">+20</p>
                </div>
                <p className="text-sm text-white/80">平均提分</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
