import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CinematicHero: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<'coins' | 'card'>('coins')
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Show text after 1.5s (after video starts)
    const textTimer = setTimeout(() => setShowText(true), 1500)

    // Switch to card video after 6s
    const switchTimer = setTimeout(() => setCurrentVideo('card'), 6000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(switchTimer)
    }
  }, []) // Removed currentVideo dependency to fix infinite loop

  const goToJoin = () => {
    window.location.assign('/join')
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          {currentVideo === 'coins' && (
            <motion.video
              key="coins-video"
              src="/balls to coins.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          )}
          {currentVideo === 'card' && (
            <motion.video
              key="card-video"
              src="/3d card(1).mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
          animate={{ opacity: showText ? 1 : 0.3 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {currentVideo === 'coins' && (
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}
              {/* Badge Removed */}

              {/* Main Headline - Peace Sans Removed for standard Bold as requested for clarity */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bebas font-bold text-white leading-[1.1] tracking-wide drop-shadow-xl"
              >
                Indians lose <br className="hidden sm:block" />
                thousands in <br className="hidden sm:block" />
                unclaimed rewards.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl text-trovo-green font-medium"
              >
                We fix that.
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-white/5"
              >
                Trovo combines intelligent reward optimization, guaranteed UPI cashback, and seamless payments into one simple platform that puts more money back in your pocket.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToJoin}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-trovo-green hover:bg-trovo-green/90 text-black font-bold rounded-full text-lg sm:text-xl transition-colors shadow-lg shadow-trovo-green/40"
              >
                Join Early Access
              </motion.button>
            </div>
          )}

          {currentVideo === 'card' && (
            <div className="space-y-6 sm:space-y-8">
              {/* Badge Removed as per user request */}

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bebas font-bold text-white leading-[1.1] tracking-wide drop-shadow-xl"
              >
                The card that <br className="hidden sm:block" />
                works for you.
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-medium"
              >
                All your rewards. One intelligent platform.
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-white/5"

              >
                From maximizing credit card rewards to ensuring you never miss cashback opportunities. Every feature designed to put more money back in your pocket.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToJoin}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full text-lg sm:text-xl transition-colors shadow-lg shadow-cyan-400/40"
              >
                Join Early Access
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom Left */}
      <motion.div
        className="absolute bottom-8 left-8 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          {/* Text removed as requested */}
          <svg
            className="w-8 h-8 text-trovo-green drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default CinematicHero
