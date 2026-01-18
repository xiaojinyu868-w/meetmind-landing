const painPoints = [
  {
    title: '信息断层',
    subtitle: '家长最愿意付费的源头',
    description: '家长不是不会做题，而是根本不知道"老师今天怎么讲的"。',
    detail: '重点、易错点、作业意图全靠猜，辅导容易南辕北辙。',
    color: 'bg-warm-500',
    lightColor: 'bg-warm-50',
    textColor: 'text-warm-600',
  },
  {
    title: '方法断层',
    subtitle: '最隐蔽的学习效率杀手',
    description: '学校、补习班、家长三套讲法互相打架。',
    detail: '孩子脑子里塞满冲突体系，一换题型就崩。',
    color: 'bg-blush',
    lightColor: 'bg-blush-light',
    textColor: 'text-blush-dark',
  },
  {
    title: '反馈断层',
    subtitle: '冲刺期最致命',
    description: '考试临近，刷题到深夜，错的还是那几类。',
    detail: '缺的不是努力，而是即时、可解释、能转成行动的高质量反馈。',
    color: 'bg-navy',
    lightColor: 'bg-sky-light',
    textColor: 'text-navy',
  },
]

export default function PainPoints() {
  return (
    <section id="painpoints" className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-sunny-bg text-sunny-dark font-medium rounded-full text-sm mb-6">
            学习链路为什么总是断掉？
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            在中国，家长最焦虑的不是孩子"不努力"，
            <br className="hidden sm:block" />
            而是学习链路被<span className="text-warm-600">无声地切碎了</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            课堂是知识的"发生地"，课外却成了"猜测地"。
            <br className="hidden sm:block" />
            家长猜老师讲法、孩子猜自己哪里不会、补习班猜学校进度——
            <span className="font-medium text-gray-800">努力互相抵消，越补越乱、越学越累。</span>
          </p>
        </div>

        {/* Pain Points Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Decoration */}
              <div className={`absolute top-0 left-8 right-8 h-1 ${point.color} rounded-b-full`} />
              
              {/* Large Number */}
              <div className={`w-16 h-16 ${point.lightColor} rounded-2xl flex items-center justify-center mb-6`}>
                <span className={`text-3xl font-bold ${point.textColor}`}>0{index + 1}</span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
                  <span className={`text-xs px-2 py-1 ${point.lightColor} ${point.textColor} rounded-full font-medium`}>
                    {point.subtitle}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{point.description}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{point.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="relative bg-navy rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-navy-light rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sunny/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                MeetMind 不做又一个题库
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                而是用<span className="text-sunny font-semibold">课堂原生数据</span>把链路重新接起来。
                让课外辅导第一次拥有"课堂上下文"，真正替代昂贵家教。
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-sm text-white/60 mb-2">家教/题海/焦虑</p>
                <p className="text-xl font-bold text-sunny">
                  很多时候是在为断层买单
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
