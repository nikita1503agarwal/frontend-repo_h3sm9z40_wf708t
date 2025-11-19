const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Smarter Automation, Real Results</h2>
            <p className="mt-4 text-slate-300">At Flowlayers, we help businesses focus on growth by eliminating repetitive tasks and manual errors. Our team builds AI-powered workflows that connect your ERP, accounting, and communication systems — so your operations run seamlessly.</p>
            <p className="mt-3 text-slate-300">With LaylEngine, our flagship platform, we deliver flexible and scalable solutions that adapt to any business. From construction and retail to real estate, we've helped companies save time, reduce costs, and unlock new efficiency.</p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-slate-200">
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">Egyptian tax compliance expertise (14% VAT)</li>
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">Arabic/English bilingual development</li>
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">GCC market experience (Saudi, Kuwait, UAE)</li>
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">End-to-end delivery and support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-6">
            <h3 className="text-white font-semibold">Founder Story</h3>
            <p className="text-slate-300 mt-2">Founded by a former accountant who created LaylEngine after being buried under thousands of invoices. We've lived the problem — now we build the solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
