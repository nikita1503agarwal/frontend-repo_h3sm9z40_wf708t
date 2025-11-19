const testimonials = [
  {
    quote:
      'Flowlayers transformed our accounting workflows completely. We went from manual chaos to seamless automation, saving time and cutting costly errors.',
  },
  {
    quote:
      'By integrating the Smart Accounting Hub into our POS, Flowlayers made our daily accounting effortless, accurate, and stress-free.',
  },
  {
    quote:
      'With the custom CRM integrated with WhatsApp and GPT-5, Flowlayers revolutionized how we manage campaigns and engage customers in real time.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What Clients Say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              “{t.quote}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
