import { ArrowRight } from 'lucide-react'

// 装饰性SVG组件
const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none">
    <rect x="5" y="8" width="50" height="44" rx="4" fill="#1E3B4D"/>
    <rect x="10" y="12" width="40" height="36" rx="2" fill="#FFD93D"/>
    <rect x="15" y="20" width="20" height="3" rx="1" fill="#1E3B4D"/>
    <rect x="15" y="28" width="25" height="2" rx="1" fill="#1E3B4D" opacity="0.5"/>
    <rect x="15" y="34" width="18" height="2" rx="1" fill="#1E3B4D" opacity="0.5"/>
  </svg>
)

const PencilIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 80" fill="none">
    <rect x="8" y="0" width="24" height="60" rx="2" fill="#FFD93D"/>
    <polygon points="8,60 20,80 32,60" fill="#FFAB5E"/>
    <rect x="8" y="0" width="24" height="8" fill="#FF8A80"/>
    <rect x="16" y="70" width="8" height="10" fill="#1E3B4D"/>
  </svg>
)

const StarIcon = ({ className, filled = true }: { className?: string; filled?: boolean }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? "#FFD93D" : "none"} stroke="#FFD93D" strokeWidth="2">
    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"/>
  </svg>
)

const CloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none">
    <ellipse cx="30" cy="40" rx="25" ry="18" fill="#A8E6CF" opacity="0.6"/>
    <ellipse cx="55" cy="35" rx="30" ry="22" fill="#A8E6CF" opacity="0.8"/>
    <ellipse cx="75" cy="42" rx="20" ry="15" fill="#A8E6CF" opacity="0.6"/>
  </svg>
)

const PaperPlaneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none">
    <path d="M5 20L35 5L25 35L20 22L5 20Z" fill="#6C5CE7"/>
    <path d="M20 22L35 5" stroke="#A29BFE" strokeWidth="2"/>
  </svg>
)

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 左上角书本 */}
        <BookIcon className="absolute top-20 left-8 w-16 h-16 animate-float opacity-80" />
        
        {/* 右上角纸飞机 */}
        <PaperPlaneIcon className="absolute top-16 right-20 w-12 h-12 animate-float-delay rotate-12" />
        
        {/* 左侧云朵 */}
        <CloudIcon className="absolute top-40 -left-10 w-32 h-20 animate-float-slow" />
        
        {/* 右侧星星 */}
        <StarIcon className="absolute top-32 right-40 w-6 h-6 animate-bounce-slow" />
        <StarIcon className="absolute top-60 right-16 w-4 h-4 animate-float" filled={false} />
        
        {/* 左下铅笔 */}
        <PencilIcon className="absolute bottom-40 left-16 w-8 h-16 rotate-12 animate-float-slow" />
        
        {/* 右下云朵 */}
        <CloudIcon className="absolute bottom-20 right-0 w-40 h-24 animate-float" />
        
        {/* 散落的小星星 */}
        <StarIcon className="absolute top-1/3 left-1/4 w-4 h-4 animate-float" />
        <StarIcon className="absolute bottom-1/3 right-1/3 w-5 h-5 animate-bounce-slow" filled={false} />
        
        {/* 圆点装饰 */}
        <div className="absolute top-48 right-1/3 w-3 h-3 bg-sunny rounded-full animate-float" />
        <div className="absolute bottom-48 left-1/3 w-2 h-2 bg-coral rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 left-12 w-2 h-2 bg-sky rounded-full animate-float-slow" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧内容 */}
          <div className="relative z-10 text-center lg:text-left">
            {/* 徽章标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunny-50 border border-sunny-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy">首个"家校同频"智能助教系统</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Everybody can achieve
              <br />
              <span className="text-purple">the best result now</span>
            </h1>

            {/* 副标题 */}
            <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
              真正听过今天这节课的专属家教，
              <br className="hidden sm:block" />
              让复习终于跟得上课堂
            </p>

            {/* 描述 */}
            <p className="text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              MeetMind 为每个孩子配备一位永远记得老师每句话、每笔板书的AI同桌。
              白天，它安静坐在教室里忠实记录；晚上，它用老师当天的原话，帮助孩子精准复习、补齐漏洞。
            </p>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://meetmind.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple hover:bg-purple-dark text-white font-semibold rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>立即免费试用Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 小提示 */}
            <p className="mt-4 text-sm text-gray-400">
              上传录音，30秒体验AI同桌 · 无需注册即可体验
            </p>
          </div>

          {/* 右侧 - 产品截图 */}
          <div className="relative">
            {/* 主图片容器 */}
            <div className="relative">
              {/* 黄色背景装饰 */}
              <div className="absolute -inset-4 bg-sunny-100 rounded-3xl -rotate-3" />
              
              {/* 设备框架 */}
              <div className="relative bg-white rounded-2xl p-3 shadow-medium">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 rounded-t-lg">
                  <div className="w-3 h-3 rounded-full bg-coral" />
                  <div className="w-3 h-3 rounded-full bg-sunny" />
                  <div className="w-3 h-3 rounded-full bg-mint" />
                </div>
                <div className="rounded-b-lg overflow-hidden">
                  <img 
                    src="/images/product_desktop_home.png"
                    alt="MeetMind 产品界面"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* 手机截图悬浮 */}
              <div className="absolute -bottom-8 -right-4 w-28 sm:w-36">
                <div className="bg-white rounded-2xl p-1.5 shadow-medium border-4 border-white">
                  <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-1" />
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/images/product_mobile_home.png"
                      alt="MeetMind 移动端界面"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* AI对话气泡 */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 bg-sunny rounded-2xl rounded-bl-sm p-4 shadow-bubble max-w-[180px] sm:max-w-[200px]">
                <p className="text-sm text-navy font-medium">
                  "老师今天讲的分数除法，我来帮你回顾一下..."
                </p>
              </div>

              {/* 紫色装饰气泡 */}
              <div className="absolute -top-4 right-1/4 bg-purple-100 rounded-full px-4 py-2">
                <span className="text-purple font-medium text-sm">AI同桌</span>
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
            fill="#FFFBF0"
          />
        </svg>
      </div>
    </section>
  )
}
