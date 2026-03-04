import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import PainPoints from './components/sections/PainPoints'
import Workflow from './components/sections/Workflow'
import ProductShowcase from './components/sections/ProductShowcase'
import Values from './components/sections/Values'
import Testimonials from './components/sections/Testimonials'
import TeamCredibility from './components/sections/TeamCredibility'
import QAList from './pages/QAList'
import QADetail from './pages/QADetail'
import TeamSection from './pages/TeamSection'
import AINativeSection from './pages/AINativeSection'
import IdentitySelector from './components/IdentitySelector'

type PrimaryIdentity = 'parent' | 'student' | 'educator' | 'partner' | null
type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null
type PageState = 'home' | 'qa-list' | 'qa-detail' | 'team' | 'ai-native' | 'identity-select';

function App() {
  const [pageState, setPageState] = useState<PageState>('identity-select')
  const [primaryIdentity, setPrimaryIdentity] = useState<PrimaryIdentity>(null)
  const [secondaryIdentity, setSecondaryIdentity] = useState<SecondaryIdentity>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

  useEffect(() => {
    const handleShowInvestor = () => setPageState('qa-list')
    window.addEventListener('showInvestor', handleShowInvestor)
    
    // 检查是否为团队页面或AI原生页面
    if (window.location.hash === '#team') {
      setPageState('team')
    }
    if (window.location.hash === '#ai-native') {
      setPageState('ai-native')
    }
    
    return () => window.removeEventListener('showInvestor', handleShowInvestor)
  }, [])

  const handleSelectIdentity = (primary: PrimaryIdentity, secondary: SecondaryIdentity, goToQA?: boolean) => {
    setPrimaryIdentity(primary)
    setSecondaryIdentity(secondary)
    
    // 投资人和渠道商直接跳转到 Q&A
    if (goToQA) {
      setPageState('qa-list')
    } else {
      setPageState('home')
    }
    window.scrollTo(0, 0)
  }

  const handleSelectQA = (categoryId: string, questionId: string) => {
    setSelectedCategory(categoryId)
    setSelectedQuestion(questionId)
    setPageState('qa-detail')
    window.scrollTo(0, 0)
  }

  const handleBackToList = () => {
    setPageState('qa-list')
    window.scrollTo(0, 0)
  }

  const handleBackToHome = () => {
    setPageState('home')
    setSelectedCategory(null)
    setSelectedQuestion(null)
    window.scrollTo(0, 0)
  }

  const handleBackToIdentitySelect = () => {
    setPageState('identity-select')
    setPrimaryIdentity(null)
    setSecondaryIdentity(null)
    window.scrollTo(0, 0)
  }

  // Identity Selection Page
  if (pageState === 'identity-select') {
    return <IdentitySelector onSelectIdentity={handleSelectIdentity} />
  }

  if (pageState === 'qa-list') {
    return <QAList onSelectQA={handleSelectQA} onBackToHome={handleBackToHome} />
  }

  if (pageState === 'qa-detail') {
    return (
      <QADetail 
        categoryId={selectedCategory} 
        questionId={selectedQuestion}
        onBackToList={handleBackToList} 
        onBackToHome={handleBackToHome} 
      />
    )
  }

  if (pageState === 'team') {
    return <TeamSection />
  }

  if (pageState === 'ai-native') {
    return <AINativeSection />
  }



  return (
    <div className="min-h-screen bg-white">
      <Header secondaryIdentity={secondaryIdentity} onSwitchIdentity={handleBackToIdentitySelect} />
      <main>
        <Hero primaryIdentity={primaryIdentity} secondaryIdentity={secondaryIdentity} />
        <PainPoints secondaryIdentity={secondaryIdentity} />
        <Workflow />
        <ProductShowcase secondaryIdentity={secondaryIdentity} />
        <Values secondaryIdentity={secondaryIdentity} />
        <TeamCredibility secondaryIdentity={secondaryIdentity} />
        <Testimonials secondaryIdentity={secondaryIdentity} />
      </main>
      <Footer />
    </div>
  )
}

export default App
