import { Mic, Brain, MessageSquare, GraduationCap } from 'lucide-react'

const techLayers = [
  {
    number: '01',
    icon: Mic,
    title: '全息课堂高精度感知',
    subtitle: '听觉与视觉 · 全息课堂捕获',
    color: 'bg-sky',
    borderColor: 'border-sky',
    features: [
      '远场语音识别 (Far-field ASR)',
      '声纹分离 (Speaker Diarization)',
      '板书关键帧提取',
      '多模态对齐 (Audio-Visual Alignment)',
    ],
  },
  {
    number: '02',
    icon: Brain,
    title: '专属教育记忆大模型',
    subtitle: '记忆与认知 · 上下文流引擎',
    color: 'bg-sunny',
    borderColor: 'border-sunny',
    features: [
      '长时记忆：课堂原生记忆',
      '有效记忆沉淀',
      '考点对齐 · 知识图谱',
      '盲区定位 (RAG 能力)',
    ],
  },
  {
    number: '03',
    icon: MessageSquare,
    title: '清北学霸思维辅导Agent',
    subtitle: '行动能力 · 多模态干预闭环',
    color: 'bg-orange',
    borderColor: 'border-orange',
    features: [
      '文本输出：分层诊断报告',
      '语音/视频输出：拟人化交互',
      '闭环输出：原生变式题生成',
      '从"听得到"→"听得懂"→"说得对"',
    ],
  },
]

export default function TeamCredibility() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 text-navy font-medium rounded-full text-sm mb-6">
            🛡️ 技术壁垒
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
            提供<span className="text-orange">同桌般</span>的辅导体验
          </h2>
          <p className="text-lg text-gray-600">
            完整的认知-行动闭环，让AI真正"听懂"课堂
          </p>
        </div>

        {/* Tech Layers */}
        <div className="space-y-6 mb-16">
          {techLayers.map((layer, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 lg:p-8 shadow-soft border-l-4 ${layer.borderColor} hover:shadow-card transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left - Icon & Title */}
                <div className="flex items-center gap-4 lg:w-1/3">
                  <div className={`w-14 h-14 ${layer.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <layer.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium">LAYER {layer.number}</span>
                    <h3 className="text-xl font-bold text-navy">{layer.title}</h3>
                    <p className="text-sm text-gray-500">{layer.subtitle}</p>
                  </div>
                </div>

                {/* Right - Features */}
                <div className="lg:w-2/3 flex flex-wrap gap-2">
                  {layer.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 ${layer.color}/10 rounded-lg text-sm text-navy font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sunny/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center">
            <p className="text-white/60 text-sm mb-6">完整的认知-行动闭环</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl lg:text-2xl font-bold">
              <span className="text-sky">"听得到"</span>
              <span className="text-white/40">→</span>
              <span className="text-sunny">"听得懂"</span>
              <span className="text-white/40">→</span>
              <span className="text-orange">"说得对"</span>
            </div>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto">
              不只是记录课堂，更能理解知识、诊断问题、精准辅导
            </p>
          </div>
        </div>

        {/* Team & Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Team */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sunny to-orange rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">清华北大联合团队</h3>
                <p className="text-sm text-gray-500">核心成员来自清华、北大计算机系</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              我们相信，<span className="font-semibold text-navy">每个孩子都值得拥有一位"清华学霸"做同桌</span>。
              MeetMind 就是我们给出的答案。
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <p className="text-sm text-gray-500 mb-4">技术底座</p>
            <div className="flex flex-wrap gap-2">
              {['远场语音识别', '教育场景NLP', '知识图谱', '个性化推荐', '隐私计算'].map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-cream rounded-full text-sm text-navy font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
