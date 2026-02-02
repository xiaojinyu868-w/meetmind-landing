import { useState } from 'react'
import { GraduationCap, Mic, Brain, Bot, ChevronLeft, ChevronRight, Cpu, BookOpen, Clock, User, Link2, Target, Scale } from 'lucide-react'

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
    borderColor: 'border-sky/30',
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
    borderColor: 'border-orange/30',
    features: [], // 单独展示
  },
  {
    id: 3,
    icon: Bot,
    title: '清北学霸思维辅导Agent',
    subtitle: '行动能力 · 多模态干预闭环',
    tagline: '再到"说得对"',
    color: 'from-mint to-mint/80',
    iconBg: 'bg-mint',
    borderColor: 'border-mint/30',
    features: [
      { label: '分层诊断报告', desc: 'Layered Diagnostic' },
      { label: '拟人化交互', desc: 'Voice/Video Output' },
      { label: '原生变式题生成', desc: 'Exercise Generation' },
      { label: '学霸思维注入', desc: 'Top Student Mindset' },
    ],
  },
]

// 记忆模型的6大核心能力
const memoryFeatures = [
  {
    icon: BookOpen,
    title: '课堂原生记忆',
    tagline: '真正听过这堂课的AI',
    points: ['100%还原老师讲解、强调、比喻', '秒级精准回溯：03:24 老师这样解释...', '不是题库检索，是今天课堂的检索'],
    highlight: '别人给"标准答案"，我们给"老师怎么教的"',
    color: 'sky',
    gradient: 'from-sky/10 to-sky/5',
  },
  {
    icon: Clock,
    title: '科学复习引擎',
    tagline: '在最佳时机推送最需要的内容',
    points: ['基于艾宾浩斯曲线精准预测复习窗口', '在知识"即将模糊"时主动唤醒', '让每次复习都踩在效率最高点'],
    highlight: '不是"忘了再学"，是"快忘时提醒"',
    color: 'orange',
    gradient: 'from-orange/10 to-sunny/5',
  },
  {
    icon: User,
    title: '个性化学生画像',
    tagline: '千人千面的认知档案',
    points: ['精准定位每个孩子的薄弱知识点', '追踪认知发展阶段与学习风格', '记录每次困惑、突破、进步'],
    highlight: '不是"这题怎么做"，是"你为什么不会这题"',
    color: 'mint',
    gradient: 'from-mint/10 to-mint/5',
  },
  {
    icon: Link2,
    title: '知识生命周期 & 证据链',
    tagline: '每个答案都有据可查',
    points: ['生命周期：首次学习→复习记录→掌握程度', '证据链：AI回答→老师原话→课堂时间点', '家长可验证，学习过程100%透明'],
    highlight: '不是"黑箱输出"，是"全程可追溯"',
    color: 'purple',
    gradient: 'from-purple-500/10 to-purple-400/5',
  },
  {
    icon: Target,
    title: '考纲精准对齐',
    tagline: '学的每一分钟都指向考试',
    points: ['每个知识点锚定课程标准', '区分了解/理解/掌握/应用层级', '聚焦高频考点，过滤无效信息'],
    highlight: '不是"学得全"，是"学得准"',
    color: 'coral',
    gradient: 'from-coral/10 to-coral/5',
  },
  {
    icon: Scale,
    title: '认知动态平衡',
    tagline: '精准做加法，果断做减法',
    points: ['精准加法：新知识入库+关联知识图谱', '认知纠偏：发现错误理解精准替换', '认知升级：小学→初中认知平滑过渡'],
    highlight: '不是"记得越多越好"，是"记得越准越好"',
    color: 'navy',
    gradient: 'from-navy/10 to-navy/5',
  },
]

