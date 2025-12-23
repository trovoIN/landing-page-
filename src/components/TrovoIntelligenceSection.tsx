import React from 'react'
import { motion } from 'framer-motion'

interface Module {
  icon: string
  title: string
  description: string
  feature: string
}

const modules: Module[] = [
  {
    icon: '🧠',
    title: 'Smart Reward Engine',
    description: 'Learns your spending patterns and suggests optimal redemption timing. Never leave money on the table.',
    feature: 'Automatic optimization'
  },
  {
    icon: '💳',
    title: 'Virtual Card Intelligence',
    description: 'Creates secure, temporary virtual cards for each transaction type. Full control, zero compromise.',
    feature: 'Unlimited cards'
  },
  {
    icon: '⚡',
    title: 'Instant Settlement',
    description: 'Cashback hits your account in real-time. No waiting, no delays. Just instant value.',
    feature: 'T+0 settlements'
  },
  {
    icon: '🔐',
    title: 'Privacy Mesh',
    description: 'Your data never leaves India. Military-grade encryption protects every transaction.',
    feature: 'Bank-grade security'
  },
]

/**
 * TrovoIntelligenceSection
 * Showcases the four core intelligence engines powering Trovo
 * Differentiates from competitors by showing technical sophistication
 */
const TrovoIntelligenceSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const moduleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' as const,
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      },
    },
  }

  return (
    <section 
      className="relative py-20 md:py-32 bg-night-900 overflow-hidden"
      aria-labelledby="intelligence-heading"
    >
      {/* Animated hex grid background - very subtle */}
      <motion.div 
        aria-hidden 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L50 14.43V43.3L25 57.73L0 43.3V14.43L25 0Z' fill='%231DB954' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />

      {/* Gradient overlays for depth */}
      <motion.div 
        aria-hidden
        className="absolute -top-40 -right-40 w-96 h-96 bg-trovo-green/5 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div 
        aria-hidden
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-trovo-green/3 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-trovo-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            THE INTELLIGENCE LAYER
          </p>
          <h2 
            id="intelligence-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Technology that <span className="text-trovo-green">thinks with you</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Four core engines running silently in the background, continuously optimizing your financial life in real-time.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {modules.map((module, idx) => (
            <motion.div
              key={module.title}
              variants={moduleVariants}
              className="relative rounded-2xl border border-trovo-green/15 bg-gradient-to-br from-night-800/60 to-night-900/40 p-8 backdrop-blur-xl overflow-hidden group"
              whileHover={{ 
                borderColor: 'rgba(29, 185, 84, 0.4)',
                y: -4
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 bg-radial from-trovo-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                aria-hidden
              />

              {/* Border shine on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  borderImage: 'linear-gradient(135deg, rgba(29,185,84,0.3), rgba(244,184,96,0.1), rgba(29,185,84,0.1))'
                }}
                aria-hidden
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.span 
                  className="text-5xl mb-6 block leading-none"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {module.icon}
                </motion.span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  {module.description}
                </p>

                {/* Feature badge */}
                <motion.div 
                  className="inline-flex px-4 py-2 rounded-lg bg-trovo-green/10 border border-trovo-green/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-semibold text-trovo-green">
                    {module.feature}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom insight section */}
        <motion.div 
          className="relative rounded-3xl border border-trovo-gold/15 bg-gradient-to-r from-night-800/50 to-night-900/50 p-8 md:p-12 backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-start gap-6">
            <span className="text-4xl shrink-0">💡</span>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Why this matters
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                While competitors offer one-off features, Trovo's four integrated engines work together. Your rewards feed into the intelligence engine. Your patterns optimize the settlement layer. Your security is baked into every module. This isn't just technology—it's a system designed for your financial growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrovoIntelligenceSection
