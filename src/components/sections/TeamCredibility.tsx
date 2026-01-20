import { useState } from 'react'
import { GraduationCap, Mic, Brain, Bot, ChevronLeft, ChevronRight, Cpu, Sparkles } from 'lucide-react'

const techLayers = [
  {
    id: 1,
    icon: Mic,
    title: '全息课堂高精度感知',
    subtitle: '听觉与视觉 · 全息课堂捕获',
    tagline: '从"听得到"开始',
    color: 'from-sky to-sky/80',
    iconBg: 'bg-sky',
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
    color: 'from-orange to-sunny',
    iconBg: 'bg-orange',
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
    color: 'from-mint to-mint/80',
    iconBg: 'bg-mint',
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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 text-navy font-medium rounded-full text-sm mb-6">
            <Cpu className="w-4 h-4" />
            技术壁垒 · 提供同桌般的辅导体验
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
            完整的<span className="text-orange">认知-行动闭环</span>
          </h2>
          <p className="text-lg text-gray-600">
            从<span className="text-sky font-semibold">"听得到"</span> → 
            <span className="text-orange font-semibold">"听得懂"</span> → 
            <span className="text-mint font-semibold">"说得对"</span>
          </p>
        </div>

        {/* Tech Layer Showcase */}
        <div className="relative bg-white rounded-3xl shadow-card overflow-hidden border border-gray-100">
          {/* Layer Tabs */}
          <div className="flex border-b border-gray-100">
            {techLayers.map((layer, index) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(index)}
                className={`flex-1 px-4 py-4 text-center transition-all duration-300 ${
                  activeLayer === index
                    ? `bg-gradient-to-r ${layer.color} text-white`
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <layer.icon className="w-5 h-5" />
                  <span className="font-semibold text-sm hidden sm:inline">{layer.title}</span>
                  <span className="font-semibold text-sm sm:hidden">Layer {layer.id}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Layer Content */}
          <div className="p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left - Icon & Title */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className={`w-20 h-20 ${current.iconBg} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg`}>
                  <current.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">{current.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{current.subtitle}</p>
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${current.color} text-white text-sm font-medium rounded-full`}>
                  {current.tagline}
                </span>
              </div>

              {/* Right - Features Grid */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                {current.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors border border-gray-100"
                  >
                    <div className="flex items-start gap-2">
                      <Sparkles className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        activeLayer === 0 ? 'text-sky' : activeLayer === 1 ? 'text-orange' : 'text-mint'
                      }`} />
                      <div>
                        <p className="font-semibold text-navy text-sm">{feature.label}</p>
                        <p className="text-xs text-gray-500">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={prevLayer}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-navy transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">上一层</span>
              </button>

              {/* Progress Dots */}
              <div className="flex gap-2">
                {techLayers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLayer(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeLayer === index ? 'w-6 bg-navy' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextLayer}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-navy transition-colors"
              >
                <span className="text-sm">下一层</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Team Badge */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 bg-navy rounded-full text-white">
            <GraduationCap className="w-5 h-5 text-sunny" />
            <span className="font-medium">清华北大联合团队</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['远场语音识别', '教育NLP', '知识图谱', '隐私计算'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-white rounded-full text-xs text-navy border border-gray-200 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
