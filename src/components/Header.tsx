import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#home', label: '首页' },
  { href: '#features', label: '产品特点' },
  { href: '#painpoints', label: '家长痛点' },
  { href: '#workflow', label: '如何工作' },
  { href: '#testimonials', label: '用户故事' },
  { href: '#pricing', label: '定价与试用' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Meet<span className="text-navy">Mind</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-600 hover:text-navy font-medium text-sm rounded-lg hover:bg-primary-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://meetmind.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-warm-600 hover:to-warm-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              免费试用Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-gray-600 hover:text-navy font-medium rounded-lg hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://meetmind.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold rounded-full shadow-md block text-center"
            >
              免费试用Demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
