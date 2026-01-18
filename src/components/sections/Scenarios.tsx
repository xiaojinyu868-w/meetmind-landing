import InfoGapMockup from '../concept-ui/InfoGapMockup'
import FeedbackGapMockup from '../concept-ui/FeedbackGapMockup'

interface Scenario {
  id: string
  tag: string
  tagColor: string
  title: string
  description: string[]
  image?: string
  imageAlt: string
  reverse: boolean
  mockupType?: 'info-gap' | 'feedback-gap'
}

const scenarios: Scenario[] = [
  {
    id: 'info-gap',
    tag: '信息断层',
    tagColor: 'bg-warm-100 text-warm-600',
    title: '家长不是不努力，是根本不知道"老师今天怎么讲"',
    description: [
      '晚上9点，餐桌变教室。孩子说"听懂了"，一做题就卡住。',
      '家长翻教材越讲越心虚："老师不是这么讲的。"',
      '最后吵架，或再花钱请家教——只为买一份"课堂证据"的确定性。',
    ],
    imageAlt: 'MeetMind 家长端学情报告',
    reverse: false,
    mockupType: 'info-gap',
  },
  {
    id: 'method-gap',
    tag: '方法断层',
    tagColor: 'bg-blush-light text-blush-dark',
    title: '孩子被两套讲法撕裂，越学越乱',
    description: [
      '补习班"秒杀模板" vs 学校"从定义出发"。',
      '孩子学会切换思维，却越来越不理解本质。',
      '家长花钱越多，焦虑越重。',
    ],
    image: '/images/product_review_desktop.png',
    imageAlt: 'MeetMind AI同桌课堂复习',
    reverse: true,
  },
  {
    id: 'feedback-gap',
    tag: '反馈断层',
    tagColor: 'bg-sky-light text-navy',
    title: '冲刺期最昂贵的是时间被"虚假勤奋"吞掉',
    description: [
      '深夜刷题，错题本越来越厚。',
      '家教讲得认真，却只能从通用章节入手。',
      '真正被修复的漏洞并不多，最缺的是"当天课堂断点"的精准补齐。',
    ],
    imageAlt: 'MeetMind 移动端学情追踪',
    reverse: false,
    mockupType: 'feedback-gap',
  },
]

// 渲染概念UI或截图
function ScenarioVisual({ scenario, index }: { scenario: Scenario; index: number }) {
  // 使用概念UI组件
  if (scenario.mockupType === 'info-gap') {
    return (
      <div className="relative">
        <InfoGapMockup />
        {/* Floating tag */}
        <div className="absolute bottom-8 left-8">
          <span className={`inline-flex items-center gap-2 px-4 py-2 ${scenario.tagColor} rounded-full font-medium text-sm shadow-lg`}>
            {scenario.tag}
          </span>
        </div>
        {/* Number indicator */}
        <div className="absolute top-8 right-8 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <span className="text-lg font-bold text-navy">0{index + 1}</span>
        </div>
      </div>
    )
  }

  if (scenario.mockupType === 'feedback-gap') {
    return (
      <div className="relative">
        <FeedbackGapMockup />
        {/* Floating tag */}
        <div className="absolute bottom-8 left-8">
          <span className={`inline-flex items-center gap-2 px-4 py-2 ${scenario.tagColor} rounded-full font-medium text-sm shadow-lg`}>
            {scenario.tag}
          </span>
        </div>
        {/* Number indicator */}
        <div className="absolute top-8 right-8 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <span className="text-lg font-bold text-navy">0{index + 1}</span>
        </div>
      </div>
    )
  }

  // 使用截图（保留原有逻辑）
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
      {/* Browser Frame for Desktop Images */}
      <div className="bg-gray-900 rounded-t-2xl">
        <div className="flex items-center gap-1.5 px-4 py-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <div className="flex-1 mx-4">
            <div className="bg-gray-800 rounded-md h-6 flex items-center px-3">
              <span className="text-xs text-gray-400">meetmind.ai</span>
            </div>
          </div>
        </div>
      </div>
      <img
        src={scenario.image}
        alt={scenario.imageAlt}
        className="w-full h-auto object-cover"
      />
      
      {/* Floating tag */}
      <div className="absolute bottom-4 left-4">
        <span className={`inline-flex items-center gap-2 px-4 py-2 ${scenario.tagColor} rounded-full font-medium text-sm`}>
          {scenario.tag}
        </span>
      </div>

      {/* Number indicator */}
      <div className="absolute top-16 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
        <span className="text-lg font-bold text-navy">0{index + 1}</span>
      </div>
    </div>
  )
}

export default function Scenarios() {
  return (
    <section id="scenarios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blush-bg text-blush-dark font-medium rounded-full text-sm mb-6">
            这些画面，您一定见过
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            晚9点作业战场、周末补课撕裂、
            <br className="hidden sm:block" />
            冲刺期虚假勤奋……
          </h2>
          <p className="text-xl text-gray-600">
            这些痛，<span className="font-semibold text-navy">您经历过吗？</span>
          </p>
        </div>

        {/* Scenario Cards */}
        <div className="space-y-16 lg:space-y-24">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.id}
              className={`flex flex-col ${scenario.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
            >
              {/* Visual Component */}
              <div className="w-full lg:w-1/2">
                <ScenarioVisual scenario={scenario} index={index} />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                  {scenario.title}
                </h3>
                <div className="space-y-4">
                  {scenario.description.map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sunny rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-sunny-bg rounded-2xl p-6 sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-xl font-bold text-gray-900 mb-1">
                MeetMind 让AI同桌真正"听过课"
              </p>
              <p className="text-gray-600">把这些断层一次性打通</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
