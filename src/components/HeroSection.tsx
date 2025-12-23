
import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { BlurInText } from './AnimatedText'
import ParticlesBackground from './ParticlesBackground'

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const phoneRef = useRef<HTMLDivElement | null>(null)

  // Optimized scroll-driven animation with reduced layout impact
  const { scrollYProgress } = useScroll()
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.5]) // Reduced scale to prevent extreme transforms
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const blurAmount = useTransform(scrollYProgress, [0, 0.3], [0, 20]) // Reduced blur for performance
  const contentFilter = useMotionTemplate`blur(${blurAmount}px)`

  const goToJoin = () => {
    window.location.assign('/join')
  }

  return (
    <section
      ref={sectionRef}
      className="hero-section relative min-h-screen bg-gradient-to-br from-night-900 via-night-800 to-night-700 overflow-hidden flex flex-col"
      style={{ contain: 'layout style' }}
    >
      <ParticlesBackground />
      {/* Background accents */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: backgroundOpacity }}>
        <motion.div
          className="absolute -top-40 -right-40 w-56 sm:w-64 h-56 sm:h-64 bg-trovo-green opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-64 sm:w-72 h-64 sm:h-72 bg-trovo-green-light opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      </motion.div>

      <div aria-hidden className="shrink-0 h-16 sm:h-20 md:h-24" />

      {/* Full-width wrapper with optimized transforms */}
      <motion.div
        className="flex-1 flex items-center w-full"
        style={{ 
          scale: contentScale, 
          opacity: contentOpacity, 
          filter: contentFilter, 
          transformOrigin: '50% 20% 0',
          willChange: 'transform, opacity, filter',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 xl:gap-12 items-center py-6 sm:py-8 md:py-12 lg:py-0">
            {/* Left Content */}
            <header className="text-center lg:text-left overflow-hidden order-1 hero-content-left">
              <div className="animated-text-container">
                <div className="mb-4 sm:mb-5">
                  {/* Animated headline with blur effect */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight" style={{ minHeight: '1.2em' }}>
                    <BlurInText text="Your money has more value than you think." delay={0.2} />
                  </h1>
                  {/* Animated subline with word-by-word blur */}
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium text-trovo-green mt-3 leading-relaxed" style={{ minHeight: '2.4em' }}>
                    <BlurInText 
                      text="Trovo redeems what your bank forgets—making every payment rewarding and sharing effortless." 
                      delay={1.2}
                    />
                  </div>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-8 lg:mt-10"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.5, ease: 'easeOut' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.06, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={goToJoin}
                    className="btn-primary w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-7 py-3 sm:py-3.5"
                    data-attr="cta:join-early-access"
                  >
                    Join Early Access
                  </motion.button>
                </motion.div>

                {/* Mobile/Tablet Phone Showcase */}
                <div className="mt-8 lg:hidden flex justify-center">
                  <img
                    src={encodeURI('/mobile mockup.svg')}
                    alt="Trovo mobile experience mockup"
                    className="w-96 sm:w-[24rem] pointer-events-none select-none drop-shadow-[0_25px_60px_rgba(23,232,146,0.3)]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            </header>

            {/* Right Content - Phone Showcase (visible on large screens) */}
            <div className="hidden lg:flex justify-end xl:justify-center items-center order-2 hero-mockup-right">
              <motion.div
                className="relative flex justify-center items-center w-full max-w-sm xl:max-w-md"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              >
                <div ref={phoneRef} className="relative" aria-hidden={false}>
                  <img
                    src={encodeURI('/mobile mockup.svg')}
                    alt="Trovo mobile mockup"
                    className="w-[480px] xl:w-[560px] pointer-events-none select-none drop-shadow-[0_65px_110px_rgba(29,185,84,0.3)]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
