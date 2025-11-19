import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md">Cairo • GCC • Automation Experts</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Automation Consulting for SMEs & Startups
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
            Stop wasting time on repetitive tasks. We design automation strategies that save you hours, cut costs, and help your business grow smarter.
          </p>

        
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#advisor" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">
              Discover Your Automation Opportunities
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-6 py-3 font-semibold hover:bg-white/20 transition">
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Soft gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900" />
    </section>
  )
}

export default Hero
