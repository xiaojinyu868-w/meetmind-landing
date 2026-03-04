import { useState, useEffect } from 'react'
import { Menu, X, HelpCircle, Users, RefreshCw } from 'lucide-react'

type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null

interface HeaderProps {
  secondaryIdentity?: SecondaryIdentity
  onSwitchIdentity?: () => void
}

const navLinks = [
  { name: '首页', href: '#home' },
  { name: '痛点', href: '#pain-points' },
  { name: '如何工作', href: '#workflow' },
  { name: '产品', href: '#product' },
  { name: '价值', href: '#values' },
  { name: '用户故事', href: '#testimonials' },
]

// 获取身份标签
const getIdentityLabel = (secondaryIdentity: SecondaryIdentity) => {
  if (!secondaryIdentity) return null
  
  const labels: Record<string, string> = {
    'parent-primary': '小学家长',
    'parent-middle': '初中家长',
    'parent-high': '高中家长',
    'student-middle': '初中生',
    'student-high': '高中生',
    'student-uni': '大学生',
    'student-grad': '研究生',
    'educator-teacher': '教师',
    'educator-admin': '教育主管',
    'partner-investor': '投资人',
    'partner-channel': '渠道商',
  }
  
  return labels[secondaryIdentity] || null
}

// 获取CTA按钮文字
const getCTAText = (secondaryIdentity: SecondaryIdentity) => {
  if (!secondaryIdentity) return '免费试用'
  if (secondaryIdentity.startsWith('parent')) return '免费试用'
  if (secondaryIdentity.startsWith('student')) return '立即体验'
  if (secondaryIdentity.startsWith('educator')) return '申请试用'
  return '了解详情'
}

export default function Header({ secondaryIdentity = null, onSwitchIdentity }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const identityLabel = getIdentityLabel(secondaryIdentity)

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
            {/* 身份标签 + 切换按钮 */}
            {identityLabel && onSwitchIdentity && (
              <button
                onClick={onSwitchIdentity}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-sm transition-colors"
                title="点击切换身份"
              >
                <Users className="w-3.5 h-3.5" />
                <span>{identityLabel}</span>
                <RefreshCw className="w-3 h-3 ml-1" />
              </button>
            )}
            
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
              {getCTAText(secondaryIdentity)}
            </a>
            <a
              href="https://hk.meetmind.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-orange underline underline-offset-2 hidden lg:block"
              title="如果主站访问慢，可尝试香港节点"
            >
              备用
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
          <div className="md:hidden bg-white border-t border-gray-100 py-4 max-h-[80vh] overflow-y-auto">
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
            {/* 添加 Q&A 入口 */}
            <button
              className="w-full text-left px-4 py-3 text-gray-600 hover:text-navy hover:bg-gray-50 font-medium flex items-center gap-2"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('showInvestor'))
                setIsMobileMenuOpen(false)
              }}
            >
              <HelpCircle className="w-4 h-4" />
              <span>投资人 Q&A</span>
            </button>
            <div className="px-4 pt-4 space-y-2">
              <a
                href="https://meetmind.online"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-sunny text-navy font-semibold rounded-full"
              >
                免费试用
              </a>
              <a
                href="https://hk.meetmind.online"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-2 text-sm text-gray-400 hover:text-orange"
              >
                访问慢？尝试香港节点 →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
