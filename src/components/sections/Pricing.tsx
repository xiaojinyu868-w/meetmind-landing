import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: '基础版',
    price: '99',
    period: '元/月',
    description: '纯软件，自带录音设备用户',
    features: [
      '课堂录音上传分析',
      'AI同桌复习对话',
      '每日学情报告',
      '知识点追踪',
      '最多1个孩子',
    ],
    cta: '开始试用',
    highlighted: false,
    color: 'border-gray-200',
    btnColor: 'bg-gray-900 hover:bg-gray-800',
  },
  {
    name: '标准版',
    price: '199',
    period: '元/月',
    description: '含AI学习胶囊硬件 + 全功能',
    badge: '最受欢迎',
    features: [
      '包含基础版全部功能',
      'AI学习胶囊硬件',
      '一键无感录制',
      '板书识别（Beta）',
      '优先客服支持',
      '最多2个孩子',
    ],
    cta: '立即购买',
    highlighted: true,
    color: 'border-sunny',
    btnColor: 'bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700',
  },
  {
    name: '家庭版',
    price: '299',
    period: '元/月',
    description: '多孩子共享 + 优先支持',
    features: [
      '包含标准版全部功能',
      '最多5个孩子共享',
      '家庭学情对比',
      '专属客户经理',
      '新功能优先体验',
      '年付额外9折',
    ],
    cta: '联系我们',
    highlighted: false,
    color: 'border-gray-200',
    btnColor: 'bg-navy hover:bg-navy-dark',
  },
]

const benefits = [
  '14天免费试用',
  '无硬件也可上传录音体验',
  '首批用户终身8折',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-cream-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-warm-50 text-warm-600 font-medium rounded-full text-sm mb-6">
            定价与立即行动
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            现在加入，<span className="text-warm-600">早鸟优惠</span>
          </h2>
          <p className="text-lg text-gray-600">
            选择适合您的方案，让孩子的学习更高效
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-soft border-2 ${plan.color} ${
                plan.highlighted ? 'lg:-mt-4 lg:mb-4 shadow-medium' : ''
              } transition-all duration-300 hover:shadow-medium`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-sunny text-navy font-bold text-sm rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-gray-500">¥</span>
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? 'bg-sunny' : 'bg-fresh-light'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-navy' : 'text-fresh-dark'}`} />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 ${plan.btnColor} text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 bg-fresh-light text-fresh-dark rounded-full text-sm font-medium"
            >
              <Check className="w-4 h-4" />
              {benefit}
            </span>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            立即免费试用Demo
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            上传今天课堂录音，体验AI同桌魔法
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="https://meetmind.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-warm-600 hover:to-warm-700 transition-all duration-300"
            >
              立即免费试用Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              预约1对1产品讲解
            </button>
          </div>

          <div className="flex justify-center items-center gap-6 text-white/60 text-sm">
            <span>加入家长体验群（微信扫码）</span>
          </div>
        </div>
      </div>
    </section>
  )
}
