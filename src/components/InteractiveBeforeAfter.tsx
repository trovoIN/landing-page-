import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface ComparisonItem {
  id: string
  title: string
  icon: string
  before: string
  after: string
}

const comparisonItems: ComparisonItem[] = [
  {
    id: 'rewards',
    title: 'Rewards Management',
    icon: '💎',
    before: 'Points expire forgotten. No clarity on redemption. Cash rotting in accounts.',
    after: 'Real-time redemption. Automatic optimization. Cash in your account instantly.'
  },
  {
    id: 'payments',
    title: 'Payment Experience',
    icon: '📱',
    before: 'Scan, pay, repeat. Nothing comes back. UPI feels hollow.',
    after: '1% guaranteed cashback on every UPI transaction. Every rupee works harder.'
  },
  {
    id: 'sharing',
    title: 'Sharing Money',
    icon: '🔐',
    before: 'Lending your card = losing control. Security risk. Relationship strain.',
    after: 'Private virtual cards. Full control. Zero compromise. Peace of mind.'
  },
]

/**
 * InteractiveBeforeAfter
 * Interactive comparison with tab selection and smooth transitions
 * Replaces static before/after with engaging, modern design
 */
const InteractiveBeforeAfter: React.FC = () => {
  const [activeId, setActiveId] = useState('rewards')
  const activeItem = comparisonItems.find(item => item.id === activeId) || comparisonItems[0]

  return (
    <section 
      className="relative py-20 md:py-32 bg-night-900 overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      {/* Background gradients */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 w-80 h-80 bg-trovo-green/5 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-trovo-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            THE TRANSFORMATION
          </p>
          <h2 
            id="comparison-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            From <span className="line-through text-gray-500">struggle</span> to <span className="text-trovo-green">simplicity</span>
          </h2>
          <p className="text-lg text-gray-300">
            See how Trovo transforms three critical areas of your financial life.
          </p>
        </motion.div>

        {/* Main Comparison Card */}
        <motion.div
          className="relative rounded-3xl border border-trovo-green/20 overflow-hidden bg-gradient-to-br from-night-800/50 to-night-900/50 mb-12 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 relative">
            {/* Before Side */}
            <motion.div 
              className="p-8 md:p-12 bg-gradient-to-br from-red-950/10 to-night-900/50 border-r border-white/5"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">❌</span>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Before Trovo</p>
              </div>

              <div className="mt-8">
                <div className="text-5xl mb-8 leading-none">{activeItem.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {activeItem.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {activeItem.before}
                </p>
              </div>

              {/* Negative sentiment indicators */}
              <motion.div 
                className="mt-8 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {['Frustrating', 'Unclear', 'No rewards'].map((indicator) => (
                  <div key={indicator} className="flex items-center gap-2 text-gray-400">
                    <span className="text-lg">→</span>
                    <span className="text-sm">{indicator}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* After Side */}
            <motion.div 
              className="p-8 md:p-12 bg-gradient-to-br from-trovo-green/10 to-night-900/50"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <p className="text-xs uppercase tracking-widest text-trovo-green font-semibold">With Trovo</p>
              </div>

              <div className="mt-8">
                <motion.div 
                  className="text-5xl mb-8 leading-none"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {activeItem.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {activeItem.after}
                </p>
              </div>

              {/* Positive sentiment indicators */}
              <motion.div 
                className="mt-8 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {['Simple', 'Automatic', 'Real rewards'].map((indicator) => (
                  <div key={indicator} className="flex items-center gap-2 text-trovo-green">
                    <span className="text-lg">✓</span>
                    <span className="text-sm font-medium">{indicator}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Center divider line */}
            <motion.div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-trovo-green/40 to-transparent"
              aria-hidden
            />
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {comparisonItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`relative px-6 py-3 rounded-full font-semibold text-base transition-all ${
                activeId === item.id
                  ? 'bg-trovo-green text-night-900 shadow-lg shadow-trovo-green/30'
                  : 'bg-night-800 text-gray-300 border border-night-700 hover:text-white hover:border-trovo-green/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-lg">{item.icon}</span>
              {item.title}
            </motion.button>
          ))}
        </div>

        {/* Bottom insight */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            These aren't just improvements—they're fundamental reimagining of how money flows through your life. From chaos to clarity. From frustration to flow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveBeforeAfter
