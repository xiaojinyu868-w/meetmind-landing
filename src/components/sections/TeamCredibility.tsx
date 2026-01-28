import { useState } from 'react'
import { GraduationCap, Mic, Brain, Bot, ChevronLeft, ChevronRight, Cpu } from 'lucide-react'

// 三层技术架构
const techLayers = [
  {
    id: 1,
    icon: Mic,
    title: '全息课堂感知',
    tagline: '听得到',
    color: 'sky',
    features: ['远场语音识别', '声纹分离', '板书OCR', '多模态对齐'],
  },
  {
    id: 2,
    icon: Brain,
    title: '教育记忆大模型',
    tagline: '听得懂',
    color: 'orange',
    features: ['课堂原生', '科学复习', '学生画像', '考纲对齐', '证据链', '认知平衡'],
  },
  {
    id: 3,
    icon: Bot,
    title: '学霸思维Agent',
    tagline: '说得对',
    color: 'mint',
    features: ['分层诊断', '拟人交互', '变式题生成', '思维注入'],
  },
]

// 记忆模型核心能力 - 精简版
const memoryCore = [
  { 
    key: '课堂原生', 
    value: '老师怎么教的，不是标准答案',
    icon: '🎙️'
  },
  { 
    key: '科学复习', 
    value: '快忘时提醒，不是忘了再学',
    icon: '⏰'
  },
  { 
    key: '学生画像', 
    value: '你为什么不会，不是题怎么做',
    icon: '👤'
  },
  { 
    key: '证据链', 
    value: '全程可追溯，不是黑箱输出',
    icon: '🔗'
  },
  { 
    key: '考纲对齐', 
    value: '学得准，不是学得全',
    icon: '🎯'
  },
  { 
    key: '认知平衡', 
    value: '记得准，不是记得多',
    icon: '⚖️'
  },
]

export default function TeamCredibility() {
  const [activeLayer, setActiveLayer] = useState(1)

  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-sunny" />
            <span>技术壁垒</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            认知-行动<span className="text-sunny">闭环</span>
          </h2>
        </div>

        {/* 三层架构 - 横向流程 */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-16">
          {techLayers.map((layer, index) => (
            <div key={layer.id} className="flex items-center gap-4 sm:gap-8">
              <button
                onClick={() => setActiveLayer(index)}
                className={`group relative flex flex-col items-center transition-all duration-300 ${
                  activeLayer === index ? 'scale-110' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-3 transition-all ${
                  activeLayer === index 
                    ? `bg-${layer.color} shadow-lg shadow-${layer.color}/30` 
                    : 'bg-white/10'
                }`}>
                  <layer.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${activeLayer === index ? 'text-white' : 'text-white/60'}`} />
                </div>
                <span className={`text-xs sm:text-sm font-medium ${activeLayer === index ? 'text-white' : 'text-white/60'}`}>
                  {layer.tagline}
                </span>
                <span className={`text-[10px] sm:text-xs mt-1 ${activeLayer === index ? `text-${layer.color}` : 'text-white/40'}`}>
                  {layer.title}
                </span>
              </button>
              
              {index < 2 && (
                <div className="text-white/30 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        {/* 内容区 */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
          {activeLayer === 1 ? (
            /* 记忆模型 - 特殊展示 */
            <div>
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  专属<span className="text-orange">教育</span>记忆大模型
                </h3>
                <p className="text-white/60">
                  不是更大的模型，是更懂学习的模型
                </p>
              </div>

              {/* 6个核心点 - 简洁的两列布局 */}
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
                {memoryCore.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="text-sunny font-semibold">{item.key}</span>
                      <span className="text-white/40 mx-2">—</span>
                      <span className="text-white/80">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 一句话总结 */}
              <div className="mt-12 text-center">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange/20 to-sunny/20 rounded-full border border-sunny/30">
                  <span className="text-sunny">💡</span>
                  <span className="ml-2 text-white/90">
                    记住你孩子的<span className="text-sunny font-semibold">学习旅程</span>，而不只是知识
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* 其他层 - 简洁展示 */
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {techLayers[activeLayer].title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {techLayers[activeLayer].features.map((f, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 rounded-full text-sm bg-${techLayers[activeLayer].color}/20 text-${techLayers[activeLayer].color} border border-${techLayers[activeLayer].color}/30`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 底部导航点 */}
        <div className="flex justify-center gap-2 mt-8">
          {techLayers.map((layer, index) => (
            <button
              key={index}
              onClick={() => setActiveLayer(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeLayer === index 
                  ? `w-8 bg-${layer.color}` 
                  : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* 团队背书 */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 rounded-full backdrop-blur-sm">
            <GraduationCap className="w-5 h-5 text-sunny" />
            <span className="text-sm text-white/80">清华北大联合团队</span>
          </div>
        </div>
      </div>
    </section>
  )
}
