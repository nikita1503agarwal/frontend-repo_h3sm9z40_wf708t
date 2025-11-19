const cases = [
  {
    title: 'Tawafok Alshamal – Construction',
    challenge: 'Weekly invoice processing for multiple construction sites',
    solution: 'LaylEngine integration with Daftara ERP',
    features: 'OCR digitization, reconciliation, inventory updates, reporting',
    results: 'Reduced manual workload, fewer errors, faster reporting',
  },
  {
    title: 'Alraffa Coffee Shop – Retail & F&B',
    challenge: 'Supplier invoice management chaos',
    solution: 'LaylEngine extended to POS system',
    features: 'Real-time inventory updates, PO reconciliation, discrepancy flagging',
    results: 'Error-free inventory, faster payments, improved cost tracking',
  },
  {
    title: 'Algomhorya Real Estate Agency',
    challenge: 'Multi-channel customer engagement',
    solution: 'Multi-channel CRM SaaS platform (Official Meta Partner)',
    features: 'WhatsApp, SMS, Instagram, FB Messenger with GPT responses',
    results: 'Streamlined lead management, improved communication',
  },
  {
    title: 'Kuwait Pharmacy Management System',
    challenge: 'Invoice processing for Kuwait market',
    solution: 'Bilingual workflows with local tax compliance',
    features: 'Multi-currency handling, automated compliance checks',
    results: 'Seamless pharmacy operations automation',
  },
]

const CaseStudies = () => {
  return (
    <section id="work" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Work</h2>
            <p className="mt-2 text-slate-300">Real-world challenges solved with measurable outcomes.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-500 transition">Let's Talk</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold text-lg">{c.title}</h3>
              <div className="mt-3 text-sm text-slate-300 space-y-1">
                <p><span className="text-white">Challenge:</span> {c.challenge}</p>
                <p><span className="text-white">Solution:</span> {c.solution}</p>
                <p><span className="text-white">Features:</span> {c.features}</p>
                <p><span className="text-white">Results:</span> {c.results}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
