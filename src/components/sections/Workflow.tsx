import { ArrowRight, Mic, Brain, MessageSquare, BarChart3, Tablet, Zap } from 'lucide-react'

const steps = [
  {
    step: 1,
    title: '课堂无感采集',
    description: '专用AI学习胶囊一键开启，安静记录老师语音与重点。',
    detail: '不打扰课堂，无隐私风险',
    color: 'bg-sky',
    Icon: Mic,
  },
  {
    step: 2,
    title: '智能结构化',
    description: '远场语音识别，把课堂转为可检索的"课堂记忆"。',
    detail: '重点、易错点全结构化',
    color: 'bg-sunny',
    Icon: Brain,
  },
  {
    step: 3,
    title: '个性化干预',
    description: 'AI同桌用老师原话引导复习，苏格拉底式对话。',
    detail: '哪里没懂？立刻找回',
    color: 'bg-mint',
    Icon: MessageSquare,
  },
  {
    step: 4,
    title: '家校闭环反馈',
    description: '家长App收到学情报告 + 行动建议。',
    detail: '复习紧贴当日所学',
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
            AI同桌如何工作？
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            四步打通
            <span className="text-orange">学习闭环</span>
          </h2>
          <p className="text-lg text-gray-600">
            从课堂录制到精准复习，让学习链路完整起来
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-[12%] right-[12%] h-1 bg-gradient-to-r from-sky via-sunny via-mint to-orange rounded-full" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    {/* Step Number */}
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg`}>
                      {step.step}
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">{step.description}</p>
                    <p className="text-sm font-medium text-orange">{step.detail}</p>
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
                <p className="text-gray-600 text-sm mb-1">{step.description}</p>
                <p className="text-sm font-medium text-orange">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hardware & Tech Highlights */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hardware */}
          <div className="bg-white rounded-3xl p-8 border border-sunny/30 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-sunny rounded-2xl flex items-center justify-center flex-shrink-0">
                <Tablet className="w-7 h-7 text-navy" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">硬件亮点：AI学习胶囊</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  打开即学习模式，避免手机干扰；合规专用终端，学校/家长都放心。
                </p>
              </div>
            </div>
          </div>

          {/* Tech */}
          <div className="bg-white rounded-3xl p-8 border border-sky/30 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-sky rounded-2xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">技术底座</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  纯音频MVP起步，准确率远超通用模型，逐步扩展板书识别 + 长时记忆。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
