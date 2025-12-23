import React from 'react'
import { motion } from 'framer-motion'

const VideoShowcase: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-night-900 via-night-800 to-night-900 overflow-hidden py-16 sm:py-20 md:py-28">
      {/* Subtle background accents */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-trovo-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column video layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Balls to Coins Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl shadow-trovo-green/10 bg-gradient-to-br from-white/5 to-white/0">
              <motion.video
                src="/balls to coins.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
                aria-label="Balls transforming to coins animation"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-trovo-green/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              aria-hidden
            />
          </motion.div>

          {/* Right: 3D Card Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl shadow-trovo-green/10 bg-gradient-to-br from-white/5 to-white/0">
              <motion.video
                src="/3d card (1).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
                aria-label="3D card animation"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-trovo-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              aria-hidden
            />
          </motion.div>
        </div>

        {/* Bottom insight text */}
        <motion.div
          className="mt-16 sm:mt-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            Rewards that actually matter. Every transaction, automatically optimized. 
            <br className="hidden sm:block" />
            Your money works smarter, so you don't have to.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcase
