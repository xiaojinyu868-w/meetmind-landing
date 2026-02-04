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

type PageState = 'home' | 'qa-list' | 'qa-detail';

function App() {
  const [pageState, setPageState] = useState<PageState>('home')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

  useEffect(() => {
    const handleShowInvestor = () => setPageState('qa-list')
    window.addEventListener('showInvestor', handleShowInvestor)
    return () => window.removeEventListener('showInvestor', handleShowInvestor)
  }, [])

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Workflow />
        <ProductShowcase />
        <Values />
        <TeamCredibility />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
