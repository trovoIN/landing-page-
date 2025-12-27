import React, { useState } from 'react'
import { Globe } from './ui/globe'
import { motion, AnimatePresence } from 'framer-motion'

// Trovo Globe System v1.0 — System Intelligence Layer
// Not decoration. Not animation. Infrastructure.

const features = [
  { 
    id: 1, 
    title: 'Intelligent', 
    iconPath: '12336.svg', 
    color: '#42ffa1',
    description: 'Trovo observes how you spend and acts automatically',
    benefits: ['Real-time reward optimization', 'Smart category detection', 'Automatic cashback routing']
  },
  { 
    id: 2, 
    title: 'UPI Cashback', 
    iconPath: '12335.svg', 
    color: '#06B6D4',
    description: 'Experience the simplicity of guaranteed returns on every UPI transaction',
    benefits: ['Guaranteed 1% cashback', 'Zero spending limits', 'Consistent monthly returns']
  },
  { 
    id: 3, 
    title: 'Instant', 
    iconPath: '12337.svg', 
    color: '#42ffa1',
    description: 'Money reaches you when earned, not weeks later',
    benefits: ['Real-time settlement', 'Instant cash conversion', 'Maximize yearly savings']
  },
  { 
    id: 4, 
    title: 'Virtual Cards', 
    iconPath: '12338.svg', 
    color: '#06B6D4',
    description: 'Enable secure credit sharing while maintaining complete financial control',
    benefits: ['Unlimited virtual cards', 'Custom spending limits', 'Enhanced security']
  },
  { 
    id: 5, 
    title: 'Shared', 
    iconPath: 'shared-spending.svg', 
    color: '#42ffa1',
    description: 'Smart group spending with automated settlements',
    benefits: ['Secure friend sharing', 'Auto-debit settlements', 'Transparent tracking']
  },
  { 
    id: 6, 
    title: 'Everywhere', 
    iconPath: '12335.svg', 
    color: '#06B6D4',
    description: 'Every rupee spent becomes an opportunity to earn',
    benefits: ['Cashback on everything', 'No hidden conditions', 'Earn at every merchant']
  },
]

