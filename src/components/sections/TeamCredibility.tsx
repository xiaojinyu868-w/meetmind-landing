import { useState } from 'react'
import { 
  GraduationCap, Mic, Brain, Bot, ChevronLeft, ChevronRight, 
  Cpu, BookOpen, Clock, User, Link2, Target, Scale,
  Sparkles, CheckCircle2
} from 'lucide-react'

// 三层技术架构
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
    isCore: true, // 核心模块标记
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

// 记忆大模型的6个核心能力
const memoryCapabilities = [
  {
    icon: BookOpen,
    title: '课堂原生记忆',
    tagline: '真正听过这堂课的AI',
    points: [
      '100%还原老师的讲解、强调、比喻',
      '秒级精准回溯："03:24 老师这样解释..."',
      '不是从题库检索，是从今天的课堂检索',
    ],
    highlight: '别人给"标准答案"，我们给"老师怎么教的"',
    color: 'bg-sky',
    lightColor: 'bg-sky/10',
    textColor: 'text-sky',
  },
  {
    icon: Clock,
    title: '科学复习引擎',
    tagline: '在最佳时机，推送最需要的内容',
    points: [
      '基于艾宾浩斯曲线，精准预测复习窗口',
      '在知识"即将模糊"时主动唤醒',
      '让每一次复习都踩在效率最高点',
    ],
    highlight: '不是"忘了再学"，是"快忘时提醒"',
    color: 'bg-orange',
    lightColor: 'bg-orange/10',
    textColor: 'text-orange',
  },
  {
    icon: User,
    title: '个性化学生画像',
    tagline: '千人千面的认知档案',
    points: [
      '精准定位每个孩子的薄弱知识点',
      '追踪认知发展阶段与学习风格',
      '记录每次困惑、每次突破、每次进步',
    ],
    highlight: '不是"这题怎么做"，是"你为什么不会这题"',
    color: 'bg-mint',
    lightColor: 'bg-mint/10',
    textColor: 'text-mint',
  },
  {
    icon: Link2,
    title: '知识生命周期 & 证据链',
    tagline: '每个知识点都有档案，每个答案都有据可查',
    points: [
      '生命周期：首次学习 → 复习记录 → 掌握程度',
      '证据链：AI回答 → 老师原话 → 课堂时间点',
      '家长可验证，学习过程100%透明',
    ],
    highlight: '不是"黑箱输出"，是"全程可追溯"',
    color: 'bg-coral',
    lightColor: 'bg-coral/10',
    textColor: 'text-coral',
  },
  {
    icon: Target,
    title: '考纲精准对齐',
    tagline: '学的每一分钟，都指向考试',
    points: [
      '每个知识点锚定课程标准',
      '区分"了解/理解/掌握/应用"层级',
      '聚焦高频考点，过滤无效信息',
    ],
    highlight: '不是"学得全"，是"学得准"',
    color: 'bg-sunny',
    lightColor: 'bg-sunny/10',
    textColor: 'text-yellow-600',
  },
  {
    icon: Scale,
    title: '认知动态平衡',
    tagline: '精准做加法，果断做减法',
    points: [
      '精准加法：新知识入库 + 关联知识图谱',
      '认知纠偏：发现错误理解，精准替换',
      '认知升级：小学认知 → 初中认知平滑过渡',
    ],
    highlight: '不是"记得越多越好"，是"记得越准越好"',
    color: 'bg-navy',
    lightColor: 'bg-navy/10',
    textColor: 'text-navy',
  },
]

