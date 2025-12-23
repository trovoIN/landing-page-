import NativeSEO from '../components/NativeSEO'

const TrovoFiLandingSection = () => {
  return (
    <>
      <NativeSEO 
        title="Trovo Fi — Your Rewards, Reimagined"
        description="Trovo helps you unlock value — rewards, payments, and sharing that simply work."
        keywords="trovo, trovo fi, fintech, rewards, payments, sharing, india"
      />
      <section className="bg-gradient-to-r from-night-900 via-night-800 to-night-900 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A simpler way to unlock value
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Trovo brings rewards, payments, and sharing together with clarity and trust.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Clarity first</h3>
                <p className="text-gray-400">Understand your rewards and options without the maze.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Effortless to use</h3>
                <p className="text-gray-400">Designed for everyday moments with care.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Secure by default</h3>
                <p className="text-gray-400">Modern safeguards to protect what matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrovoFiLandingSection
