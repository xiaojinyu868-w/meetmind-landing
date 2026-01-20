import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-cream overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-sunny/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-sky/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-mint/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧内容 */}
          <div className="relative z-10 text-center lg:text-left">
            {/* 徽章标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunny/20 border border-sunny/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-orange" />
              <span className="text-sm font-medium text-navy">限量100名「优先体验官」招募中</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              给孩子找个
              <br />
              <span className="text-orange">"清华学霸"</span>
              <span className="text-navy">做同桌</span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl sm:text-2xl text-navy/80 mb-4 leading-relaxed font-medium">
              真正<span className="text-orange">听</span>过这堂课的专属家教。
            </p>

            {/* 描述 */}
            <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">
              MeetMind 为每个孩子配备一位永远记得老师每句话、每笔板书的AI同桌。
              <br />
              白天，它安静坐在教室里忠实记录，晚上，它用老师当天的原话，帮助孩子精准复习，补齐漏洞。
              <br />
              家长第一次真正知道"孩子今天学了什么"，辅导终于有据可依。
            </p>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://meetmind.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>申请「优先体验官」资格</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 小提示 */}
            <p className="mt-4 text-sm text-gray-500">
              🎁 限量100名 · 免费体验全部功能 · 30秒即可开始
            </p>
          </div>

          {/* 右侧 - 产品截图 */}
          <div className="relative">
            {/* 主图片容器 */}
            <div className="relative">
              {/* 装饰背景 */}
              <div className="absolute -inset-6 bg-gradient-to-br from-sunny/30 to-orange/20 rounded-3xl -rotate-2" />
              
              {/* 设备框架 - AI复习界面 */}
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 rounded-t-lg">
                  <div className="w-3 h-3 rounded-full bg-coral" />
                  <div className="w-3 h-3 rounded-full bg-sunny" />
                  <div className="w-3 h-3 rounded-full bg-mint" />
                </div>
                <div className="rounded-b-lg overflow-hidden">
                  <img 
                    src="/product-review.png"
                    alt="MeetMind AI智能复习界面"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* 手机截图悬浮 - 家长端 */}
              <div className="absolute -bottom-8 -right-4 w-32 sm:w-40">
                <div className="bg-white rounded-2xl p-1.5 shadow-xl border-4 border-white">
                  <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-1" />
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/product-parent.png"
                      alt="MeetMind 家长端界面"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* AI对话气泡 */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 bg-sunny rounded-2xl rounded-bl-sm p-4 shadow-lg max-w-[180px] sm:max-w-[220px]">
                <p className="text-sm text-navy font-medium">
                  💡 "这道题老师白天讲过，我帮你回忆一下..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部波浪 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}
