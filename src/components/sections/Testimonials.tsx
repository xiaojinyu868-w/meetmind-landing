const testimonials = [
  {
    id: 1,
    content: '终于有个真正听过课的"家教"了！以前每天辅导作业都要先问老师今天讲了什么，现在AI同桌直接告诉我重点在哪里。',
    author: '李女士',
    role: '北京小学家长',
    avatar: '👩',
    bubbleColor: 'bg-sunny',
    tailPosition: 'left',
  },
  {
    id: 2,
    content: '孩子说AI同桌比我讲得还清楚……虽然有点伤自尊，但确实效果好。关键是它用的就是老师的原话和思路！',
    author: '王女士',
    role: '上海初中妈妈',
    avatar: '👩‍🦰',
    bubbleColor: 'bg-sky-100',
    tailPosition: 'right',
  },
  {
    id: 3,
    content: '复习效率翻倍，晚9点不再是战场。以前每天辅导到11点，现在孩子自己跟着AI复习，我只需要看报告就行。',
    author: '张先生',
    role: '广州竞赛家长',
    avatar: '👨',
    bubbleColor: 'bg-mint-light',
    tailPosition: 'left',
  },
]

const stats = [
  { value: '91.2%', label: '中国家长曾陪孩子作业', icon: '👨‍👩‍👧' },
  { value: '78%', label: '陪伴时易引发矛盾', icon: '😤' },
  { value: '万亿+', label: 'K12课外辅导市场规模', icon: '💰' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunny-50 text-sunny-dark font-medium rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-sunny rounded-full" />
            信任与证明
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            We are loved by
            <br />
            <span className="text-purple">2000+ learners</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-cream rounded-2xl border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl sm:text-3xl font-bold text-purple mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials - Chat Bubble Style */}
        <div className="space-y-8 mb-16 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex items-end gap-4 ${testimonial.tailPosition === 'right' ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-2xl shadow-soft">
                {testimonial.avatar}
              </div>

              {/* Bubble */}
              <div className={`relative max-w-xl ${testimonial.tailPosition === 'right' ? 'text-right' : ''}`}>
                <div className={`${testimonial.bubbleColor} rounded-2xl ${testimonial.tailPosition === 'left' ? 'rounded-bl-sm' : 'rounded-br-sm'} p-6 shadow-bubble`}>
                  {/* Rating Stars */}
                  <div className={`flex gap-1 mb-3 ${testimonial.tailPosition === 'right' ? 'justify-end' : ''}`}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sunny-dark text-lg">★</span>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-navy leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className={`flex items-center gap-2 ${testimonial.tailPosition === 'right' ? 'justify-end' : ''}`}>
                    <p className="font-semibold text-navy">{testimonial.author}</p>
                    <span className="text-gray-400">·</span>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Bubble Tail */}
                <div 
                  className={`absolute bottom-0 ${testimonial.tailPosition === 'left' ? 'left-0 -translate-x-2' : 'right-0 translate-x-2'}`}
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: testimonial.tailPosition === 'left' ? '12px solid transparent' : 'none',
                    borderRight: testimonial.tailPosition === 'right' ? '12px solid transparent' : 'none',
                    borderTop: `12px solid ${testimonial.bubbleColor === 'bg-sunny' ? '#FFD93D' : testimonial.bubbleColor === 'bg-sky-100' ? '#E7F5FF' : '#C3F0D8'}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 overflow-hidden relative">
          {/* 装饰 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-sunny rounded-xl flex items-center justify-center text-xl">
                  🔒
                </div>
                <h3 className="text-2xl font-bold text-white">隐私承诺</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                数据最小化，只为学习服务；不采集学生影像；家长完全控制。
                我们深知教育数据的敏感性，严格遵守相关法规。
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <p className="text-sunny font-bold text-lg">数据加密</p>
                <p className="text-white/60 text-sm">端到端保护</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <p className="text-sunny font-bold text-lg">家长控制</p>
                <p className="text-white/60 text-sm">随时删除</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <p className="text-sunny font-bold text-lg">合规认证</p>
                <p className="text-white/60 text-sm">安全可信</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
