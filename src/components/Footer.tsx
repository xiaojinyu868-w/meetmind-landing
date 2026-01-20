import { Mail, Phone, MapPin } from 'lucide-react'

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
              首个"家校同频"智能助教系统，为每个孩子配备真正"听过课"的AI同桌。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@meetmind.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>北京市海淀区中关村科技园</span>
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
            <div className="bg-white p-2 rounded-lg inline-block">
              <img 
                src="/images/qrcode.png" 
                alt="微信扫码加入家长体验群" 
                className="w-28 h-28 object-contain"
              />
            </div>
            <p className="text-white/60 text-sm mt-2">微信扫码加入</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 MeetMind 原点教育 All Rights Reserved
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
