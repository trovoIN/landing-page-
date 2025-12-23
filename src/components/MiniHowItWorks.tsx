import FadeInSection from './FadeInSection'

const steps = [
  { title: 'Connect', desc: 'Link your cards and UPI accounts securely.' },
  { title: 'Optimize', desc: 'We surface value and simplify rewards.' },
  { title: 'Enjoy', desc: 'Earn more from everyday payments.' },
]

const MiniHowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">How it works</h2>
          <p className="mt-4 text-gray-600 text-center">A simple flow built for clarity and trust.</p>
        </FadeInSection>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <FadeInSection key={s.title}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MiniHowItWorks