import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  product: [
    { label: '产品特点', href: '#features' },
    { label: '如何工作', href: '#workflow' },
    { label: '定价方案', href: '#pricing' },
    { label: '常见问题', href: '#faq' },
  ],
  support: [
    { label: '帮助中心', href: '#' },
    { label: '联系客服', href: '#' },
    { label: '使用教程', href: '#' },
    { label: '更新日志', href: '#' },
  ],
  company: [
    { label: '关于我们', href: '#' },
    { label: '加入团队', href: '#' },
    { label: '合作伙伴', href: '#' },
    { label: '媒体报道', href: '#' },
  ],
  legal: [
    { label: '隐私政策', href: '#' },
    { label: '服务条款', href: '#' },
    { label: '数据安全', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Wave decoration */}
      <div className="relative h-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
            fill="#1E3A5F"
          />
        </svg>
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">
                Meet<span className="text-primary-300">Mind</span>
              </span>
            </a>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              首个"家校同频"智能助教系统<br />
              为每个孩子配备真正"听过课"的AI同桌<br />
              让家长辅导终于有据可依
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@meetmind.ai" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@meetmind.ai</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4" />
                <span>北京市海淀区中关村科技园</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">产品</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">支持</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">公司</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">法律</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* QR Code */}
            <h4 className="font-semibold text-white mb-3">加入家长体验群（微信扫码）</h4>
            <div className="bg-white p-2 rounded-lg inline-block">
              <img 
                src="/images/qrcode.png" 
                alt="微信扫码加入家长体验群" 
                className="w-28 h-28 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 MeetMind 原点教育 All Rights Reserved
            </p>
            <p className="text-gray-400 text-sm">
              京ICP备XXXXXXXX号-1
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
