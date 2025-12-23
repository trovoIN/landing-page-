import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Feature {
  id: string
  icon: string
  title: string
  description: string
  badge: string
  color: string
  gradient: string
  stat: string
  statLabel: string
}

const features: Feature[] = [
  {
    id: 'rewards',
    icon: '🧠',
    title: 'Smart Rewards Engine',
    description: 'Every transaction is automatically optimized for maximum returns. Your money works harder, not you.',
    badge: 'Auto-Optimization',
    color: 'from-trovo-green/20 to-trovo-green/5',
    gradient: 'from-emerald-400 to-teal-600',
    stat: '1.5x',
    statLabel: 'Higher Returns',
  },
  {
    id: 'cards',
    icon: '💳',
    description: 'Generate unlimited virtual cards instantly. One for Netflix, one for shopping, another for friends—infinite possibilities.',
    title: 'Virtual Card Intelligence',
    badge: 'Unlimited Cards',
    color: 'from-amber-500/20 to-amber-500/5',
    gradient: 'from-amber-400 to-orange-600',
    stat: '∞',
    statLabel: 'Virtual Cards',
  },
  {
    id: 'settlement',
    icon: '⚡',
    title: 'Instant Settlement',
    description: 'No more waiting days for rewards. Money hits your account the moment you earn it. T+0, always.',
    badge: 'Real-Time',
    color: 'from-cyan-500/20 to-cyan-500/5',
    gradient: 'from-cyan-400 to-blue-600',
    stat: '<1s',
    statLabel: 'Settlement Time',
  },
]

// Helper component for feature highlights
const FeatureLine: React.FC<{ icon: string; text: string; delay: number }> = ({ icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-sm sm:text-base text-gray-200 font-medium">{text}</span>
  </motion.div>
)

const TrovoIntelligenceShowcase: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>('rewards')

  const activeFeature = features.find(f => f.id === activeTab) || features[0]

  return (
    <section className="relative w-full bg-gradient-to-b from-night-900 via-night-800 to-night-900 overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Animated background with floating orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-trovo-green/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-[15%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-[30%] w-[300px] h-[300px] bg-amber-500/8 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with better spacing */}
        <motion.div
          className="text-center mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p 
            className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-trovo-green mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Built Different
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-4xl mx-auto">
            Three intelligent engines.<br />One seamless experience.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            While others count points, we optimize value. Every payment, every card, every rupee—engineered for maximum returns.
          </p>
        </motion.div>

        {/* Interactive Feature Showcase - Inspired by Astrivya's demo style */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Left: Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`w-full text-left p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 ${
                  activeTab === feature.id
                    ? 'border-trovo-green bg-trovo-green/10 backdrop-blur-xl'
                    : 'border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{feature.icon}</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{feature.title}</h3>
                        <span className={`inline-flex mt-1 text-xs font-semibold px-3 py-1 rounded-full ${
                          activeTab === feature.id
                            ? 'bg-trovo-green/20 text-trovo-green border border-trovo-green/30'
                            : 'bg-white/10 text-gray-300 border border-white/20'
                        }`}>
                          {feature.badge}
                        </span>
                      </div>
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed transition-colors ${
                      activeTab === feature.id ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {activeTab === feature.id && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-trovo-green/20 border-2 border-trovo-green flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-trovo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Visual Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 sm:p-12 overflow-hidden"
            >
              {/* Gradient overlay matching active feature */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeFeature.color} opacity-50`} />
              
              <div className="relative z-10">
                {/* Large stat display */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-center mb-8"
                >
                  <div className={`text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r ${activeFeature.gradient} bg-clip-text text-transparent mb-4`}>
                    {activeFeature.stat}
                  </div>
                  <p className="text-xl sm:text-2xl font-semibold text-white">{activeFeature.statLabel}</p>
                </motion.div>

                {/* Feature highlights */}
                <div className="space-y-4">
                  {activeTab === 'rewards' && (
                    <>
                      <FeatureLine icon="🎯" text="Auto-optimizes across 10+ reward programs" delay={0.3} />
                      <FeatureLine icon="💰" text="Higher cashback than any credit card" delay={0.4} />
                      <FeatureLine icon="🔄" text="Continuous learning from your habits" delay={0.5} />
                    </>
                  )}
                  {activeTab === 'cards' && (
                    <>
                      <FeatureLine icon="⚡" text="Generate cards in under 2 seconds" delay={0.3} />
                      <FeatureLine icon="🔒" text="Lock/unlock cards with a single tap" delay={0.4} />
                      <FeatureLine icon="🎨" text="Custom limits for every use case" delay={0.5} />
                    </>
                  )}
                  {activeTab === 'settlement' && (
                    <>
                      <FeatureLine icon="🚀" text="Real-time settlement, not T+30" delay={0.3} />
                      <FeatureLine icon="💸" text="Money in account instantly" delay={0.4} />
                      <FeatureLine icon="📊" text="No hidden processing delays" delay={0.5} />
                    </>
                  )}
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-20 -right-20 w-64 h-64 bg-trovo-green/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner - Inspired by Ruul's warm aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/20 bg-gradient-to-r from-trovo-green/20 via-trovo-green/10 to-transparent backdrop-blur-xl p-8 sm:p-12 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-trovo-green/10 via-transparent to-cyan-500/10" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.p 
              className="text-sm font-semibold tracking-[0.3em] uppercase text-trovo-green mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Built for India
            </motion.p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your money deserves intelligence, not complexity.
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands optimizing their finances with Trovo. No gimmicks. No expired points. Just real money, working smarter.
            </p>
            <motion.a
              href="/join"
              className="inline-flex items-center gap-3 px-8 py-4 bg-trovo-green hover:bg-trovo-green/90 text-white font-semibold rounded-full transition-colors shadow-lg shadow-trovo-green/25 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          {/* Decorative gradient orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-trovo-green/20 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default TrovoIntelligenceShowcase