export default function TeamCredibility() {
  const [activeLayer, setActiveLayer] = useState(1) // 默认显示记忆模型
  const [activeMemoryCard, setActiveMemoryCard] = useState(0)

  const nextLayer = () => setActiveLayer((prev) => (prev + 1) % techLayers.length)
  const prevLayer = () => setActiveLayer((prev) => (prev - 1 + techLayers.length) % techLayers.length)

  const current = techLayers[activeLayer]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-cream/30 to-white overflow-hidden">
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

        {/* Three Layer Architecture - Horizontal Pills */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
          {techLayers.map((layer, index) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(index)}
              className={`group relative px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 ${
                activeLayer === index
                  ? `bg-gradient-to-r ${layer.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <layer.icon className={`w-5 h-5 ${activeLayer === index ? 'animate-pulse' : ''}`} />
                <span className="font-semibold text-sm hidden sm:inline">{layer.title}</span>
                <span className="font-semibold text-xs sm:hidden">Layer {layer.id}</span>
              </div>
              {activeLayer === index && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-current" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${current.borderColor} transition-all duration-500`}>
          
          {/* 如果是记忆模型，展示特殊的6卡片布局 */}
          {activeLayer === 1 ? (
            <div className="p-6 lg:p-10">
              {/* 记忆模型标题 */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange to-sunny rounded-2xl flex items-center justify-center shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-navy">专属教育记忆大模型</h3>
                    <p className="text-gray-500 text-sm">不是更大的模型，是更懂学习的模型</p>
                  </div>
                </div>
              </div>

              {/* 6大核心能力 - 蜂窝式布局 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {memoryFeatures.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveMemoryCard(index)}
                    className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      activeMemoryCard === index 
                        ? `bg-gradient-to-br ${feature.gradient} border-${feature.color}/40 shadow-lg scale-[1.02]`
                        : 'bg-gray-50/50 border-transparent hover:border-gray-200 hover:shadow-md'
                    }`}
                  >
                    {/* Icon & Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                        activeMemoryCard === index 
                          ? `bg-${feature.color} shadow-md` 
                          : 'bg-gray-200 group-hover:bg-gray-300'
                      }`}>
                        <feature.icon className={`w-5 h-5 ${activeMemoryCard === index ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-500">{feature.tagline}</p>
                      </div>
                    </div>

                    {/* Points - 展开显示 */}
                    <div className={`space-y-1.5 overflow-hidden transition-all duration-300 ${
                      activeMemoryCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {feature.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className={`text-${feature.color} mt-0.5`}>•</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight */}
                    <div className={`mt-3 pt-3 border-t transition-all duration-300 ${
                      activeMemoryCard === index ? 'border-gray-200 opacity-100' : 'border-transparent opacity-0'
                    }`}>
                      <p className={`text-xs font-medium text-${feature.color}`}>
                        💡 {feature.highlight}
                      </p>
                    </div>

                    {/* 序号角标 */}
                    <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      activeMemoryCard === index 
                        ? `bg-${feature.color} text-white` 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* 底部总结 */}
              <div className="bg-gradient-to-r from-navy to-navy/90 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sunny/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-4xl">🧠</div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-lg font-semibold mb-1">
                      通用AI训练模型记住世界
                    </p>
                    <p className="text-sunny font-bold text-xl">
                      MeetMind训练模型记住你孩子的学习旅程
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* 其他层级的标准展示 */
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
                      className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors border border-gray-100 hover:shadow-md"
                    >
                      <div className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${current.iconBg}`} />
                        <div>
                          <p className="font-semibold text-navy text-sm">{feature.label}</p>
                          <p className="text-xs text-gray-500">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between px-6 lg:px-10 py-4 border-t border-gray-100 bg-gray-50/50">
            <button
              onClick={prevLayer}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-navy transition-colors rounded-lg hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm hidden sm:inline">上一层</span>
            </button>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {techLayers.map((layer, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLayer(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeLayer === index 
                      ? `w-8 bg-gradient-to-r ${layer.color}` 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextLayer}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-navy transition-colors rounded-lg hover:bg-white"
            >
              <span className="text-sm hidden sm:inline">下一层</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Team Badge */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 bg-navy rounded-full text-white shadow-lg">
            <GraduationCap className="w-5 h-5 text-sunny" />
            <span className="font-medium">清华北大联合团队</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['远场语音识别', '教育NLP', '知识图谱', '隐私计算'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-white rounded-full text-xs text-navy border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
