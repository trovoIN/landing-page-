import { useRef, useState } from 'react'
import RewardsMockup from './mockups/RewardsMockup'
import CashbackMockup from './mockups/CashbackMockup'
import TapPayMockup from './mockups/TapPayMockup'
import SharedCreditMockup from './mockups/SharedCreditMockup'
import FadeInSection from './FadeInSection'

const SolutionSection: React.FC = () => {
  const containerRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // CTA handler routes to dedicated join page
  const handleScrollToEarlyAccess = () => {
    window.location.assign('/join')
  }

  const solutions = [
    {
      id: 1,
      title: "Credit Card Rewards",
      subtitle: "Turn Bills into Earnings",
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
      description: "Experience the simplicity of guaranteed returns on every UPI transaction. No complex conditions, no spending thresholds - just pure cashback on every payment.",
      benefits: ["Guaranteed cashback on UPI", "Zero spending limits", "Consistent monthly returns"],
      gradient: "from-trovo-green-50 via-white to-trovo-green-50",
      accentColor: "#1DB954",
      stats: "Effortless steps",
      bgPattern: "cashback"
    },
    {
      id: 3,
      title: "Tap to Pay",
      subtitle: "No PIN, Just Pay",
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
      description: "Enable secure credit sharing with friends while maintaining complete financial control. Smart auto-debit ensures everyone pays their share automatically.",
      benefits: ["Secure friend credit sharing", "Automated monthly settlements", "Safe shared spending"],
      gradient: "from-trovo-green-50 via-gray-50 to-white",
      accentColor: "#1DB954",
      stats: "Smart group payments",
      bgPattern: "sharing"
    }
  ]

  return (
    <section id="solutions" ref={containerRef} className="relative w-full min-h-screen pt-24 overflow-x-hidden">
      {/* Section Header (static) */}
      <div className="bg-white w-full min-h-[calc(100vh-6rem)] flex items-center">
        <div className="max-w-5xl mx-auto text-center px-6">
          <FadeInSection>
            <div className="inline-block mb-6">
              <span className="bg-trovo-green/10 text-trovo-green px-6 py-3 rounded-full text-lg font-semibold border border-trovo-green/20">
                We Built The Fix
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Meet Your New Money Machine
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Four groundbreaking financial solutions designed to maximize your earnings, 
              simplify your payments, and revolutionize how you manage money
            </p>
          </FadeInSection>
          {/* Stats Preview (remove decorative dots) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {solutions.map((solution, idx) => (
              <FadeInSection key={solution.id} delay={idx * 0.08}>
                <div
                  className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  {/* Removed green dot */}
                  {/* Title + subtitle only */}
                  <div className="text-2xl font-bold text-gray-900 mb-2">{solution.stats}</div>
                  <div className="text-sm font-medium text-gray-600">{solution.title}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Cards (static, no snap) */}
      <div className="relative w-full">
        {solutions.map((solution, idx) => (
          <FadeInSection key={solution.id} delay={0.1 + idx * 0.1}>
            <div>
              <SolutionCard
                solution={solution}
                isHovered={hoveredCard === solution.id}
                onHover={() => setHoveredCard(solution.id)}
                onLeave={() => setHoveredCard(null)}
                onClickCTA={handleScrollToEarlyAccess}
              />
            </div>
          </FadeInSection>
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
    description: string
    benefits: string[]
    gradient: string
    accentColor: string
    stats: string
    bgPattern: string
  }
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onClickCTA: () => void
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  solution, 
  isHovered,
  onHover,
  onLeave,
  onClickCTA
}) => {
  return (
    <div className="relative w-full min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
      <div
        className="w-full h-full p-2 md:p-4 lg:p-6"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${solution.gradient} text-white w-full h-full flex items-stretch rounded-2xl lg:rounded-3xl shadow-2xl`}
          style={{ maxHeight: 'calc(100vh - 6rem)', minHeight: 'calc(100vh - 6rem)' }}
        >
          {/* Make whole panel scroll if content exceeds available height */}
          <div className="relative z-10 w-full overflow-hidden min-h-0">
            <div className="w-full max-w-8xl mx-auto px-4 lg:px-8 xl:px-12 h-full min-h-0">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center h-full min-h-0 py-6 lg:py-8">
                {/* Left Content */}
                <div className="text-center lg:text-left space-y-4 lg:space-y-6 min-h-0">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="text-lg lg:text-xl xl:text-2xl font-medium text-gray-700">
                      {solution.subtitle}
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-gray-900">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light text-gray-600 max-w-2xl">
                    {solution.description}
                  </p>

                  {/* Stats Badge (no green dot) */}
                  <div className="inline-flex items-center bg-trovo-green/10 backdrop-blur-md px-6 py-3 lg:px-8 lg:py-4 rounded-2xl border border-trovo-green/20 shadow-lg">
                    <span className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">{solution.stats}</span>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 lg:space-y-4">
                    {solution.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shadow-lg border-2 border-trovo-green/20 flex-shrink-0"
                          style={{ backgroundColor: solution.accentColor }}
                          aria-hidden="true"
                        >
                          {/* inline check icon */}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm lg:text-base xl:text-lg font-medium leading-relaxed text-gray-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={onClickCTA}
                    className="relative bg-trovo-green text-white font-bold px-8 py-4 lg:px-12 lg:py-5 rounded-2xl hover:bg-trovo-green-dark transition-colors duration-200 text-lg lg:text-xl shadow-xl border-2 border-trovo-green/20"
                  >
                    <span className="flex items-center justify-center">Get Started</span>
                  </button>
                </div>

                {/* Right Content - Solution-Specific Mockup - Hidden on Mobile */}
                <div className="hidden lg:flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm lg:max-w-md">
                    {/* Render appropriate mockup based on solution ID */}
                    {solution.id === 1 && <RewardsMockup isInView={true} isHovered={isHovered} />}
                    {solution.id === 2 && <CashbackMockup isInView={true} isHovered={isHovered} />}
                    {solution.id === 3 && <TapPayMockup isInView={true} isHovered={isHovered} />}
                    {solution.id === 4 && <SharedCreditMockup isInView={true} isHovered={isHovered} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionSection
