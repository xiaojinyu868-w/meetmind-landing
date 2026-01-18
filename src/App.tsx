import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import PainPoints from './components/sections/PainPoints'
import Scenarios from './components/sections/Scenarios'
import Workflow from './components/sections/Workflow'
import Values from './components/sections/Values'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Scenarios />
        <Workflow />
        <Values />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
