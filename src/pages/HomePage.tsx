import PageTransition from '../components/PageTransition'
import NativeSEO from '../components/NativeSEO'
import CinematicHero from '../components/CinematicHero'
import CollageShowcase from '../components/CollageShowcase'
import MissionSection from '../components/MissionSection'
import TrustSecurity from '../components/TrustSecurity'
import RotatingFeatureGlobe from '../components/RotatingFeatureGlobe'
import ScrollStory from '@/components/ScrollStory'

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trovo",
    "url": "https://trovofi.in",
    "logo": "https://trovofi.in/trovo.svg",
    "description": "Trovo helps you unlock value from rewards, payments, and sharing — simply and securely.",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" }
  }

  return (
    <PageTransition>
      <NativeSEO
        title="Trovo Fi — Your Rewards, Reimagined"
        description="Your money has more value than you think. Trovo helps you unlock it — rewards, payments, and sharing that simply work."
        canonical="https://trovo.app"
        structuredData={structuredData}
      />
      <main id="content" className="scroll-smooth snap-y snap-mandatory">
        {/* 1. Emotional hook - Financial gravity */}
        <section className="min-h-screen snap-center snap-always">
          <CinematicHero />
        </section>

        {/* 2. Who this is for - Real people, real India */}
        <section className="min-h-screen snap-center snap-always">
          <MissionSection />
        </section>

        {/* 3. System intelligence - The engine */}
        <section className="min-h-screen snap-center snap-always">
          <RotatingFeatureGlobe />
        </section>

        {/* 4. Story & inevitability - Pause and reflection */}
        <section className="min-h-screen snap-center snap-always">
          <ScrollStory />
        </section>

        {/* 5. Quiet evidence - This is real, this works */}
        <section className="min-h-screen snap-center snap-always">
          <CollageShowcase />
        </section>

        {/* 7. Calm reassurance */}
        <section className="min-h-screen snap-center snap-always">
          <TrustSecurity />
        </section>
      </main>
    </PageTransition>
  )
}

export default HomePage
