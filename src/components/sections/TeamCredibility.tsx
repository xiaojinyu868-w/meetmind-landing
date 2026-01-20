import { GraduationCap, Cpu, Brain, Users } from 'lucide-react'

const teamHighlights = [
  {
    icon: GraduationCap,
    title: '清华北大联合团队',
    description: '核心成员来自清华、北大计算机系',
    color: 'bg-sky',
  },
  {
    icon: Cpu,
    title: '全息课堂高精度感知',
    description: '自研远场语音识别，课堂场景准确率领先',
    color: 'bg-sunny',
  },
  {
    icon: Brain,
    title: '专属教育记忆大模型',
    description: '我们把训练大模型的技术，用来训练你的孩子',
    color: 'bg-mint',
  },
  {
    icon: Users,
    title: '清北学霸思维',
    description: '融入顶尖学霸的学习方法论，精准辅导',
    color: 'bg-orange',
  },
]

export default function TeamCredibility() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 text-navy font-medium rounded-full text-sm mb-6">
            🎓 源自清华北大的硬核科技
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            不是"三无产品"
            <br />
            <span className="text-orange">是顶尖团队的诚意之作</span>
          </h2>
        </div>

        {/* Team Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Founder Quote */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sunny/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Quote */}
            <div className="text-6xl text-sunny/30 mb-4">"</div>
            <p className="text-xl lg:text-2xl leading-relaxed mb-8 -mt-8">
              我们相信，<span className="text-sunny font-semibold">每个孩子都值得拥有一位"清华学霸"做同桌</span>。
              <br />
              MeetMind 就是我们给出的答案。
            </p>
            
            {/* Founder Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sunny to-orange rounded-full flex items-center justify-center text-2xl font-bold text-navy">
                M
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">MeetMind 创始团队</p>
                <p className="text-white/60 text-sm">清华 × 北大 × 教育科技</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">技术底座</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['远场语音识别', '教育场景NLP', '知识图谱', '个性化推荐', '隐私计算'].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white rounded-full text-sm text-navy border border-gray-200 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
