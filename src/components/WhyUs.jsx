const items = [
  {
    title: 'Hands-on Expertise',
    desc: 'Deep roots in finance & operations with real-world workflow delivery.',
  },
  {
    title: 'Tailored Solutions',
    desc: 'Workflows designed around your business, not the other way around.',
  },
  {
    title: 'ROI-Driven',
    desc: 'Affordable, measurable results with clear impact on your P&L.',
  },
]

const WhyUs = () => {
  return (
    <section id="why" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Flowlayers?</h2>
            <p className="mt-4 text-slate-300">Flowlayers isn't just another consulting firm. We've lived the problem. Our founder, once an accountant buried under thousands of invoices, created LaylEngine — an AI-powered accountant agent that turned frustration into innovation.</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {items.map((it) => (
                <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  <p className="text-sm text-slate-300 mt-1">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-6">
            <h3 className="text-white font-semibold">Founder Story</h3>
            <p className="text-slate-300 mt-2">Founded by a former accountant who built LaylEngine after drowning in manual invoice processing. Today, we help companies across Egypt, KSA, Kuwait and the UAE automate accounting, operations, and customer engagement.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