export default function TeamCredibility() {
  const [activeLayer, setActiveLayer] = useState(1) // 默认显示记忆大模型
  const [activeMemory, setActiveMemory] = useState(0)

  const nextLayer = () => setActiveLayer((prev) => (prev + 1) % techLayers.length)
  const prevLayer = () => setActiveLayer((prev) => (prev - 1 + techLayers.length) % techLayers.length)

  const current = techLayers[activeLayer]
  const currentMemory = memoryCapabilities[activeMemory]

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

        {/* Tech Layer Tabs */}
        <div className="flex border-b border-gray-200 mb-8 bg-white rounded-t-2xl overflow-hidden shadow-sm">
          {techLayers.map((layer, index) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(index)}
              className={`flex-1 px-4 py-4 text-center transition-all duration-300 relative ${
                activeLayer === index
                  ? `bg-gradient-to-r ${layer.color} text-white`
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <layer.icon className="w-5 h-5" />
                <span className="font-semibold text-sm hidden md:inline">{layer.title}</span>
                <span className="font-semibold text-xs md:hidden">
                  {index === 0 ? '感知层' : index === 1 ? '记忆层' : '输出层'}
                </span>
              </div>
              {layer.isCore && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-coral text-white text-[10px] rounded-full font-bold">
                  核心
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {activeLayer === 1 ? (
          // 专属教育记忆大模型 - 特殊展示
          <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange to-sunny p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">专属教育记忆大模型</h3>
                  <p className="text-white/80 text-sm">不是更大的模型，是更懂学习的模型</p>
                </div>
              </div>
              <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-3xl">
                通用AI训练模型记住世界，MeetMind训练模型记住你孩子的学习旅程。
                我们构建了专为教育场景设计的记忆系统，理解学习的本质规律。
              </p>
            </div>

            {/* 6 Capabilities Grid */}
            <div className="p-6">
              {/* Capability Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {memoryCapabilities.map((cap, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMemory(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeMemory === index
                        ? `${cap.color} text-white shadow-md`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <cap.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{cap.title}</span>
                    <span className="sm:hidden">{index + 1}</span>
                  </button>
                ))}
              </div>

              {/* Active Capability Detail */}
              <div className={`rounded-2xl p-6 ${currentMemory.lightColor} border border-gray-100`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left - Title & Icon */}
                  <div className="lg:w-1/3">
                    <div className={`w-14 h-14 ${currentMemory.color} rounded-xl flex items-center justify-center mb-4`}>
                      <currentMemory.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-2">{currentMemory.title}</h4>
                    <p className={`text-sm ${currentMemory.textColor} font-medium`}>
                      "{currentMemory.tagline}"
                    </p>
                  </div>

                  {/* Right - Points */}
                  <div className="lg:w-2/3">
                    <ul className="space-y-3 mb-4">
                      {currentMemory.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${currentMemory.textColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Highlight */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${currentMemory.color} text-white rounded-lg text-sm font-medium`}>
                      <Sparkles className="w-4 h-4" />
                      {currentMemory.highlight}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {memoryCapabilities.map((cap, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMemory(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeMemory === index ? `w-8 ${cap.color}` : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Summary Bar */}
            <div className="bg-navy/5 px-6 py-4 border-t border-gray-100">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 text-navy">
                  <BookOpen className="w-4 h-4 text-sky" />
                  课堂原生
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2 text-navy">
                  <Clock className="w-4 h-4 text-orange" />
                  科学复习
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2 text-navy">
                  <User className="w-4 h-4 text-mint" />
                  个性画像
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2 text-navy">
                  <Link2 className="w-4 h-4 text-coral" />
                  证据链
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2 text-navy">
                  <Target className="w-4 h-4 text-sunny" />
                  考纲对齐
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2 text-navy">
                  <Scale className="w-4 h-4 text-navy" />
                  动态平衡
                </span>
              </div>
            </div>
          </div>
        ) : (
          // 其他层 - 标准展示
          <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
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
                {'features' in current && current.features && (
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {current.features.map((feature, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors border border-gray-100"
                      >
                        <div className="flex items-start gap-2">
                          <Sparkles className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            activeLayer === 0 ? 'text-sky' : 'text-mint'
                          }`} />
                          <div>
                            <p className="font-semibold text-navy text-sm">{feature.label}</p>
                            <p className="text-xs text-gray-500">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
              <button
                onClick={prevLayer}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-navy transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">上一层</span>
              </button>

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
        )}

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
