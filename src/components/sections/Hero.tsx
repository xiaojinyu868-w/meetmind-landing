import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-cream-100 via-white to-sunny-lighter overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sunny/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-sky-light/20 to-transparent" />
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft mb-6">
              <span className="w-2 h-2 bg-fresh rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">首个"家校同频"智能助教系统</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              孩子身边，
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy-light">
                记忆最好的AI同桌
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-4">
              真正听过今天这节课的专属家教，
              <br className="hidden sm:block" />
              让复习终于跟得上课堂
            </p>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">
              MeetMind 为每个孩子配备一位永远记得老师每句话、每笔板书的AI同桌。
              白天，它安静坐在教室里忠实记录；晚上，它用老师当天的原话，帮助孩子精准复习、补齐漏洞。
              家长第一次真正知道"孩子今天学了什么"，辅导终于有据可依。
            </p>

            {/* Trust Data */}
            <div className="bg-sunny-bg backdrop-blur-sm rounded-2xl p-4 mb-8 border border-sunny/30">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-navy">91%</span> 中国家长每天陪作业，却
                <span className="font-semibold text-warm-600"> 78%</span> 觉得效果不佳
                <span className="text-gray-400 ml-2">（来源：中国教育追踪调查）</span>
              </p>
              <p className="text-sm text-gray-700 mt-1 font-medium">
                MeetMind 用课堂原生数据，帮您打通家校断层
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://meetmind.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-warm-600 hover:to-warm-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>立即免费试用Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-navy hover:text-navy transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>观看2分钟产品视频</span>
              </button>
            </div>

            {/* Micro text */}
            <p className="mt-4 text-sm text-gray-400">
              上传录音，30秒体验AI同桌 · 无需注册即可体验
            </p>
          </div>

          {/* Right - Product Screenshot */}
          <div className="relative">
            {/* Device Frame */}
            <div className="relative">
              {/* Desktop Screenshot with Frame */}
              <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/images/product_desktop_home.png"
                    alt="MeetMind 产品界面"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Mobile Screenshot Overlay */}
              <div className="absolute -bottom-8 -right-8 w-32 sm:w-40">
                <div className="bg-gray-900 rounded-2xl p-1.5 shadow-xl">
                  <div className="w-8 h-1 bg-gray-700 rounded-full mx-auto mb-1" />
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/images/product_mobile_home.png"
                      alt="MeetMind 移动端界面"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* AI Chat Bubble */}
              <div className="absolute top-1/3 -left-4 sm:-left-8 bg-navy text-white rounded-2xl rounded-tl-sm p-4 shadow-lg max-w-[180px] sm:max-w-[200px]">
                <p className="text-sm">
                  "老师今天讲的分数除法，我来帮你回顾一下..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
