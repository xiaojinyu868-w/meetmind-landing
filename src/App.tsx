import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import PainPoints from './components/sections/PainPoints'
import Workflow from './components/sections/Workflow'
import ProductShowcase from './components/sections/ProductShowcase'
import Values from './components/sections/Values'
import Testimonials from './components/sections/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Workflow />
        <ProductShowcase />
        <Values />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
