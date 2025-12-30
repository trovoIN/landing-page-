import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import PageTransition from '@/components/PageTransition'
import NativeSEO from '@/components/NativeSEO'
import GlitchText from '@/components/GlitchText'
import LiveCounter from '@/components/LiveCounter'
import CyberInput from '@/components/CyberInput'
import GridDistortionTinted from '@/components/GridDistortionTinted'
import GlitchParticles from '@/components/GlitchParticles'
import EntrySequence from '@/components/EntrySequence'
import { API_ENDPOINTS } from '@/config/api'

const JoinEarlyAccessPage = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSequence, setShowSequence] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)

  const emailInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLDivElement>(null)



  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Please enter a valid email address.')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.')
      return false
    }
    setEmailError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isEmailValid = validateEmail(email)

    if (!isEmailValid) {
      return
    }

    // Submit to backend
    try {
      const response = await fetch(API_ENDPOINTS.EARLY_ACCESS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setShowConfetti(true)

        // Trigger immediate counter refetch
        window.dispatchEvent(new Event('refetch-count'))

        // Stop confetti after 5 seconds
        setTimeout(() => setShowConfetti(false), 5000)
      }
    } catch (error) {
      console.error('Submission failed:', error)
    }
  }

  return (
    <>
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={formRef.current?.offsetWidth || 600}
            height={formRef.current?.offsetHeight || 800}
            recycle={false}
            numberOfPieces={200}
            colors={['#1DB954', '#1ed760', '#18a147', '#FFFFFF']}
          />
        </div>
      )}

      <PageTransition>
        <NativeSEO
          title="Join trovofi Early Access"
          description="Be first to try trovofi. Revolutionary fintech that actually cares. Private, secure, invite-only."
          canonical="https://trovofi.in/join"
        />

        {/* Entry Sequence */}
        {showSequence && (
          <EntrySequence onComplete={() => setShowSequence(false)} />
        )}

        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        <main
          id="main-content"
          className="min-h-screen bg-gradient-to-br from-night-900 via-night-800 to-night-900 relative overflow-hidden"
        >
          {/* Grid Distortion Background - RESTORED */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <GridDistortionTinted
              imageSrc="/1.svg"
              grid={20}
              mouse={0.08}
              strength={0.15}
              relaxation={0.95}
              tint="#1DB954"
            />
          </div>

          {/* Glitch Particles */}
          <GlitchParticles />

          {/* Animated background gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-trovo-green/20 to-transparent rounded-full blur-3xl"
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl"
              animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" aria-hidden="true" />
          </div>



          {/* Content Container */}
          <div className="relative z-10 px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">

              {/* Hero Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                  <GlitchText delay={0.3} duration={1.5}>Join early access</GlitchText>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  <GlitchText delay={0.6} duration={1.5}>A smarter way to use your money.</GlitchText>
                </p>
              </motion.div>

              {/* Live Counter */}
              <LiveCounter
                apiEndpoint={API_ENDPOINTS.USER_COUNT}
                initialTotal={3729}
                useMock={false}
              />



              {/* Form Section */}
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="max-w-2xl mx-auto"
              >
                {!isSubmitted ? (
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                      Request access
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <CyberInput
                        ref={emailInputRef}
                        label="Email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                        placeholder="your@email.com"
                        required
                      />


                      <button
                        type="submit"
                        className="w-full py-4 md:py-5 px-8 rounded-xl text-lg font-semibold
                        bg-gradient-to-r from-trovo-green to-green-600
                        text-night-900 hover:shadow-[0_10px_40px_rgba(29,185,84,0.3)]
                        transition-all duration-300 hover:-translate-y-1
                        focus:outline-none focus:ring-2 focus:ring-trovo-green focus:ring-offset-2 focus:ring-offset-night-900
                        disabled:opacity-50 disabled:cursor-not-allowed
                        active:translate-y-0"
                      >
                        Get early access
                      </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-400">
                      256-bit encrypted. No spam. Ever.
                    </p>
                  </div>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="backdrop-blur-md bg-trovo-green/10 border border-trovo-green/30 rounded-2xl p-8 md:p-12 text-center"
                  >
                    <div className="w-16 h-16 bg-trovo-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-night-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      <GlitchText delay={0.1}>Email received.</GlitchText>
                    </h2>
                    <p className="text-lg text-gray-300">
                      We'll reach out when your access opens.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Feature Badges with SVG Icons */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  {
                    icon: (
                      <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    text: 'Private by design'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    text: 'Instant transfers'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: 'Zero hidden fees'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    text: 'Bank-level security'
                  },
                ].map((feature) => (
                  <div
                    key={feature.text}
                    className="backdrop-blur-md bg-white/5 border border-trovo-green/20 rounded-xl p-5 text-center
                    hover:border-trovo-green/40 hover:bg-trovo-green/5 hover:scale-105
                    transition-all duration-300 group"
                  >
                    <div className="text-trovo-green group-hover:text-trovo-green-light transition-colors mb-3">
                      {feature.icon}
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 font-medium">{feature.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Footer - Brand Consistency */}
          <footer className="relative z-10 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
              <p className="text-sm text-gray-400">© 2025 Trovofi. All rights reserved.</p>
              <div className="mt-3 flex items-center justify-center gap-6">
                <Link to="/privacy" className="text-xs text-gray-500 hover:text-trovo-green transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-xs text-gray-500 hover:text-trovo-green transition-colors">Terms of Service</Link>
                <Link to="/contact" className="text-xs text-gray-500 hover:text-trovo-green transition-colors">Contact</Link>
              </div>
            </div>
          </footer>
        </main>
      </PageTransition>
    </>
  )
}

export default JoinEarlyAccessPage
