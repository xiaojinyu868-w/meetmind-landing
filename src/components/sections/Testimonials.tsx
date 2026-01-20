import { Shield, Lock, UserCheck, CheckCircle, Users, TrendingUp, DollarSign } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: '终于有个真正听过课的"家教"了！以前每天辅导作业都要先问老师今天讲了什么，现在AI同桌直接告诉我重点在哪里。',
    author: '匿名用户',
    role: '小学家长',
    initials: '匿',
    bubbleColor: 'bg-sunny/30',
    avatarColor: 'bg-orange',
  },
  {
    id: 2,
    content: '孩子说AI同桌比我讲得还清楚……虽然有点伤自尊，但确实效果好。关键是它用的就是老师的原话和思路！',
    author: '匿名用户',
    role: '初中家长',
    initials: '匿',
    bubbleColor: 'bg-sky/20',
    avatarColor: 'bg-sky',
  },
  {
    id: 3,
    content: '复习效率翻倍，晚9点不再是战场。以前每天辅导到11点，现在孩子自己跟着AI复习，我只需要看报告就行。',
    author: '匿名用户',
    role: '高中家长',
    initials: '匿',
    bubbleColor: 'bg-mint/30',
    avatarColor: 'bg-mint',
  },
]

const stats = [
  { value: '91.2%', label: '中国家长曾陪孩子作业', Icon: Users },
  { value: '78%', label: '陪伴时易引发矛盾', Icon: TrendingUp },
  { value: '万亿+', label: 'K12课外辅导市场规模', Icon: DollarSign },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunny/20 text-navy font-medium rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-sunny rounded-full" />
            信任与证明
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            为什么家长选择
            <span className="text-orange"> MeetMind</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 bg-sunny/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.Icon className="w-6 h-6 text-orange" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-navy mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bubbleColor} rounded-3xl p-6 shadow-soft`}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange text-lg">★</span>
                ))}
              </div>
              
              {/* Content */}
              <p className="text-navy leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-navy rounded-3xl p-8 lg:p-12 overflow-hidden relative">
          {/* 装饰 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sunny/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-sunny rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-white">隐私承诺</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                数据最小化，只为学习服务；不采集学生影像；家长完全控制。
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <Lock className="w-6 h-6 text-sunny mx-auto mb-2" />
                <p className="text-sunny font-bold">数据加密</p>
                <p className="text-white/60 text-sm">端到端保护</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <UserCheck className="w-6 h-6 text-sunny mx-auto mb-2" />
                <p className="text-sunny font-bold">家长控制</p>
                <p className="text-white/60 text-sm">随时删除</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                <CheckCircle className="w-6 h-6 text-sunny mx-auto mb-2" />
                <p className="text-sunny font-bold">合规认证</p>
                <p className="text-white/60 text-sm">安全可信</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
