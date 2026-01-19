import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: 1,
    title: '课堂无感采集',
    description: '专用AI学习胶囊（精致录音笔形态）一键开启，合法安静记录老师语音与板书重点。',
    detail: '不打扰课堂，无隐私风险',
    color: 'bg-sky',
    lightColor: 'bg-sky-50',
    textColor: 'text-sky-dark',
    icon: '🎙️',
  },
  {
    step: 2,
    title: '智能结构化',
    description: '远场语音识别 + 多模态对齐，把杂乱课堂转为可检索的"课堂记忆"。',
    detail: '重点、易错点、作业要求全结构化',
    color: 'bg-sunny',
    lightColor: 'bg-sunny-50',
    textColor: 'text-sunny-dark',
    icon: '🧠',
  },
  {
    step: 3,
    title: '个性化干预',
    description: '回家打开设备，AI同桌用老师原话苏格拉底式对话引导复习。',
    detail: '哪里没懂？对应课堂片段立刻找回',
    color: 'bg-purple',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple',
    icon: '💬',
  },
  {
    step: 4,
    title: '家校闭环反馈',
    description: '家长App收到学情报告 + 行动建议；老师可选获班级共性弱点。',
    detail: '复习紧贴当日所学，成绩自然提升',
    color: 'bg-mint',
    lightColor: 'bg-mint-50',
    textColor: 'text-mint-dark',
    icon: '📊',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-dark font-medium rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-sky rounded-full" />
            AI同桌如何工作？
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            MeetMind：孩子身边
            <br className="hidden sm:block" />
            <span className="text-purple">记忆最好的AI同桌</span>
          </h2>
          <p className="text-lg text-gray-600">
            从课堂录制到精准复习，四步打通学习闭环
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-[12%] right-[12%] h-1 bg-gradient-to-r from-sky via-sunny via-purple to-mint rounded-full" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 ${step.lightColor} rounded-2xl flex items-center justify-center mb-4 text-3xl`}>
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                    <p className={`text-sm font-medium ${step.textColor}`}>{step.detail}</p>
                  </div>

                  {/* Step Number Badge */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
                    {step.step}
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
        <div className="lg:hidden space-y-6 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-5 shadow-soft border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <p className={`text-sm font-medium ${step.textColor}`}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hardware & Tech Highlights */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hardware */}
          <div className="bg-sunny-50 rounded-3xl p-8 border border-sunny-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-sunny rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                📱
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
          <div className="bg-purple-50 rounded-3xl p-8 border border-purple-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                ⚡
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">技术底座</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  纯音频MVP起步（准确率远超通用模型），逐步扩展板书识别 + 长时记忆。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
