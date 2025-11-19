import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Tech from './components/Tech'
import About from './components/About'
import Advisor from './components/Advisor'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-semibold">Flowlayers</a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200 text-sm">
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#advisor" className="rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-500 transition">Get Free Assessment</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <WhyUs />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Advisor />
        <Tech />
        <About />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-400 bg-slate-950 border-t border-white/10">
        © {new Date().getFullYear()} Flowlayers — Smarter Automation, Real Results
      </footer>
    </div>
  )
}

export default App
