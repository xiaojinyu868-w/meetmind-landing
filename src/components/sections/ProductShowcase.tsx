import { useState } from 'react'
import { Mic, Brain, Users, GraduationCap, ChevronLeft, ChevronRight, Sparkles, Clock, MessageCircle, BarChart3, Zap, FileText, Lightbulb } from 'lucide-react'

type ProductItem = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  color: string
  lightColor: string
  borderColor: string
  Icon: React.ElementType
  features: { icon: React.ElementType; text: string }[]
}

type Category = {
  id: string
  name: string
  Icon: React.ElementType
  color: string
  products: ProductItem[]
}

const categories: Category[] = [
  {
    id: 'student',
    name: '学生端',
    Icon: GraduationCap,
    color: 'bg-sky',
    products: [
      {
        id: 'recording',
        title: '课堂录音',
        subtitle: '上课一键录音，自动标记困惑',
        description: '学生上课时打开录音，系统自动转录课堂内容。遇到听不懂的地方，轻点一下即可标记"困惑点"，课后AI会重点解答。',
        image: '/product-recording.png',
        color: 'bg-sky',
        lightColor: 'bg-sky/10',
        borderColor: 'border-sky/30',
        Icon: Mic,
        features: [
          { icon: Clock, text: '实时录音转文字' },
          { icon: Sparkles, text: '一键标记困惑点' },
          { icon: MessageCircle, text: '边录边转，不漏重点' },
        ]
      },
      {
        id: 'highlights',
        title: '精选回顾',
        subtitle: '课堂重点一目了然，高效复习',
        description: 'AI自动提取课堂精华片段，按重点和要点分类标记。可视化时间轴让你快速定位关键内容，支持按主题筛选，一键播放回顾。',
        image: '/product-highlights.png',
        color: 'bg-coral',
        lightColor: 'bg-coral/10',
        borderColor: 'border-coral/30',
        Icon: Zap,
        features: [
          { icon: Clock, text: '时间轴精准定位' },
          { icon: Sparkles, text: '重点要点自动标记' },
          { icon: MessageCircle, text: '按主题筛选播放' },
        ]
      },
      {
        id: 'summary',
        title: '智能摘要',
        subtitle: '课堂概要秒懂，知识点清晰梳理',
        description: 'AI智能生成课堂概要，自动提炼主要知识点并分层呈现。重点难点高亮标注，帮你快速掌握课堂核心内容，支持添加个人笔记。',
        image: '/product-summary.png',
        color: 'bg-purple-500',
        lightColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30',
        Icon: FileText,
        features: [
          { icon: Sparkles, text: '课堂概要自动生成' },
          { icon: BarChart3, text: '知识点分层梳理' },
          { icon: MessageCircle, text: '重点难点高亮标注' },
        ]
      },
      {
        id: 'thinking',
        title: '思维引导',
        subtitle: '跟我一起理清思路，培养思维能力',
        description: 'AI以学霸思维引导学生思考，例如，例子中就英语听力问题，从"听前预判"到"听中锚定"再到"听后回溯"，逐步培养分析问题的思维方法。',
        image: '/product-thinking.png',
        color: 'bg-pink-500',
        lightColor: 'bg-pink-500/10',
        borderColor: 'border-pink-500/30',
        Icon: Lightbulb,
        features: [
          { icon: Sparkles, text: '学霸思维法引导' },
          { icon: MessageCircle, text: '思维方法可复用' },
        ]
      },
      {
        id: 'review',
        title: 'AI智能复习',
        subtitle: 'AI同桌解答困惑，学霸式引导',
        description: '课后打开复习界面，AI会定位到标记的困惑点，用老师原话+AI引导帮你彻底搞懂。还能继续追问，直到真正理解。',
        image: '/product-review.png',
        color: 'bg-sunny',
        lightColor: 'bg-sunny/10',
        borderColor: 'border-sunny/30',
        Icon: Brain,
        features: [
          { icon: Clock, text: '时间轴精准定位' },
          { icon: Sparkles, text: 'AI逐句解析困惑' },
          { icon: MessageCircle, text: '对话式深度辅导' },
        ]
      },
    ]
  },
  {
    id: 'parent',
    name: '家长端',
    Icon: Users,
    color: 'bg-mint',
    products: [
      {
        id: 'parent-dashboard',
        title: '学习情况',
        subtitle: '了解孩子每日学习，精准陪伴',
        description: '家长可以看到孩子每天录了几节课、有多少困惑点、哪些已解决。AI还会生成今日学习总结和行动建议。',
        image: '/product-parent.png',
        color: 'bg-mint',
        lightColor: 'bg-mint/10',
        borderColor: 'border-mint/30',
        Icon: Users,
        features: [
          { icon: BarChart3, text: '学习数据一目了然' },
          { icon: Sparkles, text: 'AI智能总结报告' },
          { icon: MessageCircle, text: '困惑时刻详情查看' },
        ]
      },
    ]
  },
  {
    id: 'teacher',
    name: '教师端',
    Icon: GraduationCap,
    color: 'bg-orange',
    products: [
      {
        id: 'teacher-feedback',
        title: '课后反馈',
        subtitle: '掌握全班困惑热点，精准教学',
        description: '教师可以看到全班学生的困惑热点TOP3，了解哪些知识点讲得不够清楚。一键生成课后反思报告，持续改进教学。',
        image: '/product-teacher.png',
        color: 'bg-orange',
        lightColor: 'bg-orange/10',
        borderColor: 'border-orange/30',
        Icon: GraduationCap,
        features: [
          { icon: BarChart3, text: '困惑热点TOP3' },
          { icon: Sparkles, text: 'AI生成教学反思' },
          { icon: Users, text: '实时学生数据' },
        ]
      },
    ]
  },
]

