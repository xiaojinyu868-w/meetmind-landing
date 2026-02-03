import { HelpCircle, Bomb, RefreshCw, Target, Sparkles } from 'lucide-react'

const painPoints = [
  {
    icon: HelpCircle,
    number: '01',
    title: '听课听了个"寂寞"？',
    oldProblem: '家长不知道老师怎么讲',
    description: '孩子回家说"听懂了"，一做题全是错。因为他在课堂上漏掉了那关键的5%，而你根本不知道他漏在哪。',
    solution: 'AI同桌帮他记住每一个重点，漏掉的立刻补上',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: Bomb,
    number: '02',
    title: '作业辅导像"排雷"？',
    oldProblem: '辅导容易南辕北辙',
    description: '你的解法和老师不一样，孩子听得一脸懵。MeetMind记得老师白天的原话，用老师的逻辑讲给孩子听。',
    solution: '用老师原话辅导，不再和孩子"打架"',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: RefreshCw,
    number: '03',
    title: '反馈断层',
    subtitle: '刷题到深夜，错的还是那几类',
    description: '缺的不是努力，是即时、精准的高质量反馈。AI同桌让家长、老师、孩子都能第一时间了解学习情况，获得针对性反馈。',
    solution: '家校孩三方同步，学情透明可追踪',
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 text-coral-dark rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            家长的真实困扰
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            这些场景，你一定不陌生
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            不是孩子不努力，是学习链路断了
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
              <div className={`absolute -top-4 -right-4 w-12 h-12 ${point.color} rounded-full flex items-center justify-center font-bold text-navy shadow-md text-lg`}>
                {point.number}
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${point.iconBg} flex items-center justify-center mb-6`}>
                <point.icon className={`w-7 h-7 text-navy`} aria-hidden="true" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{point.description}</p>
              
              {/* Solution Tag */}
              <div className={`inline-flex items-center gap-2 px-3 py-2 ${point.iconBg} rounded-lg`}>
                <Sparkles className="w-3.5 h-3.5 text-navy" aria-hidden="true" />
                <span className="text-sm font-medium text-navy">{point.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-sunny/20 to-orange/20 rounded-2xl">
            <Target className="w-6 h-6 text-orange" aria-hidden="true" />
            <span className="text-navy font-semibold text-lg">
              MeetMind：把漏掉的5%，变成进步的100%
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
