const services = [
  {
    title: 'Workflow Automation',
    points: [
      'Streamline repetitive tasks using n8n',
      'Reduce human error across your organization',
      'Connect multiple systems seamlessly',
    ],
  },
  {
    title: 'Financial Process Automation',
    points: [
      'Automate invoicing, expense tracking, reporting',
      'Egyptian tax compliance (14% VAT)',
      'ERP integrations (Daftara, Odoo, custom)',
      'Multi-currency handling',
    ],
  },
  {
    title: 'Custom AI Integrations',
    points: [
      'AI-powered document processing (Azure OCR, OpenAI)',
      'Arabic/English bilingual processing',
      'WhatsApp Business API automation',
      'Multi-agent AI architectures',
    ],
  },
  {
    title: 'CRM & Marketing Automation',
    points: [
      'Custom CRM with role-based permissions',
      'WhatsApp, Instagram, Facebook, SMS',
      'Lead gen and engagement workflows',
      'Real-time customer interactions',
    ],
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What We Do</h2>
        <p className="text-slate-300 text-center mt-2 max-w-2xl mx-auto">Hands-on automation consulting with deep expertise in finance, operations, and AI systems.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-blue-400">•</span> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
