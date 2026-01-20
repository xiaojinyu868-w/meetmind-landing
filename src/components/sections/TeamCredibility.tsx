import { useState } from 'react'
import { GraduationCap, Mic, Brain, Bot, ChevronLeft, ChevronRight, Cpu, Sparkles, Zap } from 'lucide-react'

const techLayers = [
  {
    id: 1,
    icon: Mic,
    title: '全息课堂高精度感知',
    subtitle: '听觉与视觉 · 全息课堂捕获',
    tagline: '从"听得到"开始',
    gradient: 'from-sky via-sky/90 to-blue-400',
    lightGradient: 'from-sky/5 via-sky/10 to-blue-400/5',
    iconBg: 'bg-gradient-to-br from-sky to-blue-500',
    accentColor: 'text-sky',
    borderColor: 'border-sky/20',
    features: [
      { label: '远场语音识别', desc: 'Far-field ASR' },
      { label: '声纹分离', desc: 'Speaker Diarization' },
      { label: '板书关键帧提取', desc: 'Board Frame Extraction' },
      { label: '多模态对齐', desc: 'Audio-Visual Alignment' },
    ],
  },
  {
    id: 2,
    icon: Brain,
    title: '专属教育记忆大模型',
    subtitle: '记忆与认知 · 上下文流引擎',
    tagline: '到"听得懂"',
    gradient: 'from-orange via-orange/90 to-sunny',
    lightGradient: 'from-orange/5 via-orange/10 to-sunny/5',
    iconBg: 'bg-gradient-to-br from-orange to-sunny',
    accentColor: 'text-orange',
    borderColor: 'border-orange/20',
    features: [
      { label: '长时记忆', desc: '课堂原生记忆' },
      { label: '有效记忆沉淀', desc: 'Memory Sedimentation' },
      { label: '考点对齐', desc: 'Knowledge Graph' },
      { label: '盲区定位', desc: 'RAG 能力' },
    ],
  },
  {
    id: 3,
    icon: Bot,
    title: '清北学霸思维辅导Agent',
    subtitle: '行动能力 · 多模态干预闭环',
    tagline: '再到"说得对"',
    gradient: 'from-mint via-mint/90 to-emerald-400',
    lightGradient: 'from-mint/5 via-mint/10 to-emerald-400/5',
    iconBg: 'bg-gradient-to-br from-mint to-emerald-500',
    accentColor: 'text-mint',
    borderColor: 'border-mint/20',
    features: [
      { label: '分层诊断报告', desc: 'Layered Diagnostic' },
      { label: '拟人化交互', desc: 'Voice/Video Output' },
      { label: '原生变式题生成', desc: 'Exercise Generation' },
      { label: '学霸思维注入', desc: 'Top Student Mindset' },
    ],
  },
]

export default function TeamCredibility() {
  const [activeLayer, setActiveLayer] = useState(0)

  const nextLayer = () => setActiveLayer((prev) => (prev + 1) % techLayers.length)
  const prevLayer = () => setActiveLayer((prev) => (prev - 1 + techLayers.length) % techLayers.length)

  const current = techLayers[activeLayer]

  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 font-medium rounded-full text-sm mb-6 border border-white/10">
            <Cpu className="w-4 h-4 text-sunny" />
            技术壁垒 · 提供同桌般的辅导体验
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            完整的<span className="text-sunny">认知-行动闭环</span>
          </h2>
          <p className="text-lg text-white/70">
            从<span className="text-sky font-semibold">"听得到"</span> → 
            <span className="text-orange font-semibold">"听得懂"</span> → 
            <span className="text-mint font-semibold">"说得对"</span>
          </p>
        </div>

        {/* Tech Layer Showcase - 玻璃拟态卡片 */}
        <div className="relative">
          {/* 外层发光效果 */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${current.gradient} rounded-[2rem] blur-xl opacity-30 transition-all duration-500`} />
          
          {/* 主卡片 */}
          <div className={`relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border ${current.borderColor} shadow-2xl`}>
            {/* 顶部渐变装饰条 */}
            <div className={`h-1 bg-gradient-to-r ${current.gradient}`} />
            
            {/* Layer Tabs */}
            <div className="flex bg-gray-50/80">
              {techLayers.map((layer, index) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(index)}
                  className={`flex-1 px-4 py-4 text-center transition-all duration-300 relative ${
                    activeLayer === index
                      ? 'bg-white text-navy'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                  }`}
                >
                  {activeLayer === index && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${layer.gradient}`} />
                  )}
                  <div className="flex items-center justify-center gap-2">
                    <layer.icon className={`w-5 h-5 ${activeLayer === index ? layer.accentColor : ''}`} />
                    <span className="font-semibold text-sm hidden sm:inline">{layer.title}</span>
                    <span className="font-semibold text-sm sm:hidden">Layer {layer.id}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Layer Content */}
            <div className={`p-8 lg:p-12 bg-gradient-to-br ${current.lightGradient}`}>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left - Icon & Title */}
                <div className="flex-shrink-0 text-center lg:text-left lg:w-72">
                  {/* 图标带光晕 */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 ${current.iconBg} rounded-2xl blur-xl opacity-40`} />
                    <div className={`relative w-20 h-20 ${current.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <current.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">{current.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{current.subtitle}</p>
                  <span className={`inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r ${current.gradient} text-white text-sm font-medium rounded-full shadow-md`}>
                    <Zap className="w-3.5 h-3.5" />
                    {current.tagline}
                  </span>
                </div>

                {/* Right - Features Grid */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {current.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`group bg-white rounded-2xl p-5 transition-all duration-300 border border-gray-100 hover:border-transparent hover:shadow-lg hover:-translate-y-1 relative overflow-hidden`}
                    >
                      {/* hover时的渐变背景 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${current.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      
                      <div className="relative flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${current.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-navy">{feature.label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200/50">
                <button
                  onClick={prevLayer}
                  className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-navy transition-colors rounded-lg hover:bg-white/80"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-sm font-medium">上一层</span>
                </button>

                {/* Progress Dots */}
                <div className="flex gap-3">
                  {techLayers.map((layer, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveLayer(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeLayer === index 
                          ? `w-8 bg-gradient-to-r ${layer.gradient}` 
                          : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextLayer}
                  className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-navy transition-colors rounded-lg hover:bg-white/80"
                >
                  <span className="text-sm font-medium">下一层</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Badge */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sunny to-orange rounded-full text-navy font-semibold shadow-lg">
            <GraduationCap className="w-5 h-5" />
            <span>清华北大联合团队</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['远场语音识别', '教育NLP', '知识图谱', '隐私计算'].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10 hover:bg-white/20 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
