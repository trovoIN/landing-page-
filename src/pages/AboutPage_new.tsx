import { useRef, useEffect } from 'react'
import PageTransition from '../components/PageTransition'

const AboutPage = () => {
  const aboutRef = useRef(null)
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const visionRef = useRef(null)

  useEffect(() => {
    document.title = 'About Us - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen bg-night-900 pt-16 md:pt-20">
        {/* 1. About Trovo Section */}
        <section className="section-padding bg-gradient-to-br from-night-900 via-night-800 to-night-900" ref={aboutRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  About <span className="text-trovo-green">Trovo</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  We're building the future of fintech in India, revolutionizing how you manage money. 
                  Our mission is to unlock the hidden value in your credit cards and create smarter 
                  financial opportunities for every Indian.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Trovo combines intelligent reward optimization, guaranteed UPI cashback, 
                  and seamless payments into one simple platform that puts more money 
                  back in your pocket.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-night-800/80 p-12 rounded-3xl shadow-2xl border border-white/10 backdrop-blur">
                  <img
                    src="/trovo.svg"
                    alt="Trovo Logo"
                    className="h-40 w-40 mx-auto object-contain mb-6"
                  />
                  <h3 className="text-3xl font-bold text-center text-white mb-2">Trovo Fintech</h3>
                  <p className="text-center text-gray-300 text-lg">Smart Financial Solutions for India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Story Section */}
        <section className="section-padding bg-night-800/40" ref={storyRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="bg-gradient-to-br from-trovo-green/20 via-night-800/40 to-night-900 rounded-3xl p-12 border border-white/10">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Our Journey</h3>
                    <p className="text-gray-300 text-lg">From frustration to innovation</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Trovo was born from a simple frustration: watching millions of credit card 
                    points expire unused while people struggled with scattered payment methods. 
                    Our founder realized this wasn't just a personal problem—millions of Indians 
                    were leaving money on the table every day.
                  </p>
                  <p>
                    We discovered that people struggle with complex reward systems, multiple 
                    payment apps, and missing out on the best financial opportunities. That's 
                    when we decided to build something different.
                  </p>
                  <p>
                    Today, Trovo brings together intelligent reward optimization, guaranteed 
                    UPI cashback, and seamless payments into one simple platform. We're making 
                    financial wellness accessible to every Indian, one smart decision at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Mission Section */}
        <section className="section-padding bg-night-900" ref={missionRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-trovo-green">To democratize financial intelligence for every Indian.</strong> We believe 
                    that smart financial decisions shouldn't be complicated or reserved for the wealthy.
                  </p>
                  <p>
                    Our mission is to build technology that automatically optimizes your financial 
                    life—from maximizing credit card rewards to ensuring you never miss cashback 
                    opportunities.
                  </p>
                  <p>
                    We're committed to transparency, security, and putting our users first. Every 
                    feature we build is designed to put more money back in your pocket and give 
                    you peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-trovo-green to-trovo-green-dark rounded-3xl p-12 text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-xl opacity-90">Democratizing financial intelligence for every Indian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Vision Section */}
        <section className="section-padding bg-night-800/40" ref={visionRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="bg-gradient-to-br from-trovo-green to-emerald-600 rounded-3xl p-12 text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-xl opacity-90">The future of financial wellness in India</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-blue-600">To become India's most trusted financial companion.</strong> We envision 
                    a future where every Indian has access to intelligent financial tools that 
                    work automatically in the background.
                  </p>
                  <p>
                    We see a world where you never lose money due to expired rewards, forgotten 
                    cashback, or suboptimal payment choices. Where your money works as hard as 
                    you do, 24/7.
                  </p>
                  <p>
                    Our vision extends beyond just payments—we're building an ecosystem that 
                    helps Indians save more, earn more, and achieve their financial goals with 
                    confidence and ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default AboutPage
