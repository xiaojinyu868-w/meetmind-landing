import { AlertCircle, Shuffle, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: AlertCircle,
    title: '信息断层',
    subtitle: '家长不知道老师怎么讲',
    description: '重点、易错点、作业意图全靠猜，辅导容易南辕北辙',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: Shuffle,
    title: '方法断层',
    subtitle: '学校和补习班讲法打架',
    description: '孩子脑子里塞满冲突体系，一换题型就崩',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: Clock,
    title: '反馈断层',
    subtitle: '刷题到深夜，错的还是那几类',
    description: '缺的不是努力，是即时、精准的高质量反馈',
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  }
]

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral-dark rounded-full text-sm font-medium mb-4">
            学习链路为什么总是断掉？
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            三大断层，让努力互相抵消
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            课堂是知识的"发生地"，课外却成了"猜测地"
          </p>
        </div>

        {/* Pain Points Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-sunny/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div className={`absolute -top-4 -right-4 w-10 h-10 ${point.color} rounded-full flex items-center justify-center font-bold text-navy shadow-md`}>
                0{index + 1}
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${point.iconBg} flex items-center justify-center mb-6`}>
                <point.icon className={`w-7 h-7 text-navy`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-navy/80 font-medium mb-3">{point.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-sunny/10 rounded-full">
            <span className="text-navy font-medium">
              MeetMind 用课堂原生数据，把断层重新接起来
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
