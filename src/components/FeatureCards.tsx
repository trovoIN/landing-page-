import FadeInSection from './FadeInSection'

const features = [
  {
    title: 'Direct cash rewards on bill payments',
    desc: 'Pay essential bills and turn them into instant value.',
    icon: (
      // Receipt/Bill icon
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-trovo-green"><path d="M7 3h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z"/><path d="M8 9h8"/><path d="M8 13h6"/></svg>
    )
  },
  {
    title: 'Hidden card issuances',
    desc: 'Credit, simplified and private—only you are in control.',
    icon: (
      // Card with eye-off
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-trovo-green"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/><path d="M2 2l20 20"/></svg>
    )
  },
  {
    title: 'UPI cashback, every time',
    desc: 'Everyday UPI that gives back—no hoops, just value.',
    icon: (
      // Rupee coin with check
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-trovo-green"><circle cx="9" cy="12" r="5"/><path d="M7 11h4"/><path d="M7 9h6"/><path d="M8 14h4"/><path d="M15 19l2 2 4-4"/></svg>
    )
  },
  {
    title: 'One‑tap NFC payments',
    desc: 'Tap to pay with your phone. Fast, secure, effortless.',
    icon: (
      // Phone with waves
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-trovo-green"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M18 9c1.657 1.343 1.657 4.657 0 6"/><path d="M20 7c3 2.5 3 9.5 0 12"/></svg>
    )
  }
]

const FeatureCards: React.FC = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom overflow-hidden no-scrollbar">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">How Trovo Helps</h2>
          <p className="mt-4 text-gray-600 text-center">Rewards and payments—made effortless.</p>
        </FadeInSection>
        <div className="mt-10 grid gap-6 md:grid-cols-4 overflow-hidden">
          {features.map((f, i) => (
            <FadeInSection key={f.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-trovo-green/10 flex items-center justify-center mb-4 text-trovo-green" aria-hidden>
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
                <a href="/how-it-works" className="mt-4 inline-flex items-center text-trovo-green font-medium hover:underline" aria-label={`Learn more about ${f.title}`}>
                  Learn more →
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards