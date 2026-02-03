import { useState } from 'react'
import { Mail, MapPin, X, ZoomIn } from 'lucide-react'

const footerLinks = {
  product: [
    { name: '产品特点', href: '#workflow' },
    { name: '如何工作', href: '#workflow' },
    { name: '常见问题', href: '#' },
  ],
  support: [
    { name: '帮助中心', href: '#' },
    { name: '联系客服', href: '#' },
    { name: '使用教程', href: '#' },
  ],
  company: [
    { name: '关于我们', href: '#' },
    { name: '加入团队', href: '#' },
    { name: '合作伙伴', href: '#' },
  ],
}

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sunny rounded-xl flex items-center justify-center">
                <span className="text-navy font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MeetMind</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              首款真正基于"课堂记忆"的AI学习伴侣，为每个孩子配备真正"听过课"的智能同桌。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>originedu@meetind.online</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>深圳市南山区粤海街道高新工业村R3-B栋01层</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">产品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-sunny transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">支持</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-sunny transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h4 className="font-semibold text-white mb-4">加入家长体验群</h4>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-white p-2 rounded-lg inline-block hover:shadow-lg transition-shadow duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunny focus-visible:ring-offset-2 relative"
              aria-label="点击放大查看二维码"
            >
              <img 
                src="/vx.jpg" 
                alt="微信扫码加入家长体验群" 
                className="w-28 h-28 object-contain"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </div>
            </button>
            <p className="text-white/60 text-sm mt-2">微信扫码加入</p>
          </div>
        </div>

        {/* QR Code Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="二维码大图"
          >
            <div 
              className="relative bg-white rounded-2xl p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                aria-label="关闭"
              >
                <X className="w-5 h-5 text-gray-600" aria-hidden="true" />
              </button>
              <img 
                src="/vx.jpg" 
                alt="微信扫码加入家长体验群" 
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-gray-600 mt-4 font-medium">微信扫码加入家长体验群</p>
            </div>
          </div>
        )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 原点新途(深圳)创新科技有限公司 All Rights Reserved
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-sunny transition-colors">隐私政策</a>
            <a href="#" className="hover:text-sunny transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
