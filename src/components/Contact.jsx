import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', industry: '', message: '', preferred_contact: 'email'
  })
  const [status, setStatus] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${baseUrl}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('ok')
      setForm({ name: '', email: '', phone: '', company: '', industry: '', message: '', preferred_contact: 'email' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to save time and scale smarter?</h2>
            <p className="mt-3 text-slate-300">Fill out the form and our team will reach out.</p>
            <div className="mt-6 space-y-2 text-slate-200 text-sm">
              <p>Email: hello@flowlayers.com</p>
              <p>WhatsApp Cairo: +20 111 483 3283</p>
              <p>WhatsApp Jeddah: +966 50 353 8419</p>
              <div className="flex gap-3 mt-2">
                <a href="https://wa.me/201114833283" className="rounded-lg bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-500 transition">WhatsApp Cairo</a>
                <a href="https://wa.me/966503538419" className="rounded-lg bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-500 transition">WhatsApp Jeddah</a>
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Name', name: 'name', type: 'text' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Phone', name: 'phone', type: 'text' },
                { label: 'Company', name: 'company', type: 'text' },
                { label: 'Industry', name: 'industry', type: 'text' },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-slate-200 text-sm">{f.label}</span>
                  <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 p-2 text-white placeholder-slate-400" name={f.name} type={f.type} value={form[f.name]} onChange={handleChange} />
                </label>
              ))}
              <label className="block">
                <span className="text-slate-200 text-sm">Message / Requirements</span>
                <textarea className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 p-2 text-white placeholder-slate-400" name="message" rows={4} value={form.message} onChange={handleChange} />
              </label>
              <label className="block">
                <span className="text-slate-200 text-sm">Preferred contact method</span>
                <select name="preferred_contact" value={form.preferred_contact} onChange={handleChange} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 p-2 text-white">
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </label>
              <button className="mt-2 rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-500 transition">Send</button>
              {status === 'sending' && <p className="text-slate-300">Sending...</p>}
              {status === 'ok' && <p className="text-green-400">Thanks! We'll be in touch shortly.</p>}
              {status === 'error' && <p className="text-red-400">Something went wrong. Please try WhatsApp.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
