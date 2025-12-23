import { useRef } from 'react'
import EarlyAccessEmbed from './EarlyAccessEmbed'

const EarlyAccessSection: React.FC = () => {
  const ref = useRef(null)

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-night-900" ref={ref} id="early-access" aria-labelledby="early-access-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-night-900 via-night-800 to-night-700"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <EarlyAccessEmbed />
        </div>
      </div>
    </section>
  )
}

export default EarlyAccessSection
