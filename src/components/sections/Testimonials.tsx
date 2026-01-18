const testimonials = [
  {
    id: 1,
    content: '终于有个真正听过课的"家教"了！以前每天辅导作业都要先问老师今天讲了什么，现在AI同桌直接告诉我重点在哪里。',
    author: '李女士',
    role: '北京小学家长',
    rating: 5,
    bgColor: 'bg-sunny-bg',
    initial: 'L',
  },
  {
    id: 2,
    content: '孩子说AI同桌比我讲得还清楚……虽然有点伤自尊，但确实效果好。关键是它用的就是老师的原话和思路！',
    author: '王女士',
    role: '上海初中妈妈',
    rating: 5,
    bgColor: 'bg-blush-bg',
    initial: 'W',
  },
  {
    id: 3,
    content: '复习效率翻倍，晚9点不再是战场。以前每天辅导到11点，现在孩子自己跟着AI复习，我只需要看报告就行。',
    author: '张先生',
    role: '广州竞赛家长',
    rating: 5,
    bgColor: 'bg-sky-bg',
    initial: 'Z',
  },
]

const stats = [
  { value: '91.2%', label: '中国家长曾陪孩子作业' },
  { value: '78%', label: '陪伴时易引发矛盾' },
  { value: '万亿+', label: 'K12课外辅导市场规模' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-sunny-bg text-sunny-dark font-medium rounded-full text-sm mb-6">
            信任与证明
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            为什么家长选择<span className="text-navy">MeetMind</span>？
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-cream-100 rounded-2xl">
              <p className="text-3xl sm:text-4xl font-bold text-navy mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative ${testimonial.bgColor} rounded-3xl p-8 hover:shadow-medium transition-all duration-300`}
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 opacity-10">
                <span className="text-6xl font-serif text-navy">"</span>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sunny text-lg">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-8 bg-sunny rounded-lg flex items-center justify-center">
                  <span className="text-navy font-bold">S</span>
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
