import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const CollageShowcase: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Parallax effects
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0, 1, 1, 0.92])

  return (
    <section ref={ref} id="system-collage" className="relative min-h-screen overflow-hidden flex flex-col bg-night-900">
      {/* Ambient backdrop */}
      <motion.div style={{ opacity: sectionOpacity }} aria-hidden className="absolute inset-0 bg-gradient-to-br from-night-900 via-night-800 to-night-700" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center py-16 sm:py-24">
        {/* Header: Minimal, Declarative */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            className="text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-trovo-green/70"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            One System
          </motion.p>
          <motion.h2
            className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            Different moments.
            <br />
            One intelligence.
          </motion.h2>
        </div>

        {/* College Image Display - Optimal Landscape Format */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] w-full mx-auto -mx-4 sm:mx-0">
          {/* Ambient glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-radial from-trovo-green/8 to-transparent blur-3xl pointer-events-none" aria-hidden />

          {/* College Image */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full">
              <img
                src="/college.jpeg"
                alt="Trovo System"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl drop-shadow-2xl"
              />

              {/* Subtle glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl bg-gradient-to-br from-trovo-green/15 to-cyan-500/8 -z-10"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>

        {/* Subtitle: Reinforce the message */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Every surface follows the same design principles. Consistent, coherent, intelligent.
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night-900 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      />
    </section>
  )
}

export default CollageShowcase
