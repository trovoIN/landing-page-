import React from 'react'
import { motion } from 'framer-motion'

interface MissionSectionProps {
  variant?: 'mission' | 'operations'
}

const MissionSection: React.FC<MissionSectionProps> = ({ variant = 'mission' }) => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25,
      },
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const metrics = [
    {
      title: '₹50,000+',
      description: 'Average annual reward loss per Indian cardholder',
      iconPath: 'money-bag.svg',
    },
    {
      title: '2+ Billion',
      description: 'Unclaimed credit card rewards in India annually',
      iconPath: 'gift-box.svg',
    },
    {
      title: '3 Payments',
      description: 'Average fragmentation in financial life',
      iconPath: 'calculator.svg',
    },
  ]

  const principles = [
    {
      title: 'Instant',
      description: "Money moves when it's earned. Not later. Cashback and rewards settle in real time — not after weeks, not with conditions. If value exists, it reaches you.",
      iconPath: 'lightning-bolt.svg',
      tone: 'primary',
    },
    {
      title: 'Intelligent',
      description: 'Trovo observes how you spend and acts automatically. No manual tracking. No reward-hunting. No guesswork.',
      iconPath: 'lightning-bolt.svg',
      tone: 'system',
    },
    {
      title: 'Honest',
      description: 'No hidden fees. No inflated claims. If money moves, you see it. If rewards exist, you get them.',
      iconPath: 'checkmark.svg',
      tone: 'system',
    },
    {
      title: 'Accessible',
      description: 'Built for everyday India. For families, shop owners, salaried users — not just premium cardholders.',
      iconPath: 'globe.svg',
      tone: 'philosophy',
    },
  ]

  const operationsFeatures = [
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
    <section className="relative bg-night-900 py-20 md:py-32 overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-trovo-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {variant === 'mission' ? (
          <>
            {/* Mission Statement */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="mb-20 md:mb-32"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/20 text-trovo-green text-sm font-semibold tracking-widest uppercase mb-6">
                  Our Mission
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-[1.1] max-w-4xl mx-auto"
              >
                Revolutionizing financial management for every Indian
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Your money should work for you automatically. We're building the intelligent financial platform that optimizes rewards, guarantees cashback, and puts more money back in your pocket—without you having to lift a finger.
              </motion.p>
            </motion.div>

            {/* The Problem in Numbers */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="mb-20 md:mb-32"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-black text-white mb-12 text-center"
              >
                The Reality Indians Face
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group relative p-8 rounded-2xl bg-white/5 border border-white/20 hover:border-trovo-green/50 backdrop-blur-md transition-all duration-400"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br from-trovo-green/20 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img
                          src={`/${metric.iconPath}`}
                          alt={metric.title}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <h4 className="text-3xl font-black text-trovo-green mb-2">
                        {metric.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Principles Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center"
              >
                How Trovo Operates
              </motion.h3>

              {/* Green underline accent */}
              <div className="mx-auto mt-4 mb-16 h-0.5 w-20 bg-gradient-to-r from-trovo-green to-cyan-500 rounded-full" />

              <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                {principles.map((principle, idx) => (
                  <SimplePrincipleCard key={principle.title} principle={principle} idx={idx} itemVariants={itemVariants} />
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="mt-20 md:mt-32 text-center"
            >
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 mb-8"
              >
                This isn't just another fintech app. This is the financial platform India deserves.
              </motion.p>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.assign('/join')}
                className="px-8 py-4 rounded-full font-black text-black bg-trovo-green hover:bg-trovo-green/90 transition-all duration-300 shadow-lg shadow-trovo-green/40 text-lg"
              >
                Join the Revolution
              </motion.button>
            </motion.div>
          </>
        ) : (
          <>
            {/* How Trovo Works Section (Operations Variant) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/20 text-trovo-green text-sm font-semibold tracking-widest uppercase mb-6">
                  How it works
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-[1.1] max-w-4xl mx-auto text-center"
              >
                Here's how Trovo fixes it.
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-16"
              >
                Simple, secure, rewarding — by design.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {operationsFeatures.map((feature, idx) => (
                  <OperationsCard key={idx} feature={feature} idx={idx} itemVariants={itemVariants} />
                ))}
              </div>
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
          </>
        )}
      </div>
    </section>
  )
}

// Simplified Principle Card Component with line underline
const SimplePrincipleCard: React.FC<{
  principle: any
  idx: number
  itemVariants: any
}> = ({ principle, idx, itemVariants }) => {
  const isPrimary = principle.tone === 'primary'

  return (
    <motion.div
      variants={itemVariants}
      transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="group relative px-6 py-5 rounded-2xl backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Border wrapper with enhanced hover */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none border transition-all duration-300 ${isPrimary ? 'border-trovo-green/40 group-hover:border-trovo-green/80 group-hover:shadow-lg group-hover:shadow-trovo-green/40' : 'border-white/20 group-hover:border-cyan-500/60 group-hover:shadow-lg group-hover:shadow-cyan-500/30'}`} />

      {/* Enhanced Hover gradient effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 rounded-2xl pointer-events-none ${isPrimary
            ? 'bg-gradient-to-r from-trovo-green/30 to-cyan-500/20'
            : 'bg-gradient-to-r from-cyan-500/25 to-trovo-green/20'
          }`}
      />

      <div className="relative z-20 flex items-start gap-3">
        {/* Icon - Enhanced hover effect */}
        <motion.div
          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${isPrimary ? 'bg-trovo-green/20 group-hover:bg-trovo-green/40 group-hover:shadow-lg group-hover:shadow-trovo-green/60' : 'bg-cyan-500/15 group-hover:bg-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/50'}`}
          whileHover={{ scale: 1.15, rotate: 8 }}
        >
          <img src={`/${principle.iconPath}`} alt={principle.title} className="w-6 h-6 object-contain" />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          {/* Title */}
          <motion.h4
            className={`text-lg md:text-xl font-semibold tracking-tight mb-1.5 transition-all duration-300 ${isPrimary ? 'text-white group-hover:text-trovo-green' : 'text-white group-hover:text-cyan-400'}`}
            whileHover={{ letterSpacing: '0.05em' }}
          >
            {principle.title}
          </motion.h4>

          {/* Description */}
          <motion.p
            className={`text-sm md:text-base leading-relaxed transition-all duration-300 ${isPrimary ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-400 group-hover:text-gray-100'}`}
          >
            {principle.description}
          </motion.p>

          {/* Simple line underline - No progress bar */}
          {/* Simple line underline - Expands to full width on hover */}
          <div className={`mt-4 h-1 w-16 ${isPrimary ? 'bg-trovo-green/80 group-hover:bg-trovo-green group-hover:w-full' : 'bg-cyan-500/70 group-hover:bg-cyan-500 group-hover:w-full'} rounded-full transition-all duration-500 ease-out`} />
        </div>

        {/* Tier badge */}
        {isPrimary && (
          <motion.span
            className="text-xs font-bold text-trovo-green uppercase tracking-widest flex-shrink-0 mt-1 px-3 py-1.5 rounded-lg transition-all duration-300 bg-trovo-green/10 group-hover:bg-trovo-green/30 group-hover:text-trovo-green group-hover:shadow-lg group-hover:shadow-trovo-green/50 border border-trovo-green/30 group-hover:border-trovo-green/80"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            Primary
          </motion.span>
        )}
      </div>
    </motion.div>
  )
}

// Operations Card Component for the "How it works" section
const OperationsCard: React.FC<{
  feature: any
  idx: number
  itemVariants: any
}> = ({ feature, idx, itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -8,
        boxShadow: `0 20px 60px ${feature.color}30`
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative group"
    >
      {/* Card background */}
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

        {/* Line underline instead of dots */}
        <div className="mt-auto pt-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 + 0.5, duration: 0.4 }}
            className="h-1 w-12 rounded-full origin-left"
            style={{ background: feature.color }}
          />
        </div>
      </div>

      {/* Hover glow */}
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
  )
}

export default MissionSection

