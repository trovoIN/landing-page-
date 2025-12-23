import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LetterGlitch from './LetterGlitch'
import GridDistortion from './GridDistortion'
import { useConfetti } from '@/hooks/useConfetti'

type Stage = 'affirmation' | 'security' | 'form' | 'success'

const EarlyAccessEmbed: React.FC = () => {
  const [stage, setStage] = useState<Stage>('affirmation')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { triggerConfetti } = useConfetti()

  // Timed sequence: affirmation (1.2s) → security (2.2s) → form
  useEffect(() => {
    const t1 = setTimeout(() => setStage('security'), 1200)
    const t2 = setTimeout(() => setStage('form'), 1200 + 2200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  const blinkKeyframes = useMemo(() => ({
    opacity: [0.6, 1, 0.6]
  }), [])

  const validateEmail = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }
    try {
      setLoading(true)
      const resp = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() })
      })

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}))
        throw new Error(data?.error || 'Unable to submit right now')
      }

      triggerConfetti()
      setStage('success')
    } catch (err: any) {
      setError(err?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <div className="pointer-events-none absolute inset-[-10%] rounded-[32px] bg-[radial-gradient(circle_at_top,#1DB95433,transparent_45%),radial-gradient(circle_at_bottom,#4ade8033,transparent_40%)] blur-3xl" aria-hidden />
      <div className="relative rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Stage layers */}
        <div className="relative h-[440px]">
          {/* Affirmation */}
          <AnimatePresence>
            {stage === 'affirmation' && (
              <motion.div className="absolute inset-0 grid place-items-center p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-3">You’re making the right call.</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    Thanks for choosing <motion.span className="text-trovo-green" animate={blinkKeyframes} transition={{ duration: 1.2, repeat: 3 }}>Trovo</motion.span>
                  </h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Security / LetterGlitch */}
          <AnimatePresence>
            {stage === 'security' && (
              <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <LetterGlitch outerVignette smooth glitchSpeed={60} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 rounded-2xl px-5 py-3 border border-white/10">
                    <p className="text-xs md:text-sm text-gray-300">
                      256‑bit encrypted • No spam • Your email stays private
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form with GridDistortion background */}
          <AnimatePresence>
            {stage === 'form' && (
              <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <GridDistortion imageSrc="/1.svg" className="opacity-40" strength={0.08} mouse={0.08} />
                <div className="absolute inset-0 p-6 md:p-8 flex items-center justify-center">
                  <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
                    <div className="text-center mb-2">
                      <h4 className="text-white text-xl font-semibold">Join Early Access</h4>
                      <p className="text-gray-400 text-sm">We’ll email you when invites open.</p>
                    </div>
                    <div>
                      <label htmlFor="ea-email" className="sr-only">Email</label>
                      <input id="ea-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-night-800/80 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-trovo-green/40" />
                    </div>
                    {error && <p className="text-red-300 text-sm bg-red-500/10 border border-red-500/40 px-3 py-2 rounded-md">{error}</p>}
                    <button type="submit" disabled={loading} className="w-full bg-trovo-green hover:bg-trovo-green/90 disabled:opacity-60 text-black font-semibold px-4 py-3 rounded-xl transition-colors">{loading ? 'Submitting…' : 'Get Early Access'}</button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success */}
          <AnimatePresence>
            {stage === 'success' && (
              <motion.div className="absolute inset-0 grid place-items-center p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-center max-w-sm">
                  <p className="text-trovo-green text-sm font-semibold uppercase tracking-[0.2em]">You’re in</p>
                  <h4 className="text-white text-2xl font-bold mt-2">Thanks for choosing Trovo</h4>
                  <p className="text-gray-400 mt-2">We’ll reach out with invite-only updates.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default EarlyAccessEmbed