const RotatingFeatureGlobe: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [showDataArc, setShowDataArc] = useState(false)

  // Auto-cycle feature nodes every 5-6 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature(prev => (prev + 1) % features.length)
    }, 5500) // 5.5 seconds
    return () => clearInterval(interval)
  }, [])

  // Check for reduced motion preference
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Trigger cause→effect flow when feature changes
  React.useEffect(() => {
    if (!prefersReducedMotion) {
      setIsProcessing(true)
      setShowDataArc(true)
      
      // Processing duration
      const timeout = setTimeout(() => {
        setIsProcessing(false)
        setShowDataArc(false)
      }, 900) // 300ms pause + 600ms arc animation
      
      return () => clearTimeout(timeout)
    }
  }, [selectedFeature, prefersReducedMotion])

  return (
    <section className="relative bg-night-900 py-24 md:py-32 overflow-hidden">
      {/* subtle brand glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-[#42ffa1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-[#06B6D4]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section - Always visible, sticky scroll behavior */}
        <motion.div 
          className="text-center mb-16 md:mb-20 sticky top-20 z-20 bg-gradient-to-b from-night-900 via-night-900 to-transparent pb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/20 text-[#42ffa1] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Trovo System Orbit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4"
          >
            Six features,
            <br />
            one living system.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            Not a list — a network. Your benefits orbit real Indian life: every bill, tap, split, and payment.
          </motion.p>
        </motion.div>

        {/* Globe and Cards Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature Card (responds to globe) */}
          <div className="relative h-[500px]">
            <AnimatePresence mode="wait">
              {features.map((feature, idx) => {
                if (idx !== selectedFeature) return null
                
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      className="h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 flex flex-col justify-between"
                      style={{
                        boxShadow: `0 20px 60px ${feature.color}60`
                      }}
                      animate={{
                        borderColor: showDataArc 
                          ? `${feature.color}40` 
                          : 'rgba(255,255,255,0.2)'
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      <div>
                        {/* Icon with pulse response */}
                        <motion.div 
                          className="mb-6 inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-md"
                          animate={{
                            scale: showDataArc ? 1.05 : 1,
                            boxShadow: showDataArc 
                              ? `0 0 20px ${feature.color}60` 
                              : '0 0 0px transparent'
                          }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                          <img src={`/${feature.iconPath}`} alt={feature.title} className="w-12 h-12" />
                        </motion.div>

                        {/* Text brightens when data arrives */}
                        <motion.h3 
                          className="text-3xl font-semibold text-white mb-3"
                          animate={{
                            opacity: showDataArc ? 1 : 0.9
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-300 text-base leading-relaxed mb-5"
                          animate={{
                            opacity: showDataArc ? 1 : 0.85
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {feature.description}
                        </motion.p>

                        {/* Benefits as bullet points */}
                        <motion.ul 
                          className="space-y-2.5 mb-6"
                          animate={{
                            opacity: showDataArc ? 1 : 0.8
                          }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                        >
                          {feature.benefits?.map((benefit, bidx) => (
                            <motion.li
                              key={bidx}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: bidx * 0.08, duration: 0.3 }}
                              className="flex items-start gap-2.5 text-gray-400 text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: feature.color }} />
                              <span>{benefit}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>

                      {/* Micro highlight indicator */}
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <motion.div 
                          className="w-2 h-2 rounded-full" 
                          style={{ background: feature.color }}
                          animate={{
                            scale: showDataArc ? [1, 1.3, 1] : 1,
                            opacity: showDataArc ? [1, 0.6, 1] : 1
                          }}
                          transition={{ duration: 0.6 }}
                        />
                        <span>Feature {idx + 1} of {features.length}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Right: Globe with system intelligence */}
          <div className="relative w-full h-[420px] md:h-[520px]">
            {/* Globe container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                animate={{
                  scale: isProcessing ? 0.98 : 1
                }}
                className="relative w-72 h-72 md:w-96 md:h-96"
                style={{ opacity: 0.85 }} // Reduced glow by 15%
              >
                {/* Subtle base glow (reduced) */}
                <div className="absolute inset-0 rounded-full bg-white/4 blur-2xl" />
                
                {/* India emphasis glow (dimmer) */}
                <div className="absolute inset-[30%] rounded-full bg-[#42ffa1]/8 blur-xl" />

                {/* Main Globe - 90-120 second rotation */}
                <div 
                  className="relative z-10 h-full w-full"
                  style={{
                    animation: prefersReducedMotion 
                      ? 'none' 
                      : 'spin 105s linear infinite'
                  }}
                >
                  <Globe className="h-full w-full" />
                </div>

                {/* India dot density overlay (higher density) */}
                <div className="absolute inset-[25%] rounded-full opacity-60">
                  <div className="absolute top-[35%] left-[45%] w-1 h-1 bg-white/60 rounded-full" />
                  <div className="absolute top-[40%] left-[50%] w-1 h-1 bg-white/60 rounded-full" />
                  <div className="absolute top-[45%] left-[48%] w-1 h-1 bg-white/60 rounded-full" />
                  <div className="absolute top-[38%] left-[52%] w-1 h-1 bg-white/60 rounded-full" />
                  <div className="absolute top-[42%] left-[46%] w-1 h-1 bg-white/60 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Orbit Rings (Secondary Layer) - Differential speeds */}
            {!prefersReducedMotion && (
              <>
                {/* Ring A - Slow, pauses every 7s */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 48,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-white/5" />
                </motion.div>

                {/* Ring B - Very slow, pauses every 6s */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{
                    rotate: -360
                  }}
                  transition={{
                    duration: 65,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-[370px] h-[370px] md:w-[450px] md:h-[450px] rounded-full border border-white/8" />
                </motion.div>

                {/* Ring C - Almost still, pauses every 8s */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 90,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-[400px] h-[400px] md:w-[480px] md:h-[480px] rounded-full border border-white/10" />
                </motion.div>
              </>
            )}

            {/* Data Arc (Cause → Effect) */}
            <AnimatePresence>
              {showDataArc && !prefersReducedMotion && (
                <motion.svg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ overflow: 'visible' }}
                >
                  <motion.path
                    d="M 50% 50% Q 30% 50%, 10% 50%"
                    stroke={features[selectedFeature]?.color || '#42ffa1'}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ 
                      duration: 0.6, 
                      ease: 'easeOut',
                      opacity: { times: [0, 0.3, 1] }
                    }}
                    style={{ 
                      filter: `drop-shadow(0 0 8px ${features[selectedFeature]?.color}80)`
                    }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>

            {/* System Nodes (Tertiary Layer) - Redesigned */}
            <div className="absolute inset-0">
              {features.map((f, i) => {
                const angle = (i / features.length) * 2 * Math.PI
                const radius = 190
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                
                const isActive = selectedFeature === i
                const isDormant = !isActive

                return (
                  <div
                    key={f.id}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    {/* System Node - Redesigned (darker, less rounded, icon-first) */}
                    <motion.button
                      onClick={() => setSelectedFeature(i)}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        opacity: isDormant ? 0.6 : 1
                      }}
                      transition={{ 
                        duration: 0.2, 
                        ease: 'easeOut' 
                      }}
                      className="group relative flex items-center gap-2 px-3 py-2 bg-night-800/90 border backdrop-blur-md cursor-pointer rounded-md"
                      style={{
                        borderColor: isActive ? f.color : 'rgba(255,255,255,0.15)',
                        boxShadow: isActive 
                          ? `0 0 20px ${f.color}40` 
                          : '0 0 0px transparent'
                      }}
                    >
                      {/* Subtle glow on active */}
                      {isActive && !prefersReducedMotion && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.3 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 rounded-md blur-lg"
                          style={{ background: f.color }}
                        />
                      )}

                      {/* Icon first */}
                      <img 
                        src={`/${f.iconPath}`} 
                        alt={f.title} 
                        className="w-5 h-5 relative z-10" 
                        style={{
                          filter: isActive ? 'none' : 'grayscale(0.3)'
                        }}
                      />
                      
                      {/* Label with reduced contrast */}
                      <span 
                        className="text-white font-semibold text-xs relative z-10"
                        style={{
                          opacity: isActive ? 1 : 0.7
                        }}
                      >
                        {f.title}
                      </span>

                      {/* Processing state indicator */}
                      {isProcessing && isActive && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                          style={{ background: f.color }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.6, 1]
                          }}
                          transition={{ 
                            duration: 0.3,
                            repeat: 2
                          }}
                        />
                      )}
                    </motion.button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RotatingFeatureGlobe
