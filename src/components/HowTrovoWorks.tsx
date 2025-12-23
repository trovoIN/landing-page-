import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

const HowTrovoWorks: React.FC = () => {
  const features = [
    {
      icon: 'coins.svg',
      title: 'Points Redemption',
      description: 'Redeem points before they expire—no chips, no vouchers, only cash rewards.',
      color: '#42ffa1'
    },
    {
      icon: 'zap.svg',
      title: '1% UPI Cashback',
      description: 'Every UPI transaction gives you guaranteed 1% — no luck, just logic.',
      color: '#06B6D4'
    },
    {
      icon: 'card.svg',
      title: 'Hidden Card Issuances',
      description: 'Private, secure, and customizable virtual cards for every need.',
      color: '#42ffa1'
    },
    {
      icon: 'phone.svg',
      title: 'One-Tap NFC Payments',
      description: 'Pay in seconds. Tap your phone. Done.',
      color: '#06B6D4'
    },
  ]

  return (
    <section className="relative bg-night-900 py-24 md:py-32 overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-trovo-green/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/20 text-trovo-green text-xs font-semibold tracking-widest uppercase mb-6"
          >
            How It Works
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4"
          >
            Here's how Trovo fixes it.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            Simple, secure, rewarding — by design.
          </motion.p>
        </motion.div>

        {/* Features Grid - 2x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: `0 20px 60px ${feature.color}30`
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative group"
            >
              {/* Card background with border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/20 group-hover:border-white/30 transition-colors duration-300" />
              
              {/* Color accent bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.4 }}
                className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl origin-top"
                style={{ background: feature.color }}
              />

              {/* Card content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mb-4 inline-flex w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md group-hover:bg-white/15 transition-colors duration-300"
                >
                  <img src={`/${feature.icon}`} alt={feature.title} className="w-7 h-7 md:w-8 md:h-8" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Bottom accent dot */}
                <div className="mt-auto pt-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.5, duration: 0.3 }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: feature.color }}
                  />
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-2xl pointer-events-none group-hover:blur-xl"
                style={{
                  background: `radial-gradient(ellipse at center, ${feature.color}20, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-400 text-base md:text-lg">
            Trovo makes payments rewarding again.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HowTrovoWorks
