import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import RewardsMockup from './mockups/RewardsMockup'
import CashbackMockup from './mockups/CashbackMockup'
import TapPayMockup from './mockups/TapPayMockup'
import SharedCreditMockup from './mockups/SharedCreditMockup'

const SolutionSection: React.FC = () => {
  const containerRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [windowHeight, setWindowHeight] = useState(0)

  // Handle dynamic viewport height for mobile
  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight)
    }
    
    updateHeight()
    window.addEventListener('resize', updateHeight)
    window.addEventListener('orientationchange', updateHeight)
    
    return () => {
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('orientationchange', updateHeight)
    }
  }, [])

  const solutions = [
    {
      id: 1,
      title: "Credit Card Rewards",
      subtitle: "Turn Bills into Earnings",
      icon: "💳",
      description: "Transform every credit card payment into a rewarding experience. Our intelligent reward system maximizes your earnings while streamlining your financial management.",
      benefits: ["Enhanced rewards on bill payments", "Instant cash conversion", "Maximize yearly savings potential"],
      gradient: "from-white via-trovo-green-50 to-white",
      accentColor: "#1DB954",
      stats: "Smart rewards system",
      bgPattern: "rewards"
    },
    {
      id: 2,
      title: "Guaranteed UPI Cashback", 
      subtitle: "Every Payment Pays Back",
      icon: "💰",
      description: "Experience the simplicity of guaranteed returns on every UPI transaction. No complex conditions, no spending thresholds - just pure cashback on every payment.",
      benefits: ["Guaranteed cashback on UPI", "Zero spending limits", "Consistent monthly returns"],
      gradient: "from-trovo-green-50 via-white to-trovo-green-50",
      accentColor: "#1DB954",
      stats: "Guaranteed cashback",
      bgPattern: "cashback"
    },
    {
      id: 3,
      title: "Tap to Pay",
      subtitle: "No PIN, Just Pay",
      icon: "📱",
      description: "Revolutionary contactless payments with zero friction. Your smartphone becomes your ultimate payment companion - faster than cards, simpler than cash.",
      benefits: ["Completely PIN-free payments", "Quick instant transactions", "Faster than traditional cards"],
      gradient: "from-white via-gray-50 to-trovo-green-50",
      accentColor: "#1DB954",
      stats: "Lightning fast payments",
      bgPattern: "tap"
    },
    {
      id: 4,
      title: "Shared Credit Cards",
      subtitle: "Smart Group Spending",
      icon: "👥",
      description: "Enable secure credit sharing with friends while maintaining complete financial control. Smart auto-debit ensures everyone pays their share automatically.",
      benefits: ["Secure friend credit sharing", "Automated monthly settlements", "Safe shared spending"],
      gradient: "from-trovo-green-50 via-gray-50 to-white",
      accentColor: "#1DB954",
      stats: "Smart group payments",
      bgPattern: "sharing"
    }
  ]

  return (
    <section ref={containerRef} className="relative w-full">
      {/* Enhanced Section Header */}
      <div className="py-24 md:py-32 bg-white w-full">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-trovo-green/10 text-trovo-green px-6 py-3 rounded-full text-lg font-semibold border border-trovo-green/20">
              Four Revolutionary Solutions
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The Trovo
            <br />
            <span className="bg-gradient-to-r from-trovo-green to-emerald-600 bg-clip-text text-transparent">
              Solution
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Four groundbreaking financial solutions designed to maximize your earnings, 
            simplify your payments, and revolutionize how you manage money
          </motion.p>
          
          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-trovo-green/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-3">{solution.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{solution.stats}</div>
                <div className="text-sm font-medium text-gray-600">{solution.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile-Optimized Cards for Better Readability */}
      <div className="relative w-full" style={{ scrollSnapType: 'y mandatory' }}>
        {solutions.map((solution, index) => (
          <div key={solution.id} style={{ scrollSnapAlign: 'start' }} className="w-full">
            <SolutionCard
              solution={solution}
              index={index}
              isHovered={hoveredCard === solution.id}
              onHover={() => setHoveredCard(solution.id)}
              onLeave={() => setHoveredCard(null)}
              windowHeight={windowHeight}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

interface SolutionCardProps {
  solution: {
    id: number
    title: string
    subtitle: string
    icon: string
    description: string
    benefits: string[]
    gradient: string
    accentColor: string
    stats: string
    bgPattern: string
  }
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  windowHeight?: number
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  solution, 
  index,
  isHovered,
  onHover,
  onLeave,
  windowHeight = 0
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.2 })

  // Calculate dynamic height for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const cardHeight = isMobile && windowHeight > 0 
    ? `${Math.max(windowHeight - 20, 600)}px` // Ensure minimum height of 600px
    : 'calc(100vh - 32px)'

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden py-1 sm:py-2 md:py-4 lg:py-6">
      <motion.div
        ref={cardRef}
        className="w-full h-full p-1 sm:p-2 md:p-4 lg:p-6"
        onHoverStart={onHover}
        onHoverEnd={onLeave}
      >
        <motion.div
          className={`relative overflow-auto bg-gradient-to-br ${solution.gradient} text-white w-full flex items-center rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl`}
          style={{ 
            minHeight: cardHeight,
            height: cardHeight
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ scale: 1.001 }}
        >
          {/* Enhanced Professional Background with Dynamic Patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Sophisticated Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/25"></div>
            
            {/* Advanced Animated Background Elements */}
            <motion.div 
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/8 rounded-full blur-3xl"
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
                rotate: [0, 180, 360],
                opacity: isHovered ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: isHovered ? 25 : 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            <motion.div 
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/6 rounded-full blur-3xl"
              animate={{ 
                scale: isHovered ? [1.2, 1, 1.2] : [1.1, 1, 1.1],
                rotate: [360, 180, 0],
                opacity: isHovered ? [0.9, 1, 0.9] : [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: isHovered ? 35 : 50, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Dynamic Pattern Based on Solution Type */}
            <div className="absolute inset-0" style={{ opacity: isHovered ? 0.08 : 0.05 }}>
              {solution.bgPattern === 'rewards' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 40px 40px, white 2px, transparent 0)`,
                  backgroundSize: '80px 80px'
                }}></div>
              )}
              {solution.bgPattern === 'cashback' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
              )}
              {solution.bgPattern === 'tap' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                  backgroundSize: '60px 60px'
                }}></div>
              )}
              {solution.bgPattern === 'sharing' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 15px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              )}
            </div>

            {/* Enhanced Glow Effects */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: `${solution.accentColor}20` }}
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                x: isHovered ? [-20, 20, -20] : [-10, 10, -10],
                y: isHovered ? [-15, 15, -15] : [-5, 5, -5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
              style={{ background: `${solution.accentColor}15` }}
              animate={{
                scale: isHovered ? [1.2, 0.8, 1.2] : [1, 0.9, 1],
                x: isHovered ? [15, -15, 15] : [5, -5, 5],
                y: isHovered ? [20, -20, 20] : [10, -10, 10]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 h-full overflow-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-8 xl:gap-12 items-center justify-start lg:justify-center h-full min-h-full py-2 sm:py-3 md:py-4 lg:py-6">
              
              {/* Mobile-Optimized Right Content - Solution-Specific Mockup */}
              <motion.div
                className="flex justify-center lg:justify-end order-1 lg:order-2 w-full flex-shrink-0"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                  {/* Render appropriate mockup based on solution ID */}
                  {solution.id === 1 && <RewardsMockup isInView={isInView} isHovered={isHovered} />}
                  {solution.id === 2 && <CashbackMockup isInView={isInView} isHovered={isHovered} />}
                  {solution.id === 3 && <TapPayMockup isInView={isInView} isHovered={isHovered} />}
                  {solution.id === 4 && <SharedCreditMockup isInView={isInView} isHovered={isHovered} />}
                </div>
              </motion.div>

              {/* Enhanced Left Content - Mobile Optimized */}
              <motion.div
                className="text-center lg:text-left space-y-2 sm:space-y-3 lg:space-y-4 order-2 lg:order-1 w-full"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Mobile-Optimized Icon Design */}
                <motion.div
                  className="relative inline-block"
                  animate={{ 
                    rotate: isHovered ? [0, 3, -3, 0] : [0, 1, -1, 0],
                    scale: isHovered ? [1, 1.03, 1] : [1, 1.01, 1]
                  }}
                  transition={{ duration: isHovered ? 4 : 6, repeat: Infinity }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-trovo-green/10 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl border border-trovo-green/20 shadow-xl">
                    {solution.icon}
                  </div>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-full flex items-center justify-center text-xs sm:text-xs lg:text-sm xl:text-base font-bold text-white shadow-lg border-2 border-white/40"
                    style={{ backgroundColor: solution.accentColor }}
                    animate={{
                      scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {solution.id}
                  </motion.div>
                </motion.div>

                {/* Mobile-Optimized Typography Hierarchy */}
                <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                  <motion.div
                    className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {solution.subtitle}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black leading-tight text-gray-900"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {solution.title}
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-light text-gray-600 max-w-2xl line-clamp-3 sm:line-clamp-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {solution.description}
                </motion.p>

                {/* Mobile-Optimized Stats Badge */}
                <motion.div
                  className="inline-flex items-center bg-trovo-green/10 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 xl:px-6 xl:py-3 rounded-lg sm:rounded-xl border border-trovo-green/20 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full mr-1.5 sm:mr-2 lg:mr-3 shadow-sm"
                    style={{ backgroundColor: solution.accentColor }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-900">{solution.stats}</span>
                </motion.div>

                {/* Mobile-Optimized Benefits List - Show fewer on mobile */}
                <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {solution.benefits.slice(0, isMobile ? 2 : 3).map((benefit: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-2 sm:space-x-3 group/benefit"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg border-2 border-trovo-green/20 flex-shrink-0"
                        style={{ backgroundColor: solution.accentColor }}
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-white text-xs sm:text-xs lg:text-sm font-bold">✓</span>
                      </motion.div>
                      <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium leading-relaxed text-gray-700">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile-Optimized CTA Button */}
                <motion.button
                  className="relative bg-trovo-green text-white font-bold px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 xl:px-12 xl:py-5 rounded-xl sm:rounded-2xl hover:bg-trovo-green-dark transition-all duration-300 text-sm sm:text-base lg:text-lg xl:text-xl shadow-xl border-2 border-trovo-green/20 group/cta"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <span>Get Started</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Mobile-Optimized Right Content - Solution-Specific Mockup */}
              <motion.div
                className="flex justify-center lg:justify-end mt-2 lg:mt-0 order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                  {/* Render appropriate mockup based on solution ID */}
                  {solution.id === 1 && <RewardsMockup isInView={isInView} isHovered={isHovered} />}
                  {solution.id === 2 && <CashbackMockup isInView={isInView} isHovered={isHovered} />}
                  {solution.id === 3 && <TapPayMockup isInView={isInView} isHovered={isHovered} />}
                  {solution.id === 4 && <SharedCreditMockup isInView={isInView} isHovered={isHovered} />}

                  {/* Professional Accent Elements */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-lg lg:text-xl shadow-lg border border-white/20"
                    style={{ backgroundColor: solution.accentColor }}
                    animate={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ✨
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 lg:w-20 lg:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center text-lg lg:text-xl border border-white/20 shadow-lg"
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    💎
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SolutionSection
