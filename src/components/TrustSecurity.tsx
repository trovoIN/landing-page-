import FadeInSection from './FadeInSection'

const bullets = [
  'Bank-grade controls.',
  'Data stays in India.',
  'End-to-end encryption.',
  'Multi-factor authentication.',
]

const TrustSecurity: React.FC = () => {
  return (
    <section className="section-padding bg-night-900">
      <div className="container-custom">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Trust & Security</h2>
          <p className="mt-4 text-gray-300 text-center">Built to protect your data and your peace of mind.</p>
        </FadeInSection>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {bullets.map((b, i) => (
            <FadeInSection key={b} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-night-800/80 p-6">
                <p className="text-white font-medium">{b}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/data-security" className="btn-ghost" aria-label="Learn more about Trovo data security">Learn more →</a>
        </div>
      </div>
    </section>
  )
}

export default TrustSecurity