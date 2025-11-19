const tools = [
  'n8n',
  'Supabase',
  'React/TypeScript',
  'Azure OCR',
  'OpenAI APIs',
  'WhatsApp Business API',
  'Google Sheets',
  'Airtable',
  'Cloudflare',
  'Daftara',
  'Odoo',
]

const Tech = () => {
  return (
    <section className="py-16 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold text-white text-center">Platforms & Tools We Master</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tools.map((t) => (
            <span key={t} className="text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 px-3 py-1">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tech
