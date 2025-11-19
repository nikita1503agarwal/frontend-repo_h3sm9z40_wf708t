import { useState } from 'react'

const steps = ['Tell Us About Your Business', 'Analyzing Your Business', 'Your Automation Roadmap']

const Advisor = () => {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    business_name: '',
    industry: '',
    employees: 5,
    current_tools: '',
    key_processes: '',
    pain_points: '',
    monthly_invoices: 0,
    monthly_revenue: 0,
    currency: 'USD',
    email: '',
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStep(1)
    try {
      const payload = {
        ...form,
        current_tools: form.current_tools.split(',').map((s) => s.trim()).filter(Boolean),
        key_processes: form.key_processes.split(',').map((s) => s.trim()).filter(Boolean),
        pain_points: form.pain_points.split(',').map((s) => s.trim()).filter(Boolean),
        employees: Number(form.employees),
        monthly_invoices: Number(form.monthly_invoices),
        monthly_revenue: Number(form.monthly_revenue),
      }
      const res = await fetch(`${baseUrl}/advisor/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setResult(data)
      setStep(2)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="advisor" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">AI Automation Advisor</h2>
        <p className="text-slate-300 text-center mt-2">Answer a few questions and get an instant automation roadmap.</p>

        <div className="mt-8 flex justify-center">
          <ol className="flex items-center gap-3 text-xs">
            {steps.map((s, i) => (
              <li key={s} className={`px-3 py-1 rounded-full border ${i <= step ? 'bg-blue-600 text-white border-blue-600' : 'text-slate-300 border-white/10'}`}>{s}</li>
            ))}
          </ol>
        </div>

        {step === 0 && (
          <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              { label: 'Business Name', name: 'business_name', type: 'text' },
              { label: 'Industry', name: 'industry', type: 'text' },
              { label: 'Employees', name: 'employees', type: 'number' },
              { label: 'Current Tools (comma separated)', name: 'current_tools', type: 'text' },
              { label: 'Key Processes (comma separated)', name: 'key_processes', type: 'text' },
              { label: 'Pain Points (comma separated)', name: 'pain_points', type: 'text' },
              { label: 'Monthly Invoices', name: 'monthly_invoices', type: 'number' },
              { label: 'Monthly Revenue', name: 'monthly_revenue', type: 'number' },
              { label: 'Currency', name: 'currency', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="text-slate-200 text-sm">{f.label}</span>
                <input
                  required={['business_name','industry','employees'].includes(f.name)}
                  className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 p-2 text-white placeholder-slate-400"
                  name={f.name}
                  type={f.type}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                />
              </label>
            ))}
            <button className="mt-2 md:col-span-2 rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-500 transition">Analyze My Business</button>
          </form>
        )}

        {step === 1 && (
          <div className="mt-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-slate-300">Analyzing your business...</p>
          </div>
        )}

        {step === 2 && result && (
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Estimated Monthly Savings</h3>
              <p className="text-3xl text-blue-400 mt-2">${'{'}result.estimated_monthly_savings.toLocaleString(){'}'}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Estimated ROI</h3>
              <p className="text-3xl text-blue-400 mt-2">{'{'}result.estimated_roi{'}'}x</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-3">
              <h3 className="text-white font-semibold">Recommended Automations</h3>
              <ul className="mt-3 space-y-2 text-slate-200 list-disc list-inside">
                {result.recommendations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-500 transition">Ready to implement? Let's discuss</a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Advisor
