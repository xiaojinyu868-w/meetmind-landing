import { useState, useEffect } from 'react'
import { Menu, X, HelpCircle } from 'lucide-react'

const navLinks = [
  { name: '首页', href: '#home' },
  { name: '痛点', href: '#pain-points' },
  { name: '如何工作', href: '#workflow' },
  { name: '产品', href: '#product' },
  { name: '价值', href: '#values' },
  { name: '用户故事', href: '#testimonials' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sunny rounded-xl flex items-center justify-center">
              <span className="text-navy font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-navy">MeetMind</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-navy font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded-sm cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#qa"
              onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('showInvestor'))
              }}
              className="flex items-center gap-1.5 text-gray-600 hover:text-navy font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded-sm cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Q&A</span>
            </a>
            <a
              href="https://meetmind.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-sunny hover:bg-sunny-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 text-navy font-semibold rounded-full transition-[background-color,box-shadow] duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              免费试用
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-navy" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-600 hover:text-navy hover:bg-gray-50 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a
                href="https://meetmind.online"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-sunny text-navy font-semibold rounded-full"
              >
                免费试用
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