export default function ProductShowcase() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0)
  const [activeProductIdx, setActiveProductIdx] = useState(0)
  
  const activeCategory = categories[activeCategoryIdx]
  const activeProduct = activeCategory.products[activeProductIdx]

  const handleCategoryChange = (idx: number) => {
    setActiveCategoryIdx(idx)
    setActiveProductIdx(0)
  }

  const nextProduct = () => {
    setActiveProductIdx((prev) => (prev + 1) % activeCategory.products.length)
  }

  const prevProduct = () => {
    setActiveProductIdx((prev) => (prev - 1 + activeCategory.products.length) % activeCategory.products.length)
  }

  const getTextColor = (color: string) => {
    switch(color) {
      case 'bg-sky': return 'text-sky'
      case 'bg-sunny': return 'text-sunny'
      case 'bg-mint': return 'text-mint'
      case 'bg-coral': return 'text-coral'
      case 'bg-purple-500': return 'text-purple-500'
      case 'bg-pink-500': return 'text-pink-500'
      default: return 'text-orange'
    }
  }

  return (
    <section id="product" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 text-navy font-medium rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-orange rounded-full" />
            产品功能展示
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            多端协同，
            <span className="text-orange">全面覆盖</span>
          </h2>
          <p className="text-lg text-gray-600">
            学生、家长、教师各有专属界面，学习数据实时同步
          </p>
        </div>

        {/* Category Navigation - Main Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category, idx) => {
            const Icon = category.Icon
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  idx === activeCategoryIdx
                    ? `${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>

        {/* Sub Navigation - Product Tabs (only for categories with multiple products) */}
        {activeCategory.products.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {activeCategory.products.map((product, idx) => {
              const Icon = product.Icon
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProductIdx(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    idx === activeProductIdx
                      ? `${product.color} text-white shadow-md`
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{product.title}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Product Display */}
        <div className={`rounded-3xl p-6 lg:p-10 ${activeProduct.lightColor} border ${activeProduct.borderColor} transition-all duration-500`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Info */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${activeProduct.color} rounded-xl flex items-center justify-center`}>
                  <activeProduct.Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">{activeProduct.title}</h3>
                  <p className="text-gray-500 text-sm">{activeProduct.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {activeProduct.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {activeProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-8 h-8 ${activeProduct.color}/20 rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`w-4 h-4 ${getTextColor(activeProduct.color)}`} />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Mobile */}
              {activeCategory.products.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8 lg:hidden">
                  <button
                    onClick={prevProduct}
                    className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <div className="flex gap-2">
                    {activeCategory.products.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === activeProductIdx ? activeProduct.color : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextProduct}
                    className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Screenshot */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Navigation Arrows - Desktop */}
              {activeCategory.products.length > 1 && (
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-5 -right-5 justify-between pointer-events-none">
                  <button
                    onClick={prevProduct}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow pointer-events-auto"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextProduct}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow pointer-events-auto"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              )}

              {/* Decorative Elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 ${activeProduct.color}/20 rounded-full blur-2xl`} />
              <div className={`absolute -bottom-4 -left-4 w-32 h-32 ${activeProduct.color}/10 rounded-full blur-3xl`} />
            </div>
          </div>
        </div>

        {/* Bottom Indicator - Desktop */}
        {activeCategory.products.length > 1 && (
          <div className="hidden lg:flex justify-center gap-3 mt-8">
            {activeCategory.products.map((product, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProductIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeProductIdx ? `w-8 ${product.color}` : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
